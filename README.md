# Seth (Feng) Li — sethfengli.com

[![Live site](https://img.shields.io/badge/live-sethfengli.com-blue?style=flat-square)](https://sethfengli.com)
[![GitHub Pages](https://img.shields.io/badge/hosted-GitHub%20Pages-06b6d4?style=flat-square)](https://pages.github.com)

> **个人主页 / Personal homepage** — Senior Software Developer · Full-Stack & Database Engineer · AI Explorer
> 30+ years of engineering · Sydney, Australia · 码 × AI × 禅

## 🚀 Live

| Homepage | Zen Temple | Company |
| --- | --- | --- |
| [sethfengli.com](https://sethfengli.com) | [zen.sethfengli.com](https://zen.sethfengli.com) · 慧灯禅院 | [fengtech.com.au](https://www.fengtech.com.au/home) |

## 📖 About the site (本站说明)

A fast, bilingual (EN/中) **Jekyll + GitHub Pages** homepage in a warm, sunny style —
ivory paper background, sunshine-amber & sky-blue palette, grand Sora headlines,
soft shadows, animated sun-haze background, ember-star field, scroll reveals,
a live "Matrix rain" code panel, live iframe previews of the two ventures
(Feng Tech + Hui Deng Zen Temple), light/dark themes and a Chinese/English toggle.

Fast, 双语（EN/中）的 **Jekyll + GitHub Pages** 个人主页：温暖阳光风格——象牙纸底色、阳光琥珀与天空蓝配色、
Sora 大字标题、柔和阴影、太阳光晕动画背景、余烬粒子、滚动渐入、「黑客帝国」式动态代码面板、
两个事业（Feng Tech 与慧灯禅院）的实时网页预览、明/暗主题与中英文切换。

## 🗂 Structure (目录结构)

```
SethLee/
├── index.html                 # Homepage — assembles the section includes
├── _config.yml                # Jekyll config + SEO (jekyll-seo-tag, jekyll-sitemap)
├── _layouts/default.html      # HTML skeleton (head, nav, footer, scripts)
├── _includes/                 # One file per page section — easy to maintain
│   ├── head.html              #   meta, fonts, pre-paint boot script
│   ├── float-nav.html         #   floating top-left quick-nav block
│   ├── nav.html               #   sticky nav + language/theme toggles
│   ├── hero.html              #   hero: name, typing line, stats
│   ├── about.html             #   why me: AI / Database / Full-Stack cards
│   ├── career.html            #   timeline (DASH → Feng Tech → education → 1993)
│   ├── stack.html             #   tech stack groups
│   ├── projects.html          #   open-source repos + GitHub stats
│   ├── ventures.html          #   Feng Tech + Zen Temple (live previews)
│   ├── browser-frame.html     #   reusable browser-mockup partial iframe
│   ├── insights.html          #   Zen × Code reflections + poem/code
│   ├── contact.html           #   quote banner + contact
│   └── footer.html            #   credits, keywords, copyright
├── assets/
│   ├── css/tokens.css         # Design tokens (light + night themes)
│   ├── css/main.css           # Layout + components (12 commented sections)
│   └── js/main.js             # i18n, theme, nav, typing, reveal, quotes, starfield
├── CNAME                      # sethfengli.com
└── README.md                  # This file — repo homepage only
```

Content lives in `_includes/*.html`; Chinese copy lives in the `ZH` dictionary in `assets/js/main.js`
(English stays in the HTML — better for SEO and no-JS visitors). Styles are split between
`tokens.css` (colors, themes) and `main.css` (layout & components).

内容按分区拆分在 `_includes/`；中文文案集中在 `assets/js/main.js` 的 `ZH` 字典（英文保留在 HTML 中，
利于 SEO 与无 JS 环境）；样式拆分为 `tokens.css`（色彩/主题变量）与 `main.css`（布局与组件）。

## 🛠 Stack (技术栈)

Jekyll · Liquid · Vanilla JS · CSS custom properties · Google Fonts (Sora / Manrope /
JetBrains Mono / Noto Serif SC, SIL OFL) · [github-readme-stats](https://github.com/anuraghazra/github-readme-stats)

## 📸 Image credits (图片来源 — 免费可商用)

- Robot / AI — [Kindel Media, Pexels](https://www.pexels.com/photo/innovasjon-robot-futuristisk-elektronikk-8566470/)
- Data centre server rack — [Panumas Nikhomkhai, Pexels](https://www.pexels.com/photo/serverrack-i-modern-datacenter-37605910/)
- Code on screen — [Daniil Komov, Pexels](https://www.pexels.com/photo/c-n-c-nh-ma-l-p-trinh-tren-man-hinh-may-tinh-34804020/)
- White lotus — [Pescha Taylor, Pexels](https://www.pexels.com/photo/elegante-weisse-lotusblume-in-einem-ruhigen-teich-37060528/)
- Abstract blue — [Steve A Johnson, Pexels](https://www.pexels.com/photo/abstrakte-blaue-textur-mit-kunstlerischen-wirbeln-30018095/)

## 🔧 Local development (本地开发)

```bash
jekyll serve   # http://127.0.0.1:4000
```

Deploy: GitHub repo → Settings → Pages → Source: **Deploy from a branch** → `master / (root)`.
Custom domain `sethfengli.com` is configured via `CNAME` (DNS CNAME → `seth2000.github.io`).

## 📄 License

Content © Seth (Feng) Li. Code: see [LICENSE](LICENSE).
