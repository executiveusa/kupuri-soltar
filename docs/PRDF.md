# PRDF - kupuri-soltar (Production Readiness & Design Findings)

Inspected: 2026-09-28. Method: real code - README ignored per owner order. Benchmark: Collins protocol + gauntlet skills.

## VERDICT: TIER 1 - CONTENT-COMPLETE, NEAR-PRODUCTION
Live: https://kupuri-soltar.vercel.app (200). Next.js 16.3.5 / React 19. SOLTAR is a guided letting-go ritual app (KonMari-adjacent, honestly credited in content): 5-step journey (intro -> action -> reflection -> complete), cartas (letters), bitacora (essays), progress path, welcome/closing flow. TRILINGUAL es/en/ja - unique in the fleet. Bonus: social content engine (scripts/social: postiz-client + schedule generator with a real content calendar).

## EVIDENCE (verified this inspection)
- `tsc --noEmit` CLEAN.
- Local `next build` OOM-killed twice on the audit box (801MB RAM available, environment limit - NOT a code failure; Vercel deploy is live and serving 200). Typecheck + live deploy stand as evidence.
- Real authored content throughout: steps, letters, essays with genuine Spanish-first voice (e.g. komono step text, letter excerpts). No lorem/TODO/FIXME; "coming soon" scan clean.
- Trilingual i18n content model (es default, en, ja) - the ja lane signals real international ambition.
- Zero dependencies beyond Next/React/Tailwind - smallest, cleanest dependency surface in the fleet.

## VIOLATIONS / GAPS (severity + standard broken)
1. MED - Zero tests (no test dir, no test script). A multi-step stateful journey shipping untested. Fix: vitest on journey-state + i18n content integrity (all keys present in all 3 locales). (Gauntlet automated-gates.)
2. MED - Lint script is `next lint` - removed in Next 15+; gate is dead. Fix: eslint flat config wired manually, add to CI. (Truth-in-tooling, same class as recetario-vivo.)
3. LOW - Social engine (scripts/social/postiz-client) is an unpublished automation surface - confirm env keys never committed (none found in tree scan) and document the Postiz connection.
4. LOW - No Dockerfile/self-host path; Vercel-only.
5. INFO - Collins: no formal design review artifacts (tokens doc, a11y audit); the ritual UX is the product's core, so the Krug usability gate matters here more than anywhere - run an axe + screen-reader pass before calling it done.

## FIX LIST TO PRODUCTION-READY (ordered)
1 (2h) vitest journey + i18n integrity; 2 (30m) repair lint gate; 3 (30m) document social engine + secret audit note; 5 (1h) axe/Lighthouse + screen-reader pass on the 5-step flow. Estimated: half a day.

## PORTFOLIO ROLE
The emotional range piece: wellness, ritual, trilingual, authored content voice - proves she can do feeling, not just function. Keep in top five.
