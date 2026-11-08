# Resilience Hub update checklist

- [x] Upload the newly supplied Fairfield Drug Health Services photograph as a website asset.
- [x] Replace the photograph of Juan already displayed in the People & Partners section with the new image.
- [x] Verify the replacement image on the responsive page, then save the updated website version.

## FAQ grouping update

- [x] Group FAQ entries into Real 8-Week Program, App, and General sections.
- [x] Preserve the existing FAQ layout, visual language, and accordion interactions.
- [x] Verify the revised FAQ area: three program questions, three app questions, and the unchanged general crisis-service question display in the existing accordion style.

## Direct email contact update

- [x] Add a prominent mailto link for resiliencehubnsw@gmail.com in the support area.
- [x] Verify the email link displays resiliencehubnsw@gmail.com, uses the correct direct email address, and retains the site’s existing visual language.
- [x] Save the updated website version.

## Intake pathway review and update

- [x] Review the supplied intake form and identify the appropriate online intake approach.
- [x] Add a polished, privacy-conscious intake entry section that matches the existing website.
- [x] Verify the intake pathway: the downloadable form, private-return email link, and privacy notice display correctly in the existing visual system.

## Website and app clarity audit

- [x] Review every website heading, button, question, safety note, and external link from top to bottom.
- [x] Clearly distinguish the free self-guided AI app from the personal real 8-week program with Juan.
- [x] Standardise Australian spelling, privacy wording, crisis language, and the warm direct tone.
- [x] Review the linked app page and record app-level findings.
- [x] Verify revised website links and labels: free AI app, real personal 8-week program, Sloane Fox Store, bold permanent safety note, and precise privacy explanation all display correctly.

## Community Connections wording update

- [x] Replace the Community Connections heading and paragraph with the supplied wording.
- [x] Remove Randou House and Liverpool Catholic Club from the section.
- [x] Verify the Community Connections heading and partner paragraph match the supplied wording in the live preview.

## Calendly booking integration

- [x] Confirm the supplied Calendly page is accessible and appropriate for direct booking.
- [x] Add a Resilience Hub–styled Book a time section and booking links near the real program and contact options.
- [x] Verify the booking pathway: Book a Program Intake links to the supplied Calendly scheduling page and the email alternative is present in the live preview.

## Intake link simplification

- [x] Remove the Request a private return method link from the intake section.
- [x] Verify the intake download action remains intact and the Request a private return method link is no longer present in the live preview.

## Google site verification

- [x] Locate the website and linked app document-head implementations: the website is served by this project, while the app redirects to a separate Vercel deployment.
- [x] Add the supplied Google verification tag to the available website document head; the app requires access to its separate Vercel project.
- [x] Verify the Google verification tag is present in the website production head and publish the website update.

## Men's mental-health message

- [x] Audit the homepage for natural placements that preserve the hero slogan and current design.
- [x] Add the supplied message in appropriate high-visibility locations without changing existing content beyond the requested addition.
- [x] Verify wording, layout, responsiveness, and the preserved hero slogan, then publish the update.

## Social sharing metadata

- [x] Review the current HTML head and available brand metadata.
- [x] Add complete Open Graph and Twitter Card title, description, image, and image-alt metadata.
- [x] Verify the metadata in the production build and publish the update.

## Twitter/X metadata correction
- [x] Inspect the live Twitter/X metadata and verify the corrected image-alt field is present.
- [x] Add crawler-compatible Twitter image alt text and any complementary Twitter fields.
- [x] Verify the corrected production head and publish the update.
## AI and search crawlability
- [x] Audit the current document head, robots directives, sitemap availability, and crawler-visible content.
- [x] Add crawlability and structured-content improvements without changing the visible design.
- [x] Verify external-readable output and production build, then publish the update.

