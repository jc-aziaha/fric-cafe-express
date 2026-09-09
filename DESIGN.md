---
name: Fric-Café Express
description: One-page showcase site for a neighborhood cafeteria in Atikoumé, Lomé — fast counter service, honest pricing, forest-green and citrus signage energy.
colors:
  bg: "#FAF4E9"
  surface: "#FFFFFF"
  surface-2: "#F2EADA"
  ink: "#17240F"
  muted: "#6C7A60"
  line: "rgba(23,36,15,.14)"
  green: "#14472A"
  green-deep: "#0D3020"
  on-green: "#FCF7EC"
  orange: "#E0591A"
  yellow: "#F2C230"
typography:
  display:
    fontFamily: "Anton, Impact, Haettenschweiler, sans-serif"
    fontSize: "clamp(2.9rem, 7.4vw, 5.15rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "0.01em"
  script:
    fontFamily: "Caveat Brush, cursive"
    fontSize: "clamp(2.6rem, 6.4vw, 4.4rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
  body:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.22em"
rounded:
  sm: "6px"
  md: "14px"
  lg: "26px"
  pill: "999px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "#FFF8EF"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  tab:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "9px 18px"
  tab-selected:
    backgroundColor: "{colors.green}"
    textColor: "{colors.on-green}"
    rounded: "{rounded.pill}"
    padding: "9px 18px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  chip:
    backgroundColor: "{colors.green}"
    textColor: "{colors.on-green}"
    rounded: "{rounded.pill}"
    padding: "4px 9px"
---

# Design System: Fric-Café Express

## Overview

**Creative North Star: "Le Comptoir Express"**

This is the visual language of a counter built for speed: bold uppercase signage type, a forest-green shell with citrus flashes, and photos that float and jostle like they just landed on the pass. Every surface commits to the same confident, unpretentious energy — nothing here is trying to look like a specialty third-wave café. The palette is lifted straight from the cafeteria's own physical menu poster, so the site reads as an extension of the real storefront, not a separate brand exercise.

The system is warm and fast rather than refined and quiet: uppercase Anton display type shouts the way a menu board shouts, a loose script accent (Caveat Brush) adds a hand-lettered wink to "Express," and a scrolling price ribbon plus gently floating hero photos keep the page feeling alive rather than static. Explicitly rejected: marble/pastel specialty-coffee minimalism, thin restrained serifs, and any hushed-luxury visual register — this is a neighborhood counter, not a boutique.

**Key Characteristics:**
- Forest-green shell (header, footer, "La maison" section) punctuated by orange and yellow citrus accents lifted from the real menu poster.
- Loud, uppercase Anton display type paired with a hand-lettered script accent for personality.
- Pill-shaped, tactile components with confident hover lifts — nothing sits still at rest.
- Ambient soft shadows only; no hard multi-tier elevation system.
- Motion is a first-class signature (steam, float, scroll reveals, sliding price ribbon), fully neutralized under `prefers-reduced-motion`.
- Light and dark themes share the same structure, swapping surface/ink roles while keeping orange/yellow as the constant citrus accent.

## Colors

Two accents (Menu-Board Orange, Signage Yellow) sit on a Forest Canopy Green base, over a warm parchment neutral field — the exact triad from the cafeteria's own menu poster.

### Primary
- **Forest Canopy Green** (`#14472A`): the shell color — header bar, footer, the "La maison" section, active tab, chip labels. This is the brand's dominant surface color wherever the site wants to feel like "the counter," not "the page."
- **Menu-Board Orange** (`#E0591A`): the action color — primary CTA background, price text on cards, the tagline pulse dot, focus-visible outline. Reserved for things the visitor should notice or act on.

### Secondary
- **Signage Yellow** (`#F2C230`): the flourish — the script "Express" accent, logo bean, price-tag callout, ribbon dot, "now open" underline sweep on the esprit section. Never a background for large areas; it's a spark, not a field.

### Neutral
- **Warm Parchment** (`#FAF4E9`, `bg`): page background in light mode.
- **Card White** (`#FFFFFF`, `surface`): cards, panels, the ghost button, tagline pill.
- **Deep Cream** (`#F2EADA`, `surface-2`): recessed surfaces (photo thumbnail backdrop before load).
- **Forest Ink** (`#17240F`, `ink`): primary text in light mode.
- **Sage Muted** (`#6C7A60`, `muted`): secondary text, timestamps, lede copy.
- **Ink Hairline** (`rgba(23,36,15,.14)`, `line`): borders and dividers.
- **Forest Deep** (`#0D3020`, `green-deep`): footer background and the map panel's darkest gradient stop.
- **On-Green Cream** (`#FCF7EC`, `on-green`): text and icon color anywhere sitting on the green shell.

