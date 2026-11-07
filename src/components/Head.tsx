import { useEffect } from "react";
import {
  SITE_NAME,
  SITE_ORIGIN,
  SITE_SHARE_IMAGE,
  type PageMetadata,
} from "../siteMetadata";

function upsertMeta(attribute: "name" | "property", key: string, value: string) {
  let element = document.head.querySelector(
    `meta[${attribute}="${key}"]`,
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }

  element.setAttribute("content", value);
}

function removeMeta(attribute: "name" | "property", key: string) {
  document.head.querySelector(`meta[${attribute}="${key}"]`)?.remove();
}

export default function Head({
  title,
  description,
  canonicalPath,
  noindex,
  ogType,
  ogImage,
  ogImageAlt,
}: PageMetadata) {
  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", ogType || "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image:alt", ogImageAlt || title);

    const image = ogImage || SITE_SHARE_IMAGE;
    upsertMeta("property", "og:image", image);
    upsertMeta("name", "twitter:image", image);

    if (canonicalPath) {
      const canonicalUrl = new URL(canonicalPath, SITE_ORIGIN).toString();
      let canonical = document.head.querySelector(
        'link[rel="canonical"]',
      ) as HTMLLinkElement | null;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.append(canonical);
      }
      canonical.href = canonicalUrl;
      upsertMeta("property", "og:url", canonicalUrl);
    } else {
      document.head.querySelector('link[rel="canonical"]')?.remove();
      removeMeta("property", "og:url");
    }

    if (noindex) {
      upsertMeta("name", "robots", "noindex, nofollow");
    } else {
      removeMeta("name", "robots");
    }
  }, [title, description, canonicalPath, noindex, ogType, ogImage, ogImageAlt]);

  return null;
}