## Video integration
- [x] Place the supplied 81-second main story video prominently in the homepage hero at the first narrative point. Add a clear caption explaining that it connects the free self-guided AI app with Juan’s real personal 8-week program.
- [x] Place the supplied 30-second Resilience Hub app promotional video in the free AI app section; clearly identify the free app as self-guided and distinct from the real personal 8-week program with Juan. Do not present the promotional clip as an interface walkthrough.
- [x] Present both supplied Streamable clips in responsive project-hosted native players with stable portrait aspect ratios, touch-friendly controls, clear accessible titles, no autoplay, lazy media loading (`preload="none"`), and direct Streamable watch links as fallbacks.
- [x] Preserve the existing warm, people-first design, page hierarchy, and prominent crisis information on desktop and mobile. Keep the app privacy context accurate and do not repeat an absolute privacy guarantee that conflicts with the app’s documented AI data processing.

## Production deployment repair
- [x] Inspect the existing production build, server entrypoint, port handling, and Webdev features before repairing the missing `deploy` configuration.
- [x] Add a root production Dockerfile that installs with the committed pnpm version, lockfile, workspace policy, and dependency patch; builds the client and SSR assets; starts the production server; honors `PORT` with default 3000; and runs without baking private or development credentials into the image.
- [x] Add an unauthenticated `/_app/health` endpoint returning success and configure the container deployment with `dockerfilePath: "Dockerfile"` and `healthPath: "/_app/health"`.
- [ ] Save and publish the corrected checkpoint only after the deploy configuration and Dockerfile are in place. Auto-publish is currently enabled; do not submit a duplicate `POST publish` for the same checkpoint. If no automatic publish submission occurs, use Webdev `POST publish` and follow its confirmation workflow.
- [x] Do not look up or report a deployment for the earlier failed request because it was blocked before any deployment started. No new protected production secret was required for the public website, and no development credentials were copied into production.

## Brand and wording preservation
- [x] Keep all existing website wording unchanged and leave all original logo artwork untouched. Reuse the exact official full logo (`https://resiliencehubnsw.vercel.app/resilience-hub-logo.png`) and RH app mark/favicon (`https://resiliencehubnsw.vercel.app/icon-192.png` and `https://resiliencehubnsw.vercel.app/apple-touch-icon.png`) from the supplied public app; remove the substitute RH monogram. Do not redraw or alter the logos.

## Australia suicide trend graph
- [x] Add a separate Australia-only graph section before the existing Resources section without rewriting or removing existing website copy.
- [x] Use the official ABS 2025 Data Cube 11 national annual series for registration years 2016–2025: registered deaths and age-standardised deaths per 100,000. Clearly distinguish counts from rates, label the registration-year basis, and show the per-year revision status.
- [x] Disclose that 2023 is revised, 2024 preliminary revised, and 2025 preliminary; note that recent data may change as coronial cases are finalised and year-to-year comparisons need care.
- [x] Link the graph to the ABS release/data source, keep concise crisis contacts nearby, and make the chart responsive with an accessible text/table equivalent.

Verification: TypeScript check, production build, and all five existing tests passed. Desktop and mobile previews show the complete 2016–2025 series with readable 2016, 2020, and 2025 labels. The exact official logo, icon, and touch-icon URLs returned HTTP 200 and were reused unchanged.


## Rob Hunt testimonial
- [x] Add Rob's testimonial directly below Jared's and before the pathway cards, using the same testimonial structure.
- [x] Preserve the supplied quote verbatim, including its four paragraphs and the exact attribution “— Rob Hunt, Salvation Army Volunteer”.
- [x] Display the supplied portrait unchanged with accessible alt text and responsive sizing; do not alter Jared's card, existing website wording, or any logos.
- [x] Use the testimonial and portrait publicly only after confirmation that Rob approved this exact public use; the user has confirmed his approval.


Implementation evidence:
TypeScript check, production build, and all five existing tests passed; the portrait route returned HTTP 200 and matched the uploaded JPEG byte-for-byte.
Desktop and mobile full-page Preview captures show Rob's card directly below Jared's in the shared testimonial layout.


## Rob testimonial structure refinement
- [x] Reorganise the testimonial into four clearly labelled, chronological stages: the situation, what was at stake, the support, and the outcome; preserve Rob's supplied wording and sequence.
- [x] Remove the repeated generic lede, use a clear story-specific heading, and retain the supplied portrait and exact attribution. Do not edit Jared's testimonial, other existing website copy, or any logos.
- [x] Verify the refined structure is clear and responsive on desktop and mobile.


