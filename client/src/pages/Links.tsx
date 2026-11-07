import Head from "../components/Head";
import { PAGE_META, SITE_HOME_URL, SITE_SHARE_IMAGE } from "../siteMetadata";

const logo = SITE_SHARE_IMAGE;

export default function Links() {
  return (
    <main className="new-links-page">
      <Head {...PAGE_META.links} />
      <header className="new-links-brand">
        <img src={logo} alt="The Resilience Hub" />
        <h1>The Resilience Hub</h1>
        <p>Resilience Hub NSW</p>
      </header>
      <ul className="new-links-list" aria-label="The Resilience Hub links">
        <li>
          <strong>Website</strong>
          <a href={SITE_HOME_URL} target="_blank" rel="noopener noreferrer">
            {SITE_HOME_URL}
          </a>
        </li>
        <li className="new-links-app-item">
          <strong>AI app</strong>
          <div className="new-links-app-content">
            <a href="https://resiliencehubnsw.vercel.app" target="_blank" rel="noopener noreferrer">
              Open The Resilience Hub app
            </a>
            <p>The app will always be 100% free for registered users. Pricing options for organisational or corporate access are being explored.</p>
          </div>
        </li>
        <li>
          <strong>Booking</strong>
          <a href="https://calendly.com/resiliencehubnsw" target="_blank" rel="noopener noreferrer">
            Book a time
          </a>
        </li>
        <li>
          <strong>GoFundMe</strong>
          <a href="https://gofund.me/4b2706340" target="_blank" rel="noopener noreferrer">
            Support The Resilience Hub
          </a>
        </li>
        <li>
          <strong>Email</strong>
          <a href="mailto:resiliencehubnsw@gmail.com">resiliencehubnsw@gmail.com</a>
        </li>
        <li id="social" className="new-links-social-item">
          <strong>Social channels</strong>
          <div className="new-links-social-groups">
            <section className="new-links-social-group" aria-label="Resilience Hub accounts">
              <h2>Resilience Hub</h2>
              <a href="https://www.facebook.com/groups/2076304423284551/" target="_blank" rel="noopener noreferrer">Facebook group</a>
              <a href="https://au.linkedin.com/in/juan-carroso-a211ba385" target="_blank" rel="noopener noreferrer">LinkedIn · Juan Carroso</a>
            </section>
            <section className="new-links-social-group" aria-label="Sloane Fox accounts">
              <h2>Sloane Fox</h2>
              <a href="https://www.facebook.com/people/Sloanefox/61586163260435/" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.instagram.com/sloanefoxofficial" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.youtube.com/@sloanefoxofficial/shorts" target="_blank" rel="noopener noreferrer">YouTube Shorts</a>
              <a href="https://www.tiktok.com/@sloanefox82" target="_blank" rel="noopener noreferrer">TikTok</a>
            </section>
          </div>
        </li>
      </ul>
    </main>
  );
}
