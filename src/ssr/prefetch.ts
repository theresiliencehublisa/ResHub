import type { QueryClient } from "@tanstack/react-query";
import { PAGE_META, SITE_NAME, type PageMetadata } from "../siteMetadata";

export type HeadMeta = PageMetadata & {
  notFound?: boolean;
};

export type SsrPrefetch = Record<string, never>;

const pages: Record<string, HeadMeta> = {
  "/": PAGE_META.home,
  "/privacy": PAGE_META.privacy,
  "/disclaimer": PAGE_META.disclaimer,
  "/links": PAGE_META.links,
};

export async function prefetchForPath(
  url: string,
  _queryClient: QueryClient,
  _prefetch: SsrPrefetch,
): Promise<HeadMeta> {
  const rawPath = url.split("?", 1)[0] || "/";
  let path = rawPath;
  try {
    path = decodeURI(rawPath);
  } catch {
    return { ...PAGE_META.notFound, notFound: true };
  }

  if (pages[path]) return pages[path];

  return {
    ...PAGE_META.notFound,
    title: `Page not found — ${SITE_NAME}`,
    notFound: true,
  };
}

export const SITE = SITE_NAME;
export const DESCRIPTION = PAGE_META.home.description;
