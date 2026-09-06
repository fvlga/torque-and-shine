# Torque & Shine

A responsive landing page for a mobile car detailing business, built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwindcss)

## Features

- **Before/After Reveal Slider** — draggable comparison component with keyboard accessibility
- **Booking Form** — client-side validation with inline error messages and ARIA attributes
- **Service Cards & Pricing Tables** — data-driven components with clean grid layouts
- **FAQ Accordion** — expandable sections for common questions
- **Testimonials** — customer review cards
- **Fully Responsive** — mobile-first design with Tailwind breakpoints
- **Accessibility** — skip-to-content link, `aria-invalid`, `aria-describedby`, keyboard-navigable slider

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Build | PostCSS + Autoprefixer |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx        # Root layout with custom fonts and metadata
  page.tsx          # Home page composing all sections
  globals.css       # Tailwind directives and custom utilities
components/
  Header.tsx        # Sticky navigation bar
  Hero.tsx          # Hero section with before/after reveal slider
  Sections.tsx      # Services grid, gallery, and trust stats
  PricingAndReviews.tsx  # Pricing table and testimonials
  BookingForm.tsx   # Validated booking form
  FaqAndFooter.tsx  # FAQ accordion and site footer
```
