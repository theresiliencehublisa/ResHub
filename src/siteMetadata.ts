export type PageMetadata = {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  ogImageAlt?: string;
  noindex?: boolean;
};

export const SITE_ORIGIN = "https://resihub-bsn6crau.manus.space";
export const SITE_HOME_URL = `${SITE_ORIGIN}/`;
export const SITE_NAME = "The Resilience Hub";
export const SITE_SHARE_IMAGE = "https://resiliencehubnsw.vercel.app/resilience-hub-logo.png";
export const SITE_SHARE_IMAGE_ALT = "The Resilience Hub logo";

export const PAGE_META = {
  home: {
    title: "The Resilience Hub | Resilience Hub NSW",
    description:
      "Community-led support in Western Sydney. The AI app will always be free for registered users; organisational or corporate access pricing is being explored. The separate eight-week program has pay-what-fits options.",
    canonicalPath: "/",
    ogType: "website",
    ogImage: SITE_SHARE_IMAGE,
    ogImageAlt: SITE_SHARE_IMAGE_ALT,
  },
  privacy: {
    title: "Privacy Policy | The Resilience Hub",
    description:
      "Draft privacy information for The Resilience Hub AI app; storage, access and deletion practices are awaiting confirmation.",
    canonicalPath: "/privacy",
    ogType: "website",
    ogImage: SITE_SHARE_IMAGE,
    ogImageAlt: SITE_SHARE_IMAGE_ALT,
    noindex: true,
  },
  disclaimer: {
    title: "Disclaimer | The Resilience Hub",
    description:
      "The Resilience Hub and its app do not replace professional medical or psychological advice and are not a crisis service.",
    canonicalPath: "/disclaimer",
    ogType: "website",
    ogImage: SITE_SHARE_IMAGE,
    ogImageAlt: SITE_SHARE_IMAGE_ALT,
  },
  links: {
    title: "Links | The Resilience Hub NSW",
    description:
      "Website, AI app (free for registered users; organisational or corporate access pricing under review), booking, GoFundMe, email and social links for The Resilience Hub.",
    canonicalPath: "/links",
    ogType: "website",
    ogImage: SITE_SHARE_IMAGE,
    ogImageAlt: SITE_SHARE_IMAGE_ALT,
    noindex: true,
  },
  notFound: {
    title: "Page not found — The Resilience Hub",
    description:
      "The page you are looking for could not be found on The Resilience Hub website.",
    ogType: "website",
    ogImage: SITE_SHARE_IMAGE,
    ogImageAlt: SITE_SHARE_IMAGE_ALT,
    noindex: true,
  },
} satisfies Record<string, PageMetadata>;