Dark mode swaps the same roles rather than introducing new ones: `bg` → `#0D1710`, `surface` → `#152119`, `surface-2` → `#1B2C21`, `ink` → `#EFEADC`, `muted` → `#93A38C`, `green` → `#0F3A22`, `orange` → `#F07132`, `yellow` → `#F6CE49`. Orange and yellow both brighten slightly in dark mode to stay legible against darker greens; every other role just inverts light/dark without changing hue.

### Named Rules
**The Poster Fidelity Rule.** Green, orange, and yellow are the only brand colors in this system, because they're the only colors on the real menu poster this identity is built from. Don't introduce a fourth accent hue without going back to that source.

**The Spark, Not a Field Rule.** Yellow decorates and highlights; it never fills a large surface (button background, card background, section background). It's an accent that appears in small shapes — dots, script text, tags, sweeps.

## Typography

**Display Font:** Anton (with Impact, Haettenschweiler fallback)
**Body Font:** Manrope (with system-ui fallback)
**Label/Mono Font:** IBM Plex Mono (with ui-monospace fallback)
**Script Accent:** Caveat Brush (with cursive fallback)

**Character:** Anton shouts like painted storefront signage — condensed, uppercase, no-nonsense; Manrope carries the actual reading copy with warmth and clarity; IBM Plex Mono gives prices and metadata a receipt-printer precision; Caveat Brush is the one moment of handwritten personality, used sparingly on the word "Express."

### Hierarchy
- **Display** (400, `clamp(2.9rem, 7.4vw, 5.15rem)`, line-height 0.98): hero H1 and section H2s. Always uppercase, always tight leading.
- **Script accent** (400, `clamp(2.6rem, 6.4vw, 4.4rem)`, line-height 1, color Signage Yellow): the "Express" word inside headlines and the logo — never a full sentence, always a single word or short phrase.
- **Title** (700, ~1.2–1.7rem, Anton uppercase): sub-heads like the logo, "La maison" numbered card titles, map address's big line.
- **Body** (400–500, 1rem, line-height 1.6, Manrope): paragraph copy; lede text caps at ~41ch, section intros at ~44ch for comfortable reading width.
- **Label** (500, 0.7–0.86rem, letter-spacing 0.12–0.22em, IBM Plex Mono, uppercase): eyebrows, nav mono tag, chip labels, hours, ribbon text — always tabular-nums where a price or number is involved.

### Named Rules
**The One Script Word Rule.** Caveat Brush is reserved for the single word "Express" wherever the logo or hero headline appears. It is a signature flourish, not a body-text option.

## Layout

A single centered column (`max-width: 1180px`, `22px` side padding) holds every section; there's no sidebar or multi-column app shell — this is a scroll-through storefront, not a dashboard. Sections breathe generously at rest (`88px` vertical padding, tightening to `64px` under 900px) so each part of the story (hero → menu → "la maison" → hours/map → footer) gets its own visual beat.

The hero and "hours & access" sections use an asymmetric two-column grid (roughly `1.02fr/.98fr` and `1.15fr/.85fr`) that collapses to a single stacked column under 900px. The menu grid is a responsive auto-fill grid (`minmax(228px, 1fr)`) so card count adapts to viewport width without a breakpoint table. Spacing isn't driven by a formal token scale — it's tuned per-component (tight 8–12px within a card, 22–34px between related elements, 64–88px between sections) — so match the existing rhythm by proportion rather than inventing a new scale.

## Elevation & Depth

Ambient, not structural: surfaces are flat at rest, and a single soft, forest-tinted diffuse shadow (`--shadow: 0 18px 40px -22px rgba(13,48,32,.55)`, deepening to `rgba(0,0,0,.85)` in dark mode) signals "this is floating or interactive" — the tagline pill, the hero photo cluster, cards on hover, the hours/CTA panel. There is no multi-tier elevation system (no separate "resting card" vs. "raised card" shadow scale); depth is binary — flat, or lifted with this one shadow.

### Shadow Vocabulary
- **Ambient Lift** (`box-shadow: 0 18px 40px -22px rgba(13,48,32,.55)`): the only general-purpose shadow; used on the tagline pill, floating hero photos, hover state on menu cards, and the hours/CTA panel.
- **CTA Glow** (`box-shadow: 0 12px 26px -14px rgba(224,89,26,.9)`, deepening on hover): a warmer, orange-tinted variant reserved for the primary button, so the one thing the visitor should click reads slightly more "raised" than everything else.

