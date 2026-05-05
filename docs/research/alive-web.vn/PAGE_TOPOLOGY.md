# ALIVE Vietnam Page Topology

Target: https://alive-web.vn/

Browser note: headless Chrome loaded the SSR HTML but the target client app replaced the page with `Application error: a client-side exception has occurred`. Source extraction therefore uses the server-rendered HTML, downloaded CSS bundles, and `__NEXT_DATA__` homepage payload.

## Sections

1. Fixed global header
   - Logo, primary navigation, language marker, contact/profile buttons, mobile menu button.
   - Overlay layer fixed to viewport top.

2. Hero
   - Full viewport typographic introduction.
   - Large uppercase display heading with lightly layered brand imagery.
   - Static CTA link.

3. Services
   - Two-column section with service photo and service cards.
   - Cards use the real titles/descriptions/icons from `homePage.services`.

4. Works / Case Study
   - Dark band with centered heading and staggered two-column project cards.
   - Uses six real `pageProps.works` records and downloaded thumbnails.

5. Client Logos
   - White logo grid using the first twelve extracted logo assets.

6. Client Quotes
   - Two quote cards from `homePage.clients.quotes`.

7. Company
   - Two-column image/copy section using `homePage.company`.

8. Blog Band
   - Gradient band with `Build . Grow . Share.` title.

9. Contact CTA
   - Large closing headline and three contact/profile blocks from the target footer/contact box.

10. Footer
   - Logo, copyright, and directory links.

## Page-Level Layout

- Header is fixed with translucent white background and blur.
- Sections are full-width bands with constrained inner grids.
- Desktop work cards alternate vertical offset, matching the extracted `HomeWorks` CSS.
- Mobile stacks all multi-column sections at `767px`.
