# unescocp.org

Website of the UNESCO Center for Peace, rebuilt from the GoDaddy Airo site at
https://unescocp.org as a static Next.js app and hosted on Netlify.

Started from [ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template)
(MIT); its cloning workflow lives in `.agents/skills/clone-website/`.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run check    # lint + typecheck + production build (static export in out/)
```

## Layout

| Path | What it holds |
| --- | --- |
| `src/app/<route>/page.tsx` | One file per page: metadata, JSON-LD and the page sections |
| `src/components/sites/unescocp/` | Header, footer, home carousel, Summer Program tabs + gallery, Netlify forms |
| `public/sites/unescocp/` | Logo and every image the pages use |
| `docs/research/unescocp/` | Source capture: HTML, rendered DOM, screenshots, original CSS |

Routes: `/`, `/about`, `/about-ucp`, `/leadership`, `/programs`, `/summer-program`,
`/publishing-house`, `/regional-coordinators`, `/news`, `/resources`, `/join-us`, `/contact`.

## Cookie consent

`CookieBanner` is the source's consent bar: same text, `localStorage` key `c2_analytics_consent`
(`{ analytics, timestamp }`, shown again after 365 days). The source loaded GoDaddy's own Airo
analytics behind it; that service belongs to GoDaddy hosting and is not carried over. An analytics
script added later should load only when the stored `analytics` is true or after a
`cookie-consent-changed` event with `detail.consented === true`.

## Forms

`/contact` (form `contact`) and `/join-us` (form `membership-application`) are Netlify Forms.
Submissions appear in the Netlify dashboard under Forms; set an email notification there.

## Images

- `images/stock/` are Getty Images photos from GoDaddy's Airo library (the page hero banners and the
  home Summer Program photo), kept as on the source at the owner's request (2 Nov 2026).
- On the source site these files returned 404 and were recovered from https://ucp-usa.org:
  Guy Djoken's portrait, the three partner-university seals, and the three event flyers
  (African Women's Day 2026, West African Spring Conference 2025, Model UN & Debate 2025).
- The Summer Program gallery shows the 17 photos that resolve; 30 more were listed on the
  source but their files are gone.