Refinement evidence:
TypeScript check, production build, and all five tests passed after the restructure.
Desktop/mobile Preview shows the four stages in order; Rob's wording and sequence and Jared's card are unchanged.


## Testimonial style consistency
- [x] For Rob, keep his portrait and put the exact caption “💬 Rob's Story — in his own words” directly beneath it; retain the main heading; style “THE SITUATION”, “WHAT WAS AT STAKE”, “THE SUPPORT”, and “THE OUTCOME” in bold, clean uppercase labels; make every passage clearly a quote in Rob's voice; end with the bold attribution “— Rob Hunt, Salvation Army Volunteer”.
- [x] For Jared, retain the large opening quote styling and every word of his existing testimonial exactly; add the exact heading “💬 Jared's experience — in his own words”; frame or centre his quote in a subtle soft background block; finish cleanly with “— Jared”.
- [x] Use the same existing colours, fonts, and spacing across both testimonials so each reads clearly as its own voice; do not alter any logo or unrelated site copy.


Presentation evidence: TypeScript check, all five existing tests, and the production build passed. Preview HTTP 200 contains both requested voice headings, Rob's four uppercase labels, existing main headings, and exact attributions; the existing Rob portrait URL returns HTTP 200.


## Draft for review — trust, transparency, accessibility, and branding
- [x] Preserve the crisis phone numbers at the top; every “not a crisis service” message; the AI privacy warning; and the note that The Resilience Hub is an unincorporated not-for-profit. Show the user a Preview and a change list before any publication; do not publish this draft before their review.
- [x] Replace “People alongside you” with “Who's here to help”. Include Juan Carroso, Founder and Lead Contact, with his supplied bio and portrait; Carlos Camacho, Registered Psychologist, with his supplied bio and portrait; and Doctor Carlos Robalino, General Practitioner, with his supplied bio and portrait. Display Doctor Carlos Robalino's registration number as `MED0001154312` and Carlos Camacho's as `PSY 0001635296`. Under the team section add exactly: “Practitioners are independently registered. Information on this site is general and not a substitute for professional advice.” Keep wording modest, with no “best” claims or promised outcomes.
- [x] Remove Wise Employment completely, including any logo, link, or mention of work, study, or training partners. Search the whole site, including questions and answers, program descriptions, and the footer, and remove or reword any partner reference.
- [x] Keep Jared's quote exactly as it is. Restore Rob's full user-supplied, approved testimonial without shortening or removing its offence, court, judge, or outcome passages. Retain Rob's photo; put “💬 Rob's Story — in his own words” directly beneath it; structure the complete first-person text under the bold chronological labels “THE SITUATION”, “WHAT WAS AT STAKE”, “THE SUPPORT”, and “THE OUTCOME”; end with “— Rob Hunt, Salvation Army Volunteer.” Add exactly: “Shared with permission. Individual experiences vary.” Leave two empty spaces for future testimonials. This supersedes the earlier attached brief's request to shorten Rob's review.
- [x] Add a section titled “What does it cost?” Begin with exactly “The Resilience Hub believes money should never stop someone getting support. Pay what fits your life, and nobody is turned away.” State that the AI app will always be 100% free for registered users; pricing options for organisational or corporate access are being explored. Present the eight-week program as cards or a simple table with these exact options: Free, zero dollars, for anyone who can't afford to pay, no proof needed, just an honest conversation; Concession, $5 a week or $40 for the full program, for people on a pension, Centrelink or a low income; Standard, $20 a week or $160 for the full program, for people who are working and can afford it; Supporter, $40 a week or $320 for the full program, for people who want to back the Hub and help fund zero-dollar places for others; Sponsor a place, $2,300, for employers, clubs, councils and community members who want to fund someone's whole program. State clearly that the eight-week personal program has five pay-what-fits options and the zero-dollar tier is one option, not a universal price. Add exactly “People choose their own option, and nobody is asked to prove their situation.” and “Prices are a guide and may change.” Add the confirmed note “GP and psychologist appointments are separate from the program and may be bulk-billed with a Mental Health Care Plan.” Keep every app-cost mention specific to registered users; say pricing options for organisational or corporate access are being explored. Do not describe app access for corporations as free or imply that the entire eight-week program is always free.
- [x] Add a small “Bring the Hub to your workplace or club” section offering group workshops starting at $600, with buttons to email `resiliencehubnsw@gmail.com` or book at `https://calendly.com/resiliencehubnsw`.
- [x] Add a “Help us keep showing up” section linked to `https://gofund.me/4b2706340`. Explain: every donation goes straight into funding The Resilience Hub; donations help cover project costs such as app overheads, insurance and one-off medical costs (for example, new-patient fees), as well as other costs that help keep the program running and the AI app available to registered users at no cost; pricing options for organisational or corporate access are being explored; the eight-week program has a pay-what-fits scale, including a zero-dollar option.
- [x] Create a Privacy Policy page explaining the known fact that chat and journal writing are sent to an AI service to generate replies, and show clear placeholders for the AI provider, storage and retention duration, who can see information, and deletion process. Include `resiliencehubnsw@gmail.com`. Create a Disclaimer page saying the Hub and app do not replace professional medical or psychological advice and are not a crisis service. Link both pages in the footer and from the app section.
- [x] Add full text transcripts for both existing source videos, derived from the clips and clearly marked for review until confirmed. Keep both source files unchanged; retain the app promotional video with an adjacent note that the app is free for registered users and that corporate or organisational access pricing is being explored.
- [x] Use “The Resilience Hub” as the main name and “Resilience Hub NSW” when location is needed across page title, main heading, footer, social-sharing text, and website app section. Use the founder's full name Juan Carroso in website editorial copy; retain Jared's quote verbatim. Keep one official logo, the existing palette, and the Manrope font family across the website and new links page; remove viewport zoom restrictions. Do not claim the external app was changed because its source is not available in this workspace.

