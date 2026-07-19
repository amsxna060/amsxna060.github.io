# amsxna060.github.io

Personal portfolio of **Amol Saxena** — Python Backend & GenAI Systems Engineer.
Live at **https://amsxna060.github.io**

## Stack

- React 19 (CRA) · Framer Motion · EmailJS
- Single design-system stylesheet (`src/App.css`) — theme "Ledger Slate"
- Deployed automatically to GitHub Pages via GitHub Actions on push to `main`

## Editing content

All content is data-driven. Edit files in `src/data/` — no JSX changes needed:

| File | Controls |
|---|---|
| `profile.js` | name, headline, contacts, WhatsApp number, Calendly link, trust chips |
| `services.js` | the six service cards |
| `projects.js` | FinancerBuddy flagship + featured projects |
| `testimonials.js` | client testimonials (**sample data — replace with real, permissioned clients**) |
| `engagement.js` | engagement models + rates (`showRates: false` hides pricing) |
| `skills.js`, `experience.js`, `process.js` | remaining sections |

## Run locally

```bash
npm install
npm start          # http://localhost:3000
```

## Contact form (EmailJS)

Create `.env.local`:

```
REACT_APP_EMAILJS_SERVICE_ID=...
REACT_APP_EMAILJS_TEMPLATE_ID=...
REACT_APP_EMAILJS_PUBLIC_KEY=...
```

Template variables: `from_name`, `from_email`, `project_type`, `message`, `to_name`.
The receiving address is set in the EmailJS dashboard — point it at any inbox
(e.g. a custom iCloud domain email) without code changes.

## Deploy

Push to `main`. GitHub Actions builds, tests and publishes to Pages.
