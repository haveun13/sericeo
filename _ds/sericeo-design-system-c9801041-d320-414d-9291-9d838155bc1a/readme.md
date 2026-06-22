# SERICEO Design System

A design system for **SERICEO** — Korea's leading executive micro-learning platform, operated by **Multicampus (멀티캠퍼스)**, a Samsung group affiliate. SERICEO delivers short-form video insights on management, economics, humanities, and leadership to CEOs and senior leaders, paired with a **Leadership Diagnostic (리더십 진단)** program that scores and tracks a member's leadership growth.

This system was reconstructed from the attached Figma file **"SERICEO 메인.fig"** (the 2025.12–2026.06 main-site redesign, including the Leadership Diagnostic dashboard, GNB, content/class cards and the full token + component library). The product UI is **Korean-first**; numerals, dates and Latin text use a separate face.

> **Source of truth:** the Figma file. Token values, component specs and assets here were extracted from it (`fig_materialize` / `fig_read`), not from the public SERICEO site.

---

## Product context

SERICEO members are executives and team leads. The core surfaces:

- **콘텐츠 (Content)** — short video insights, grouped into 플래그명 (program) series, surfaced as image-forward cards.
- **마스터클래스 (Master Class)** — live/online premium sessions with named speakers (모집/마감 status, D-day).
- **리더십 진단 (Leadership Diagnostic)** — the "My 대시보드" home: a leadership **grade** (BLACK / DIAMOND…), a points breakdown, activity comparison vs. peers, a competency **radar**, score-trend, and assigned **missions / polls**.
- **라이브러리 (Library)**, **마음리지** (a loyalty-point currency), membership & profile.

The visual personality is **calm, premium, editorial** — a black global header, generous white space, restrained brand blue, and large photographic/illustrated content thumbnails doing the color work.

---

## Content fundamentals

How SERICEO writes:

- **Language:** Korean throughout, formal-polite. Members are addressed as **"〇〇〇 회원님"** and **"김멀티님"**; honorific **-님** is standard. Copy uses the polite **-요 / -습니다** register ("기록해 보세요", "챙겨야 할 문화는?").
- **Voice:** encouraging and coach-like, not corporate-stiff. Prompts invite reflection — *"오늘 중간리더에게 한 가지 권한을 일임해 보셨나요?"* Short imperative CTAs: **진단 시작**, **결과 다운로드**, **전체보기**, **4편 연속재생**.
- **Numerals & dates:** always Western digits, comma-grouped — **2,109회**, **136.8h**, **4,500점**, **5,410p**, **D-199**, **2026.05.12~2026.05.25**. Points are suffixed **점**; loyalty currency **p**; counts **회**; days **D-n**.
- **Mixed script:** Hanja appears for editorial flavour in section/series names (경영의 脈, 「총, 균, 쇠」). English labels appear sparingly for system concepts (BEST, Poll, My 대시보드, About Sericeo).
- **No emoji** in product chrome. Status is communicated with **colored dots + Korean labels** (● 모집 / 마감), not icons or emoji.
- **Casing:** the wordmark is **SERICEO** (SERI in ink/white, CEO in blue). Latin headings are sentence/Title case; never shouty.
- **Tone test:** if a line sounds like an ad, rewrite it as a quiet insight or a gentle prompt.

---

## Visual foundations

**Color.** A near-monochrome editorial base, accented by one brand blue.
- **Brand blue** `--seri-blue` `#185DE0` (primary actions, active states, the "CEO" in the logo, highlighted data). A lighter **accent cyan** `#2D94F9` and a tint `#E8EFFC` extend it. Full ramp b50→b500.
- **Ink/text** runs `#222` (primary) → `#333` → `#555` → `#666` → `#858585` (caption) → `#9A9A9A` (disabled). `#222` is the workhorse text color.
- **Surfaces:** white cards on a faint `#F5F6F8` sunken page; warm `#F5F3F1` beige and `#F5F5F5` gray for content backgrounds; **black** GNB; a **dark-green `#1F3A30`** top promo band.
- **Status:** green `#4DAA13` (모집/open), red `#E41014` (alert/notification dots), pink `#FD4E6D`. Seven **category theme accents** (deep-purple, cyan, orange, red, brown, dark-grey, blue-basic) recolor a per-section secondary variable.
- **Imagery is the color.** Chrome stays neutral; saturated book covers, conceptual photography and editorial illustration provide the vibrancy.

**Type.**
- **Pretendard** is the primary UI face (`--font-sans`) — clean, modern Korean sans. **Noto Sans KR** backs long-form Korean.
- **Inter** (`--font-display`) sets numerals, dates and Latin — apply via the `.num` helper for tabular figures.
- Scale (px): caption 12/13 · body-sm 14 · body 16 · body-lg 18 · title-sm 20 · title 24 · title-lg 26 · headline 32 · headline-lg 42. Weights 400/500/700 (medium is the default UI weight; bold for titles & numbers).
- **Letter-spacing is negative** on Korean text (`-0.4px` body, down to `-1.2px` display) — tighten, never track out.

