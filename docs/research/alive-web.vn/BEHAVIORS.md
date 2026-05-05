# ALIVE Vietnam Behaviors

## Extraction Constraints

The live JavaScript failed in headless Chrome before the animated homepage mounted. The server HTML, CSS bundles, and Next data were accessible. The clone implements the behaviors visible or inferable from extracted CSS rather than reproducing the target runtime exception.

## Behaviors Implemented

- Header: fixed top overlay with backdrop blur.
- Navigation links: underline reveal on hover.
- Service cards: horizontal nudge and background transition on hover.
- Work cards: image inset/scale and text padding transition on hover, matching the extracted `clip-path: inset(10px)` behavior from the target CSS.
- Page navigation: smooth scrolling.
- Responsive layout: desktop two-column grids collapse to single-column layouts below `767px`; header condenses to a menu icon below `1100px`.

## Behaviors Not Reproduced

- The target loading animation and client-driven homepage mount were not reproduced because the target app threw a client-side exception under Chrome automation.
- Any proprietary scroll animation/canvas background hidden behind the crashing client runtime is approximated with CSS backgrounds and static image layers.
