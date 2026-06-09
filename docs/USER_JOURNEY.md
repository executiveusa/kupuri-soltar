# User Journey — SOLTAR / SUELTA

## Journey Map

```yaml
journey:
  landing:
    route: "/"
    image: image_01_hero
    purpose: "Introduce Soltar as a quiet path for letting go."

  welcome:
    route: "/welcome"
    image: image_02_welcome
    purpose: "Invite the user to pause before beginning."

  path_overview:
    route: "/journey"
    image: image_03_path_overview
    purpose: "Show the five-step release path."

  step_intro:
    route: "/steps/[step]/intro"
    image: image_04_step_intro
    purpose: "Teach the meaning of the current step."

  step_action:
    route: "/steps/[step]/action"
    image: image_05_step_action
    purpose: "Let user keep or release items."

  reflection:
    route: "/steps/[step]/reflection"
    image: image_06_reflection
    purpose: "Ask one reflective question."

  completion:
    route: "/steps/[step]/complete"
    image: image_07_completion
    purpose: "Acknowledge closure without hype."

  bitacora:
    route: "/bitacora"
    image: image_08_bitacora
    purpose: "Long-form essays for depth and trust."

  cartas:
    route: "/cartas"
    image: image_09_cartas
    purpose: "Anonymous community letters without social metrics."

  progress:
    route: "/progress"
    image: image_10_progress
    purpose: "Show path orientation, not gamification."

  settings:
    route: "/settings"
    image: image_11_settings
    purpose: "Language and trust settings."

  closing:
    route: "/closing"
    image: image_12_closing
    purpose: "Quiet exit. No pressure to return."
```

## Design Principles for the Journey

- Every screen has exactly one primary action
- Every screen has a visible exit / back path
- No screen forces forward progression
- No screen uses urgency, countdown timers, or social proof pressure
- Completion states use quiet acknowledgment, not celebration animations
- Japanese text appears only where conceptually meaningful

## The Five Steps (KonMari Order)

1. **Ropa / Clothing / 衣類** — Begin with what is closest to the body
2. **Libros / Books / 本** — Release old identities and stored voices
3. **Papeles / Papers / 書類** — Reduce mental noise and obligation residue
4. **Komono / Miscellaneous / 小物** — Clear everyday objects and hidden clutter
5. **Recuerdos / Sentimental Items / 思い出品** — Approach memory last, with care

## What Does Not Exist Here

- Streaks
- Badges
- "Level complete" animations
- "Congratulations!" messages
- Progress percentages used as pressure
- Social comparison feeds
- Like counts
- Follower counts