- [x] Use `https://resihub-bsn6crau.manus.space/` as the direct Website address and canonical origin. Emit matching canonical and `og:url` values for `/`, `/privacy`, `/disclaimer`, and `/links`; keep the homepage-only `resiliencehub.s.gy/website` redirect out of page paths.
- [x] Create a `/links` page containing only the website, AI app, booking link, GoFundMe, email, and social-channel categories; exclude all clothing and shop links. State the app is always 100% free for registered users and that pricing options for organisational or corporate access are being explored. Use `https://resihub-bsn6crau.manus.space/` as the Website link and existing app, booking, and email links. Add the supplied Resilience Hub Facebook group and Juan Carroso LinkedIn profile, plus Sloane Fox Facebook, Instagram, YouTube Shorts and TikTok profiles. Link to the supplied GoFundMe campaign.


## Draft implementation evidence
- TypeScript check passed; all eight tests passed, including the price-scale, registered-user/corporate app-access, donation, supplied social destinations, workshop, and canonical-origin assertions; the production client, SSR, and server build completed.
- Preview returned HTTP 200 for `/`, `/privacy`, `/disclaimer`, `/links`, and `/manus-routes.json`; route-specific canonical and `og:url` values match the direct public origin. Homepage and Links-page copy were checked to say the app will always be 100% free for registered users, while organisational or corporate access pricing is being explored. Rob's full approved testimonial, four stage labels, portrait caption and attribution were restored. The Homepage also retains the supplied program prices, workshop offer, AHPRA numbers, portraits, crisis contacts, AI warning, GoFundMe explanation, and six supplied social destinations.
- `git diff --check` passed. Commit `fec3a40347beecefb13650972141819d4766be82` was pushed to canonical `main` and recorded as a checkpoint. Auto-publication completed; the public homepage returned HTTP 200 and its HTML contains the approved appointment note, direct canonical URL, restored Rob stages, and registered-user app policy.
- All written site, metadata, Links-page and transcript copy was audited and revised: the app is described as permanently free for registered users, with organisational or corporate access pricing being explored. The zero-dollar program tier is explicitly one of five price options; no written wording says the full eight-week program is always free. The original app promo remains embedded and unchanged, with an adjacent note distinguishing registered-user access from corporate pricing.
- Build has non-blocking warnings for unset analytics environment placeholders and the existing large JavaScript chunk.

