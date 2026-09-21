# VERYA Website Plan

## Goal

Create a mobile-first, highly visual homepage that presents VERYA as a confident, vibrant Kenyan-rooted custom apparel company for schools, businesses, teams, events, and organizations.

Position VERYA as a reliable bulk-apparel partner capable of producing high-quality custom clothing at scale, with school tracksuits as a signature offering.

The brand story should communicate: **Born in Canada. Rooted in Kenya. Built to Scale.**

## Build

- Establish a bold design system using only the supplied VERYA palette: teal, orange, gold, plum, charcoal, and cream.
- Use strong typography, confident color blocking, subtle textile/woven textures, and contemporary geometric details.
- Avoid generic Western corporate aesthetics, muted palettes, excessive minimalism, Kenyan flag imagery, stereotypical “African” patterns, safari imagery, or tribal visual clichés.
- Use contemporary Kenyan visual cues through colour, photography, texture, apparel, people, and environments.
- Build the homepage in this order:
  1. Hero
  2. Who We Serve
  3. What We Make
  4. Why VERYA
  5. Ordering Process
  6. Visual Showcase
  7. Founder Story
  8. Gallery
  9. Bulk Quotation CTA
  10. Footer
- Make school tracksuits the most prominent product category, followed by custom T-shirts, business wear, sports/team apparel, event apparel, and knitwear/uniforms.
- Generate cohesive, realistic apparel and textile imagery featuring Kenyan schools, teams, businesses, events, and production environments.
- Use authentic-looking Kenyan people and environments without relying on stereotypes.
- Make the hero immediately communicate what VERYA does:  
**“Made to Move. Made in Kenya.”**  
with supporting text:  
**“Custom apparel for schools, businesses, teams and events.”**
- Include prominent **“Request a Quote”** and **“WhatsApp Us”** CTAs in the hero.
- Add a “Who We Serve” section with four clear categories:  
Schools, Businesses, Teams & Organizations, Events.
- Add a strong founder story section introducing Eunice and Hellen and the Canada-to-Kenya journey.
- Present the founder story as:  
**“Born in Canada. Rooted in Kenya.”**  
Explain that VERYA was founded in 2026 in Canada by a Kenyan family and is being developed to connect international sourcing and production knowledge with the Kenyan apparel market.
- Add a clear ordering process:  
**Tell Us → Design → Approve → Produce → Deliver**
- Make the quotation form easy to complete on mobile, including product type, quantity, customization, sizing, deadline, and WhatsApp/contact actions.
- Add polished interactions and restrained motion, with accessible reduced-motion behavior.
- Add complete page metadata and verify the finished page across desktop and mobile.

## Assumptions

- The quotation form will open a pre-filled WhatsApp message because no inbox, phone number, or database has been supplied.
- Founder imagery will initially use an editorial placeholder or tasteful brand imagery. Do not generate fictional portraits intended to represent Eunice or Hellen; actual founder photographs can be added later.
- Contact details that were not supplied will not be invented.
- VERYA should not claim specific clients, production volumes, certifications, years of manufacturing experience, facilities, or achievements that have not been provided or verified.
- School tracksuits should be visually emphasized as a signature offering, while keeping the company positioned broadly enough to serve businesses, organizations, teams, and events.

## Technical Details

- Implement in the existing TanStack Start app at `/`.
- Keep all brand colors, typography rules, spacing, buttons, cards, and reusable visual rules in the global token system.
- Use the exact supplied brand colors consistently throughout the site:
  - Teal `#00B2A9`
  - Orange `#FF6B3D`
  - Gold `#F4C430`
  - Plum `#6A1B9A`
  - Charcoal `#1A1A1A`
  - Cream `#F8F6F1`
- Do not introduce alternative brand colours.
- Store generated imagery locally in the project and import it into the page.
- Ensure the website is responsive, fast-loading, accessible, and optimized for mobile users.
- Maintain consistent visual hierarchy between the website, VERYA logo, brochure, social media, and future marketing materials.