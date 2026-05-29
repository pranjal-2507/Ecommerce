# Nexvora - Upgrade Your Digital Lifestyle

A modern, fully responsive e-commerce landing page for a premium tech gadgets store. Built with pure HTML, CSS, and vanilla JavaScript no frameworks, no build tools, just open in a browser and go.

---

## Preview

<img width="1896" height="868" alt="image" src="https://github.com/user-attachments/assets/fe9e2eb8-79fc-48a6-a8ea-25867ba4efff" />


---

## Features

- **Page loader** with animated ring and brand reveal
- **Sticky navbar** that transitions from transparent to solid glass on scroll, with active link highlighting
- **Hero section** with animated floating product image, parallax effect, and scroll indicator
- **8 product cards** with hover zoom, discount/hot/new badges, and add-to-cart micro-feedback (updates cart badge count)
- **4 category cards** with full-bleed background images and hover overlay transitions
- **About section** with floating award card and a 2×2 feature grid
- **Animated stat counters** (125k+ customers, 540k+ products sold, 320 brand partners, 98k+ reviews) triggered on scroll
- **Testimonials** from real-use-case personas
- **Newsletter form** with client-side email validation
- **Contact form** with Bootstrap 5 validation and success feedback
- **Back-to-top button** that appears after scrolling 400px
- **Reveal-on-scroll** animations via `IntersectionObserver`
- **Reduced motion** support via `prefers-reduced-motion` media query
- Fully **responsive** across mobile, tablet, and desktop

---

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Markup     | HTML5 (semantic elements)           |
| Styling    | CSS3 custom properties + Bootstrap 5.3 |
| Icons      | Bootstrap Icons 1.11                |
| Typography | Google Fonts — Poppins              |
| Scripting  | Vanilla JavaScript (ES6+, IIFE)     |
| Images     | Unsplash (CDN, no download needed)  |

No npm, no bundler, no dependencies to install.

---

## Project Structure

```
Ecommerce/
├── index.html   # Full single-page layout
├── style.css    # All custom styles (CSS variables, components, responsive)
└── script.js    # All interactivity (loader, scroll, counters, forms, cart)
```

---

## Getting Started

Just open `index.html` in any modern browser - that's it.

```bash
# Option 1: double-click index.html
# Option 2: serve locally with VS Code Live Server or any static server
npx serve .
```

No build step, no environment setup required.

---

## Sections Overview

| Section       | Description                                                  |
|---------------|--------------------------------------------------------------|
| Hero          | Full-viewport intro with CTA buttons and trust meta stats    |
| Products      | 8 product cards with pricing, ratings, and cart interaction  |
| Categories    | Laptops · Smartphones · Gaming · Accessories                 |
| About         | Brand story, 4 key value propositions                        |
| Stats         | Animated counters for social proof                           |
| Testimonials  | 3 customer reviews with avatars and star ratings             |
| Newsletter    | Email capture with validation                                |
| Contact       | Full contact form + company info and social links            |
| Footer        | Links, contact details, social icons, copyright              |

---

## Customization

- **Colors & spacing** - all design tokens live in `:root` inside `style.css`
- **Products** - edit the product card HTML blocks in `index.html` (`.product-card`)
- **Stat targets** - change `data-target` values on `.counter` elements
- **Contact details** - update the address, phone, and email in the Contact and Footer sections
- **Brand name** - search and replace `Nexvora` across `index.html`

---

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). Graceful fallback for browsers without `IntersectionObserver` animations are skipped and content is shown immediately.

---

