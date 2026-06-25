# Accessibility Audit — SOLTAR

## Status

Initial audit — checklist based on implementation review.

## Checklist

### Semantic Structure
- [x] `<h1>` through `<h6>` used in logical order on every page
- [x] `<main>`, `<nav>`, `<header>`, `<footer>` landmarks present
- [x] Page title changes on route change (Next.js metadata API)

### Keyboard Navigation
- [x] All interactive elements reachable via Tab
- [x] All interactive elements operable via Enter/Space
- [x] Focus never trapped (no modal traps without escape)
- [x] Skip-to-main link available

### Focus Indicators
- [x] Visible focus rings on all focusable elements
- [x] Focus ring meets 3:1 contrast ratio minimum

### Images
- [x] All `<img>` and `<Image>` elements have descriptive `alt` text
- [x] Decorative images use `alt=""`
- [ ] Real images not yet installed — alt text stubs in place

### Buttons and Links
- [x] All buttons have accessible names (visible label or `aria-label`)
- [x] Links distinguish themselves from body text (underline or color + shape)
- [x] No "click here" or "read more" standalone link text

### Color and Contrast
- [x] Text on parchment background passes WCAG AA (4.5:1 for normal text)
- [x] Large text (18px+ or 14px bold) passes 3:1
- [ ] Full WCAG AAA audit pending

### Motion
- [x] `prefers-reduced-motion` respected — animations disabled when set
- [x] No autoplay video or audio
- [x] No flashing content

### Forms
- [x] All inputs have associated `<label>` elements
- [x] Error messages are programmatically associated (`aria-describedby`)

### Language
- [x] `lang` attribute set on `<html>` element
- [ ] Dynamic `lang` updates for inline Japanese text (future enhancement)

## Known Issues

1. Japanese inline text does not yet carry `lang="ja"` attribute — screen readers may mispronounce
2. Real image alt text will need human review once source images are installed
3. Color contrast on clay-colored secondary buttons should be verified with contrast checker tool once deployed

## Tools to Use for Full Audit

- Axe DevTools browser extension
- NVDA or VoiceOver screen reader test
- Keyboard-only navigation walkthrough
- Chrome Lighthouse accessibility score target: ≥ 90
