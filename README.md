# ALTTIORA · Real Estate Company Website

A responsive multi-page website I built for **ALTTIORA**, a real estate and construction firm in Pune, India. I scoped the site directly with the owner, then designed and built it.

**Live site:** [alttiora.netlify.app](https://alttiora.netlify.app)

`HTML` `CSS` `JavaScript` `Responsive Design` `Netlify`

---

## Pages

| Page | What it shows |
|---|---|
| `index.html` | Home: hero, the company's three pillars, animated stats, featured projects, testimonials, call to action |
| `about.html` | Company story since 2012, mission and values, team |
| `projects.html` | Completed projects with photo galleries |
| `ongoing-projects.html` | Projects under construction |
| `contact.html` | Contact details and an enquiry form |
| `thankyou.html` | Confirmation page after an enquiry is sent |

## Features

- **Responsive layout**: works on phones, tablets and desktops (breakpoints at 900px, 820px and 620px), with a mobile menu toggle
- **Scroll animations**: sections fade in on scroll, with a staggered delay inside each group
- **Count-up stats**: numbers animate up to their target values when they scroll into view
- **Accessibility**: respects the visitor's reduced-motion setting
- **Working contact form**: enquiries are emailed to the company through FormSubmit, then the visitor lands on the thank-you page. No backend server needed.
- **Easy to maintain**: colors and fonts live in CSS variables at the top of `styles.css`
- **No frameworks or build step**: plain HTML, CSS and vanilla JavaScript, so it loads fast and any developer can edit it

## Project structure

```
├── index.html
├── about.html
├── projects.html
├── ongoing-projects.html
├── contact.html
├── thankyou.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
```

## Run it locally

No install needed. Clone the repo and open `index.html` in a browser.

```bash
git clone https://github.com/Prachiti22/alttiora-website.git
cd alttiora-website
open index.html
```

## Deployment

Hosted on **Netlify** as a static site.

---

Built by [Prachiti Kulkarni](https://github.com/Prachiti22). Content, photos and branding belong to ALTTIORA.
