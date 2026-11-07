# Resilience Hub Website — Design Direction

## Three stylistic approaches

### Approach A — Shelter & Strength
**Very Brief Intro:** A quietly optimistic editorial style inspired by restorative community spaces, warm paper textures, and the steady geometry of a safe harbour. It makes support feel human, calm, and credible rather than clinical.

**Probability:** 0.028

### Approach B — The Everyday Rebuild
**Very Brief Intro:** An honest documentary-led direction that pairs candid portraits with practical, workshop-inspired typography and bold systems graphics. It frames recovery as a shared, active process rather than a polished campaign.

**Probability:** 0.074

### Approach C — Botanical Signal
**Very Brief Intro:** A gentle, nature-rooted visual world of hand-inked plant forms, soft greens, and flowing pathways. It aims to feel reassuring and uplifting while avoiding wellness clichés.

**Probability:** 0.051

---

## Chosen approach: Shelter & Strength

### Design Movement
**Contemporary social-impact editorial** blended with the spatial calm of restorative architecture. The visual experience will feel more like an inviting community journal than a medical service brochure.

### Core Principles
1. **Human before institutional:** Large, candid imagery and plain language establish dignity, connection, and care.
2. **Calm visual confidence:** Structured, generous whitespace and stable typographic hierarchy communicate reliability without feeling cold.
3. **Progress as a pathway:** Curving linework, directional compositions, and staged content make the eight-week program feel navigable and achievable.
4. **Practical warmth:** Clear calls to action, unpretentious details, and accessible contrast keep the site supportive and usable.

### Color Philosophy
The signature deep forest green gives the brand grounding, trust, and continuity. It is paired with soft parchment neutrals to reduce clinical sterility, fresh growth green to signal forward motion, and a restrained sunlit ochre for moments of encouragement. Color is used sparingly: dark green anchors critical actions and narrative sections; light neutrals create breathing room; the brighter green acts as the visual signal for steps forward.

### Layout Paradigm
The site follows an **editorial pathway** rather than a standard centered card grid. A vertical guide line and occasional offset blocks lead the visitor through the page: invitation, programme, people, support pathways, and a direct contact prompt. Desktop compositions intentionally place text and imagery off-axis; on mobile, the flow resolves into a clear, single-column journey.

### Signature Elements
1. **The “pathway line”:** A recurring, gently curved green line that travels between sections and program milestones.
2. **Harbour arcs:** Large cropped semicircles and circular image frames evoke shelter, connection, and continuity.
3. **Practical field notes:** Small uppercase labels and concise highlighted statements punctuate longer content with calm authority.

### Interaction Philosophy
Interactions should feel like a supportive guide, never a sales funnel. Navigation scrolls with purpose; buttons offer clear human outcomes; cards lift subtly when explored; information reveals in short, deliberate sequences. All interaction states retain strong visual clarity and keyboard accessibility.

### Animation
Use restrained, organic motion only where it supports orientation. The pathway line may softly draw in when a section first appears; grouped content can enter in a 40–70ms stagger using opacity and a short upward transform. Buttons should respond with a 0.97 active scale and a concise ease-out transition. No looping decorative motion, no abrupt parallax, and all non-essential motion must respect `prefers-reduced-motion`.

### Typography System
**DM Serif Display** provides a grounded, human headline voice, used for large editorial headings and reflective statements. **Manrope** supplies an approachable, highly legible interface and body system. Headlines are sentence case with generous line-height; labels use Manrope in uppercase with increased tracking; body copy prioritises short, direct paragraphs and relaxed leading.

### Brand Essence
**The Resilience Hub is a people-first recovery pathway for individuals rebuilding stability, connection, and direction—without being reduced to a rulebook.**

**Personality:** grounded, compassionate, practical.

### Brand Voice
Headlines and CTAs are plain-spoken, affirming, and specific. They acknowledge that reaching out can be hard and always describe the next step without pressure. Avoid jargon, euphemism, false certainty, and generic motivational language.

Example lines:

> “You do not have to carry this alone.”

> “Let’s talk about the next steady step.”

### Wordmark & Logo
Use the supplied **RH upward-path monogram** as the primary identity mark. In the interface, it is presented as a bold circular seal paired with the “Resilience Hub” wordmark in Manrope; the arrow carries the idea of a supported way forward. The mark is used prominently in the header and as the browser icon.

### Signature Brand Color
**Harbour Green — #0F4A32.**

## Content and safety decisions

The first release will present: the organisation’s eight-week people-first resilience programme; mental-health, substance-support, detox-pathway, and work-support topics; the named practitioner roles provided by the user; and a clear invitation to make contact. The site will avoid clinical claims, outcome guarantees, invented testimonials, invented locations, and unverified emergency contact information. Contact controls will use transparent placeholders until the owner supplies preferred phone, email, booking, or referral details.
