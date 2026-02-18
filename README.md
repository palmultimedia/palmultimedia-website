# PalMultimedia — Ecommerce Growth Consultancy

> **Live site:** [palmultimedia.com](https://palmultimedia.com) *(deploying via Cloudflare Pages)*

---

## About

PalMultimedia is a UK-based ecommerce growth consultancy with 16+ years of real-world experience. We specialise in:

- **Magento 2 & Hyvä** — builds, migrations, performance
- **Shopify** — store setup, theme development, app integrations
- **SEO** — technical audits, content strategy, structured data
- **Google & Microsoft Ads** — campaign strategy, feed optimisation, ROAS improvement
- **GA4 & Analytics** — audits, tracking implementation, reporting dashboards
- **Linnworks** — multi-channel inventory and order management

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JS |
| Fonts | Google Fonts (Inter) |
| Hosting | Cloudflare Pages |
| Repo | GitHub |
| Domain | palmultimedia.com |

---

## Project Structure

```
palmultimedia-site/
├── index.html      # Full single-page website
├── style.css       # Responsive styles, animations, layout
├── script.js       # Navbar scroll, mobile menu, form handling
└── README.md       # This file
```

---

## Deployment

This site deploys automatically via **Cloudflare Pages** on every push to `main`.

### Setup (one-time)
1. Connect this GitHub repo to Cloudflare Pages
2. Set build command: *(none — static site)*
3. Set output directory: `/` (root)
4. Point `palmultimedia.com` DNS to Cloudflare Pages

### Deploy
```bash
git add .
git commit -m "Update site"
git push origin main
```
Cloudflare Pages auto-deploys within ~30 seconds of push.

---

## Contact

**Raspal** — [palmultimedia.com](https://palmultimedia.com)

---

*Built with The Forge AI Squad — Maya (Chief of Staff), Sage, Recon, Archer, Blitz, Pixel*
