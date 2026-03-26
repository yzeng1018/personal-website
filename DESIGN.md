# Design System — 曾言 / Zeng Yan Personal Website

## Product Context
- **What this is:** Personal website and intellectual home base for Zeng Yan — AI PM, business thinker, content creator
- **Who it's for:** Investors, industry peers (AI/product/tech), and fellow content creators
- **Space/industry:** AI product, personal branding, thought leadership
- **Project type:** Personal editorial site
- **Goal:** Establish credibility as a KOL in the AI/product space. The site should feel like a publication, not a portfolio.

## Aesthetic Direction
- **Direction:** Editorial / Refined — Warm Authority
- **Decoration level:** Minimal — typography and whitespace carry all the work
- **Mood:** A printed artifact. Precise, considered, warm. The intellectual confidence of a journal that doesn't need to prove itself with visual tricks.
- **Reference sites:** karpathy.ai (content-first), patrickcollison.com (polymath breadth), leerob.com (credibility tone)
- **What we're NOT doing:** AI gradient aesthetic (dark bg + purple-to-blue), skills logo grids, centered hero with headshot, glassmorphism

## Typography
- **Display/Hero:** `Instrument Serif` — Warm, literary authority. More contemporary than Garamond, less corporate than Georgia. Sets the intellectual tone.
- **Body:** `Plus Jakarta Sans` — Clean, readable at length, contemporary weight range. Used for both body text and UI labels (weight variation provides hierarchy).
- **UI/Labels:** `Plus Jakarta Sans` — Same font as body, weight 500 for labels/navigation
- **Code:** `Berkeley Mono` — Dense, beautiful, signals real technical depth
- **Loading:** Google Fonts CDN
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
  ```
  Berkeley Mono: self-hosted from https://berkeleygraphics.com/typefaces/berkeley-mono/ (or fallback to JetBrains Mono via Google Fonts)
- **Scale:**
  | Level | Size | Font | Weight | Use |
  |-------|------|------|--------|-----|
  | h1 | 52px / 3.25rem | Instrument Serif | 400 | Page title / hero name |
  | h2 | 36px / 2.25rem | Instrument Serif | 400 | Section titles |
  | h3 | 24px / 1.5rem | Instrument Serif | 400 | Sub-section, article titles |
  | h4 | 18px / 1.125rem | Plus Jakarta Sans | 500 | Smaller headings |
  | body | 16px / 1rem | Plus Jakarta Sans | 400 | Standard body (line-height: 1.75) |
  | body-lg | 17px | Plus Jakarta Sans | 400 | Lead paragraphs |
  | small | 13px | Plus Jakarta Sans | 400 | Secondary text |
  | label | 11px | Plus Jakarta Sans (mono fallback) | 500 | Caps labels, nav, metadata |
  | mono | 13px | Berkeley Mono | 400 | Code, dates, technical labels |

## Color
- **Approach:** Restrained — one accent color, warm neutrals everywhere else
- **Background:** `#FAFAF8` — Warm off-white, "good paper" feeling. Not cold white, not gray.
- **Surface:** `#F2EDE6` — For cards, subtle section backgrounds, blockquote backgrounds
- **Primary text:** `#111110` — Near-black with a warm brown undertone. Like ink, not hex #000.
- **Muted text:** `#706D65` — Warm stone gray for secondary content, metadata, captions
- **Accent:** `#B85C38` — Deep amber/terracotta. Used for links, highlights, hover states, decorative markers. The red pencil annotation in the margin.
- **Border:** `#E5E0D8` — Subtle warm line for dividers, card edges

### Dark Mode
Swap surfaces while preserving warmth — never go to pure black:
- Background: `#0F0E0C`
- Surface: `#1A1916`
- Primary text: `#F0EBE3`
- Muted text: `#9A9490`
- Accent: `#C06845` (slightly less saturated)
- Border: `#2A2824`

### Semantic (minimal use)
- Success: `#4A7C59`
- Warning: `#A67C52`
- Error: `#9B3A3A`

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable (generous whitespace signals confidence)
- **Scale:**
  | Token | Value | Use |
  |-------|-------|-----|
  | 2xs | 4px | Tight gaps (icon + label) |
  | xs | 8px | Compact spacing |
  | sm | 16px | Inner padding |
  | md | 24px | Element spacing |
  | lg | 40px | Section sub-groups |
  | xl | 64px | Section gaps |
  | 2xl | 96px | Major section breaks |
  | 3xl | 128px | Page-level breathing room |

## Layout
- **Approach:** Grid-disciplined, single column
- **Max text width:** 680px (optimal reading line length ~65 chars)
- **Max page width:** 960px (with side padding)
- **Center alignment:** Content centered, generous side margins
- **Border radius:**
  | Level | Value | Use |
  |-------|-------|-----|
  | sm | 3px | Inline code, tags |
  | md | 6px | Cards, buttons |
  | lg | 10px | Large containers |
  | full | 9999px | Pills |
- **Grid:** 12 columns at desktop, 4 at mobile

### Key Layout Rules
- First viewport: Name + 2–3 sentence positioning + current focus. No profile photo.
- Chinese name 曾言 appears alongside Zeng Yan in the header — a deliberate identity marker, not decoration.
- Writing list: title + date, full-width rows with thin dividers. No card grids.
- No skills/tech logo matrix anywhere.

## Motion
- **Approach:** Minimal-functional
- **Easing:** enter: `ease-out` / exit: `ease-in` / move: `ease-in-out`
- **Duration:**
  | Token | Value | Use |
  |-------|-------|-----|
  | micro | 80ms | Hover color transitions |
  | short | 150ms | Button states, link underlines |
  | medium | 250ms | Theme toggle, modal open |
  | long | 400ms | Page transitions (if any) |
- **No decorative animation.** No scroll-triggered entrance animations. No floating elements.

## Content Structure (Pages)
| Route | Purpose | Key Elements |
|-------|---------|--------------|
| `/` | Home | Bio, current focus, recent writing list |
| `/writing` | All essays | Chronological list, Instrument Serif titles |
| `/writing/[slug]` | Single essay | Max 680px body, drop caps optional |
| `/projects` | Work showcase | Thinking + context, not skill logos |
| `/now` | Current state | What I'm working on, reading, thinking |
| `/about` | Longer bio | Prose + sidebar (reading list, links, contact) |

## Key Decisions & Rationale
| Decision | What | Why |
|----------|------|-----|
| No gradient/glassmorphism | Warm matte palette | AI aesthetic is saturated and signals "follower not thinker" to the target audience |
| No skills grid | Remove from all pages | Capability demonstrated through writing quality, not logo badges |
| Chinese name in header | 曾言 before Zeng Yan | Genuine identity marker; distinctive and authentic in the AI/product space |
| No hero photo | Name leads, photo appears lower in /about | Investor/peer reading behavior: they read first, identify second |
| Serif display font | Instrument Serif | Signals intellectual seriousness; almost no AI PM site uses serif for headlines |
| Single accent color | Terracotta #B85C38 | Warm, distinctive, not the standard tech-blue or purple-violet |

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-26 | Initial design system created | Established via /design-consultation. Competitive research: karpathy.ai, patrickcollison.com, leerob.com. Direction validated against independent subagent proposal — both converged on warm editorial / anti-AI-gradient aesthetic. |