**Spacing & shape.**
- 4-based spacing rhythm (4 → 80). Page gutter 40–80px, content max-width **1400px**.
- **Radius:** controls/flags **6**, buttons **6–10**, content cards **10**, panels/feature cards **16**, pills **100**. Nothing is sharp; nothing is fully pill unless it's a tag/chip.
- **Cards** are white, radius 16, **soft low shadow** (`--shadow-card`: `0 4px 20px rgba(0,0,0,.06)`) — *no* heavy borders. Content thumbnails use radius 10 with no shadow (the image is the edge). Outlined controls use a **1px inset** `box-shadow`, not a border, so size stays stable.

**Backgrounds, depth & blur.**
- Content cards are **full-bleed image** with a **frosted-glass info panel** pinned to the bottom: `rgba(0,0,0,0.24)` + `backdrop-filter: blur(40-50px)`, white text. This is the signature treatment — use it for any image-over-text overlay.
- Flags stack at a card's **top-left** (6px gap). Feature cards (class) use a subtle blue **tint gradient**, not a hard fill.

**Motion & states.**
- Restrained. Hover = subtle background/opacity shift; transitions ~`.15s ease`. Carousels auto-advance with a play/pause + prev/next indicator (active dot stretches to a pill). No bounces, no decorative looping animation on content.
- Press/active leans on **color** (darker blue) rather than scale. Disabled = `opacity .4` + `not-allowed`.

---

## Iconography

- **Line icons, ~1.5px stroke, paint with `currentColor`.** A single-weight outline set covers UI: search, user, alert (bell), folder, calendar, graph, refresh, compass, plus directional arrows at 16 / 24 / 48 (small/large/tail/fill variants) and select/expand chevrons. 16px icons appear inside buttons & cards; 24px in the GNB utility row; 48px for large carousel arrows.
- Extracted from the Figma file as **`assets/icons/icon-data.js`** and rendered via `<Icon name="…" size={…} />` (see `assets/icons/Icon.d.ts` for the full name list — names derive from Figma layer names, e.g. `Icon24Search`, `Icon16ArrowSmDirectionRight`). Recolor with the CSS `color` property.
- **Notification state** = a small **red dot** on the icon, not a badge count.
- **No emoji, no unicode-glyph icons** in product chrome. Logos are raster PNGs (`assets/brand/`), not redrawn SVG.

---

## File index / manifest

- **`styles.css`** — global entry point (import this). `@import`s only.
- **`tokens/`**
  - `fonts.css` — **Pretendard** via explicit `@font-face` (jsDelivr CDN binaries, weights 400/500/600/700) + **Noto Sans KR / Noto Sans / Inter** (Google Fonts); family vars.
  - `fig-tokens.css` — the full Figma Variable system (231 tokens, all theme/responsive modes).
  - `semantic.css` — friendly px-based authoring aliases (`--seri-blue`, `--ink-900`, `--space-*`, `--fs-*`, `--radius-*`, `--shadow-*`). **Author components against these.**
  - `base.css` — resets, body defaults, `.num` numeric helper.
- **`components/`** — reusable primitives (`.jsx` + `.d.ts` + `.prompt.md` + a `@dsCard` HTML per group):
  - `forms/` — **Button**, **IconButton**, **SearchField**
  - `content/` — **ContentCard**, **ClassCard**, **Flag**, **StatusFlag**, **Tag**
  - `navigation/` — **Tabs**, plus materialized **Logo / Gnb / Footer / SearchBar** (from Figma)
  - `feedback/` — **Avatar**, **CarouselIndicator**
  - `data/` — **StatBlock**, **RankPill**, **CompareBar**, **RankBadge**
- **`assets/`** — `brand/` (logo on light & dark), `icons/` (icon-data + `<Icon>`), `imagery/` (sample thumbnails, speaker portraits, hero textures).
- **`guidelines/`** — foundation specimen cards (Colors / Type / Spacing / Brand) shown in the Design System tab.
- **`ui_kits/sericeo/`** — `index.html` + `Dashboard.jsx`: a full recreation of the Leadership Diagnostic **My 대시보드** home, composed from the primitives.
- **`SKILL.md`** — Agent-Skill manifest for using this system.

**Namespace:** components are exposed on `window.SERICEODesignSystem_c98010` in card/kit HTML (load `_ds_bundle.js`, which the compiler generates — never edit it). The system currently ships **29 components**, **17 Design-System cards** (Brand · Colors · Components · Spacing · Type · Dashboard) and **342 tokens** across 8 theme/responsive modes.

---

## Caveats

- **Fonts** load from CDN (Pretendard via jsDelivr, the rest via Google Fonts). For a fully offline/production build, drop the real font binaries in and add local `@font-face` rules. (`--font-weight-medium`/`-regular` are Figma weight-name *string* variables, not font families — they can be ignored.)
- `Logo`, `Gnb`, `Footer` and friends under `components/navigation/` are **materialized straight from Figma** (absolute-positioned, fixed 1920 width) — they're faithful references; the hand-authored primitives (`Button`, `Tabs`, cards, …) are the responsive, composable building blocks.
- The dashboard's **radar** and **score-trend** are lightweight SVG recreations for layout, not a charting library.
