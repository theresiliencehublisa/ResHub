import SitePageLayout from "../components/SitePageLayout";
import { PAGE_META } from "../siteMetadata";

export default function NotFound() {
  return (
    <SitePageLayout metadata={PAGE_META.notFound}>
      <article className="new-legal-document" aria-labelledby="not-found-title">
        <span className="new-kicker">404</span>
        <h1 id="not-found-title">Page not found</h1>
        <p>
          Sorry, the page you are looking for doesn't exist. It may have been moved or deleted.
        </p>
        <a className="new-button new-button-dark" href="/">
          Return to the home page
        </a>
      </article>
    </SitePageLayout>
  );
}
