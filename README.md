# SparrowG — static Next.js site

A static implementation of the **SparrowG Unified Site** Claude Design project
([`b890518b`](https://claude.ai/design/p/b890518b-95bd-4e58-8ef2-ac6d6f0aa903)).

Next.js 15 (App Router) + React 19 + TypeScript, exported to plain HTML via
`output: 'export'` — no server, no runtime dependencies. Deploy the `out/`
directory to any static host.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # -> out/
```

## Routes

The design is a single-file prototype that switches views through a `route`
state field. Each of those views becomes a real URL:

| Design route | URL | Component |
| --- | --- | --- |
| `home` | `/` | `pages/Home` |
| `shop` | `/shop` | `pages/Shop` |
| `product` | `/product/[pid]` | `pages/Product` |
| `blog` | `/blog` | `pages/Blog` |
| `article` | `/blog/[aid]` | `pages/Article` |
| `solutions` | `/stem-solutions` | `pages/Solutions` |
| `about` | `/about` | `pages/About` |
| `contact` | `/contact` | `pages/Contact` |
| `login` | `/login` | `pages/Login` |
| `checkout` | `/checkout` | `pages/Checkout` |
| `success` | `/order-confirmed` | `pages/Success` |
| `account` | `/account` | `pages/Account` |

Product and article pages are pre-rendered per id through
`generateStaticParams`, so all 22 pages are static HTML.

## Layout

```
design-source/   the .dc.html the site is generated from (source of truth)
tools/           the codegen pipeline (see below)
src/data/        catalogue data lifted from the design
src/lib/         sx() style parser, site state, ported view-model, provider
src/components/  page-chrome (header, cart, overlays, footer)
src/components/pages/   one component per view
src/app/         thin route files
public/assets/   local images
```

Cart, search, filters, the quiz and checkout state live in one React context
(`src/lib/store.tsx`); the URL drives only which view is shown.

## Regenerating from the design

Most of `src/` is **generated**. Change the design source and re-run:

```bash
python tools/generate.py && npm run build
```

The pipeline is:

| Step | Produces |
| --- | --- |
| `gendata.py` | `src/data/catalog.ts` — products, posts, quotes, quiz, partners |
| `genderived.py` | `src/lib/derived.ts` — a port of the design's `renderVals()` |
| `split.py` | per-view JSX fragments + the hover stylesheet |
| `gencomponents.py` | `src/components/**` |
| `genroutes.py` | `src/app/**/page.tsx` |

`dc2jsx.py` does the actual template translation: `sc-for`/`sc-if` become
`.map()`/conditionals, `{{ x }}` becomes `{x}`, and attributes are renamed for
React. Two mechanisms are worth knowing about:

- **`sx()`** (`src/lib/sx.ts`) parses the design's inline `style="a:b;c:d"`
  strings into React style objects at render time (memoised). This keeps the
  generated components a line-for-line match with the design rather than a
  hand-translation of several thousand CSS declarations.
- **`style-hover`** attributes have no React equivalent, so each distinct value
  becomes a `.hv-<hash>:hover` rule in `globals.css`. Inline styles outrank
  class selectors, so those declarations carry `!important` to reproduce the
  original merge behaviour.

Hand-written (not generated): `sx.ts`, `state.ts`, `store.tsx`, `Shell.tsx`,
`app/layout.tsx`, `globals.css`.

## Deliberate deviations from the design

- **The device-frame toggle is gone.** The prototype had a fixed desktop/mobile
  switcher pinned bottom-right to preview itself; it is a canvas affordance, not
  a site feature. The page renders at the desktop setting and responds to real
  viewport width through the design's own container queries.
- **Overlays are `position: fixed`, not `absolute`.** The search, mobile-nav,
  cart and payment overlays were positioned against the page shell. On a real
  page that anchors them to the top of the *document*, so opening the cart after
  scrolling would show nothing. They are pinned to the viewport instead.
- **Local asset paths are root-relative.** The design writes
  `src="assets/x.png"`, which is fine on a one-page canvas but resolves to
  `/about/assets/x.png` once there are nested routes. Both generators rewrite
  these to `/assets/...` (`fix_asset` in `dc2jsx.py`, `block_fixed` in
  `gendata.py`).

## Known gaps

- **Four images could not be imported** from the design project — they exceed
  the 256 KiB cap on the design API's file read and came back truncated. Three
  were supplied by hand as `CBSE-logo.jpg`, `ICSE.jpg` and `IIT.png`; because
  those names and formats differ from the design's, `ASSET_OVERRIDES` in
  `tools/gendata.py` remaps the paths. Add a differently-named asset there
  rather than renaming files.

  The fourth, `about-classroom.png`, is still a generated stand-in
  (`python tools/make_placeholder.py`) — a blueprint panel in the site palette,
  deliberately not a photograph. Overwrite it with the real export when
  available; no code change is needed.

- **Images degrade rather than break.** Every `<img>` in the generated
  components renders through `SafeImg`, which on a load failure falls back to
  the design's own treatment for that slot (the monogram and brand colours its
  `press` data defines for each partner) or a neutral tile otherwise. This keeps
  layout intact if an asset or the product CDN ever goes missing.
- **Product photography is hot-linked** to the Shopify CDN the design used
  (`kv80w4-fe.myshopify.com`), matching the source. Move those into
  `public/` and change `CDN` in `src/data/catalog.ts` if you want them local.
- **Commerce is a prototype.** Login accepts any number, payment is a 2.2s
  timer, and the cart is in-memory — all exactly as the design specifies.
  Nothing talks to a backend.
