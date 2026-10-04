# Seth (Feng) Li — sethfengli.com

[![Live site](https://img.shields.io/badge/live-sethfengli.com-blue?style=flat-square)](https://sethfengli.com)
[![GitHub Pages](https://img.shields.io/badge/hosted-GitHub%20Pages-06b6d4?style=flat-square)](https://pages.github.com)

> **个人主页 / Personal homepage** — Full-Stack & Database Engineer · .NET / C# · AI
> 33 years in production · Sydney, Australia · 码 × AI × 禅

## 🚀 Live

| Homepage | Zen Temple | Company |
| --- | --- | --- |
| [sethfengli.com](https://sethfengli.com) | [zen.sethfengli.com](https://zen.sethfengli.com) · 慧灯禅院 | [fengtech.com.au](https://www.fengtech.com.au/) |

## 📖 About the site (本站说明)

A fast, bilingual (EN/中) **Jekyll + GitHub Pages** homepage in a cool "deep space HUD" style —
indigo × cyan × teal on a crisp paper ground, grand Sora headlines, animated aurora background,
star field, scroll reveals, a live "Matrix rain" code panel, on-demand previews of the two
ventures (Feng Tech + Hui Deng Zen Temple), and day/night themes.

- **Language** defaults to the browser's language (`zh*` → 中文, otherwise English); the toggle is persisted in `localStorage`.
- **Theme** defaults from the browser's local time (06:00–18:00 → light, otherwise night); the manual toggle overrides it.
- **Revisions** — the page carries a `rev` stamp (footer, hero HUD, Now & Next) that moves when the content does. See *Keeping it alive* below.

双语（EN/中）的 **Jekyll + GitHub Pages** 个人主页：冷静的「深空 HUD」风格——靛蓝 × 青蓝 × 松石绿、
清爽纸感底色、Sora 大字标题、极光动画背景、星野粒子、滚动渐入、「黑客帝国」式动态代码面板、
两个事业（Feng Tech 与慧灯禅院）的按需实时预览，以及明/暗主题。

- **语言** 默认跟随浏览器语言（`zh*` → 中文，其余英文）；用户选择存入 `localStorage`。
- **主题** 默认按浏览器本地时间（06:00–18:00 白天 / 其余夜晚）；手动切换可覆盖默认值。
- **版本** 页脚、首屏 HUD 与「当下与下一步」都带 `rev` 标记，随内容更新而前进（见下文「持续演进」）。

## 🗂 Structure (目录结构)

```
SethLee/                              # ← Jekyll source root (the .git directory lives here)
├── index.html                 # Homepage — assembles the section includes
├── _config.yml                # Jekyll config + SEO (jekyll-seo-tag, jekyll-sitemap)
├── _layouts/default.html      # HTML skeleton (head, nav, footer, script)
├── _includes/                 # One file per page section — easy to maintain
│   ├── head.html              #   meta, JSON-LD, hreflang, fonts, pre-paint boot script
│   ├── nav.html               #   sticky nav + overflow tray + language/theme toggles
│   ├── hero.html              #   hero: HUD readout, name, typing line, stats
│   ├── about.html             #   why me: AI / Database / Full-Stack cards (+ "now" line)
│   ├── career.html            #   timeline (DASH → Feng Tech → education → 1993)
│   ├── stack.html             #   tech stack groups
│   ├── projects.html          #   selected work + open source + GitHub stats
│   ├── ventures.html          #   Feng Tech + Zen Temple (lazy live previews)
│   ├── ai.html                #   AI direction + "Now & Next" (this file ages on purpose)
│   ├── browser-frame.html     #   reusable browser-mockup partial (loads its iframe on demand)
│   ├── insights.html          #   Zen × Code reflections + 定场诗 / Matrix panel
│   ├── contact.html           #   quote banner + contact
│   └── footer.html            #   credits, keywords, copyright + rev
├── assets/
│   ├── css/tokens.css         # Design tokens (light + night themes)
│   ├── css/main.css           # Layout + components (numbered sections)
│   └── js/main.js             # i18n (ZH dictionary), theme, nav, typing, frames, rain
├── robots.txt                 # crawl rules + sitemap pointer
├── llms.txt                   # machine-readable summary for AI agents
├── CNAME                      # sethfengli.com
├── .gitattributes             # LF normalisation; .well-known tokens kept byte-exact
├── .gitignore                 # personal documents + build output stay local
└── README.md                  # This file — repo homepage only (excluded from the build)
```

Content lives in `_includes/*.html`; Chinese copy lives in the `ZH` dictionary in `assets/js/main.js`
(English stays in the HTML — better for SEO and no-JS visitors). Styles are split between
`tokens.css` (colors, themes) and `main.css` (layout & components).

内容按分区拆分在 `_includes/`；中文文案集中在 `assets/js/main.js` 的 `ZH` 字典（英文保留在 HTML 中，
利于 SEO 与无 JS 环境）；样式拆分为 `tokens.css`（色彩/主题变量）与 `main.css`（布局与组件）。

## ✅ Verification (local, no browser needed)

Ruby/Jekyll is not required to check a change — the tooling assembles the page itself and runs
`main.js` against a DOM shim.

```powershell
node tools/site-verify.mjs        # 17 checks — must exit 0 before you push
node tools/site-verify.mjs --json # machine-readable
node tools/negative-test.mjs      # proves the content-drift checks still catch a regression
node tools/check-links.mjs        # every outbound URL, with sources for each failure
node tools/inspect-preview.mjs preview-zh-CN-light.html   # eyeball an assembled preview
```

`site-verify.mjs` writes four previews to `.preview/` (`{en,zh-CN} × {light,night}`); serve the
repo root over HTTP to open them. What it protects, beyond structure and CSS:

| Check | Catches |
| --- | --- |
| `i18n-coverage` / `i18n-dict-parse` | a `data-i18n` key with no Chinese string |
| `i18n-figures` | English and Chinese citing **different numbers** for the same claim |
| `content-stale` | a superseded number or product name surviving a content refresh |
| `plain-language` | insider jargon creeping back into prose (see below) |
| `revision-sync` | the revision stamps disagreeing, or JSON-LD / footer year falling behind |
| `css-lang-display` | both languages rendering at once, or neither |
| `matrix-rain` / `matrix-tap-collapse` / `matrix-glyph-mix` | the CRT panel going static, the tap cycle breaking, the glyph mix drifting |
| `verse-linefit` | a 定场诗 line too wide for its column (it would wrap mid-couplet) |

### Writing rules the tooling enforces (写作规则)

The page is read by hiring managers, clients and peers — not by specialists. In 2026-10 the AI
section was rewritten because a general reader could not follow it. These rules keep it that way:

1. **No jargon without an explanation.** `plain-language` fails the build on a deny list in
   `tools/lib/i18n-integrity.mjs` (`harness`, `idempotency`, 承载层, 幂等, 向量库 …). If a term
   really is needed, explain it with an example instead of using the term.
2. **Chinese is written, not translated.** 信达雅: exact meaning first, then idiomatic, then
   graceful. Read the Chinese aloud — if an engineer would not say it, rewrite it.
3. **Both languages carry the same numbers**, as Arabic numerals in Chinese (`i18n-figures`).
4. **Concrete beats superlative.** No "industry-leading" without the evidence in the same sentence.
5. **Short sentences.** `readability-sentences` reports anything over 32 words (EN) / 55
   characters (ZH). It is advisory, never a failure — a long sentence usually means an unfinished
   thought, except in quoted material and the keyword list, where it is expected.

## 🔄 Keeping it alive (持续演进)

This page is meant to be revised, not framed. **It is reviewed once a quarter** — the review
prompt lives outside the published site, in `../prompts/quarterly-self-review.md` (English and
中文). Start the session with it; it tells the agent to read before writing, judge the copy as an
editor, ask what actually happened, and then edit under these rules.

The mechanics of a content change:

1. Change the content in the include (English) **and** the matching `ZH` key in `main.js`.
2. Bump the revision: `hero.hudRev`, `now.rev`, `now.updated` in `ai.html`, and `footer.rev`.
3. Move a line into **what changed here** in `ai.html` — it is the changelog visitors can read.
4. Update `dateModified` in the JSON-LD block in `_includes/head.html`.
5. Run `node tools/site-verify.mjs` **and** `node tools/check-links.mjs`. Fix what they report.

Rules of thumb: a claim with a number belongs in exactly one place (currently the Projects
section) and every other mention must agree with it; and anything a general reader would have to
look up belongs in an explanation, not in the prose. `content-stale`, `i18n-figures` and
`plain-language` exist because each of those rules was broken at least once.

## 🛠 Stack (技术栈)

Jekyll · Liquid · Vanilla JS (no framework) · CSS custom properties · Google Fonts (Sora / Manrope /
JetBrains Mono / Noto Serif SC, SIL OFL) · [github-readme-stats](https://github.com/anuraghazra/github-readme-stats) ·
GitHub Pages plugins: `jekyll-seo-tag`, `jekyll-sitemap`

## 📸 Image credits (图片来源 — 免费可商用)

- Robot / AI — [Kindel Media, Pexels](https://www.pexels.com/photo/innovasjon-robot-futuristisk-elektronikk-8566470/)
- Data centre server rack — [Panumas Nikhomkhai, Pexels](https://www.pexels.com/photo/serverrack-i-modern-datacenter-37605910/)
- Code on screen — [Daniil Komov, Pexels](https://www.pexels.com/photo/c-n-c-nh-ma-l-p-trinh-tren-man-hinh-may-tinh-34804020/)
- White lotus — [Pescha Taylor, Pexels](https://www.pexels.com/photo/elegante-weisse-lotusblume-in-einem-ruhigen-teich-37060528/)
- Abstract blue — [Steve A Johnson, Pexels](https://www.pexels.com/photo/abstrakte-blau-textur-mit-kunstlerischen-wirbeln-30018095/)

## 🔒 Privacy — never commit documents

The resume (`Seth (Feng) Li Resume CN-EN 20251110.docx`) and all Office/PDF documents are
git-ignored via `*.docx`, `*.doc`, `*.pdf`, `*.pptx`, `*.xlsx`, `*.pages`, `*.key`. Keep them
local only — do not `git add -f` them. Office lock files (`~$Resume.docx`, which appear while a
document is open and contain its filename) are ignored too.

## 🧹 Repo hygiene (仓库约定)

- **`.gitattributes` stores LF for everything** (`* text=auto eol=lf`). `core.autocrlf` is
  `true` on the authoring machine, which previously left four files as LF in the index and CRLF
  on disk, warning on every commit. `LICENSE` is exempt because it is already CRLF in the index
  and normalising it would rewrite 553 lines for nothing.
- **`.well-known/**` is marked `-text`** so the ACME challenge tokens are stored and restored
  byte-exact. A TLS/domain-validation token that gains a `\r` or a trailing newline stops
  validating. `_config.yml` also has to `include: [.well-known]`, because Jekyll skips
  dot-directories by default — without that the files are never published.
- `_site/`, `.jekyll-cache/` and `.preview/` never belong in Git; GitHub Pages builds from source.

## 🔧 Local development (本地开发)

```bash
jekyll serve   # http://127.0.0.1:4000  (Ruby + Jekyll required)
```

No Ruby? Use the Node toolkit above — it assembles the same page from the Liquid source and
serves the result, which is how every change here was verified.

Deploy: GitHub repo → Settings → Pages → Source: **Deploy from a branch** → `master / (root)`.
Custom domain `sethfengli.com` is configured via `CNAME` (DNS CNAME → `seth2000.github.io`).
Assets are cache-busted with `?v={{ site.github.build_revision }}`, so a deploy is picked up on
the next page load rather than after a ~10 minute asset cache.

## 📄 License

Content © Seth (Feng) Li. Code: see [LICENSE](LICENSE).
