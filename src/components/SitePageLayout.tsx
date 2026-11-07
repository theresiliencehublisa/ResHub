import type { ReactNode } from "react";
import Head from "./Head";
import type { PageMetadata } from "../siteMetadata";

const logo = "https://resiliencehubnsw.vercel.app/resilience-hub-logo.png";

type SitePageLayoutProps = {
  metadata: PageMetadata;
  children: ReactNode;
};

export default function SitePageLayout({ metadata, children }: SitePageLayoutProps) {
  return (
    <div className="new-site">
      <Head {...metadata} />
      <div className="new-topline">Resilience Hub NSW · Western Sydney</div>
      <header className="new-header">
        <a className="new-brand" href="/" aria-label="The Resilience Hub home">
          <img src={logo} alt="The Resilience Hub" />
        </a>
        <nav className="new-nav" aria-label="Page navigation">
          <a href="/">Home</a>
          <a href="/links">Links</a>
        </nav>
      </header>
      <aside className="new-crisis" aria-label="Immediate crisis contacts">
        <span>Need immediate help?</span>
        <a href="tel:000">000</a>
        <a href="tel:131114">Lifeline 13 11 14</a>
        <a href="tel:1300659467">Suicide Call Back Service 1300 659 467</a>
      </aside>
      <main className="new-legal-main">{children}</main>
      <footer className="new-footer">
        <div>
          <img src={logo} alt="The Resilience Hub" />
          <p>Resilience Hub NSW · Western Sydney</p>
        </div>
        <div>
          <strong>Our status</strong>
          <p>The Resilience Hub currently operates as an unincorporated not-for-profit initiative.</p>
        </div>
        <div>
          <strong>Safety</strong>
          <p>This website and AI app are not crisis services. In an emergency call 000.</p>
          <nav className="new-footer-links" aria-label="Information pages">
            <a href="/privacy">Privacy policy</a>
            <a href="/disclaimer">Disclaimer</a>
            <a href="/links">Links</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
