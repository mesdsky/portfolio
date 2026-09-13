# Portfolio Site — Build Guide

## Goal
Create a portfolio that feels authored, editorial, and credible—not like a generic AI-generated landing page.

## Creative direction
- Tone: confident, concise, warm, slightly playful.
- Visual language: Swiss/editorial grid, oversized typography, crisp rules, restrained cobalt accent, small monospaced metadata.
- Avoid: blobs, glassmorphism, excessive gradients, floating 3D objects, fake testimonials, fake metrics, generic stock photos, and decorative motion without purpose.
- Use project-specific abstract diagrams as temporary artwork until real project images are supplied.

## UX rules
- Selected work starts within the first viewport on common laptop screens.
- Navigation remains clear and compact.
- Every interactive control needs visible hover and keyboard focus.
- Respect reduced-motion settings.
- Mobile reading order: intro → selected work → profile → contact.
- Temporary project links open an accessible detail panel instead of navigating to a dead URL.

## Content rules
- Any unsupplied copy is sample content and must be replaced before deployment.
- Keep project descriptions outcome-oriented and under 35 words.
- Replace temporary contact/social URLs before deployment.

## Technical rules
- Static HTML/CSS/JS; no build step required.
- Semantic HTML and valid landmarks.
- CSS custom properties for theme tokens.
- Test at desktop and 390px mobile widths.