### Named Rules
**The One Shadow Rule.** There is exactly one ambient shadow recipe (plus its orange-tinted CTA variant). Don't invent a second, harder, or darker shadow for "more emphasis" — reach for scale, color, or motion instead.

## Shapes

Corners run from generously rounded to fully circular, never sharp. Small chips, tags, tabs, and every button are pill-shaped (`border-radius: 999px`); cards use a medium rounding (`14px`); large panels — the photo cluster shots, the hours panel, the map — use the largest rounding (`26px`). Borders, where present, are hairline (`1–1.5px`, using the `line` token) rather than heavy strokes; the header's only hard edge is a deliberate `3px` orange bottom border that acts as a brand underline, not a structural rule.

## Components

Components are tactile and playful: pill shapes, generous rounding, and confident hover lifts (translateY, scale) rather than subtle micro-transitions. Nothing here is trying to feel minimal or restrained — every interactive element visibly responds.

### Buttons
- **Shape:** fully pill (`border-radius: 999px`), `14px 24px` padding, `2px` transparent border by default.
- **Primary:** Menu-Board Orange background, warm off-white text (`#FFF8EF`), orange-tinted glow shadow. On hover: lifts `3px` and the shadow deepens; the trailing arrow glyph slides right `4px`.
- **Ghost:** Card White background, Forest Ink text, hairline border. On hover: lifts `3px` and the border shifts to Forest Canopy Green.

### Chips (tabs & category chips)
- **Style:** transparent background, Sage Muted text, hairline border, pill shape, mono-weight bold label.
- **State:** on hover, text darkens to Forest Ink and border shifts to Forest Canopy Green with a `2px` lift; selected state fills solid Forest Canopy Green with On-Green Cream text — no partial/tinted selected state.

### Cards (menu items)
- **Corner Style:** medium rounding (`14px`).
- **Background:** Card White, hairline border.
- **Shadow Strategy:** flat at rest; Ambient Lift shadow plus a `6px` upward translate and a warmer border tint on hover (see Elevation & Depth).
- **Internal Padding:** `14px 15px 16px` body padding under a square (1:1) photo thumbnail that itself scales `1.07x` on card hover.
- **Distinctive behavior:** a small pill category chip floats over the top-left corner of the thumbnail; price uses the mono/tabular label style and nudges up in scale on hover.

### Navigation
- **Style:** sits on the Forest Canopy Green header bar, On-Green Cream text at 86% opacity resting, 100% on hover, with a yellow underline that sweeps in from the left on hover. Below 760px, links collapse entirely in favor of a small mono location tag ("ATIKOUMÉ · LOMÉ") — there is no hamburger/drawer pattern; navigation trusts in-page anchor scrolling and the visitor's thumb.

### Signature Component: The Photo Cluster
A trio of overlapping, independently-floating photos (staggered `float` keyframe animations, 7–8.5s, offset delays) sits beside the hero copy, capped with a rotated price-tag badge and an animated steam SVG. This asymmetric, slightly chaotic-but-controlled photo stack is the system's most distinctive signature and the clearest expression of "Le Comptoir Express" — it should be the first thing reused when a new section needs the same energetic, storefront-alive feeling.

## Do's and Don'ts

### Do:
- **Do** keep yellow rare — a spark on small shapes, never a background fill (see The Spark, Not a Field Rule).
- **Do** use the Ambient Lift shadow for anything that should read as floating or hoverable; reach for the CTA Glow variant only on the primary action.
- **Do** keep buttons, tabs, and chips fully pill-shaped; reserve the `14px`/`26px` roundings for cards and larger panels respectively.
- **Do** pair Anton uppercase display type with the Caveat Brush script accent only on the single word "Express" — not on full headlines or body copy.
- **Do** give interactive elements a visible, confident hover response (lift, scale, underline sweep) — subtlety reads as broken here, not refined.

### Don't:
- **Don't** introduce a fourth brand hue outside green/orange/yellow (The Poster Fidelity Rule) — go back to the physical menu poster before adding a color.
- **Don't** add a second, heavier shadow tier for "more emphasis" (The One Shadow Rule) — use scale, color, or motion instead.
- **Don't** reach for sharp corners, thin restrained serifs, or muted/pastel specialty-coffee styling — that's the explicitly rejected register for this brand.
- **Don't** turn the script accent into a body-text or headline font; it's a one-word flourish (The One Script Word Rule).
- **Don't** add heavy structural borders; hairline `line`-token borders and the header's single orange underline are the only "hard edge" this system uses.
