import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  HeartHandshake,
  Mail,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";

import SuicideTrendChart from "../components/SuicideTrendChart";
import Head from "../components/Head";
import { PAGE_META } from "../siteMetadata";
import {
  appPromoTranscript,
  appPromoTranscriptReviewNote,
  storyTranscript,
  storyTranscriptReviewNote,
  tiffanyTestimonialTranscript,
} from "../data/videoTranscripts";

const assets = {
  hubLogo: "https://resiliencehubnsw.vercel.app/resilience-hub-logo.png",
};

type FAQ = [string, string];

const faqs: FAQ[] = [
  [
    "Is the app the same as the real 8-week program?",
    "No. The AI app will always be 100% free for registered users. Pricing options for organisational or corporate access are being explored. The app is self-guided. The eight-week personal program has its own pay-what-fits-your-life scale, including a zero-dollar option, and includes one-on-one support with Juan Carroso.",
  ],
  [
    "How much does the eight-week program cost?",
    "People choose their own option, and nobody is asked to prove their situation. See “What does it cost?” for the full pay-what-fits-your-life scale.",
  ],
  [
    "Do I need to have everything figured out before I reach out?",
    "Not at all. We start exactly where you are. No preparation is needed.",
  ],
  [
    "Is this a crisis service?",
    "No. This is a support tool, not an emergency service. If you are in danger call 000. For crisis support call Lifeline 13 11 14 or Suicide Call Back Service 1300 659 467.",
  ],
  [
    "How do I start the personal program?",
    "Start with a referral. We will work through the rest together. [Please confirm the program's start steps, including how a GP referral and Mental Health Care Plan work, before publication.]",
  ],
];

