import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { pathToFileURL } from "url";
import { createServer as createViteServer } from "vite";
import superjson from "superjson";
import viteConfig from "../../vite.config";
import { buildSsrPrefetch } from "./ssrCaller";
import { PAGE_META, SITE_NAME, SITE_ORIGIN, SITE_SHARE_IMAGE, SITE_SHARE_IMAGE_ALT } from "../../client/src/siteMetadata";

type HeadMeta = {
  title: string;
  description: string;
  ogType?: "website" | "article";
  ogImage?: string;
  ogImageAlt?: string;
  canonicalPath?: string;
  noindex?: boolean;
  notFound?: boolean;
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character] ?? character);
}

function absoluteUrl(value: string, origin: string) {
  try { return new URL(value, origin).toString(); } catch { return value; }
}

function buildHeadTags(head: HeadMeta) {
  const origin = SITE_ORIGIN.replace(/\/$/, "");
  const siteName = SITE_NAME;
  const canonical = head.canonicalPath ? absoluteUrl(head.canonicalPath, origin) : undefined;
  const image = head.ogImage && origin ? absoluteUrl(head.ogImage, origin) : head.ogImage;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    description: head.description,
    ...(origin ? { url: origin } : {}),
  };
  const tags = [
    `<title>${escapeHtml(head.title)}</title>`,
    `<meta name="description" content="${escapeHtml(head.description)}" />`,
    `<meta property="og:title" content="${escapeHtml(head.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(head.description)}" />`,
    `<meta property="og:type" content="${head.ogType || "website"}" />`,
    `<meta property="og:site_name" content="${escapeHtml(siteName)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(head.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(head.description)}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(head.ogImageAlt || head.title)}" />`,
    `<script type="application/ld+json">${escapeScript(JSON.stringify(structuredData))}</script>`,
  ];
  if (canonical) {
    tags.push(`<link rel="canonical" href="${escapeHtml(canonical)}" />`);
    tags.push(`<meta property="og:url" content="${escapeHtml(canonical)}" />`);
  }
  if (image) {
    tags.push(`<meta property="og:image" content="${escapeHtml(image)}" />`);
    tags.push(`<meta name="twitter:image" content="${escapeHtml(image)}" />`);
  }
  if (head.noindex || head.notFound) tags.push(`<meta name="robots" content="noindex, nofollow" />`);
  return tags.join("\n    ");
}

function escapeScript(value: string) {
  return value.replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026");
}

function composeHtml(template: string, rendered: { html: string; dehydratedState: unknown; head: HeadMeta }) {
  const state = JSON.stringify(superjson.serialize(rendered.dehydratedState));
  const withHead = template.replace("<!--app-head-->", () => buildHeadTags(rendered.head));
  const withState = withHead.replace("</body>", () => `<script>window.__RQ_STATE__=${escapeScript(state)};</script></body>`);
  return withState.replace("<!--app-html-->", () => rendered.html);
}

async function renderRequest(req: any, res: any, template: string, render: any) {
  const rendered = await render(req.originalUrl, await buildSsrPrefetch(req, res));
  res.status(rendered.head.notFound ? 404 : 200)
    .set({ "Content-Type": "text/html", "Cache-Control": "no-cache" })
    .end(composeHtml(template, rendered));
}

export async function setupVite(app: Express, server: Server) {
  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: { middlewareMode: true, hmr: { server }, allowedHosts: true as const },
    appType: "custom",
  });
  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    try {
      const clientTemplate = path.resolve(import.meta.dirname, "../..", "client", "index.html");
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(`src="/src/entry-client.tsx"`, `src="/src/entry-client.tsx?v=${nanoid()}"`);
      template = await vite.transformIndexHtml(req.originalUrl, template);
      template = template.replace("</head>", `<link rel="stylesheet" href="/src/index.css?direct" data-ssr-dev-css></head>`);
      const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");
      await renderRequest(req, res, template, render);
    } catch (error) {
      vite.ssrFixStacktrace(error as Error);
      next(error);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "public");
  const templatePath = path.resolve(distPath, "index.html");
  if (!fs.existsSync(distPath)) console.error(`Could not find the build directory: ${distPath}`);

  app.get("/index.html", (_req, res) => res.redirect(301, "/"));
  app.use((req, res, next) => {
    if (req.path !== "/" && req.path.endsWith("/")) {
      const query = req.originalUrl.slice(req.path.length);
      return res.redirect(301, `${req.path.slice(0, -1)}${query}`);
    }
    next();
  });
  app.use(express.static(distPath, { index: false, redirect: false }));
  app.use("*", async (req, res) => {
    try {
      const template = await fs.promises.readFile(templatePath, "utf-8");
      const ssrModulePath = path.resolve(import.meta.dirname, "server-ssr", "entry-server.js");
      const { render } = await import(pathToFileURL(ssrModulePath).href);
      await renderRequest(req, res, template, render);
    } catch (error) {
      console.error("[SSR] render failed, serving shell:", error);
      const template = await fs.promises.readFile(templatePath, "utf-8");
      const fallbackHead: HeadMeta = {
        title: PAGE_META.home.title,
        description: PAGE_META.home.description,
        ogType: "website",
        ogImage: SITE_SHARE_IMAGE,
        ogImageAlt: SITE_SHARE_IMAGE_ALT,
        noindex: true,
      };
      const fallback = template.replace("<!--app-head-->", () => buildHeadTags(fallbackHead)).replace("<!--app-html-->", () => "<div></div>");
      res.status(200).set({ "Content-Type": "text/html", "Cache-Control": "no-cache" }).end(fallback);
    }
  });
}
