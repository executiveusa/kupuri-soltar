# SOLTAR MVP Repair Audit

## Initial State (recorded before repairs)

### Build Status
- `npm run type-check`: PASS (no errors)
- `npm run lint`: PASS (no errors)
- `npm run build`: PASS (all routes generate)

### Brand Issues Found
- `src/components/SueltaLogo.tsx`: renders "SUELTA" wordmark
- `src/components/SiteHeader.tsx`: imports SueltaLogo, aria-label says "SUELTA"
- `src/components/PillarFooter.tsx`: footer line says "SUELTA · Kupuri Media"
- `src/app/layout.tsx`: metadata title, OG, Twitter all say "SUELTA"
- `src/app/page.tsx`: page metadata title says "SUELTA"
- `src/content/social/quotes.ts`: interface named `SueltaQuote`
- `src/content/social/strategy.ts`: all references say SUELTA
- `src/content/social/content-calendar.ts`: hashtags `#suelta`, captions say SUELTA
- `docs/BRAND_KIT.md`: entire doc references SUELTA
- `docs/BRAND_KERNEL.estilo-soltar.yml`: product scope still says SUELTA
- Multiple other docs reference SUELTA

### Hero Issues Found
- `RitualHero.tsx` overlays h1, subheadline, step icons, and CTA buttons over the hero image
- Hero image (`01-hero-soltar.png`) already contains baked-in text: SOLTAR wordmark, tagline, CTA, step icons
- Result: double text overlay on the landing page
- `SiteHeader` (sticky) sits on top of the hero, covering hero text
- `PillarFooter` appended after hero on landing page

### CSS Issues Found
- `.atmo-screen::before` uses `position: fixed` with the welcome ritual image at opacity 0.55
- This means any page using `.atmo-screen` shows a fixed full-viewport background
- Risk of layout conflicts and unwanted overlays

### Missing Images
- `05-step-action-ropa.png` — not present
- `06-reflection-gratitude.png` — not present
- `08-bitacora.png` — not present
- `09-cartas-de-soltar.png` — not present

### Images Present
- `01-hero-soltar.png` ✓
- `02-welcome-ritual.png` ✓
- `03-five-step-path.png` ✓
- `04-step-intro-ropa.png` ✓
- `07-step-complete.png` ✓
- `10-progress-journey.png` ✓
- `11-settings-language.png` ✓
- `12-closing-invitation.png` ✓

---

## Repairs Applied

1. Global brand rename SUELTA → SOLTAR
2. Component rename SueltaLogo → SoltarLogo
3. SiteHeader aria-label and import fixed
4. PillarFooter footer line fixed
5. layout.tsx metadata fully updated
6. page.tsx metadata + landing page structure fixed
7. RitualHero refactored to clean full-bleed hero (no text overlay)
8. globals.css atmo-screen fixed (removed fixed pseudo-background)
9. Social content, quotes, strategy updated to SOLTAR
10. Docs updated to SOLTAR throughout
