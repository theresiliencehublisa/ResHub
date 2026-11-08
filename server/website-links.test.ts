import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";

const homeSource = readFileSync(
  resolve(import.meta.dirname, "../client/src/pages/Home.tsx"),
  "utf8",
);
const linksSource = readFileSync(
  resolve(import.meta.dirname, "../client/src/pages/Links.tsx"),
  "utf8",
);
const siteMetadataSource = readFileSync(
  resolve(import.meta.dirname, "../client/src/siteMetadata.ts"),
  "utf8",
);
const headSource = readFileSync(
  resolve(import.meta.dirname, "../client/src/components/Head.tsx"),
  "utf8",
);
const vercelHomeSource = readFileSync(
  resolve(import.meta.dirname, "../src/pages/Home.tsx"),
  "utf8",
);

describe("Resilience Hub homepage links", () => {
  it("keeps every section target used by the homepage navigation", () => {
    for (const id of [
      "home",
      "app",
      "program",
      "pathways",
      "cost",
      "getting-started",
      "team",
      "resources",
      "support",
      "faq",
    ]) {
      expect(homeSource).toContain(`id=\"${id}\"`);
    }
  });

  it("serves the three Vercel team portraits from matching static assets", () => {
    const teamSection = vercelHomeSource.split('<section id="team"')[1]?.split("</section>")[0] ?? "";
    const portraits = [
      {
        src: "/team/juan.webp",
        alt: "Juan Carroso, Founder and Lead Contact",
        file: "juan.webp",
      },
      {
        src: "/team/carlos-camacho.jpeg",
        alt: "Carlos Camacho, Registered Psychologist",
        file: "carlos-camacho.jpeg",
      },
      {
        src: "/team/dr-carlos-robalino.jpeg",
        alt: "Doctor Carlos Robalino, General Practitioner",
        file: "dr-carlos-robalino.jpeg",
      },
    ];

    expect(teamSection).not.toContain("/manus-storage/");
    for (const portrait of portraits) {
      expect(teamSection).toContain(`src=\"${portrait.src}\"`);
      expect(teamSection).toContain(`alt=\"${portrait.alt}\"`);
      expect(existsSync(resolve(import.meta.dirname, "../public/team", portrait.file))).toBe(true);
    }
  });

  it("keeps the critical external and contact destinations", () => {
    for (const destination of [
      "https://resiliencehubnsw.vercel.app",
      "https://calendly.com/resiliencehubnsw",
      "https://linktr.ee/SloaneFox.Official",
      "mailto:resiliencehubnsw@gmail.com",
      "https://www.lifeline.org.au",
      "https://www.beyondblue.org.au",
      "tel:1300659467",
    ]) {
      expect(homeSource).toContain(destination);
    }
  });

  it("keeps the requested mission, program, referral, safety, and status content", () => {
    for (const phrase of [
      "Support before things get worse.",
      "You do not need a perfect plan.",
      "The AI app",
      "The real 8-week program",
      "Start with a referral. We will work through the rest together.",
      "Mental Health Care Plan",
      "What made the difference with Juan was that he was actually there.",
      "💬 Rob's Story — in his own words",
      "THE SITUATION",
      "WHAT WAS AT STAKE",
      "THE SUPPORT",
      "THE OUTCOME",
      "I know I did the wrong thing. Driving while suspended is against the law",
      "As a volunteer at The Salvation Army, showing up gives me purpose and keeps me grounded.",
      "Because I was doing my part, Juan stood up for me in court",
      "The judge agreed: no fine, no conviction recorded.",
      "— Rob Hunt, Salvation Army Volunteer",
      "Shared with permission. Individual experiences vary.",
      "unincorporated not-for-profit initiative",
    ]) {
      expect(homeSource).toContain(phrase);
    }
  });

  it("keeps the prominent crisis contact strip", () => {
    expect(homeSource).toContain("Suicide Call Back Service 1300 659 467");
    expect(homeSource).toContain('aria-label="Immediate crisis contacts"');
  });

  it("shows the supplied pricing scale and organisation workshop offer", () => {
    for (const phrase of [
      "The Resilience Hub believes money should never stop someone getting support. Pay what fits your life, and nobody is turned away.",
      "The AI app will always be 100% free for registered users. Pricing options for organisational or corporate access are being explored.",
      "The eight-week personal program has five pay-what-fits options below, from a zero-dollar option to the listed paid options.",
      "Every dollar goes straight into keeping The Resilience Hub running.",
      "Donations also help keep the AI support app available to registered users",
      "help fund zero-dollar places for others",
      "https://gofund.me/4b2706340",
      "👕 Shop Sloane Fox",
      "Zero dollars ($0)",
      "Five dollars ($5) a week, or forty dollars ($40) for the full program.",
      "Twenty dollars ($20) a week, or one hundred and sixty dollars ($160) for the full program.",
      "Forty dollars ($40) a week, or three hundred and twenty dollars ($320) for the full program.",
      "Two thousand three hundred dollars ($2,300).",
      "People choose their own option, and nobody is asked to prove their situation.",
      "Prices are a guide and may change.",
      "Bring the Hub to your workplace or club.",
      "Group workshops start at $600.",
    ]) {
      expect(homeSource).toContain(phrase);
    }
    expect(homeSource).not.toContain("free program");
    expect(homeSource).not.toContain("The free AI app costs nothing.");
    expect(homeSource).not.toContain("The AI app is free to use.");
    expect(homeSource).not.toContain("recovery apparel brand");
    expect(homeSource).not.toContain("Juan's recovery apparel");
    expect(homeSource).toContain("resilience-app_afc6bf25.mp4");
    expect(homeSource).toContain("https://streamable.com/sbg00m");
    expect(homeSource).toContain("Pricing options for organisational or corporate access are being explored.");
    expect(homeSource).toContain("GP and psychologist appointments are separate from the program and may be bulk-billed with a Mental Health Care Plan.");
    expect(homeSource).not.toContain("Please confirm the exact wording for this note.");
    expect(linksSource).toContain("free for registered users");
    expect(siteMetadataSource).toContain("free for registered users");
  });

  it("removes the empty testimonial boxes and keeps both support links in the donation section", () => {
    expect(homeSource).not.toContain("new-testimonial-spaces");
    expect(homeSource).not.toContain("Future testimonial space");
    expect(homeSource).toContain('href="https://linktr.ee/SloaneFox.Official"');
    expect(homeSource).toContain('href="https://gofund.me/4b2706340"');
    expect(homeSource).toContain("Every purchase and contribution helps keep community support available.");
  });

  it("explains the three Sloane Fox design messages without repeating the shirt-impact line", () => {
    for (const phrase of [
      "What our designs mean:",
      "“You been passed by the fox”",
      "when you see someone wearing this, you know you've just crossed paths with someone who doesn't give up. Someone who keeps going no matter what. That's all it is.",
      "“Built, Not Bought”",
      "real strength comes from showing up, doing the work, and sticking around. It's earned, not paid for.",
      "“The Power Is Within”",
      "the strength you need is already inside you. You just have to trust it.",
      "We've got plenty more designs on the way, each one with its own message. Wear the one that speaks to you.",
    ]) {
      expect(homeSource).toContain(phrase);
    }
    expect(
      homeSource.match(/Every shirt sold\s+through Sloane Fox helps fund the full eight-week program for two people\./gi),
    ).toHaveLength(1);
  });

  it("uses the confirmed direct public origin for route canonical and social URLs", () => {
    expect(siteMetadataSource).toContain(
      'SITE_ORIGIN = "https://resihub-bsn6crau.manus.space"',
    );
    for (const route of ["/", "/privacy", "/disclaimer", "/links"]) {
      expect(siteMetadataSource).toContain(`canonicalPath: "${route}"`);
    }
    expect(linksSource).toContain("SITE_HOME_URL");
    expect(linksSource).not.toContain("resiliencehub.s.gy/website");
    expect(headSource).toContain('upsertMeta("property", "og:url", canonicalUrl)');
  });

  it("lists the supplied fundraiser and social-profile destinations", () => {
    for (const destination of [
      "https://gofund.me/4b2706340",
      "https://www.facebook.com/groups/2076304423284551/",
      "https://au.linkedin.com/in/juan-carroso-a211ba385",
      "https://www.facebook.com/people/Sloanefox/61586163260435/",
      "https://www.instagram.com/sloanefoxofficial",
      "https://www.youtube.com/@sloanefoxofficial/shorts",
      "https://www.tiktok.com/@sloanefox82",
    ]) {
      expect(linksSource).toContain(destination);
    }
  });
});