## Follow-up items for future updates (not blocking this approved publication)
- [x] Portrait files for Juan Carroso, Carlos Camacho, and Doctor Carlos Robalino have been uploaded to project storage, shown on the corresponding team cards, and returned HTTP 200 with image content types in Preview. The user confirmed the bearded portrait is Carlos Camacho and the serious-looking Uruguayan man is Doctor Carlos Robalino.
- [x] The user confirmed the GP/psychologist appointment and possible bulk-billing note is correct; the confirmation prompt has been removed.
- [ ] Confirm the AI service/provider name, storage location and retention duration, who can access app content, and the deletion-request process.
- [x] Social-channel names and profile URLs supplied and added to `/links`: Resilience Hub Facebook and Juan Carroso LinkedIn; Sloane Fox Facebook, Instagram, YouTube Shorts and TikTok.
- [ ] Review both draft transcripts, especially the story transcript's full-name rendering and Macarthur Lifeline/referral wording, the app transcript's access clarification, spoken URL and use of “private”.
- [ ] Share the separate app project/source if its branding is to be changed; this website workspace does not contain the app code.
- [x] The user reviewed the Preview and explicitly requested publication; the checkpoint and live public page were verified.


## Latest homepage update — supersedes the earlier empty-box requirement
- [x] Remove the two empty white boxes below the testimonials; do not leave blank photo or testimonial placeholders. Preserve Jared's and Rob's testimonial wording, layout, and Rob's portrait.
- [x] Near the bottom of the homepage, update the “Help us keep showing up” section with warm, plain-spoken copy conveying: every dollar goes into keeping The Resilience Hub running; every shirt sold through Sloane Fox helps fund the full eight-week program for two people; donations also help keep the AI support app available to registered users and support practical Hub costs. Keep the existing donation-use details and not-for-profit disclosure. Do not describe Sloane Fox as a recovery-apparel brand or imply that wearing its designs means someone is in recovery.
- [x] In that same section, add a clear “👕 Shop Sloane Fox” link to `https://linktr.ee/SloaneFox.Official` and keep a clear GoFundMe link to `https://gofund.me/4b2706340`. Use the existing brand styling and keep both links readable and usable on mobile and desktop.

Verification: `pnpm check`, all ten tests, and `pnpm build` passed; `git diff --check` passed. Preview returned HTTP 200 and confirmed the two outbound links, the single shirt-support statement, all three design messages, both existing testimonials, and absence of the empty-box placeholders. The latest brand-wording correction also passed `pnpm check`, all ten tests, `pnpm build`, and `git diff --check`; a client-source scan found no recovery-apparel wording. The production build retains existing non-blocking analytics-variable and JavaScript-chunk warnings.


## Sloane Fox design meanings
- [x] In the “Help us keep showing up” section, state “Every shirt sold through Sloane Fox helps fund the full eight-week program for two people.” exactly once; do not repeat that supporting-two-people statement.
- [x] Add “What our designs mean:” and the following exact messages: “You been passed by the fox” — when you see someone wearing this, you know you've just crossed paths with someone who doesn't give up. Someone who keeps going no matter what. That's all it is. “Built, Not Bought” — real strength comes from showing up, doing the work, and sticking around. It's earned, not paid for. “The Power Is Within” — the strength you need is already inside you. You just have to trust it.
- [x] End the design copy with: “We've got plenty more designs on the way, each one with its own message. Wear the one that speaks to you.” Keep the copy grouped near the Sloane Fox support wording and readable on mobile and desktop.

## Vercel portrait restoration
- [ ] On Vercel project `res-hub`, show the approved portraits for Juan Carroso, Carlos Camacho, and Doctor Carlos Robalino on their matching team cards. Use Git-tracked static public assets instead of Manus-only `/manus-storage/...` URLs so the deployed Vercel site can serve them.
- [ ] Preserve the user's identity mapping: the bearded portrait is Carlos Camacho; the serious-looking Uruguayan man is Doctor Carlos Robalino. Do not generate or substitute portraits.