function jump(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function LocalVideo({
  src,
  poster,
  title,
  fallbackUrl,
  fallbackLabel,
  className = "",
  transcript,
  transcriptReviewNote,
}: {
  src: string;
  poster: string;
  title: string;
  fallbackUrl: string;
  fallbackLabel: string;
  className?: string;
  transcript?: string;
  transcriptReviewNote?: string;
}) {
  return (
    <div className={`new-video-module ${className}`}>
      <video className="new-video-player" controls playsInline preload="none" poster={poster} aria-label={title}>
        <source src={src} type="video/mp4" />
        Your browser does not support embedded video. Use the link below to watch the clip.
      </video>
      <p className="new-video-fallback">
        If playback is unavailable, {" "}
        <a href={fallbackUrl} target="_blank" rel="noopener noreferrer">
          {fallbackLabel}
        </a>
        .
      </p>
      {transcript && (
        <details className="new-video-transcript">
          <summary>Read the full transcript</summary>
          {transcriptReviewNote && <p className="new-video-transcript-note">{transcriptReviewNote}</p>}
          <p className="new-video-transcript-text">{transcript}</p>
        </details>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const navigate = (id: string) => {
    setMenuOpen(false);
    window.setTimeout(() => jump(id), 40);
  };

  return (
    <div className="new-site">
      <Head {...PAGE_META.home} />
      <div className="new-topline">Resilience Hub NSW · Western Sydney</div>

      <header className="new-header">
        <button
          className="new-brand"
          onClick={() => navigate("home")}
          aria-label="The Resilience Hub home"
        >
          <img src={assets.hubLogo} alt="The Resilience Hub" />
        </button>
        <nav className="new-nav" aria-label="Primary navigation">
          <button onClick={() => navigate("app")}>AI app</button>
          <button onClick={() => navigate("program")}>Real program</button>
          <button onClick={() => navigate("support")}>Get in touch</button>
        </nav>
        <button
          className="new-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && (
        <nav className="new-mobile-nav" aria-label="Mobile navigation">
          <button onClick={() => navigate("app")}>AI app</button>
          <button onClick={() => navigate("program")}>Real 8-week program</button>
          <button onClick={() => navigate("pathways")}>Ways we can help</button>
          <button onClick={() => navigate("resources")}>Resources</button>
          <button onClick={() => navigate("support")}>Contact the Hub</button>
        </nav>
      )}

      <aside className="new-crisis" aria-label="Immediate crisis contacts">
        <span>Need immediate help?</span>
        <a href="tel:000">000</a>
        <a href="tel:131114">Lifeline 13 11 14</a>
        <a href="tel:1300659467">Suicide Call Back Service 1300 659 467</a>
      </aside>

      <main>
        <section id="home" className="new-hero">
          <div className="new-hero-copy">
            <span className="new-kicker">Western Sydney · Community-led support</span>
            <h1>The Resilience Hub</h1>
            <p className="new-hero-lede">
              Support before things get worse. A community-led resilience and recovery space in Western Sydney. Choose the
              self-guided AI app or the separate eight-week personal program.
            </p>
            <div className="new-hero-actions">
              <button className="new-button new-button-light" onClick={() => navigate("app")}>
                Explore the AI app <ArrowRight size={18} />
              </button>
              <button className="new-text-button" onClick={() => navigate("program")}>
                Meet the real program <ArrowRight size={18} />
              </button>
            </div>
          </div>
          <div className="new-hero-media">
            <span className="new-hero-video-label">The Resilience Hub story · 1 min 21 sec</span>
            <p className="new-hero-video-caption">
              A personal story about connecting with Juan Carroso and using The Resilience Hub app.
            </p>
            <LocalVideo
              className="new-main-story"
              src="/manus-storage/resilience-story_89bc418c.mp4"
              poster="/media/story-poster.jpg"
              title="The Resilience Hub: a personal story about finding support"
              fallbackUrl="https://streamable.com/hvfvum"
              fallbackLabel="watch the main story on Streamable"
              transcript={storyTranscript}
              transcriptReviewNote={storyTranscriptReviewNote}
            />
          </div>
        </section>

        <section className="new-intro">
          <div>
            <span className="new-kicker">A clear place to begin</span>
            <h2>You do not need a perfect plan.</h2>
          </div>
          <p>
            Whether you need someone to listen, help finding a service, or a practical way forward,
            The Resilience Hub starts with where you are now. The self-guided AI app is
            separate from the eight-week personal program with Juan Carroso.
          </p>
        </section>

        <section className="new-testimonial" aria-labelledby="testimonial-title">
          <div className="new-testimonial-mark" aria-hidden="true">
            “
          </div>
          <div>
            <h3 className="testimonial-voice-label">💬 Jared's experience — in his own words</h3>
            <h2 id="testimonial-title">Someone who actually shows up.</h2>
            <p className="new-testimonial-lede">
              Taking the first step can be difficult, especially when life is already overwhelming.
              We want to make reaching out feel straightforward, welcoming and without judgement.
            </p>
            <blockquote className="jared-testimonial-frame">
              “What made the difference with Juan was that he was actually there. When I reached
              out, he answered. He followed through. I wasn't left hanging or wondering if anyone
              really cared.
              <br />
              <br />
              I can talk to Juan like a normal person. He doesn't talk down to you or make you feel
              like you're being judged. He meets you where you're at. You can be yourself, speak
              honestly and feel like you're talking to a mate who's genuinely listening.
              <br />
              <br />
              Knowing someone's there, that they'll answer and that you won't be left trying to
              figure everything out on your own, takes a lot of pressure off. It makes asking for
              help feel possible again.”
            </blockquote>
            <strong>— Jared</strong>
          </div>
        </section>

        <section id="rob-testimonial" className="new-testimonial new-rob-story" aria-labelledby="rob-testimonial-title">
          <figure className="rob-testimonial-portrait-figure">
            <img
              className="new-testimonial-portrait"
              src="/team/rob-hunt.jpg"
              alt="Portrait of Rob"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="testimonial-voice-label">💬 Rob's Story — in his own words</figcaption>
          </figure>
          <div className="new-testimonial-copy">
            <h2 id="rob-testimonial-title">Rob's Story</h2>
            <ol className="rob-testimonial-stages">
              <li className="rob-testimonial-stage">
                <span className="new-kicker">THE SITUATION</span>
                <blockquote>
                  <p>I know I did the wrong thing. Driving while suspended is against the law, and I take full responsibility for that. But I wasn’t trying to break the rules — I was trying to keep us safe on a long trip when the driver got exhausted. It was a mistake, but it wasn't made out of carelessness.</p>
                </blockquote>
              </li>
              <li className="rob-testimonial-stage">
                <span className="new-kicker">WHAT WAS AT STAKE</span>
                <blockquote>
                  <p>As a volunteer at The Salvation Army, showing up gives me purpose and keeps me grounded. I was just one week away from getting my licence back, and I thought this one bad call was going to cost me everything — my routine, my connection, and my mental health. I could feel myself starting to spiral.</p>
                </blockquote>
              </li>
              <li className="rob-testimonial-stage">
                <span className="new-kicker">THE SUPPORT</span>
                <blockquote>
                  <p>That’s when I reached out to Juan and started using The Resilience Hub app. Having that support right in my pocket caught me before I fell completely off track. But Juan doesn't offer a 'get out of jail free' card — he doesn't just stand up for anyone. He backs men who are actively putting in the work to change and show up for themselves. Because I was doing my part, Juan stood up for me in court and made sure the judge saw the whole picture of who I am.</p>
                </blockquote>
              </li>
              <li className="rob-testimonial-stage">
                <span className="new-kicker">THE OUTCOME</span>
                <blockquote>
                  <p>The judge agreed: no fine, no conviction recorded. I get to keep moving forward. That’s what The Resilience Hub is all about. They catch you before you fall, they stand with you if you do, and they remind you that your mistakes don't get to define your future.</p>
                </blockquote>
              </li>
            </ol>
            <strong>— Rob Hunt, Salvation Army Volunteer</strong>
          </div>
        </section>
        <p className="new-testimonial-note">Shared with permission. Individual experiences vary.</p>

        <section
          id="tiffany-testimonial"
          className="tiffany-testimonial"
          aria-labelledby="tiffany-testimonial-title"
        >
          <header className="tiffany-testimonial-heading">
            <span className="testimonial-voice-label">💬 Tiffany's story — in her own words</span>
            <h2 id="tiffany-testimonial-title">Tiffany's Story</h2>
            <p>Watch her story in three short reels, or open the full transcript below.</p>
          </header>

          <ol className="tiffany-reel-grid" aria-label="Tiffany's testimonial reels, in order">
            <li className="tiffany-reel-card">
              <span className="tiffany-reel-label">Reel 1</span>
              <video
                className="tiffany-reel-player"
                controls
                playsInline
                preload="metadata"
                aria-label="Tiffany's testimonial reel 1"
              >
                <source src="/videos/tiffany/reel-1.mp4" type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </li>
            <li className="tiffany-reel-card">
              <span className="tiffany-reel-label">Reel 2</span>
              <video
                className="tiffany-reel-player"
                controls
                playsInline
                preload="metadata"
                aria-label="Tiffany's testimonial reel 2"
              >
                <source src="/videos/tiffany/reel-2.mp4" type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </li>
            <li className="tiffany-reel-card">
              <span className="tiffany-reel-label">Reel 3</span>
              <video
                className="tiffany-reel-player"
                controls
                playsInline
                preload="metadata"
                aria-label="Tiffany's testimonial reel 3"
              >
                <source src="/videos/tiffany/reel-3.mp4" type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </li>
          </ol>

          <div className="tiffany-transcript-wrap">
            <details className="tiffany-transcript">
              <summary>Read Tiffany's testimonial instead</summary>
              <div className="tiffany-transcript-body">
                {tiffanyTestimonialTranscript.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section className="new-choice-grid" aria-label="Choose your pathway">
          <article id="app" className="new-choice new-choice-dark">
            <div className="new-choice-copy">
              <span className="new-number">01</span>
              <span className="new-kicker">Self-guided AI app</span>
              <h2>The Resilience Hub AI app</h2>
              <p>
                Open it when you need it. Explore support, resources, and next steps at your own
                pace. This is separate from the eight-week personal program with Juan Carroso.
              </p>
              <p>The AI app will always be 100% free for registered users. Pricing options for organisational or corporate access are being explored.</p>
              <ul>
                <li>
                  <ShieldCheck size={17} /> Available in your browser
                </li>
                <li>
                  <ShieldCheck size={17} /> Self-guided support at your own pace
                </li>
                <li>
                  <ShieldCheck size={17} /> Not a crisis service
                </li>
              </ul>
              <p className="new-app-privacy-note">
                <strong>Before sharing sensitive details:</strong> chat and journal writing are sent
                to an AI service to generate replies. Please review the <a href="/privacy">app's privacy information</a>.
                <a href="/disclaimer">Read the Disclaimer</a>.
              </p>
              <a
                className="new-button new-button-light"
                href="https://resiliencehubnsw.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the AI app <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="new-choice-media new-app-video">
              <div className="new-video-intro">
                <span className="new-kicker">A 30-second introduction</span>
                <p>A short message about the self-guided AI app.</p>
                <p className="new-app-pricing-note"><strong>Access:</strong> The AI app will always be 100% free for registered users. Pricing options for organisational or corporate access are being explored.</p>
              </div>
              <LocalVideo
                src="/manus-storage/resilience-app_afc6bf25.mp4"
                poster="/media/app-promo-poster.jpg"
                title="The Resilience Hub AI app promotional video"
                fallbackUrl="https://streamable.com/sbg00m"
                fallbackLabel="watch the app video on Streamable"
                transcript={appPromoTranscript}
                transcriptReviewNote={appPromoTranscriptReviewNote}
              />
            </div>
          </article>

          <article id="program" className="new-choice new-choice-warm">
            <div className="new-choice-copy">
              <span className="new-number">02</span>
              <span className="new-kicker">Personal and guided</span>
              <h2>The real 8-week program</h2>
              <p>
                One-on-one support with Juan Carroso, alongside the psychologist and GP. The
                eight-week program is separate from the AI app.
              </p>
              <ul>
                <li>
                  <HeartHandshake size={17} /> Personal check-ins
                </li>
                <li>
                  <HeartHandshake size={17} /> A plan built together
                </li>
                <li>
                  <HeartHandshake size={17} /> Support navigating services
                </li>
              </ul>
              <button
                className="new-button new-button-dark"
                onClick={() => navigate("cost")}
              >
                What does it cost? <ArrowRight size={17} />
              </button>
            </div>
            <div className="new-program-visual" aria-hidden="true">
              <div className="new-program-visual-label">
                <span>PERSONAL SUPPORT</span>
                <strong>One step at a time.</strong>
              </div>
              <svg viewBox="0 0 380 250" preserveAspectRatio="none" focusable="false">
                <path d="M16 224 C74 224 68 182 120 182 S170 130 218 130 S265 77 310 77 S335 35 368 35" fill="none" stroke="#b57961" strokeWidth="3" strokeLinecap="round" />
                <circle cx="16" cy="224" r="6" fill="#df806d" />
                <circle cx="120" cy="182" r="6" fill="#df806d" />
                <circle cx="218" cy="130" r="6" fill="#df806d" />
                <circle cx="310" cy="77" r="6" fill="#df806d" />
                <circle cx="368" cy="35" r="7" fill="#0b3024" />
              </svg>
            </div>
          </article>
        </section>

        <section id="cost" className="new-cost">
          <div id="getting-started" className="new-section-anchor" aria-hidden="true" />
          <div className="new-section-head">
            <div>
              <span className="new-kicker">Clear information before you begin</span>
              <h2>What does it cost?</h2>
            </div>
          </div>
          <p className="new-cost-opening">The Resilience Hub believes money should never stop someone getting support. Pay what fits your life, and nobody is turned away.</p>
          <p className="new-cost-app-note">The AI app will always be 100% free for registered users. Pricing options for organisational or corporate access are being explored.</p>
          <p className="new-cost-app-note">The eight-week personal program has five pay-what-fits options below, from a zero-dollar option to the listed paid options.</p>
          <div className="new-cost-grid">
            <article>
              <h3>Free option</h3>
              <p className="new-cost-price">Zero dollars ($0)</p>
              <p>For anyone who can't afford to pay. No proof needed, just an honest conversation.</p>
            </article>
            <article>
              <h3>Concession</h3>
              <p className="new-cost-price">Five dollars ($5) a week, or forty dollars ($40) for the full program.</p>
              <p>For people on a pension, Centrelink or a low income.</p>
            </article>
            <article>
              <h3>Standard</h3>
              <p className="new-cost-price">Twenty dollars ($20) a week, or one hundred and sixty dollars ($160) for the full program.</p>
              <p>For people who are working and can afford it.</p>
            </article>
            <article>
              <h3>Supporter</h3>
              <p className="new-cost-price">Forty dollars ($40) a week, or three hundred and twenty dollars ($320) for the full program.</p>
              <p>For people who want to back the Hub and help fund zero-dollar places for others.</p>
            </article>
            <article>
              <h3>Sponsor a place</h3>
              <p className="new-cost-price">Two thousand three hundred dollars ($2,300).</p>
              <p>For employers, clubs, councils and community members who want to fund someone's whole program.</p>
            </article>
          </div>
          <p className="new-cost-choice-note">People choose their own option, and nobody is asked to prove their situation.</p>
          <p className="new-cost-change-note">Prices are a guide and may change.</p>
          <p className="new-cost-appointment-note">GP and psychologist appointments are separate from the program and may be bulk-billed with a Mental Health Care Plan.</p>
        </section>

        <section id="workshops" className="new-workshops">
          <div className="new-workshop-card">
            <div>
              <span className="new-kicker">For organisations</span>
              <h2>Bring the Hub to your workplace or club.</h2>
              <p>Group workshops start at $600.</p>
            </div>
            <div className="new-workshop-actions">
              <a className="new-button new-button-light" href="mailto:resiliencehubnsw@gmail.com">
                <Mail size={17} /> Email the Hub
              </a>
              <a className="new-button new-button-outline" href="https://calendly.com/resiliencehubnsw" target="_blank" rel="noopener noreferrer">
                <CalendarDays size={17} /> Book a time
              </a>
            </div>
          </div>
        </section>

        <section id="pathways" className="new-pathways">
          <div className="new-section-head">
            <div>
              <span className="new-kicker">Support that fits real life</span>
              <h2>More than one way forward.</h2>
            </div>
            <p>
              Mental health, recovery, health pathways, routines, and connection can all be part of the
              picture.
            </p>
          </div>
          <div className="new-pathway-grid">
            <article>
              <span>Mind</span>
              <h3>Talk it through</h3>
              <p>A safe place to speak honestly and find practical tools.</p>
            </article>
            <article>
              <span>Recovery</span>
              <h3>Find your supports</h3>
              <p>Non-judgemental help with detox and recovery pathways.</p>
            </article>
            <article>
              <span>Direction</span>
              <h3>Build momentum</h3>
              <p>Daily routines, direction, and the next useful step.</p>
            </article>
          </div>
        </section>

        <section id="team" className="new-team-section" aria-labelledby="team-title">
          <div className="new-team-inner">
            <span className="new-kicker">People and practice</span>
            <h2 id="team-title">Who's here to help</h2>
            <p className="new-team-intro">The people connected with The Resilience Hub and their professional backgrounds.</p>
            <div className="new-team-grid">
              <article className="new-team-card">
                <img className="new-team-photo" src="/team/juan.webp" alt="Juan Carroso, Founder and Lead Contact" loading="lazy" decoding="async" />
                <h3>Juan Carroso</h3>
                <p className="new-team-role">Founder and Lead Contact</p>
                <p>
                  Juan Carroso founded The Resilience Hub to offer peer support and practical pathways for
                  people in Western Sydney. He has worked in community mental health, including
                  forensic mental health case management and dementia care, and holds a Certificate
                  III in Individual Support. He is committed to being someone who answers when
                  people reach out. He also runs the Sloane Fox apparel brand.
                </p>
              </article>
              <article className="new-team-card">
                <img className="new-team-photo" src="/team/carlos-camacho.jpeg" alt="Carlos Camacho, Registered Psychologist" loading="lazy" decoding="async" />
                <h3>Carlos Camacho</h3>
                <p className="new-team-role">Registered Psychologist</p>
                <p>
                  Carlos has practised as a psychologist since 1996, supporting people with anxiety,
                  depression, trauma, self-esteem and return-to-work recovery, using evidence-based
                  approaches such as Cognitive Behavioural Therapy. He sees clients at Myhealth
                  Fairfield and by telehealth, and speaks English and Spanish.
                </p>
                <p className="new-registration">AHPRA registration number: <span>PSY 0001635296</span></p>
              </article>
              <article className="new-team-card">
                <img className="new-team-photo" src="/team/dr-carlos-robalino.jpeg" alt="Doctor Carlos Robalino, General Practitioner" loading="lazy" decoding="async" />
                <h3>Doctor Carlos Robalino</h3>
                <p className="new-team-role">General Practitioner</p>
                <p>
                  Doctor Robalino is a GP at Fairfield Medical Centre with more than thirty-five
                  years of experience in Australian general practice. His areas of interest include
                  mental health, addiction medicine, chronic disease and pain management, and men's
                  health. He speaks English and Spanish.
                </p>
                <p className="new-registration">AHPRA registration number: <span>MED0001154312</span></p>
              </article>
            </div>
            <p className="new-team-independent">
              Practitioners are independently registered. Information on this site is general and not a substitute for professional advice.
            </p>
          </div>
        </section>

        <SuicideTrendChart />

        <section id="resources" className="new-resources">
          <div>
            <span className="new-kicker">Keep support within reach</span>
            <h2>Useful next steps, all in one place.</h2>
          </div>
          <div className="new-resource-links">
            <a href="https://www.lifeline.org.au" target="_blank" rel="noopener noreferrer">
              <strong>Lifeline</strong>
              <span>
                Crisis support and suicide prevention <ArrowUpRight size={16} />
              </span>
            </a>
            <a href="https://www.beyondblue.org.au" target="_blank" rel="noopener noreferrer">
              <strong>Beyond Blue</strong>
              <span>
                Mental-health information and support <ArrowUpRight size={16} />
              </span>
            </a>
            <a href="mailto:resiliencehubnsw@gmail.com">
              <strong>Contact the Hub</strong>
              <span>
                resiliencehubnsw@gmail.com <ArrowUpRight size={16} />
              </span>
            </a>
          </div>
        </section>

        <section id="support" className="new-contact">
          <div>
            <span className="new-kicker">Ready when you are</span>
            <h2>Reach out. We will take the next step together.</h2>
            <p>The AI app will always be 100% free for registered users. Pricing options for organisational or corporate access are being explored. The eight-week personal program has its own pay-what-fits scale; see “What does it cost?” for details.</p>
          </div>
          <div className="new-contact-actions">
            <a className="new-button new-button-light" href="mailto:resiliencehubnsw@gmail.com">
              <Mail size={17} /> Email the Hub
            </a>
            <a
              className="new-button new-button-outline"
              href="https://calendly.com/resiliencehubnsw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CalendarDays size={17} /> Book a time
            </a>
          </div>
        </section>

        <section id="faq" className="new-faq">
          <div>
            <span className="new-kicker">Questions are welcome</span>
            <h2>Clear answers before you begin.</h2>
          </div>
          <div>
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              const answerId = `faq-answer-${index}`;
              return (
                <article key={question}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <span>{question}</span>
                    <ChevronDown size={18} aria-hidden="true" />
                  </button>
                  {isOpen && <p id={answerId}>{answer}</p>}
                </article>
              );
            })}
          </div>
        </section>
        <section id="donations" className="new-donations">
          <div>
            <span className="new-kicker">Support the work</span>
            <h2>Help us keep showing up</h2>
            <h3>How donations are used</h3>
            <p>
              Every dollar goes straight into keeping The Resilience Hub running. Every shirt sold
              through Sloane Fox helps fund the full eight-week program for two people.
            </p>
            <div className="new-sloane-designs">
              <h3>What our designs mean:</h3>
              <div className="new-sloane-design-list">
                <p><strong>“You been passed by the fox”</strong> — when you see someone wearing this, you know you've just crossed paths with someone who doesn't give up. Someone who keeps going no matter what. That's all it is.</p>
                <p><strong>“Built, Not Bought”</strong> — real strength comes from showing up, doing the work, and sticking around. It's earned, not paid for.</p>
                <p><strong>“The Power Is Within”</strong> — the strength you need is already inside you. You just have to trust it.</p>
              </div>
              <p className="new-sloane-more">We've got plenty more designs on the way, each one with its own message. Wear the one that speaks to you.</p>
            </div>
            <p>
              Donations also help keep the AI support app available to registered users and cover
              practical project costs such as app overheads, insurance and one-off medical costs
              (for example, new-patient fees), as well as other costs that help keep the program
              running. The eight-week program's pay-what-fits scale includes a zero-dollar option.
              Pricing options for organisational or corporate app access are being explored.
            </p>
          </div>
          <div className="new-donation-status">
            <strong>The Resilience Hub currently operates as an unincorporated not-for-profit initiative.</strong>
            <p>Every purchase and contribution helps keep community support available.</p>
            <div className="new-support-actions">
              <a className="new-button new-button-light" href="https://linktr.ee/SloaneFox.Official" target="_blank" rel="noopener noreferrer">
                👕 Shop Sloane Fox <ArrowUpRight size={17} />
              </a>
              <a className="new-button new-button-dark" href="https://gofund.me/4b2706340" target="_blank" rel="noopener noreferrer">
                Support the Hub on GoFundMe <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="new-footer">
        <div>
          <img src={assets.hubLogo} alt="The Resilience Hub" />
          <p>
            The Resilience Hub
            <br />
            Resilience Hub NSW · Western Sydney
          </p>
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
