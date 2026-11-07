import SitePageLayout from "../components/SitePageLayout";
import { PAGE_META } from "../siteMetadata";

export default function Disclaimer() {
  return (
    <SitePageLayout metadata={PAGE_META.disclaimer}>
      <article className="new-legal-document" aria-labelledby="disclaimer-title">
        <span className="new-kicker">Please read</span>
        <h1 id="disclaimer-title">Disclaimer</h1>
        <section>
          <h2>General information</h2>
          <p>
            The Resilience Hub and the app do not replace professional medical or psychological advice.
          </p>
          <p>
            The Resilience Hub and the app are not a crisis service. If you are in immediate danger, call 000.
            For crisis support, call Lifeline on 13 11 14 or Suicide Call Back Service on 1300 659 467.
          </p>
        </section>
      </article>
    </SitePageLayout>
  );
}
