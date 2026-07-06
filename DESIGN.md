# Design System — Levenhall

> "The Dossier & The Instrument." Approved 2026-07-06 via /design-consultation (Variant A).
> Reference mockup: `~/.gstack/projects/hgadLLC-levenhall.com/designs/design-system-20260706/preview.html` (Plate A).
> This document is the source of truth for all visual decisions. It executes the June 2026 brand
> guidelines (`Levenhall-Brand-Guidelines-2026-06.pdf`) at web-native luxury grade — it does not replace them.

## Product Context
- **What this is:** Marketing site for Levenhall, a Washington DC market intelligence consulting firm.
- **Who it's for:** Allied defense/dual-use executives, investors, and government program offices.
- **Space/industry:** Corporate intelligence / defense advisory. Peers: Control Risks (generic B2B template), Hakluyt (understated), Anduril/Palantir (dark cinematic).
- **Project type:** Marketing site (Astro), with product pages for Bridger, AIGIS, Intelligence.
- **The memorable thing (north star):** *"They see what others can't."* Every design decision serves this. The site doesn't describe intelligence — it demonstrates it.

## Aesthetic Direction
- **Direction:** The Dossier & The Instrument — editorial dossier luxury fused with live intelligence instrumentation. Dark-first.
- **Decoration level:** Intentional — hairline architecture, telemetry, redaction; never ornamental.
- **Mood:** Quiet menace, unhurried competence. An operations room not cleaned up for visitors. Luxury through discipline and density, not whitespace.
- **Reference posture:** The brand guide's print/dossier language (mono micro-labels, gold numerals, hairlines), brought to the web and made live.

