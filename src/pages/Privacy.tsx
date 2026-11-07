import SitePageLayout from "../components/SitePageLayout";
import { PAGE_META } from "../siteMetadata";

export default function Privacy() {
  return (
    <SitePageLayout metadata={PAGE_META.privacy}>
      <article className="new-legal-document" aria-labelledby="privacy-title">
        <span className="new-kicker">Information about the AI app</span>
        <h1 id="privacy-title">Privacy policy</h1>
        <p className="new-draft-notice">
          Draft for review. The bracketed items below need confirmation before publication.
        </p>

        <section>
          <h2>What the app sends to its AI service</h2>
          <p>Chat and journal writing are sent to an AI service to generate replies.</p>
          <p className="new-placeholder">
            [Please confirm the AI service/provider name and whether any other information is sent.]
          </p>
        </section>

        <section>
          <h2>How information is stored and for how long</h2>
          <p className="new-placeholder">
            [Please confirm whether chat or journal content is stored, where it is stored, and how long it is kept.]
          </p>
        </section>

        <section>
          <h2>Who can see information</h2>
          <p className="new-placeholder">
            [Please confirm who can access app messages and journal content, including any service-provider access.]
          </p>
        </section>

        <section>
          <h2>How to ask about deleting information</h2>
          <p>
            Privacy contact: <a href="mailto:resiliencehubnsw@gmail.com">resiliencehubnsw@gmail.com</a>.
          </p>
          <p className="new-placeholder">
            [Please confirm the deletion-request process, what information can be deleted, and the expected timeframe.]
          </p>
        </section>
      </article>
    </SitePageLayout>
  );
}
