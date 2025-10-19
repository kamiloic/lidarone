## Purpose

This repository is a small static marketing website (French) for "Lidar One". These instructions tell an AI coding agent how the site is structured, where to make safe edits, and the minimal developer workflow to test changes locally.

## Big-picture architecture

- Static HTML site with two main pages: `index.html` (landing + interactive animation) and `products.html` (catalog).
- UI uses Tailwind via CDN (configured inline in each page) and FontAwesome / Google Fonts from CDNs.
- A Lottie animation is embedded using `lottie-player` and the local asset `drone.json` (repo root). The player element id is `lottie-drone`.
- All JavaScript is inline inside the pages (no bundler). DOM-driven patterns and IDs are the primary coordination mechanism.

Key files to inspect quickly: `index.html`, `products.html`, `drone.json`, and the `assets/` folder (logo and images).

## Service boundaries & data flows

- Client-only: no server code or APIs. Forms are mocked (see the inline submit handler in `index.html`).
- `drone.json` must be served over HTTP for the Lottie player to fetch it (file:// often fails).
- Most imagery is hotlinked to Unsplash; swapping images either edits HTML or replaces local files under `assets/`.

## Important runtime behaviours & selectors (quick reference)

- Lottie player element: id `lottie-drone`. Source: `./drone.json`. Inline script registers `error` and `load` listeners in `index.html`.
- Common selectors used by scripts: `#header`, `#mobileMenu`, `#menuToggle`, `#closeMenu`, `#backToTop`, `.landing-pad`, `.pad-h`.
- Error UI element: id `error-message` (displayed when Lottie fails to load).
- Contact form: search for "document.querySelector('form').addEventListener('submit'" in `index.html` to find the mocked handler.

## Project conventions & quick edit rules

- Language: content is French — preserve accents/diacritics unless asked to translate.
- Styling: Tailwind utilities + an inline `tailwind.config` block in each page's `<head>` define theme colors (`primary`, `secondary`, `accent`, etc.).
- Behaviour: prefer small DOM/ID/selector edits inside the existing inline scripts. Do not add a bundler or complex build unless maintainers approve.
- Assets: change `assets/logo.jpg` to update branding. Keep the path/name unless you update references.

## How to run & debug locally

1) Serve over HTTP (required to load `drone.json`):

## Purpose

This repository is a small static marketing website (French) for "Lidar One". These instructions help an AI coding agent get productive quickly: where to edit, how to run the site, and which behaviours are critical to preserve.

## Big-picture architecture

- Static HTML site with two pages: index.html (landing + interactive animation) and products.html (catalog).
- Styling is provided by Tailwind via CDN and FontAwesome/Google Fonts from CDNs.
- A Lottie animation is embedded with a local JSON file named drone.json at the repository root; the player element id is lottie-drone.
- All JS is inline in the HTML files (no build/bundler). Scripts use DOM selectors and element ids for coordination.

Files to inspect: index.html, products.html, drone.json, and the assets/ folder (logo and images).

## Service boundaries & data flows

- Client-only: no server or API code. The contact form is mocked on the client (see the inline submit handler in index.html).
- drone.json must be served over HTTP for the Lottie player to fetch it (file:// often blocks this).
- Most imagery is hotlinked to external providers (Unsplash); replace by editing HTML or placing local files in assets/.

## Runtime behaviours & important selectors

- Lottie player element id: lottie-drone. The inline script registers error and load listeners for this element in index.html.
- Key selectors used by the scripts: header, mobileMenu, menuToggle, closeMenu, backToTop, landing-pad and pad-h.
- The error message element has id error-message and is toggled when Lottie fails to load.
- The contact form submit handler is registered inline; search for document.querySelector('form').addEventListener('submit' in index.html.

## Conventions and quick edit rules

- Content is French — preserve accents and tone unless asked to translate.
- Tailwind theme tokens are defined inline via a tailwind.config block in each page head (colors: primary, secondary, accent, etc.).
- Prefer small, DOM-focused edits to the existing inline scripts. Avoid adding build tooling or a bundler without owner approval.
- To update branding, replace assets/logo.jpg (keep same path/name unless you update references).

## How to run & debug locally

Serve the site over HTTP (required for drone.json):

```powershell
# using Python
python -m http.server 8000

# or using npm http-server
npx http-server -p 8000
```

Open http://localhost:8000/index.html

Debug tips:
- Check DevTools console for Lottie errors. The inline script logs failures and shows the error-message element.
- If the animation is missing, confirm drone.json exists at the repo root and is reachable at ./drone.json when served.
- After editing animation or JS, refresh with cache disabled (network tab) — lottie-player can cache assets.

## Integrations & external deps

- CDN deps: Tailwind (cdn.tailwindcss.com), Lottie (unpkg.com/@lottiefiles/lottie-player), FontAwesome, Google Fonts.
- External images: Unsplash (hotlinked) — consider local copies if offline or reproducible builds are required.

## Guidance for AI edits

- Make minimal, targeted edits. Preferred files: index.html, products.html, assets/*, and drone.json.
- Preserve French copy and Tailwind utility classes unless asked to restyle.
- Always run the local HTTP server and visually validate interactive changes (animation behaviour, header scroll effects, mobile menu, contact form mock).
- Do not introduce package.json, bundlers, or CI without asking maintainers; this project is intentionally lightweight.

## Files to check when changing UI/behavior

- index.html — main landing page: drone animation logic, header scroll behaviour, mobile menu, contact form.
- products.html — product listing and a simplified drone animation.
- drone.json — Lottie animation asset (large JSON file).
- assets/ — images and logo (assets/logo.jpg).

If you'd like CI examples, automated tests, or expanded editing workflows (e.g., replacing CDNs with local assets), tell me which area to expand and I will iterate.

- `assets/` — logos and images used by pages (change logo here).

If anything in this file looks incomplete or you'd like the instructions to cover more (e.g., adding CI, build, or automated tests), tell me which area to expand and I will iterate.