## Typography
- **Display/Hero:** Fraunces 600, `opsz` auto, tracking −0.03em, line-height ≤1.05 — set at poster scale (clamp 3rem–5.2rem for H1), ranged HARD LEFT. Never centered. Rationale: the brand wordmark face, finally used with confidence.
- **Editorial italic:** Fraunces italic 400 — taglines and pull-quotes only (e.g. "Structure, not access."), usually burgundy.
- **Body:** Source Sans 3 (successor to brand's Source Sans Pro) 400/600 — 1.02–1.05rem, line-height 1.7 for long-form.
- **Telemetry/UI/Labels:** JetBrains Mono 400/500/700 — ALL data, timestamps, tickers, nav labels, routing lines, index numerals, buttons. Uppercase micro-labels at 0.6–0.68rem with 0.16–0.24em letter-spacing. `tabular-nums` for figures. Mono is never italic.
- **Rules:** Serif never for data. Sans never above 24px. Mono owns everything that ticks, counts, or classifies.
- **Loading:** Google Fonts: `Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700`, `Source+Sans+3`, `JetBrains+Mono`. `font-display: swap`.
- **Scale:** H1 clamp(3rem, 6vw, 5.2rem) · H2 clamp(2rem, 3.4vw, 3rem) · H3 1.35rem · body 1.05rem · caption/mono 0.68rem · micro-label 0.62rem.

## Color
- **Approach:** Restrained. Two accents, each with a non-negotiable job. When everything is bone-on-ink and one thing is gold, the gold is deafening.
- **Navy Ink (base):** `#0A1220` — page background, deepened from brand navy #0F1F3A. Dark-first sitewide.
- **Panel/raised:** `#0E1729` — barely-raised surfaces, separated by hairlines, never shadows.
- **Hairline:** `#2A3548` — 1px rules divide everything. No cards, no shadows, no borders thicker than 1px.
- **Bone (primary text):** `#FAFAF8` (brand cream, used as text on dark).
- **Muted text:** `#8A94A8` · dim/annotation `#5A6478`.
- **Gold `#C9A961` — SIGNAL:** live data, pulses, index numerals, the single accent moment per viewport. Never decorative fills, never large areas.
- **Burgundy `#8B1538` — EDITORIAL:** italic pull-quotes and emphasis only. On dark, lighten to `#B3536E` for contrast.
- **Cream sections:** `#FAFAF8` bg with stone `#F0EBE3` and hairline `#D8D2C4`, navy `#0F1F3A` text — deliberate "paper" moments for long-form (about, briefs, bios). The old balance, inverted: dark is default, light is the exception.
- **Cyan `#38D9C9`:** RESERVED for the AIGIS product family (per brand guide). Never elsewhere.
- **Semantic:** success `#4CAF7D`, warning `#C9A961`, error `#C0392B`, info `#8A94A8` — used only in product UI contexts, muted −15% saturation on dark.
- **Dark mode:** the site IS dark. No toggle.

## Spacing
- **Base unit:** 4px.
- **Density:** Compact-comfortable. Density is a feature — defense buyers trust dense. Whitespace-only minimalism reads as "nothing to show."
- **Scale:** 2xs(4) xs(8) sm(12) md(16) lg(24) xl(32) 2xl(48) 3xl(72) 4xl(96).
- **Section padding:** 72–96px vertical on desktop, 48px mobile.

## Layout
- **Approach:** Creative-editorial on a hairline grid. RANGED LEFT EVERYTHING — centering is banned sitewide (nav wordmark and legal footer exempt if structurally necessary).
- **Marginalia rail:** persistent 64px left rail on desktop with vertical gold index numerals (`01 / ADVISORY`, `02 / MARKET ENTRY`, `03 / VENTURES`, `04 / SYSTEMS`) and mono routing lines (`LEVENHALL / FVEY / 2026`). Hidden ≤900px.
- **Grid:** 12-col within max-width 1240px; hero splits ~58/42 (statement / instrument).
- **Corners:** square. The ONLY permitted shape device is a single 45° clipped notch (`clip-path`) on primary CTAs and select panels. No border-radius anywhere.
- **First viewport = poster + instrument:** enormous Fraunces statement left, live signal feed right, visibly bleeding below the fold.
- **Banned:** cards with shadows, badge pills, icon-in-circle grids, 3-col feature grids with icons, floating stat cards, centered section headers, stock photography.

## Motion
- **Approach:** Intentional. Vocabulary: **sweeps, resolves, pulses.** Nothing floats, bounces, or fades up on scroll. Delete all `.reveal` fade-up patterns.
- **Ambient:** one slow radar-sweep gradient across background hairlines, 8–9s period, barely perceptible.
- **Live elements:** ticker items arrive with a single gold opacity pulse; UTC clock ticks; counters count.
- **The Lens (signature interaction):** in the hero signal feed, data sits dimmed with redaction bars; a ~180px circular cursor lens resolves it (full award values, agencies) via `clip-path: circle()`. On touch: press-and-hold reveals. Same mechanic partially decrypts redaction bars in dossier sections — enough to prove the data is real, never enough to violate the NDA.
- **Easing:** enter ease-out, exit ease-in, move ease-in-out.
- **Duration:** micro 80–120ms · short 200ms · resolve 250–350ms · ambient 8000ms+.
- **Accessibility:** full `prefers-reduced-motion` support — sweeps/pulses stop, Lens becomes instant reveal, content never hidden behind motion.

## Signature Devices
1. **The Lens** — cursor-as-instrument; the visitor enacts "they see what others can't."
2. **Redaction as brand** — `Client: ██████ (allied MoD) · Outcome: $███M program capture`. Confidentiality made visible beats testimonials. No logo walls, no "trusted by."
3. **Routing lines** — mono classification-style strings (`LEVENHALL / ADVISORY / FVEY / 2026`) as section metadata.
4. **The azimuthal map** — flat azimuthal equidistant projection centered on Washington DC, five allied capitals as gold points with hairline arcs. Replaces the five-eyes star image. No spinning globes on the marketing site.
5. **Live evidence ledger** — real signal ticker + honest counters ("$X indexed since 00:00 UTC") in the hero, before any marketing sentence.

## Graphics Doctrine — no basic graphics
The bar: every graphic must be an **instrument, not an illustration**. If a visual could appear in a generic template, it's out.
1. **Real cartography or none.** Maps are computed from real geodata (d3-geo at build time — see `scripts/generate-azimuthal.mjs` → `src/components/AzimuthalMap.astro`). Azimuthal equidistant, DC-centered, real 110m coastlines, graticule, dashed range rings, animated geodesic arcs, degree-tick outer ring. Never placeholder circles, never clip-art, never spinning globes.
2. **Data-drawn, not iconography.** Product/feature visuals are drawn from the product's own data concepts as hairline SVG with mono annotations (Bridger = index sparkline, AIGIS = framework-coverage matrix, Intelligence = radar with rotating sweep, Ventures = allocation bars). Icons in circles are banned.
3. **Material, not flat.** Dark surfaces carry film grain (`.texture-grain`, 5% SVG turbulence) and/or chart-paper grids (28px hairline grid with a legibility fade). Flat solid backgrounds are for paper sections only.
4. **Photography is treated.** People photos render in navy duotone (grayscale→sepia→hue-rotate filter chain) and resolve to true color on hover — the Lens applied to people. Square-cut with the 45° notch. Never round avatars.
5. **Engraving weights.** SVG linework stays 0.5–1.2px; gold reserved for the data layer; land fills ≤6% opacity. If a graphic looks bold, it's wrong.

## Voice (from brand guide — enforce in UI copy)
Concrete over abstract. Short sentences mixed with long. Say the thing. No hedging, no "seamless," no "unprecedented." Numbers, dates, named frameworks. The audience knows the acronyms.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-07-06 | Initial system created (Variant A of 3) | /design-consultation: competitive research (Control Risks, Anduril, Palantir, Hakluyt) + outside design voice + brand guide audit. User chose brand-anchored dark-first over full Map Room replacement and cream-first editorial. |
| 2026-07-06 | Fraunces retained, JetBrains Mono promoted to co-star | Brand equity + the brand guide already mandates both; the site had failed to execute the guide. |
| 2026-07-06 | Gold = live-data signal color (not phosphor green) | Keeps palette discipline; gold-on-ink reads luxury instrument; phosphor abandoned brand. |
| 2026-07-06 | Centering banned; hairlines replace cards/shadows | Kills the AI-template feel at the root. |
| 2026-07-06 | Graphics Doctrine added (round two) | User directive: no basic graphics. Real d3-geo cartography, data-drawn instrument SVGs, film grain, duotone-resolve photography. |
