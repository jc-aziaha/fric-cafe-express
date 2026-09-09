# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Neighborhood regulars in Attikoumé, Lomé (Togo): office workers stopping in before work and students between/after classes. They come for a fast coffee or lunch, mostly picked up at the counter; some order delivery by WhatsApp within the immediate quartier. This is a showcase/ordering-info site for an existing physical cafeteria, not a self-serve web app — the visitor's job is to check the menu, prices, hours, and location, then act (walk in or message WhatsApp).

## Product Purpose

A one-page static showcase site for Fric-Café Express, a neighborhood cafeteria. It exists to put the real menu, prices (F CFA), hours, and contact/ordering channel (WhatsApp) in front of nearby customers so they choose to walk in or order. Success is a visitor deciding to come by or send a WhatsApp order — not e-commerce checkout on-site.

## Positioning

Counter service in under 5 minutes, one honest displayed price with no markup for takeaway, and food made fresh in counted daily batches (coffee brewed to order, lunch dishes prepared each morning) rather than reheated. A neighboring generic cafeteria site could not truthfully claim the same combination of speed, price transparency, and daily-fresh batches.

## Operating Context

- Physical counter service is primary; WhatsApp is the ordering/delivery channel, delivery limited to the Attikoumé quartier.
- Menu: 24 items across 7 categories (café, thé, frites, spaghettis, couscous & grillades, sandwichs, salades & œufs), defined in `assets/js/app.js`'s `ITEMS` array (`[nom, prix F CFA, catégorie, identifiant image]`) and `CATS`. Adding a dish means one `ITEMS` row plus one image in `assets/img/`.
- 24 product photos already sourced from the cafeteria's own digital menu (`assets/img/pXXXX.jpg`).
- Coffee and tea service runs all day; fries/grillades service is a limited daytime window (currently modeled as 11:00–21:00 in copy).
- No online payment or cart — the site is informational/persuasive, ordering happens off-site via WhatsApp or in person.

## Capabilities and Constraints

- No build step: plain static HTML/CSS/JS, opened directly or served as static files (`python -m http.server`). This is an existing, confirmed choice, not open for reconsideration without a reason to change stacks.
- Menu content (names/prices for all 24 items) comes from the cafeteria's real digital menu and is verified — do not alter without the user's say-so.
- The following values are explicitly **placeholders**, not verified facts, and must not be presented or treated as confirmed information in any future work until the user supplies real ones: opening hours text, footer/order-button WhatsApp number, TikTok handle, exact address landmark within Attikoumé, and the delivery minimum ("dès 2 000 F"). Same treatment applies to any new placeholder-shaped content introduced later.
- Bilingual/other-language support is not established; current copy is French only.

## Brand Commitments

- Name: Fric-Café Express.
- Palette (forest green / orange / yellow) is taken directly from the cafeteria's physical menu poster — an existing brand constraint, not a stylistic choice made for this site.
- Typography already committed in the shipped page: Anton (headings), Caveat Brush ("Express" script accent), Manrope (body), IBM Plex Mono (prices/tabular figures).
- Motion already committed: opening sequence, steam animation over coffee, floating photos, scrolling price ribbon, cascading filter transitions, card hovers, scroll reveals — all neutralized under `prefers-reduced-motion`.
- Light and dark themes both exist, driven by CSS variables.

## Evidence on Hand

- Real, verified: all 24 dish/drink names and F CFA prices, category groupings, and 24 product photographs (from the cafeteria's own digital menu).
- Explicitly unverified placeholders (see Capabilities and Constraints): hours, WhatsApp number, TikTok handle, exact address, delivery minimum. Future work must preserve these as flagged placeholders rather than inventing or silently finalizing values.
- No testimonials, press, or case studies exist and none should be fabricated.

## Product Principles

1. The counter experience is the product; the site's job is to get a nearby visitor to act (visit or WhatsApp), not to replicate ordering/checkout online.
2. Never present a placeholder value (hours, phone, handle, address, delivery minimum) as verified fact — flag it or ask before it ships as real.
3. Menu data (names, prices, categories, photos) is real and sourced from the physical business — treat it as ground truth, not sample content.
4. Keep the zero-build static stack; changes should stay editable by hand in `index.html` / `assets/css/style.css` / `assets/js/app.js` without introducing a build pipeline.
5. Speed, price transparency, and daily freshness are the differentiators — design and copy decisions should reinforce those, not generic cafe imagery/claims.
