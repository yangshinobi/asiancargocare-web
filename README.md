# Asian CargoCare — Web

Static React frontend for asiancargocare.com. Built with Vite + React 19 + TypeScript + Tailwind + shadcn/ui.

## Stack

- **Framework:** Vite 7 + React 19 + react-router 7
- **Styling:** Tailwind 3 + shadcn/ui primitives (Radix)
- **Icons:** lucide-react
- **Backend wire:** `POST /api/contact` on `asiancargocare-backend.vercel.app`

## Local dev

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build

```bash
npm run build        # outputs to dist/
npm run preview      # serves dist/
```

## Environment

| Var | Required | Description |
|---|---|---|
| `VITE_API_BASE` | build-time | Backend origin (default: `https://asiancargocare-backend.vercel.app`) |

For Cloudflare Pages: set `VITE_API_BASE` in **Settings → Environment variables**. Vite inlines it at build time; runtime overrides are not supported.

## Deploy (Cloudflare Pages)

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick this repo.
3. Build settings:
   - **Framework preset:** Vite (auto-detected)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variables:** `VITE_API_BASE` = `https://asiancargocare-backend.vercel.app`
4. Custom domain: add `asiancargocare.com` in Pages → Custom domains. CF will issue the cert and route automatically once DNS points to CF nameservers.

The included `public/_redirects` makes all unknown paths serve `index.html` so `react-router` handles client-side routes.

## Contact form contract

`Contact.tsx` posts JSON to `{VITE_API_BASE}/api/contact`:

```json
{ "name": "...", "email": "...", "subject": "...", "message": "..." }
```

The `subject` field is currently ignored server-side (controller hard-codes "New Contact Us Enquiry") but is preserved on the wire for forward-compatibility.

## Migration notes

Originally rebuilt from a Kimi-generated dark-mode prototype zip, then:

- Contact form wired to backend (was `mailto:` link).
- `kimi-plugin-inspect-react` removed (not on npm).
- `vite.config.ts` cleaned of the inspector plugin import.
- `public/_redirects` added for Cloudflare Pages SPA fallback.

Source repo `yangshinobi/asiancargocare` (lovable.dev production bundle) is no longer the canonical frontend — this repo is.