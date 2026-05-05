# AliveHomepage Specification

## Overview

- Target files: `src/app/page.tsx`, `src/app/globals.css`, `src/app/layout.tsx`
- Screenshots: `docs/design-references/alive-web.vn/desktop-full.png`, `docs/design-references/alive-web.vn/mobile-full.png`
- Interaction model: static content with CSS hover states and smooth-scroll anchors.

## Data Sources

- Source HTML: `docs/research/alive-web.vn/source.html`
- CSS bundles: `docs/research/alive-web.vn/css/`
- Asset manifest: `docs/research/alive-web.vn/asset-urls.json`
- Downloaded assets: `public/images/alive/`

## Visual Foundation

- Font family: target CSS imports IBM Plex Sans and Cinzel; clone uses `next/font/google` IBM Plex Sans and Cinzel.
- Core colors: white `#ffffff`, black `#0a0a0a`, muted gray `#595959`, border gray `#e8e8e8`.
- Target gradients: orange/pink `#f29d3f` to `#cf67bf`; blue/purple `#59bde6` to `#6e53ec`.
- Section heading: small uppercase label, `14px`, `font-weight: 700`, `letter-spacing: 0.38em`, gradient text; large title `54px` desktop, `36px` mobile, line-height `1.17`.

## Component Structure

- Header: fixed logo, nav links, language text, contact/profile action buttons, mobile menu button.
- Hero: label, three-line display heading, descriptive copy, CTA link.
- Services: service image plus three cards with number, icon, title, description.
- Works: dark section, heading, six staggered project cards with image and overlay text.
- Logos: 12-tile client logo grid.
- Quotes: two quote cards.
- Company: image, heading, paragraph, CTA.
- Contact: large headline plus three action columns.
- Footer: logo/copyright and simple directory links.

## Behaviors

- Nav and text links reveal an underline on hover.
- Service cards translate `10px` on hover.
- Work cards clip image inward by `10px` and slightly scale on hover.
- CSS `scroll-behavior: smooth`.

## Responsive Behavior

- Desktop `>=1100px`: fixed full navigation, two-column service/company layouts, two-column works grid, four-column logo grid.
- Tablet `<1100px`: header hides nav/actions and shows menu button; service/company stack.
- Mobile `<767px`: hero typography reduced, works become square single-column cards, logos/quotes/contact stack.
