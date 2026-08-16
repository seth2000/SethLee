<!--
  ════════════════════════════════════════════════════════════════════════
   Seth Li · 个人主页（单文件版） · "禅 × 码" 设计系统 · 中英双语 · 5 主题
  ════════════════════════════════════════════════════════════════════════
   线上地址 : https://sethfengli.com/          (GitHub Pages, 由本 README 渲染)
   仓库地址 : https://github.com/seth2000/SethLee
   禅院子站 : https://zen.sethfengli.com/       (慧灯禅院, 已嵌入主页)
   公司官网 : https://www.fengtech.com.au/home  (Feng Tech, 已嵌入主页)
   LinkedIn : https://www.linkedin.com/in/seth-li-a825893b

   ▸ 部署：GitHub 仓库 → Settings → Pages → Source: Deploy from a branch
           → Branch: master / (root) → Save。自定义域名在 Pages 中配置
           sethfengli.com（DNS 需 CNAME 记录指向 seth2000.github.io）。
   ▸ SEO：同目录 _config.yml 提供站点标题/描述/Open Graph/JSON-LD/sitemap，
           与 README.md 一起放入仓库根目录即可（jekyll-seo-tag 自动注入）。
   ▸ 说明：本文件同时是 GitHub 仓库首页与 sethfengli.com 的完整主页。
           GitHub.com 上的渲染会过滤 style/script/iframe（显示静态预览），
           GitHub Pages 上呈现完整交互效果（粒子星空、动效、嵌入禅院与公司官网）。
   ▸ 主题：5 套主题（Deep 深空 / Mist 晨雾 / Moss 苔庭 / Dusk 暮山 / Snow 雪禅），
           导航栏下拉切换，选择记忆于 localStorage，首次访问跟随系统明暗偏好。
   ▸ 语言：中英双语切换，默认英文（EN），记忆于 localStorage。
   ▸ 履历：依据 LinkedIn 公开资料（seth-li-a825893b）——
           现职 DASH Technology Group 高级软件工程师；
           自我介绍 "seasoned Full-Stack Software Engineer and Database
           Developer with 30+ years of experience"；湘潭大学 2004–2008。

   ── 图片来源（全部免费可商用）────────────────────────────────────────
   · 迷雾山峦  Photo by Jayakrishnan K P on Unsplash
     https://unsplash.com/photos/misty-mountains-shrouded-in-dense-fog-and-clouds-J6hzH64fNHg
   · 佛光佛像  Photo by itsiken on Unsplash
     https://unsplash.com/photos/a-serene-buddha-statue-bathed-in-mystical-light-s4FU4MGS8_M
   · 水中粉莲  Photo by Jerry She on Unsplash
     https://unsplash.com/photos/a-pink-flower-is-growing-out-of-the-water-oMjI_2khnJE
   · 屏幕代码  Photo by Daniil Komov on Pexels
     https://www.pexels.com/photo/c-n-c-nh-ma-l-p-trinh-tren-man-hinh-may-tinh-34804020/
   · 字体      Inter / JetBrains Mono / Noto Serif SC（Google Fonts, SIL OFL）
   · 数据卡片  github-readme-stats (https://github.com/anuraghazra/github-readme-stats)
  ════════════════════════════════════════════════════════════════════════
-->

<div markdown="0" lang="en" id="zen-home">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&amp;family=JetBrains+Mono:wght@400;500;700&amp;family=Noto+Serif+SC:wght@500;700;900&amp;display=swap" rel="stylesheet">

<script>
/* 提前初始化语言与主题：在内容渲染前应用，避免闪烁。默认英文，主题跟随系统偏好 */
(function () {
  try {
    var lang = null, theme = null;
    try { lang = localStorage.getItem('zh-lang'); theme = localStorage.getItem('zh-theme'); } catch (e) {}
    if (lang !== 'zh' && lang !== 'en') { lang = 'en'; }
    if (!theme) { theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'mist' : 'deep'; }
    var el = document.getElementById('zen-home');
    if (el) { el.setAttribute('data-lang', lang); el.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en'); el.setAttribute('data-theme', theme); }
  } catch (e) {}
})();
</script>

<style>
/* ═══════════════ 1. 基础 / 重置 ═══════════════ */
html, body {
  height: 100%;
  margin: 0 !important;
  overflow: hidden !important;
}
/* 隐藏 GitHub Pages 默认主题（Cayman）的页头与页脚，避免干扰主页布局；
   "SethLee is maintained by seth2000" 已移至本页底部页脚 */
body .page-header, body .site-footer { display: none !important; }
#zen-home {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  overflow-y: auto; overflow-x: hidden;
  background: var(--bg); color: var(--ink);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  line-height: 1.7;
  scroll-behavior: smooth;
  scrollbar-color: var(--scroll-thumb) var(--scroll-track);
  -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility;
  transition: background-color .45s ease, color .45s ease;
  --serif: 'Noto Serif SC', 'Songti SC', SimSun, serif;
  --mono: 'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
  /* ── Deep 深空（默认主题）─ */
  color-scheme: dark;
  --bg: #05070f; --bg2: #0b1022;
  --ink: #e8ecf4; --dim: #9aa5bd; --faint: #5f6b85;
  --gold: #e6c07a; --gold-2: #f2d9a4; --gold-deep: #b98a3e;
  --cyan: #7dd3fc; --violet: #a78bfa; --jade: #7fd1c0; --rose: #e8a0bf;
  --line: rgba(255,255,255,.08); --line-2: rgba(255,255,255,.14);
  --glass: rgba(255,255,255,.045); --glass-2: rgba(255,255,255,.07);
  --panel-a: rgba(255,255,255,.055); --panel-b: rgba(255,255,255,.02);
  --nav-bg: rgba(5,8,18,.72); --menu-bg: rgba(8,12,26,.95);
  --frame-bg: rgba(8,12,26,.6); --bar-bg: rgba(255,255,255,.03);
  --footer-bg: rgba(3,5,12,.85);
  --shadow: rgba(0,0,0,.8); --shadow-2: rgba(0,0,0,.85);
  --gold-a1: rgba(230,192,122,.1); --gold-a2: rgba(230,192,122,.35); --gold-a3: rgba(230,192,122,.4); --gold-a4: rgba(230,192,122,.55);
  --cyan-a1: rgba(125,211,252,.5); --cyan-a2: rgba(125,211,252,.35); --cyan-a3: rgba(125,211,252,.07);
  --jade-a1: rgba(127,209,192,.3); --jade-a2: rgba(127,209,192,.06);
  --code-bg: rgba(3,6,16,.75); --code-ink: #c9d4ea;
  --tok-k: #a78bfa; --tok-t: #7dd3fc; --tok-f: #f2d9a4; --tok-s: #7fd1c0; --tok-m: #e8a0bf; --tok-p: #8fa3c8;
  --title-grad: linear-gradient(100deg, #f6e7c6 0%, #e6c07a 38%, #7dd3fc 78%, #a78bfa 100%);
  --quote-ink: #f4efe4;
  --ov-a: rgba(5,7,15,.94); --ov-m: rgba(5,7,15,.55);
  --orb-a: #8a5a2b; --orb-b: #143a5e; --orb-c: #3b2a6e; --orb-op: .3;
  --grid-line: rgba(255,255,255,.035); --noise-op: .05;
  --scroll-thumb: #232c44; --scroll-track: #070b16;
  --iframe-bg: #12100c;
  --edge: rgba(255,255,255,.22);
  --brand-bg: linear-gradient(135deg, #2a2438, #101a33); --brand-glow: rgba(230,192,122,.25);
  --sec-alt: linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,.02));
  --scrim: linear-gradient(180deg, rgba(5,8,18,0) 30%, rgba(5,8,18,.85) 100%);
}
/* ── Mist 晨雾：暖纸浅色 ── */
#zen-home[data-theme="mist"] {
  color-scheme: light;
  --bg: #f5f1e8; --bg2: #efe9dc;
  --ink: #2b2d36; --dim: #5b6070; --faint: #9298a6;
  --gold: #a97f35; --gold-2: #7d5c22; --gold-deep: #8a6a2f;
  --cyan: #0b7ba4; --violet: #7057b8; --jade: #2a8372; --rose: #b0526c;
  --line: rgba(35,38,50,.1); --line-2: rgba(35,38,50,.18);
  --glass: rgba(255,255,255,.55); --glass-2: rgba(255,255,255,.8);
  --panel-a: rgba(255,255,255,.85); --panel-b: rgba(245,241,232,.55);
  --nav-bg: rgba(245,241,232,.85); --menu-bg: rgba(250,247,240,.97);
  --frame-bg: rgba(255,255,255,.75); --bar-bg: rgba(35,38,50,.05);
  --footer-bg: rgba(240,236,226,.9);
  --shadow: rgba(90,80,60,.18); --shadow-2: rgba(90,80,60,.22);
  --gold-a1: rgba(169,127,53,.12); --gold-a2: rgba(169,127,53,.4); --gold-a3: rgba(169,127,53,.5); --gold-a4: rgba(169,127,53,.4);
  --cyan-a1: rgba(11,123,164,.35); --cyan-a2: rgba(11,123,164,.28); --cyan-a3: rgba(11,123,164,.08);
  --jade-a1: rgba(42,131,114,.3); --jade-a2: rgba(42,131,114,.08);
  --code-bg: rgba(255,255,255,.85); --code-ink: #39404f;
  --tok-k: #7057b8; --tok-t: #0b7ba4; --tok-f: #7d5c22; --tok-s: #2a8372; --tok-m: #b0526c; --tok-p: #6b7284;
  --title-grad: linear-gradient(100deg, #7d5c22 0%, #a97f35 38%, #0b7ba4 78%, #7057b8 100%);
  --quote-ink: #2b2d36;
  --ov-a: rgba(245,241,232,.93); --ov-m: rgba(245,241,232,.55);
  --orb-a: #e8c98d; --orb-b: #a8d3e8; --orb-c: #cfc1ec; --orb-op: .5;
  --grid-line: rgba(35,38,50,.06); --noise-op: .035;
  --scroll-thumb: #cfc9bb; --scroll-track: #f5f1e8;
  --iframe-bg: #ffffff;
  --edge: rgba(255,255,255,.9);
  --brand-bg: linear-gradient(135deg, #f0e6cf, #e6dcc2); --brand-glow: rgba(169,127,53,.35);
  --sec-alt: linear-gradient(180deg, rgba(35,38,50,.03), rgba(35,38,50,0) 30%, rgba(35,38,50,0) 70%, rgba(35,38,50,.03));
  --scrim: linear-gradient(180deg, rgba(30,34,44,0) 30%, rgba(30,34,44,.55) 100%);
}
/* ── Moss 苔庭：青苔禅绿 ── */
#zen-home[data-theme="moss"] {
  color-scheme: dark;
  --bg: #07110c; --bg2: #0b1a12;
  --ink: #e6efe8; --dim: #9fb8a8; --faint: #68806f;
  --gold: #d9b877; --gold-2: #e8cf9c; --gold-deep: #b98f4e;
  --cyan: #8fd6c8; --violet: #b7a6f0; --jade: #7fd1a0; --rose: #e8a0b4;
  --line: rgba(255,255,255,.08); --line-2: rgba(255,255,255,.14);
  --glass: rgba(255,255,255,.045); --glass-2: rgba(255,255,255,.07);
  --panel-a: rgba(255,255,255,.055); --panel-b: rgba(255,255,255,.02);
  --nav-bg: rgba(7,17,12,.75); --menu-bg: rgba(9,20,14,.96);
  --frame-bg: rgba(9,20,14,.6); --bar-bg: rgba(255,255,255,.03);
  --footer-bg: rgba(4,10,7,.85);
  --shadow: rgba(0,0,0,.8); --shadow-2: rgba(0,0,0,.85);
  --gold-a1: rgba(217,184,119,.1); --gold-a2: rgba(217,184,119,.35); --gold-a3: rgba(217,184,119,.45); --gold-a4: rgba(217,184,119,.5);
  --cyan-a1: rgba(143,214,200,.5); --cyan-a2: rgba(143,214,200,.35); --cyan-a3: rgba(143,214,200,.07);
  --jade-a1: rgba(127,209,160,.3); --jade-a2: rgba(127,209,160,.07);
  --code-bg: rgba(4,12,8,.75); --code-ink: #c4d6ca;
  --tok-k: #b7a6f0; --tok-t: #8fd6c8; --tok-f: #e8cf9c; --tok-s: #7fd1a0; --tok-m: #e8a0b4; --tok-p: #8fa898;
  --title-grad: linear-gradient(100deg, #f0e3c0 0%, #d9b877 38%, #8fd6c8 78%, #b7a6f0 100%);
  --quote-ink: #eef4ea;
  --ov-a: rgba(7,17,12,.94); --ov-m: rgba(7,17,12,.55);
  --orb-a: #2c5c3d; --orb-b: #1d4a4d; --orb-c: #3d2f63; --orb-op: .32;
  --grid-line: rgba(255,255,255,.03); --noise-op: .05;
  --scroll-thumb: #243d2d; --scroll-track: #07110c;
  --iframe-bg: #0c120e;
  --edge: rgba(255,255,255,.2);
  --brand-bg: linear-gradient(135deg, #1d3326, #12261b); --brand-glow: rgba(217,184,119,.25);
  --sec-alt: linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,.02));
  --scrim: linear-gradient(180deg, rgba(5,12,8,0) 30%, rgba(5,12,8,.85) 100%);
}
/* ── Dusk 暮山：霞紫黄昏 ── */
#zen-home[data-theme="dusk"] {
  color-scheme: dark;
  --bg: #120b1d; --bg2: #1a1027;
  --ink: #f0e9f4; --dim: #b3a5c2; --faint: #786a8e;
  --gold: #f0b06e; --gold-2: #f7c78f; --gold-deep: #c98a4a;
  --cyan: #8fc7e8; --violet: #b7a6f0; --jade: #9fd8b0; --rose: #e89ab5;
  --line: rgba(255,255,255,.09); --line-2: rgba(255,255,255,.15);
  --glass: rgba(255,255,255,.05); --glass-2: rgba(255,255,255,.08);
  --panel-a: rgba(255,255,255,.06); --panel-b: rgba(255,255,255,.02);
  --nav-bg: rgba(18,11,29,.75); --menu-bg: rgba(22,14,34,.96);
  --frame-bg: rgba(22,14,34,.6); --bar-bg: rgba(255,255,255,.03);
  --footer-bg: rgba(10,6,16,.85);
  --shadow: rgba(0,0,0,.8); --shadow-2: rgba(0,0,0,.85);
  --gold-a1: rgba(240,176,110,.12); --gold-a2: rgba(240,176,110,.35); --gold-a3: rgba(240,176,110,.45); --gold-a4: rgba(240,176,110,.55);
  --cyan-a1: rgba(143,199,232,.5); --cyan-a2: rgba(143,199,232,.35); --cyan-a3: rgba(143,199,232,.08);
  --jade-a1: rgba(159,216,176,.3); --jade-a2: rgba(159,216,176,.07);
  --code-bg: rgba(16,9,26,.75); --code-ink: #d8cce6;
  --tok-k: #c3b4f7; --tok-t: #8fc7e8; --tok-f: #f7c78f; --tok-s: #9fd8b0; --tok-m: #e89ab5; --tok-p: #a08fb8;
  --title-grad: linear-gradient(100deg, #ffe3c2 0%, #f0b06e 38%, #8fc7e8 78%, #b7a6f0 100%);
  --quote-ink: #f7f0fa;
  --ov-a: rgba(18,11,29,.94); --ov-m: rgba(18,11,29,.55);
  --orb-a: #5e3a2a; --orb-b: #3a2a5e; --orb-c: #6e2a4a; --orb-op: .34;
  --grid-line: rgba(255,255,255,.035); --noise-op: .05;
  --scroll-thumb: #33284a; --scroll-track: #120b1d;
  --iframe-bg: #140e20;
  --edge: rgba(255,255,255,.22);
  --brand-bg: linear-gradient(135deg, #35244a, #241537); --brand-glow: rgba(240,176,110,.25);
  --sec-alt: linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,.02));
  --scrim: linear-gradient(180deg, rgba(10,6,18,0) 30%, rgba(10,6,18,.85) 100%);
}
/* ── Snow 雪禅：清冷极简 ── */
#zen-home[data-theme="snow"] {
  color-scheme: light;
  --bg: #f6f8fb; --bg2: #eef1f7;
  --ink: #262b36; --dim: #565d6d; --faint: #8b93a5;
  --gold: #a97f35; --gold-2: #7d5c22; --gold-deep: #8a6a2f;
  --cyan: #2a6f9e; --violet: #5e4fa3; --jade: #2c7a6b; --rose: #b0526c;
  --line: rgba(30,40,60,.1); --line-2: rgba(30,40,60,.16);
  --glass: rgba(255,255,255,.6); --glass-2: rgba(255,255,255,.85);
  --panel-a: rgba(255,255,255,.9); --panel-b: rgba(240,243,249,.6);
  --nav-bg: rgba(246,248,251,.85); --menu-bg: rgba(252,253,255,.97);
  --frame-bg: rgba(255,255,255,.8); --bar-bg: rgba(30,40,60,.05);
  --footer-bg: rgba(236,240,247,.9);
  --shadow: rgba(50,70,100,.15); --shadow-2: rgba(50,70,100,.2);
  --gold-a1: rgba(169,127,53,.12); --gold-a2: rgba(169,127,53,.4); --gold-a3: rgba(169,127,53,.5); --gold-a4: rgba(169,127,53,.4);
  --cyan-a1: rgba(42,111,158,.4); --cyan-a2: rgba(42,111,158,.3); --cyan-a3: rgba(42,111,158,.08);
  --jade-a1: rgba(44,122,107,.3); --jade-a2: rgba(44,122,107,.08);
  --code-bg: rgba(255,255,255,.9); --code-ink: #3a4150;
  --tok-k: #5e4fa3; --tok-t: #2a6f9e; --tok-f: #7d5c22; --tok-s: #2c7a6b; --tok-m: #b0526c; --tok-p: #6d7689;
  --title-grad: linear-gradient(100deg, #7d5c22 0%, #a97f35 38%, #2a6f9e 78%, #5e4fa3 100%);
  --quote-ink: #262b36;
  --ov-a: rgba(246,248,251,.93); --ov-m: rgba(246,248,251,.6);
  --orb-a: #d8e4f2; --orb-b: #c9d8ee; --orb-c: #dcd2ee; --orb-op: .55;
  --grid-line: rgba(30,40,60,.06); --noise-op: .03;
  --scroll-thumb: #c6cede; --scroll-track: #f6f8fb;
  --iframe-bg: #ffffff;
  --edge: rgba(255,255,255,.95);
  --brand-bg: linear-gradient(135deg, #e8eef7, #dbe4f0); --brand-glow: rgba(42,111,158,.3);
  --sec-alt: linear-gradient(180deg, rgba(30,40,60,.03), rgba(30,40,60,0) 30%, rgba(30,40,60,0) 70%, rgba(30,40,60,.03));
  --scrim: linear-gradient(180deg, rgba(30,40,60,0) 30%, rgba(30,40,60,.5) 100%);
}
/* ── 中英双语切换：默认英文 ── */
#zen-home .zh { display: none; }
#zen-home[data-lang="zh"] .en { display: none; }
#zen-home[data-lang="zh"] .zh { display: inline; }
#zen-home ::selection { background: rgba(230,192,122,.35); }
#zen-home :focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; border-radius: 4px; }
#zen-home ::-webkit-scrollbar { width: 10px; }
#zen-home ::-webkit-scrollbar-thumb { background: var(--scroll-thumb); border-radius: 8px; border: 2px solid var(--scroll-track); }
#zen-home ::-webkit-scrollbar-track { background: var(--scroll-track); }
#zen-home a { text-decoration: none; }
#zen-home img { max-width: 100%; }

/* ═══════════════ 2. 全局背景特效 ═══════════════ */
.bg-fx { position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
.orb { position: absolute; border-radius: 50%; filter: blur(90px); opacity: var(--orb-op); transition: background .6s ease; }
.orb-a { width: 46vw; height: 46vw; left: -12vw; top: -16vw; background: radial-gradient(circle, var(--orb-a), transparent 65%); animation: drift1 26s ease-in-out infinite alternate; }
.orb-b { width: 40vw; height: 40vw; right: -14vw; top: 20vh; background: radial-gradient(circle, var(--orb-b), transparent 65%); animation: drift2 32s ease-in-out infinite alternate; }
.orb-c { width: 34vw; height: 34vw; left: 30vw; bottom: -18vw; background: radial-gradient(circle, var(--orb-c), transparent 65%); animation: drift3 38s ease-in-out infinite alternate; }
@keyframes drift1 { to { transform: translate(6vw, 8vh) scale(1.12); } }
@keyframes drift2 { to { transform: translate(-5vw, -7vh) scale(1.08); } }
@keyframes drift3 { to { transform: translate(-4vw, -6vh) scale(1.15); } }
.grid-fx {
  position: absolute; inset: 0;
  background-image: linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 56px 56px;
  -webkit-mask-image: radial-gradient(ellipse at 50% 28%, #000 0%, transparent 72%);
  mask-image: radial-gradient(ellipse at 50% 28%, #000 0%, transparent 72%);
}
.noise-fx {
  position: absolute; inset: 0; opacity: var(--noise-op);
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='120' height='120' filter='url(%23n)' opacity='0.5'/></svg>");
}

/* ═══════════════ 3. 进度条 / 导航 ═══════════════ */
#zh-progress {
  position: fixed; top: 0; left: 0; right: 0; height: 3px; z-index: 60;
  background: linear-gradient(90deg, var(--gold), var(--cyan), var(--violet));
  transform: scaleX(0); transform-origin: 0 50%;
}
.zh-nav {
  position: sticky; top: 0; z-index: 50; padding: 14px 0;
  transition: background .3s, box-shadow .3s, border-color .3s;
  border-bottom: 1px solid transparent;
}
.zh-nav.scrolled {
  background: var(--nav-bg);
  -webkit-backdrop-filter: blur(14px) saturate(150%); backdrop-filter: blur(14px) saturate(150%);
  border-bottom-color: var(--line);
  box-shadow: 0 10px 30px -18px var(--shadow);
}
.nav-inner { max-width: 1160px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; gap: 12px; }
.brand { display: flex; align-items: center; gap: 10px; color: var(--ink); font-weight: 800; letter-spacing: .2px; }
.brand-mark {
  width: 34px; height: 34px; border-radius: 10px; display: grid; place-items: center;
  background: var(--brand-bg); border: 1px solid var(--line-2);
  font-family: var(--serif); color: var(--gold-2); font-size: 15px;
  box-shadow: 0 0 18px var(--brand-glow) inset;
}
.nav-links { margin-left: auto; display: flex; align-items: center; gap: 2px; }
.nav-links a { padding: 8px 11px; border-radius: 999px; color: var(--dim); font-size: 13px; font-weight: 500; transition: color .25s, background .25s; }
.nav-links a:hover { color: var(--ink); background: var(--glass-2); }
.nav-links a.active { color: var(--gold-2); background: var(--gold-a1); }
.nav-cta { margin-left: 4px; padding: 8px 15px !important; border: 1px solid var(--line-2); color: var(--gold-2) !important; font-family: var(--mono); font-size: 12px !important; }
/* 语言切换 */
.lang-sw { display: flex; margin-left: 8px; border: 1px solid var(--line-2); border-radius: 999px; overflow: hidden; flex: 0 0 auto; }
.lang-sw button { padding: 7px 12px; border: 0; background: transparent; color: var(--dim); font-family: var(--mono); font-size: 12px; cursor: pointer; transition: background .2s, color .2s; }
.lang-sw button.on { background: var(--gold-a1); color: var(--gold-2); }
/* 主题下拉 */
.th-wrap { position: relative; margin-left: 6px; padding-left: 10px; border-left: 1px solid var(--line-2); flex: 0 0 auto; }
.th-btn {
  display: flex; align-items: center; gap: 7px; padding: 7px 12px; border-radius: 999px;
  border: 1px solid var(--line-2); background: var(--glass); color: var(--dim);
  font-family: var(--mono); font-size: 12px; cursor: pointer; transition: color .2s, border-color .2s;
}
.th-btn:hover { color: var(--ink); border-color: var(--gold-a2); }
.th-dot { width: 12px; height: 12px; border-radius: 50%; display: inline-block; border: 1px solid var(--line-2); }
.th-caret { font-size: 9px; }
.th-menu {
  position: absolute; top: calc(100% + 8px); right: 0; min-width: 172px; padding: 8px; z-index: 55;
  border-radius: 14px; border: 1px solid var(--line); background: var(--menu-bg);
  -webkit-backdrop-filter: blur(18px); backdrop-filter: blur(18px);
  box-shadow: 0 24px 60px -20px var(--shadow);
  display: none; flex-direction: column; gap: 2px;
}
.th-menu.open { display: flex; }
.th-item {
  display: flex; align-items: center; gap: 9px; padding: 8px 10px; border-radius: 10px;
  border: 0; background: transparent; color: var(--dim); font-size: 12.5px;
  cursor: pointer; text-align: left; font-family: var(--mono); transition: background .2s, color .2s;
}
.th-item:hover { background: var(--glass-2); color: var(--ink); }
.th-item.on { color: var(--gold-2); background: var(--gold-a1); }
.th-item i { width: 14px; height: 14px; border-radius: 50%; display: inline-block; border: 1px solid var(--line-2); }
#zh-burger {
  display: none; margin-left: auto; width: 40px; height: 40px; border-radius: 12px;
  border: 1px solid var(--line-2); background: var(--glass); color: var(--ink);
  cursor: pointer; font-size: 17px;
}

/* ═══════════════ 4. Hero ═══════════════ */
.hero { position: relative; z-index: 1; min-height: 92vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 120px 24px 84px; }
#zh-stars { position: absolute; inset: 0; width: 100%; height: 100%; }
.hero-inner { position: relative; max-width: 900px; }
.eyebrow { font-family: var(--mono); font-size: 12.5px; letter-spacing: .08em; color: var(--gold); }
.caret { display: inline-block; margin-left: 2px; color: var(--gold); animation: blink 1.1s steps(1) infinite; }
@keyframes blink { 50% { opacity: 0; } }
.hero-title {
  margin: 18px 0 6px; font-size: clamp(2.6rem, 7vw, 5rem); line-height: 1.05; font-weight: 800; letter-spacing: -.02em;
  background: var(--title-grad);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent; color: transparent;
}
.hero-sub {
  display: block; margin-top: 14px; font-family: var(--serif);
  font-size: clamp(.95rem, 2.4vw, 1.3rem); font-weight: 500; letter-spacing: .22em;
  -webkit-text-fill-color: var(--gold-2); color: var(--gold-2);
}
.hero-type { min-height: 30px; margin-top: 22px; font-family: var(--mono); font-size: clamp(.9rem, 2vw, 1.05rem); color: var(--dim); }
.hero-bio { max-width: 720px; margin: 20px auto 0; color: var(--dim); font-size: 15.5px; }
.hero-bio strong { color: var(--gold-2); font-weight: 600; }
.hero-cta { margin-top: 34px; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.btn {
  display: inline-flex; align-items: center; gap: 8px; padding: 13px 26px; border-radius: 999px;
  font-weight: 600; font-size: 14.5px; color: var(--ink);
  transition: transform .25s, box-shadow .25s, border-color .25s, background .25s;
}
.btn-gold { background: linear-gradient(135deg, #f2d9a4, #d4a94e); color: #1a1306 !important; box-shadow: 0 10px 34px -12px var(--gold-a4); }
.btn-gold:hover { transform: translateY(-2px); box-shadow: 0 16px 44px -12px var(--gold-a4); }
.btn-ghost { border: 1px solid var(--line-2); background: var(--glass); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }
.btn-ghost:hover { transform: translateY(-2px); border-color: var(--cyan-a1); box-shadow: 0 12px 34px -16px var(--cyan-a2); }
.hero-stats { margin-top: 56px; display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
.stat {
  min-width: 140px; padding: 18px 20px; border-radius: 16px; border: 1px solid var(--line);
  background: var(--glass); -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px);
  transition: transform .25s, border-color .25s;
}
.stat:hover { transform: translateY(-3px); border-color: var(--gold-a2); }
.stat b { display: block; font-family: var(--mono); font-size: 1.45rem; color: var(--gold-2); font-weight: 700; }
.stat span { font-size: 12px; color: var(--faint); letter-spacing: .06em; }
.scroll-hint { position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); color: var(--faint); font-size: 24px; animation: bob 2.2s ease-in-out infinite; }
@keyframes bob { 0%, 100% { transform: translate(-50%, 0); } 50% { transform: translate(-50%, 8px); } }

/* ═══════════════ 5. 区块骨架 ═══════════════ */
.sec { position: relative; z-index: 1; padding: 96px 24px; scroll-margin-top: 84px; }
.sec-alt { background: var(--sec-alt); }
.wrap { max-width: 1120px; margin: 0 auto; }
.sec-head { max-width: 780px; margin-bottom: 48px; }
.sec-head h2 { margin: 10px 0 12px; font-family: var(--serif); font-size: clamp(1.6rem, 4vw, 2.3rem); font-weight: 700; letter-spacing: .02em; color: var(--ink); }
.sec-head h2 em { font-style: normal; background: linear-gradient(90deg, var(--gold), var(--gold-2)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
.sec-head .sub { color: var(--dim); font-size: 15px; max-width: 660px; margin: 0; }

/* ═══════════════ 6. 滚动显现 / 卡片 ═══════════════ */
.reveal { transition: opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1); transition-delay: var(--d, 0s); }
#zen-home.js-ready .reveal { opacity: 0; transform: translateY(26px); }
#zen-home.js-ready .reveal.in { opacity: 1; transform: none; }
.card {
  position: relative; border: 1px solid var(--line); border-radius: 20px; overflow: hidden;
  background: linear-gradient(160deg, var(--panel-a), var(--panel-b));
  -webkit-backdrop-filter: blur(14px) saturate(140%); backdrop-filter: blur(14px) saturate(140%);
  transition: transform .35s, border-color .35s, box-shadow .35s, background .45s ease;
}
.card::before {
  content: ""; position: absolute; top: 0; left: 8%; right: 8%; height: 1px;
  background: linear-gradient(90deg, transparent, var(--edge), transparent);
  opacity: .55; pointer-events: none;
}
.card:hover {
  transform: translateY(-5px); border-color: var(--gold-a2);
  box-shadow: 0 24px 60px -28px var(--shadow-2), 0 0 0 1px var(--gold-a1), 0 0 44px -18px var(--gold-a2);
}
.card-img { position: relative; aspect-ratio: 16 / 9; overflow: hidden; }
.card-img img { width: 100%; height: 100%; object-fit: cover; display: block; transform: scale(1.02); transition: transform .6s; }
.card:hover .card-img img { transform: scale(1.07); }
.card-img::after { content: ""; position: absolute; inset: 0; background: var(--scrim); }
.img-credit { position: absolute; right: 10px; bottom: 8px; z-index: 1; font-size: 10px; color: rgba(255,255,255,.55); font-family: var(--mono); }
.card-body { padding: 24px 26px 28px; }
.card-icon { width: 46px; height: 46px; display: grid; place-items: center; font-size: 22px; border-radius: 13px; background: var(--glass-2); border: 1px solid var(--line-2); margin-bottom: 14px; }
.card-body h3 { margin: 0 0 10px; font-size: 1.22rem; font-weight: 700; color: var(--ink); }
.card-body h3 span { color: var(--faint); font-weight: 500; font-size: .9rem; }
.card-body p { margin: 0 0 16px; color: var(--dim); font-size: 14.5px; }
.chips { display: flex; flex-wrap: wrap; gap: 8px; }
.chip { font-family: var(--mono); font-size: 11.5px; padding: 5px 11px; border-radius: 999px; border: 1px solid var(--line-2); color: var(--dim); background: var(--glass); letter-spacing: .02em; }
.chip.hot { color: var(--gold-2); border-color: var(--gold-a3); background: var(--gold-a1); }

/* ═══════════════ 7. 履历时间线 ═══════════════ */
.timeline { display: flex; flex-direction: column; gap: 18px; }
.tl-item { display: grid; grid-template-columns: 150px 1fr; gap: 22px; padding: 24px 28px; }
.tl-when b { display: block; font-family: var(--mono); font-size: 1.05rem; color: var(--gold-2); }
.tl-when span { display: block; font-family: var(--mono); font-size: 11px; color: var(--faint); letter-spacing: .08em; margin-top: 2px; }
.tl-body h3 { margin: 0 0 8px; font-family: var(--serif); font-size: 1.15rem; font-weight: 700; color: var(--ink); }
.tl-body p { margin: 0 0 12px; color: var(--dim); font-size: 14px; }
.tl-link { font-family: var(--mono); font-size: 12px; color: var(--gold); }

/* ═══════════════ 8. 哲思 / 代码 / 签诗 ═══════════════ */
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.ins-card { padding: 26px; }
.ins-card .tag {
  display: inline-block; font-family: var(--mono); font-size: 10.5px; letter-spacing: .12em; text-transform: uppercase;
  color: var(--jade); border: 1px solid var(--jade-a1); background: var(--jade-a2);
  border-radius: 999px; padding: 4px 10px; margin-bottom: 14px;
}
.ins-card h3 { margin: 0 0 10px; font-family: var(--serif); font-size: 1.12rem; font-weight: 700; color: var(--ink); line-height: 1.5; }
.ins-card p { margin: 0; color: var(--dim); font-size: 13.8px; }
.ins-card .eng { display: block; margin-top: 10px; font-family: var(--mono); font-size: 11px; color: var(--faint); letter-spacing: .02em; }
.code-row { display: grid; grid-template-columns: 1.2fr 1fr; gap: 20px; margin-top: 20px; }
pre.code { margin: 0; padding: 24px 26px; overflow-x: auto; font-family: var(--mono); font-size: 12.8px; line-height: 1.75; color: var(--code-ink); background: var(--code-bg); }
pre.code .c-k { color: var(--tok-k); } pre.code .c-t { color: var(--tok-t); } pre.code .c-f { color: var(--tok-f); }
pre.code .c-s { color: var(--tok-s); } pre.code .c-m { color: var(--tok-m); } pre.code .c-p { color: var(--tok-p); }
.poem-card { padding: 30px 30px 26px; display: flex; flex-direction: column; }
.poem { font-family: var(--serif); font-size: 1.18rem; line-height: 2.1; color: var(--ink); text-align: center; letter-spacing: .08em; margin: 0; }
.poem small { display: block; font-family: var(--mono); font-size: 11px; color: var(--gold); letter-spacing: .18em; margin-bottom: 12px; }
.poem-en { font-size: 12.5px; color: var(--dim); text-align: center; font-style: italic; line-height: 1.9; margin: 14px 0 0; }
.poem-note { margin-top: auto; padding-top: 18px; font-size: 12px; color: var(--faint); text-align: center; border-top: 1px dashed var(--line-2); }
.seal {
  display: inline-grid; place-items: center; width: 44px; height: 44px; margin: 16px auto 0; border-radius: 10px;
  background: linear-gradient(150deg, #c8553d, #96251c); color: #fff; font-family: var(--serif); font-size: 22px; font-weight: 900;
  box-shadow: 0 8px 20px -8px rgba(200,85,61,.6); transform: rotate(-4deg);
}

/* ═══════════════ 9. 技术栈 / 项目 ═══════════════ */
.stack-groups { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.stack-group { padding: 22px 24px; }
.stack-group h3 { margin: 0 0 14px; font-family: var(--mono); font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: var(--gold); }
.proj-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.proj-card { padding: 26px; display: flex; flex-direction: column; gap: 10px; }
.proj-top { display: flex; align-items: center; gap: 10px; }
.proj-name { font-family: var(--mono); font-size: 1.02rem; font-weight: 700; color: var(--ink); }
.proj-lang { font-size: 11px; padding: 3px 9px; border-radius: 999px; color: var(--cyan); border: 1px solid var(--cyan-a2); background: var(--cyan-a3); }
.proj-star { margin-left: auto; font-size: 12px; color: var(--gold-2); font-family: var(--mono); }
.proj-card p { margin: 0; color: var(--dim); font-size: 13.8px; flex: 1; }
.proj-link { font-family: var(--mono); font-size: 12px; color: var(--gold); }
.proj-more { margin-top: 18px; text-align: center; font-size: 13px; color: var(--faint); font-family: var(--mono); }
.proj-more a { color: var(--dim); }
.stats-row { margin-top: 30px; display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
.stats-row img { border-radius: 14px; border: 1px solid var(--line); background: var(--bar-bg); }

/* ═══════════════ 10. 站点嵌入（禅院 / 公司官网） ═══════════════ */
.zen-frame {
  border-radius: 20px; border: 1px solid var(--line-2); overflow: hidden;
  background: var(--frame-bg); -webkit-backdrop-filter: blur(16px); backdrop-filter: blur(16px);
  box-shadow: 0 40px 90px -40px var(--shadow), 0 0 0 1px var(--gold-a1);
}
.zen-bar { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-bottom: 1px solid var(--line); background: var(--bar-bg); flex-wrap: wrap; }
.zen-dots { display: flex; gap: 6px; }
.zen-dots i { width: 11px; height: 11px; border-radius: 50%; background: #f26d5f; display: block; }
.zen-dots i:nth-child(2) { background: #f2c94c; }
.zen-dots i:nth-child(3) { background: #6fcf97; }
.zen-url {
  flex: 1; min-width: 160px; font-family: var(--mono); font-size: 12px; color: var(--faint);
  background: var(--bar-bg); border: 1px solid var(--line); border-radius: 999px; padding: 6px 14px;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.zen-tools { display: flex; gap: 6px; align-items: center; }
.zen-tools button {
  font-family: var(--mono); font-size: 11.5px; padding: 6px 12px; border-radius: 999px;
  border: 1px solid var(--line-2); background: transparent; color: var(--dim); cursor: pointer;
  transition: color .25s, border-color .25s, background .25s;
}
.zen-tools button.on, .zen-tools button:hover { color: var(--gold-2); border-color: var(--gold-a3); background: var(--gold-a1); }
.zen-open { color: var(--ink) !important; border-color: var(--cyan-a1) !important; }
.zen-stage { max-width: 100%; margin: 0 auto; transition: max-width .45s cubic-bezier(.2,.7,.2,1); }
.zen-stage iframe { display: block; width: 100%; height: 640px; border: 0; background: var(--iframe-bg); }
.sec[data-mode="tablet"] .zen-stage { max-width: 768px; }
.sec[data-mode="mobile"] .zen-stage { max-width: 400px; }
.zen-note { margin-top: 20px; display: flex; align-items: center; justify-content: center; gap: 12px; color: var(--faint); font-size: 12.5px; font-family: var(--mono); text-align: center; flex-wrap: wrap; }
.zen-note img { width: 46px; height: 46px; border-radius: 50%; object-fit: cover; border: 1px solid var(--line-2); flex: 0 0 auto; }

/* ═══════════════ 11. 心语横幅 / 联系 / 页脚 ═══════════════ */
.quote-sec { position: relative; z-index: 1; min-height: 62vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 96px 24px; overflow: hidden; }
.quote-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: .5; }
.quote-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, var(--ov-a) 0%, var(--ov-m) 45%, var(--ov-a) 100%); transition: background .45s ease; }
.quote-inner { position: relative; max-width: 800px; }
.quote-mark { font-family: var(--serif); font-size: 3.4rem; color: var(--gold); line-height: 1; margin-bottom: 6px; }
#zh-quote { margin: 0; font-family: var(--serif); font-size: clamp(1.25rem, 3.4vw, 1.75rem); font-weight: 700; letter-spacing: .06em; color: var(--quote-ink); line-height: 2; transition: opacity .45s ease; }
#zh-quote-author { display: block; margin-top: 18px; font-style: normal; font-size: 13px; letter-spacing: .22em; color: var(--gold); transition: opacity .45s ease; }
.center { text-align: center; }
.contact-line { font-family: var(--serif); font-size: clamp(1.3rem, 3.2vw, 1.9rem); font-weight: 500; color: var(--ink); margin: 0 0 30px; }
.contact-info { margin-top: 34px; font-family: var(--mono); font-size: 12.5px; color: var(--faint); letter-spacing: .05em; }
footer { position: relative; z-index: 1; border-top: 1px solid var(--line); padding: 44px 24px 36px; background: var(--footer-bg); transition: background .45s ease; }
.foot-grid { display: flex; justify-content: space-between; gap: 26px; flex-wrap: wrap; }
.foot-brand { font-family: var(--serif); color: var(--gold-2); font-size: 1.02rem; letter-spacing: .08em; }
.foot-brand small { display: block; font-family: var(--mono); font-size: 11px; color: var(--faint); letter-spacing: .04em; margin-top: 6px; }
.foot-credits { max-width: 500px; font-size: 11.5px; color: var(--faint); line-height: 1.9; }
.foot-credits a { color: var(--dim); }
.foot-keywords { width: 100%; margin-top: 16px; font-family: var(--mono); font-size: 10.5px; color: var(--faint); line-height: 2; text-align: center; }
.foot-copy { width: 100%; margin-top: 16px; padding-top: 16px; border-top: 1px dashed var(--line); font-family: var(--mono); font-size: 11px; color: var(--faint); display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
.foot-credit { width: 100%; margin: 10px 0 0; text-align: center; font-family: var(--mono); font-size: 10.5px; color: var(--faint); }
.foot-credit a { color: var(--dim); }

/* ═══════════════ 12. GitHub.com 降级（仅预览页可见） ═══════════════ */
.gh-only, .gh-fallback { display: none !important; }

/* ═══════════════ 13. 响应式 ═══════════════ */
@media (max-width: 1060px) {
  .nav-links a { padding: 8px 9px; font-size: 12.5px; }
}
@media (max-width: 900px) {
  .about-grid, .grid-3, .code-row, .stack-groups, .proj-grid { grid-template-columns: 1fr; }
  .sec { padding: 72px 20px; }
  .zen-stage iframe { height: 480px; }
  .hero { padding-top: 100px; min-height: auto; }
  .tl-item { grid-template-columns: 1fr; gap: 8px; }
}
@media (max-width: 860px) {
  #zh-burger { display: block; }
  .nav-links {
    display: none; position: absolute; top: 64px; left: 16px; right: 16px;
    flex-direction: column; align-items: stretch; gap: 4px; padding: 12px;
    border-radius: 16px; background: var(--menu-bg);
    -webkit-backdrop-filter: blur(18px); backdrop-filter: blur(18px);
    border: 1px solid var(--line); box-shadow: 0 24px 60px -20px var(--shadow);
  }
  .nav-links.open { display: flex; }
  .nav-links a { padding: 12px 14px; }
  .nav-cta { margin-left: 0; text-align: center; }
  .lang-sw { margin-left: 0; justify-content: center; }
  .lang-sw button { flex: 1; }
  .th-wrap { margin-left: 0; padding-left: 0; border-left: 0; }
  .th-btn { width: 100%; justify-content: center; }
  .th-menu { position: static; min-width: 0; box-shadow: none; border: 0; background: transparent; padding: 4px 0; }
}
@media (max-width: 560px) {
  .stat { min-width: 42%; }
  .zen-tools { width: 100%; justify-content: space-between; }
  .zen-stage iframe { height: 62vh; min-height: 420px; }
  .foot-copy { flex-direction: column; }
}

/* ═══════════════ 14. 减少动态偏好 ═══════════════ */
@media (prefers-reduced-motion: reduce) {
  #zen-home { scroll-behavior: auto; transition: none; }
  .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
  .orb, .caret, .scroll-hint { animation: none !important; }
  .card, .btn, .zen-stage, .orb, footer, .quote-overlay { transition: none !important; }
  .card:hover, .stat:hover { transform: none; }
}
</style>

<!-- 背景特效（光斑 / 网格 / 噪点） -->
<div class="bg-fx" aria-hidden="true">
  <div class="orb orb-a"></div><div class="orb orb-b"></div><div class="orb orb-c"></div>
  <div class="grid-fx"></div><div class="noise-fx"></div>
</div>

<!-- 阅读进度条 -->
<div id="zh-progress" aria-hidden="true"></div>

<!-- GitHub.com 预览提示（Pages 上自动隐藏） -->
<div class="gh-only" style="max-width:720px;margin:18px auto 0;padding:12px 18px;border:1px solid #d4a94e;border-radius:12px;background:rgba(212,169,78,.08);color:#d4a94e;text-align:center;font-size:13px;">
  📌 GitHub preview — animations and embedded sites are filtered by GitHub. Visit the full version at
  <a href="https://sethfengli.com/" style="color:#f2d9a4;">https://sethfengli.com/</a>
</div>

<!-- ═══════════ 导航 ═══════════ -->
<header class="zh-nav" id="zh-nav">
  <div class="nav-inner">
    <a class="brand" href="#top" data-scroll="#top" aria-label="Back to top">
      <span class="brand-mark" aria-hidden="true">禅</span>
      <span>Seth Li</span>
    </a>
    <button id="zh-burger" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="zh-menu">☰</button>
    <nav class="nav-links" id="zh-menu" aria-label="Main navigation">
      <a href="#about" data-scroll="#about"><span class="en">About</span><span class="zh"> 关于</span></a>
      <a href="#career" data-scroll="#career"><span class="en">Career</span><span class="zh"> 履历</span></a>
      <a href="#insights" data-scroll="#insights"><span class="en">Insights</span><span class="zh"> 哲思</span></a>
      <a href="#stack" data-scroll="#stack"><span class="en">Stack</span><span class="zh"> 技术</span></a>
      <a href="#projects" data-scroll="#projects"><span class="en">Projects</span><span class="zh"> 项目</span></a>
      <a href="#fengtech" data-scroll="#fengtech"><span class="en">Company</span><span class="zh"> 公司</span></a>
      <a href="#zen" data-scroll="#zen"><span class="en">Zen</span><span class="zh"> 禅院</span></a>
      <a href="#contact" data-scroll="#contact"><span class="en">Contact</span><span class="zh"> 联系</span></a>
      <div class="lang-sw" role="group" aria-label="Language 语言">
        <button type="button" data-lang="en" class="on" aria-pressed="true">EN</button>
        <button type="button" data-lang="zh" aria-pressed="false">中</button>
      </div>
      <div class="th-wrap">
        <button type="button" id="th-btn" class="th-btn" aria-haspopup="true" aria-expanded="false" aria-controls="th-menu">
          <span class="th-dot" id="th-dot" aria-hidden="true" style="background:linear-gradient(135deg,#0b1022,#e6c07a)"></span>
          <span id="th-label">Deep</span>
          <span class="th-caret" aria-hidden="true">▾</span>
        </button>
        <div class="th-menu" id="th-menu" role="menu" aria-label="Theme 主题">
          <button type="button" role="menuitemradio" aria-checked="false" data-theme="deep" class="th-item"><i style="background:linear-gradient(135deg,#0b1022,#e6c07a)"></i>Deep 深空</button>
          <button type="button" role="menuitemradio" aria-checked="false" data-theme="mist" class="th-item"><i style="background:linear-gradient(135deg,#f5f1e8,#a97f35)"></i>Mist 晨雾</button>
          <button type="button" role="menuitemradio" aria-checked="false" data-theme="moss" class="th-item"><i style="background:linear-gradient(135deg,#07110c,#7fd1a0)"></i>Moss 苔庭</button>
          <button type="button" role="menuitemradio" aria-checked="false" data-theme="dusk" class="th-item"><i style="background:linear-gradient(135deg,#120b1d,#f0b06e)"></i>Dusk 暮山</button>
          <button type="button" role="menuitemradio" aria-checked="false" data-theme="snow" class="th-item"><i style="background:linear-gradient(135deg,#f6f8fb,#2a6f9e)"></i>Snow 雪禅</button>
        </div>
      </div>
      <a class="nav-cta" href="https://github.com/seth2000" target="_blank" rel="noopener">GitHub ↗</a>
    </nav>
  </div>
</header>

<!-- ═══════════ Hero ═══════════ -->
<section class="hero" id="top" aria-label="Home">
  <canvas id="zh-stars" aria-hidden="true"></canvas>
  <div class="hero-inner">
    <p class="eyebrow">~/seth-li ▸ sydney · senior software developer · full-stack · database · ai explorer<span class="caret">▍</span></p>
    <h1 class="hero-title">Seth(Feng) Li<span class="hero-sub"><span class="en">Code × Zen · 30+ Years of Engineering</span><span class="zh"> 以码参禅 · 以禅入码</span></span></h1>
    <p class="hero-type"><span id="zh-typing">Code with clarity. Live with emptiness.</span><span class="caret">▍</span></p>
    <p class="hero-bio">
      <span class="en">A <strong>seasoned Full-Stack Software Engineer and Database Developer</strong> with <strong>30+ years</strong> of hands-on experience — currently a Senior Software Developer at <strong>DASH Technology Group</strong> in Sydney. From enterprise automation and database systems to modern web engineering, and from NLP poetry generation to AI-assisted development, I build with the precision of code and the clarity of Zen.</span>
      <span class="zh"> 拥有 <strong>30 余年</strong>实战经验的<strong>资深全栈软件工程师与数据库开发工程师</strong>，现任悉尼 <strong>DASH Technology Group</strong> 高级软件工程师。从企业自动化、数据库系统到现代 Web 工程，从古诗生成（NLP）到 AI 辅助开发——以码之精进修行，以禅之清明写码。</span>
    </p>
    <div class="hero-cta">
      <a class="btn btn-gold" href="https://zen.sethfengli.com/" target="_blank" rel="noopener">🪷 <span class="en">Enter Zen Temple</span><span class="zh"> 进入禅院</span></a>
      <a class="btn btn-ghost" href="https://www.linkedin.com/in/seth-li-a825893b" target="_blank" rel="noopener">LinkedIn ↗</a>
      <a class="btn btn-ghost" href="https://github.com/seth2000" target="_blank" rel="noopener">GitHub ↗</a>
      <a class="btn btn-ghost" href="#contact" data-scroll="#contact"><span class="en">Contact</span><span class="zh"> 联系我</span></a>
    </div>
    <div class="hero-stats">
      <div class="stat"><b>30+</b><span><span class="en">Years Experience</span><span class="zh"> 年工程经验</span></span></div>
      <div class="stat"><b>500+</b><span><span class="en">LinkedIn Connections</span><span class="zh"> LinkedIn 人脉</span></span></div>
      <div class="stat"><b>8</b><span><span class="en">Open-Source Repos</span><span class="zh"> 开源仓库</span></span></div>
      <div class="stat"><b>∞</b><span><span class="en">Continuous Learning</span><span class="zh"> 持续精进</span></span></div>
    </div>
  </div>
  <a class="scroll-hint" href="#about" data-scroll="#about" aria-label="Scroll down">⌄</a>
</section>

<main>
  <!-- ═══════════ 01 About ═══════════ -->
  <section class="sec" id="about">
    <div class="wrap">
      <div class="sec-head reveal">
        <p class="eyebrow"># 01 / about</p>
        <h2><span class="en">Two Sides of One Mind <em>· Half Code, Half Zen</em></span><span class="zh"> 两面人生 <em>· 一半代码，一半禅</em></span></h2>
        <p class="sub"><span class="en">A senior engineer who treats bugs as koans and refactoring as practice — a path from a Sydney desk to a digital temple.</span><span class="zh"> 一个把 Bug 当公案、把重构当修行的资深工程师；一条从悉尼写字楼通向线上禅院的小径。</span></p>
      </div>
      <div class="about-grid">
        <article class="card reveal">
          <div class="card-img">
            <img src="https://images.pexels.com/photos/34804020/pexels-photo-34804020.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200" alt="Full-stack developer working with code on screen — software engineering, Sydney" loading="lazy" decoding="async">
            <span class="img-credit">Photo · Daniil Komov / Pexels</span>
          </div>
          <div class="card-body">
            <div class="card-icon" aria-hidden="true">🖥️</div>
            <h3><span class="en">Engineer <span>· Professional</span></span><span class="zh"> 工程师 <span>· 专业</span></span></h3>
            <p>
              <span class="en">Seasoned Full-Stack Software Engineer and Database Developer with 30+ years of hands-on experience. Currently a Senior Software Developer at DASH Technology Group (financial services technology) in Sydney — spanning enterprise automation, database development and modern web engineering across PowerShell, Python, TypeScript and SQL.</span>
              <span class="zh"> 拥有 30 余年实战经验的资深全栈与数据库开发工程师，现任悉尼 DASH Technology Group（金融服务科技）高级软件工程师——深耕企业自动化、数据库开发与现代 Web 工程，技术栈覆盖 PowerShell、Python、TypeScript 与 SQL。</span>
            </p>
            <div class="chips">
              <span class="chip hot">Full-Stack</span><span class="chip">Database</span>
              <span class="chip">Automation</span><span class="chip">PowerShell</span>
              <span class="chip">Python</span><span class="chip">Web</span>
            </div>
          </div>
        </article>
        <article class="card reveal" style="--d:.08s">
          <div class="card-body">
            <div class="card-icon" aria-hidden="true">🤖</div>
            <h3><span class="en">AI Explorer <span>· Generative AI &amp; NLP</span></span><span class="zh"> AI 探索者 <span>· 生成式 AI 与 NLP</span></span></h3>
            <p>
              <span class="en">Experimenting where intelligence meets tradition — an automatic Chinese poetry generator (NLP / generative models, Jupyter), AI-assisted engineering workflows, prompt engineering and data experiments. AI is the new debugging tool for the mind.</span>
              <span class="zh"> 在智能与传统交汇处实验——自动中文古诗生成器（NLP / 生成模型，Jupyter）、AI 辅助开发工作流、提示词工程与数据实验。AI，是心智的新调试工具。</span>
            </p>
            <div class="chips">
              <span class="chip hot">Generative AI</span><span class="chip hot">NLP</span>
              <span class="chip">LLM</span><span class="chip">Prompt Engineering</span>
              <span class="chip">Machine Learning</span><span class="chip">Data</span>
            </div>
          </div>
        </article>
        <article class="card reveal" style="--d:.16s">
          <div class="card-img">
            <img src="https://images.unsplash.com/photo-1761632046628-db5195c5164d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" alt="Serene Buddha statue bathed in mystical light — Zen, Buddhism, mindfulness" loading="lazy" decoding="async">
            <span class="img-credit">Photo · itsiken / Unsplash</span>
          </div>
          <div class="card-body">
            <div class="card-icon" aria-hidden="true">🪷</div>
            <h3><span class="en">Practitioner <span>· Zen &amp; Buddhism</span></span><span class="zh"> 修行者 <span>· 禅与佛学</span></span></h3>
            <p>
              <span class="en">A Buddhist practitioner who deconstructs Dharma with an engineer's mind: Emptiness is an abstract class, Form a concrete class, Appearance an instance; no-self means you cannot use "this". Runs Hui Deng Zen Temple — Buddhist essays, Dharma audio, online blessings and Guanyin lots.</span>
              <span class="zh"> 佛学爱好者，用工程师的思维解构佛法：「空」是抽象类，「色」是具体类，「相」是实例；无我，就是无法使用 this。运营「慧灯禅院」——佛学文章、法音宣流、在线祈福、观音灵签。</span>
            </p>
            <div class="chips">
              <span class="chip hot">Buddhism</span><span class="chip">Zen</span>
              <span class="chip">Heart Sutra</span><span class="chip">Digital Temple</span>
              <span class="chip">Mindfulness</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ═══════════ 02 Career ═══════════ -->
  <section class="sec sec-alt" id="career">
    <div class="wrap">
      <div class="sec-head reveal">
        <p class="eyebrow"># 02 / career</p>
        <h2><span class="en">30+ Years of Engineering <em>· Proven &amp; Professional</em></span><span class="zh"> 30 余年工程履历 <em>· 专业与经验</em></span></h2>
        <p class="sub"><span class="en">Verified highlights from my professional journey — current role, ventures, education and three decades of continuous building.</span><span class="zh"> 可核实的职业历程要点——现任职位、创业、教育与三十年的持续构建。</span></p>
      </div>
      <div class="timeline">
        <article class="card tl-item reveal">
          <div class="tl-when"><b>Now</b><span>AUSTRALIA</span></div>
          <div class="tl-body">
            <h3><span class="en">Senior Software Developer · DASH Technology Group</span><span class="zh"> 高级软件工程师 · DASH Technology Group</span></h3>
            <p><span class="en">Building financial services technology for Australia's wealth and advice industry from the Greater Sydney Area — full-stack engineering, database development and platform work at scale.</span><span class="zh"> 于大悉尼地区为澳大利亚财富与投顾行业构建金融服务科技——大规模平台上的全栈工程与数据库开发。</span></p>
            <div class="chips">
              <span class="chip hot">Fintech</span><span class="chip">Full-Stack</span><span class="chip">Database</span>
            </div>
          </div>
        </article>
        <article class="card tl-item reveal" style="--d:.06s">
          <div class="tl-when"><b>Venture</b><span>SYDNEY</span></div>
          <div class="tl-body">
            <h3><span class="en">Founder &amp; Principal Engineer · Feng Tech</span><span class="zh"> 创始人兼首席工程师 · Feng Tech</span></h3>
            <p><span class="en">Sydney-based IT services — efficient website building, fast problem-solving and dependable support ("The tech experts"). The company website is embedded further down this page.</span><span class="zh"> 悉尼 IT 服务公司——高效建站、快速排障与可靠支持（The tech experts）。公司官网已嵌入本页下方。</span></p>
            <div class="chips">
              <span class="chip hot">IT Services</span><span class="chip">Web</span><span class="chip">Support</span>
            </div>
          </div>
        </article>
        <article class="card tl-item reveal">
          <div class="tl-when"><b>2004–08</b><span>CHINA</span></div>
          <div class="tl-body">
            <h3><span class="en">Xiangtan University · 湘潭大学</span><span class="zh"> 湘潭大学</span></h3>
            <p><span class="en">Higher education in China — where the engineering mindset took root and the habit of lifelong learning began.</span><span class="zh"> 中国高等教育——工程思维在此扎根，终身学习的习惯由此开始。</span></p>
            <div class="chips">
              <span class="chip">Education</span>
            </div>
          </div>
        </article>
        <article class="card tl-item reveal" style="--d:.06s">
          <div class="tl-when"><b>1993</b><span>START</span></div>
          <div class="tl-body">
            <h3><span class="en">30+ Years of Software &amp; Database Engineering</span><span class="zh"> 30 余年软件与数据库工程之路</span></h3>
            <p><span class="en">From the earliest lines of code in 1993 to today's cloud-era stack — three decades of shipping, automating and learning.</span><span class="zh"> 自 1993 年写下第一行代码，到今天的云时代技术栈——三十年的交付、自动化与学习。</span></p>
            <div class="chips">
              <span class="chip hot">1993 → Present</span>
            </div>
          </div>
        </article>
        <article class="card tl-item reveal">
          <div class="tl-when"><b>Network</b><span>LINKEDIN</span></div>
          <div class="tl-body">
            <h3><span class="en">LinkedIn · Professional Network</span><span class="zh"> LinkedIn · 职业网络</span></h3>
            <p><span class="en">500+ connections · 576 followers — let's connect and build something meaningful together.</span><span class="zh"> 500+ 联系人 · 576 位关注者——欢迎连接，一起构建有意义的事。</span></p>
            <a class="tl-link" href="https://www.linkedin.com/in/seth-li-a825893b" target="_blank" rel="noopener">linkedin.com/in/seth-li-a825893b ↗</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ═══════════ 03 Insights ═══════════ -->
  <section class="sec" id="insights">
    <div class="wrap">
      <div class="sec-head reveal">
        <p class="eyebrow"># 03 / insights · zen &amp; code</p>
        <h2><span class="en">Zen is the Worldview, <em>Code is the Method</em></span><span class="zh"> 禅是世界观，<em>代码是方法论</em></span></h2>
        <p class="sub"><span class="en">Long-running reflections from this homepage — classical Buddhist concepts, re-expressed in the language of programmers.</span><span class="zh"> 以下哲思源自本主页的长期思考——以程序员的语言，重新诠释佛学中的经典概念。</span></p>
      </div>
      <div class="grid-3">
        <article class="card ins-card reveal">
          <span class="tag">Heart Sutra · OOP</span>
          <h3><span class="en">Emptiness is an Abstract Class · 空即是色，色即是空</span><span class="zh"> 「空」是抽象类 · 空即是色，色即是空</span></h3>
          <p>
            <span class="en">Emptiness is an abstract class, Form a concrete class, Appearance an instance. You see a cat: this specific cat is the instance, "cat" is the abstract class, "black cat" the concrete class — the mind moves from concrete to abstract: a verifiable cognitive path.</span>
            <span class="zh"> 空（Emptiness）是 abstract class，色（Form）是 concrete class，相（Appearance）是 instance。你看见一只猫：眼前这只具体的猫是实例，「猫」是抽象类，「黑猫」是具体类——心智从具体走向抽象，这是一条可验证的认知路径。</span>
          </p>
          <span class="eng">Emptiness : Form : Appearance = abstract class : concrete class : instance</span>
        </article>
        <article class="card ins-card reveal" style="--d:.08s">
          <span class="tag">Four No-Selves · Diamond Sutra</span>
          <h3><span class="en">"I" Cannot Be Instantiated · My Nature is an Abstract Class</span><span class="zh"> 「我」无法被实例化 · My Nature is an Abstract Class</span></h3>
          <p>
            <span class="en">"I" is fundamentally an abstract class: cannot use "this" → no self; cannot instantiate → no person; cannot inherit → no sentient beings; no lifecycle methods → no lifespan. The end of the four lines is an object that can never be new-ed.</span>
            <span class="zh"> 「我」在本质上是一个抽象类：不能使用 this → 无我；不能实例化 → 无人；不能继承 → 无众生；没有生命周期方法 → 无寿者。四句偈的尽头，是一个永远无法 new 出来的对象。</span>
          </p>
          <span class="eng">no this · no instantiate · no inherit · no lifecycle</span>
        </article>
        <article class="card ins-card reveal" style="--d:.16s">
          <span class="tag">Worldview · Pattern</span>
          <h3><span class="en">The World is a Running Instance · The World</span><span class="zh"> 世界是一个运行中的实例 · The World</span></h3>
          <p>
            <span class="en">The universe is a running virtual system (instance). A class can define many worlds, yet our universe-instance is unique; a cloned object is always a new object. "I" is an object implementing the State Pattern — behavior changes with internal state.</span>
            <span class="zh"> 宇宙是一个正在运行的虚拟系统（instance）。类（class）可以定义许多世界，而我们的宇宙实例独一无二；克隆出的对象，永远是新的对象。「我」是一个实现 State Pattern 的对象——随内部状态而改变行为。</span>
          </p>
          <span class="eng">universe = a running instance of class World</span>
        </article>
        <article class="card ins-card reveal">
          <span class="tag">Epistemology · Testing</span>
          <h3><span class="en">Only Outside the System Can You Test It · The Predict Principle</span><span class="zh"> 在系统之外，才能测试系统 · The Predict Principle</span></h3>
          <p>
            <span class="en">With the underlying SDK you could debug this world. Parameters are pseudo-random: identical input always yields identical output. Valid testing must happen outside the system — inside it, test data, execution and observation cannot be cleanly separated.</span>
            <span class="zh"> 拿到底层 SDK，就能调试这个世界。参数是伪随机的：相同输入，必然得到相同输出。而有效的测试必须在系统之外进行——系统之内，测试数据、系统执行与观测结果，无法被干净地分离。</span>
          </p>
          <span class="eng">identical input yields identical output</span>
        </article>
        <article class="card ins-card reveal" style="--d:.08s">
          <span class="tag">Thought Experiment · Game</span>
          <h3><span class="en">Are We NPCs or Players? · Virtual Game</span><span class="zh"> 我们是 NPC，还是玩家？ · Virtual Game</span></h3>
          <p>
            <span class="en">Within this world-instance we generally behave like NPCs. External "players" may exist, but their presence could appear in diverse, indirect forms — not limited to simple control. The question itself is the best breakpoint.</span>
            <span class="zh"> 在这个世界实例中，我们通常表现得像 NPC。外部的「玩家」可能存在，但他们的出现形式或许多样而间接——未必只是简单的操控。这个问题本身，就是最好的调试断点。</span>
          </p>
          <span class="eng">NPC or Player — that is the question</span>
        </article>
        <article class="card ins-card reveal" style="--d:.16s">
          <span class="tag">No Ego · Einstein</span>
          <h3><span class="en">More Knowledge, Less Ego · No Ego</span><span class="zh"> 知识越多，我执越少 · No Ego</span></h3>
          <p>
            <span class="en">Ego = 1 / Knowledge. Einstein quotes long kept on this homepage: "More the knowledge, lesser the ego; lesser the knowledge, more the ego." "We should take care not to make the intellect our god — it has powerful muscles, but no personality."</span>
            <span class="zh"> Ego = 1 / Knowledge。主页长期引用的爱因斯坦语录：「知识越多，我执越少；知识越少，我执越多。」「当心别把理智奉若神明——它虽肌肉强健，却没有个性。」</span>
          </p>
          <span class="eng">More the knowledge, lesser the ego</span>
        </article>
      </div>
      <div class="code-row">
        <article class="card reveal">
          <pre class="code" aria-label="Python conceptual model code"><code><span class="c-k">import</span> math

<span class="c-k">class</span> <span class="c-t">Supreme_Wisdom</span>:
    knowledge = math.inf

    <span class="c-k">def</span> <span class="c-f">__init__</span>(<span class="c-p">self</span>):
        <span class="c-f">print</span>(<span class="c-s">"All things being equal = Everything happens as expected"</span>)

    <span class="c-k">def</span> <span class="c-f">ego</span>(<span class="c-p">self</span>):
        <span class="c-k">return</span> <span class="c-m">1</span> / self.knowledge

    <span class="c-k">def</span> <span class="c-f">power</span>(<span class="c-p">self</span>):
        <span class="c-k">return</span> self.knowledge

    <span class="c-k">def</span> <span class="c-f">personality</span>(<span class="c-p">self</span>):
        <span class="c-k">return</span> <span class="c-m">1</span> / self.power()

    <span class="c-k">def</span> <span class="c-f">being</span>(<span class="c-p">self</span>):
        <span class="c-k">return</span> <span class="c-m">1</span> / self.knowledge

    <span class="c-k">def</span> <span class="c-f">time_frame</span>(<span class="c-p">self</span>):
        <span class="c-k">return</span> <span class="c-f">float</span>(self.knowledge)

    <span class="c-k">def</span> <span class="c-f">life</span>(<span class="c-p">self</span>):
        <span class="c-k">return</span> <span class="c-m">1</span> / self.time_frame()</code></pre>
        </article>
        <article class="card poem-card reveal" style="--d:.1s">
          <p class="poem">
            <small><span class="en">📜 Divination Poem · 2021/07/20</span><span class="zh"> 📜 预测回收台湾签诗 · 2021/07/20 — </span></small>
            欲进又徘徊，心危事不危。<br>
            水边人指引，名利得荣归。
          </p>
          <p class="poem-en">
            I wished to move forward but hesitated. The heart sensed danger, yet all was actually well.<br>
            Guided by one who lives by the water, fame and fortune return in honor.
          </p>
          <div class="seal" aria-hidden="true">禅</div>
          <p class="poem-note">
            <span class="en">Of the same origin as "seeing one's true nature" — a record of understanding the abstract "I": Consciousness: understanding the abstract "I" and nothing else.</span>
            <span class="zh"> 与「明心见性」同源——记录对抽象之「我」的理解：Consciousness: understanding the abstract "I" and nothing else.</span>
          </p>
        </article>
      </div>
    </div>
  </section>

  <!-- ═══════════ 04 Stack ═══════════ -->
  <section class="sec sec-alt" id="stack">
    <div class="wrap">
      <div class="sec-head reveal">
        <p class="eyebrow"># 04 / stack · skills</p>
        <h2><span class="en">Tech Stack <em>· Hot Keywords</em></span><span class="zh"> 技术栈 <em>· 热点关键词</em></span></h2>
        <p class="sub"><span class="en">Tools chosen like instruments — fit, reliable, maintainable. The stack I practice with daily.</span><span class="zh"> 选工具如选法器——趁手、可靠、可维护。以下是与日常共修的技术。</span></p>
      </div>
      <div class="stack-groups">
        <div class="card stack-group reveal">
          <h3><span class="en">Languages · 语言</span><span class="zh"> 语言 · Languages</span></h3>
          <div class="chips">
            <span class="chip hot">Python</span><span class="chip hot">PowerShell</span>
            <span class="chip">TypeScript</span><span class="chip">JavaScript</span>
            <span class="chip">SQL</span><span class="chip">HTML</span><span class="chip">CSS</span>
          </div>
        </div>
        <div class="card stack-group reveal" style="--d:.06s">
          <h3><span class="en">Frameworks &amp; Tools · 框架工具</span><span class="zh"> 框架与工具 · Frameworks</span></h3>
          <div class="chips">
            <span class="chip hot">Angular</span><span class="chip">Bootstrap 5</span>
            <span class="chip">Node.js</span><span class="chip">Jupyter</span>
          </div>
        </div>
        <div class="card stack-group reveal">
          <h3><span class="en">Data &amp; AI · 数据与 AI</span><span class="zh"> 数据与 AI · Data &amp; AI</span></h3>
          <div class="chips">
            <span class="chip hot">Generative AI</span><span class="chip hot">Machine Learning</span>
            <span class="chip">NLP</span><span class="chip">LLM</span>
            <span class="chip">Prompt Engineering</span><span class="chip">Data Engineering</span>
          </div>
        </div>
        <div class="card stack-group reveal" style="--d:.06s">
          <h3><span class="en">Engineering &amp; Cloud · 工程与云</span><span class="zh"> 工程与云 · Engineering</span></h3>
          <div class="chips">
            <span class="chip hot">Git</span><span class="chip">GitHub</span>
            <span class="chip">Azure DevOps</span><span class="chip">CI/CD</span>
            <span class="chip">Database Design</span><span class="chip">GitHub Pages</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════ 05 Projects ═══════════ -->
  <section class="sec" id="projects">
    <div class="wrap">
      <div class="sec-head reveal">
        <p class="eyebrow"># 05 / projects</p>
        <h2><span class="en">Open Source <em>· Selected Works</em></span><span class="zh"> 开源项目 <em>· 精选</em></span></h2>
        <p class="sub"><span class="en">From enterprise efficiency tools to "teaching machines to write poetry" — every repository is a practice.</span><span class="zh"> 从企业效率工具到「让机器写诗」的实验——每一个仓库都是一次修行。</span></p>
      </div>
      <div class="proj-grid">
        <article class="card proj-card reveal">
          <div class="proj-top">
            <span class="proj-name">chinesepoem</span>
            <span class="proj-lang">Jupyter</span>
          </div>
          <p><span class="en">Automatic Chinese poetry generation — teaching machines to write poetry (NLP / generative model experiment).</span><span class="zh"> 自动生成中文古诗——让机器学会写诗（NLP / 生成模型实验）。</span></p>
          <a class="proj-link" href="https://github.com/seth2000/chinesepoem" target="_blank" rel="noopener">github.com/seth2000/chinesepoem ↗</a>
        </article>
        <article class="card proj-card reveal" style="--d:.06s">
          <div class="proj-top">
            <span class="proj-name">linqijing</span>
            <span class="proj-lang">Python</span>
          </div>
          <p><span class="en">Digital implementation of Ling Qi Jing — a modern experiment with traditional divination.</span><span class="zh"> 灵棋经的数字实现——传统占卜的现代实验。</span></p>
          <a class="proj-link" href="https://github.com/seth2000/linqijing" target="_blank" rel="noopener">github.com/seth2000/linqijing ↗</a>
        </article>
        <article class="card proj-card reveal">
          <div class="proj-top">
            <span class="proj-name">predictions</span>
            <span class="proj-lang">Archive</span>
          </div>
          <p><span class="en">Prediction archive — record, review and verify; let time deliver the answer.</span><span class="zh"> 预测档案——记录、复盘与验证，让时间给出答案。</span></p>
          <a class="proj-link" href="https://github.com/seth2000/predictions" target="_blank" rel="noopener">github.com/seth2000/predictions ↗</a>
        </article>
        <article class="card proj-card reveal" style="--d:.06s">
          <div class="proj-top">
            <span class="proj-name">PSGetUserLogonTimeFromAD</span>
            <span class="proj-lang">PowerShell</span>
            <span class="proj-star">★ 2</span>
          </div>
          <p><span class="en">Enterprise operations tool — query user logon times from Active Directory.</span><span class="zh"> 从 Active Directory 查询用户登录时间的企业运维工具。</span></p>
          <a class="proj-link" href="https://github.com/seth2000/PSGetUserLogonTimeFromAD" target="_blank" rel="noopener">github.com/seth2000/PSGetUserLogonTimeFromAD ↗</a>
        </article>
      </div>
      <p class="proj-more">
        <span class="en">More repos: country-name-detected · covertJPGToCSV · WindowsCommandAndPS — </span>
        <span class="zh"> 更多仓库：country-name-detected · covertJPGToCSV · WindowsCommandAndPS — </span>
        <a href="https://github.com/seth2000?tab=repositories" target="_blank" rel="noopener"><span class="en">view all on GitHub ↗</span><span class="zh"> 在 GitHub 查看全部 ↗</span></a>
      </p>
      <div class="stats-row">
        <a href="https://github.com/seth2000" target="_blank" rel="noopener">
          <img src="https://github-readme-stats.vercel.app/api?username=seth2000&amp;show_icons=true&amp;hide_title=true&amp;hide_rank=true&amp;hide=contribs&amp;bg_color=0b1022&amp;title_color=e6c07a&amp;text_color=9aa5bd&amp;icon_color=7dd3fc&amp;border_color=ffffff14" alt="GitHub statistics for seth2000 — senior full-stack developer Sydney" loading="lazy">
        </a>
        <a href="https://github.com/seth2000" target="_blank" rel="noopener">
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=seth2000&amp;layout=compact&amp;hide_title=true&amp;bg_color=0b1022&amp;title_color=e6c07a&amp;text_color=9aa5bd&amp;border_color=ffffff14&amp;langs_count=6" alt="Top languages used by seth2000 — Python, PowerShell, Jupyter Notebook" loading="lazy">
        </a>
      </div>
    </div>
  </section>

  <!-- ═══════════ 06 Company ═══════════ -->
  <section class="sec sec-alt" id="fengtech" data-mode="desktop">
    <div class="wrap">
      <div class="sec-head reveal">
        <p class="eyebrow"># 06 / company · feng tech</p>
        <h2><span class="en">Feng Tech <em>· Sydney IT Services</em></span><span class="zh"> Feng Tech <em>· 悉尼 IT 公司</em></span></h2>
        <p class="sub">
          <span class="en">Founded in Sydney — "The tech experts": efficient website building, fast problem-solving and dependable IT services. The company website is embedded below; switch device widths to preview it.</span>
          <span class="zh"> 创立于悉尼——「The tech experts」：高效建站、IT 故障快速处理与贴心技术服务。公司官网已嵌入本页，可切换设备宽度预览。</span>
        </p>
      </div>
      <div class="zen-frame reveal">
        <div class="zen-bar">
          <span class="zen-dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <span class="zen-url">https://www.fengtech.com.au/home</span>
          <div class="zen-tools" role="group" aria-label="Device preview toggle">
            <button type="button" data-device="desktop" class="on" aria-pressed="true"><span class="en">Desktop</span><span class="zh"> 桌面</span></button>
            <button type="button" data-device="tablet" aria-pressed="false"><span class="en">Tablet</span><span class="zh"> 平板</span></button>
            <button type="button" data-device="mobile" aria-pressed="false"><span class="en">Mobile</span><span class="zh"> 手机</span></button>
            <a class="zen-open btn" href="https://www.fengtech.com.au/home" target="_blank" rel="noopener"><span class="en">Open ↗</span><span class="zh"> 全屏打开 ↗</span></a>
          </div>
        </div>
        <div class="zen-stage">
          <iframe src="https://www.fengtech.com.au/home" title="Feng Tech website — fengtech.com.au (embedded preview)" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <!-- GitHub.com 上 iframe 会被过滤，此卡片仅在那里显示 -->
      <div class="gh-fallback card" style="margin-top:18px;padding:24px;text-align:center;">
        <p style="margin:0 0 14px;color:#9aa5bd;">GitHub preview cannot embed iframes — visit the company website directly:</p>
        <a class="btn btn-gold" href="https://www.fengtech.com.au/home" target="_blank" rel="noopener">🏢 Open fengtech.com.au ↗</a>
      </div>
      <p class="zen-note">
        <span>📞 0411 758 128 &nbsp;·&nbsp; ✉️ info@fengtech.com.au &nbsp;·&nbsp; 📍 Sydney · The tech experts</span>
      </p>
    </div>
  </section>

  <!-- ═══════════ 07 Zen ═══════════ -->
  <section class="sec" id="zen" data-mode="desktop">
    <div class="wrap">
      <div class="sec-head reveal">
        <p class="eyebrow"># 07 / zen temple · hui deng</p>
        <h2><span class="en">Digital Zen Temple <em>· Lights On 24/7</em></span><span class="zh"> 线上数字禅院 <em>· 24 小时长明</em></span></h2>
        <p class="sub">
          <span class="en">Buddhist essays · Dharma audio · online blessings · Guanyin lots — a digital temple fully embedded in this page. Switch device widths to preview it.</span>
          <span class="zh"> 佛学文章 · 法音宣流 · 在线祈福 · 观音灵签——一座随缘而开的数字寺庙，已经完整嵌入本页。切换设备宽度，预览它在不同屏幕上的样子。</span>
        </p>
      </div>
      <div class="zen-frame reveal">
        <div class="zen-bar">
          <span class="zen-dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <span class="zen-url">https://zen.sethfengli.com/</span>
          <div class="zen-tools" role="group" aria-label="Device preview toggle">
            <button type="button" data-device="desktop" class="on" aria-pressed="true"><span class="en">Desktop</span><span class="zh"> 桌面</span></button>
            <button type="button" data-device="tablet" aria-pressed="false"><span class="en">Tablet</span><span class="zh"> 平板</span></button>
            <button type="button" data-device="mobile" aria-pressed="false"><span class="en">Mobile</span><span class="zh"> 手机</span></button>
            <a class="zen-open btn" href="https://zen.sethfengli.com/" target="_blank" rel="noopener"><span class="en">Open ↗</span><span class="zh"> 全屏打开 ↗</span></a>
          </div>
        </div>
        <div class="zen-stage">
          <iframe src="https://zen.sethfengli.com/" title="Hui Deng Zen Temple — zen.sethfengli.com (embedded preview)" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <!-- GitHub.com 上 iframe 会被过滤，此卡片仅在那里显示 -->
      <div class="gh-fallback card" style="margin-top:18px;padding:24px;text-align:center;">
        <p style="margin:0 0 14px;color:#9aa5bd;">GitHub preview cannot embed iframes — visit the temple directly:</p>
        <a class="btn btn-gold" href="https://zen.sethfengli.com/" target="_blank" rel="noopener">🪷 Open zen.sethfengli.com ↗</a>
      </div>
      <p class="zen-note">
        <img src="https://images.unsplash.com/photo-1719823255248-f51a0b0975c4?q=80&amp;w=200&amp;auto=format&amp;fit=crop" alt="Pink lotus on water — Zen, mindfulness (Photo by Jerry She on Unsplash)" loading="lazy">
        <span><span class="en">A lamp that never goes out — on small screens, tap "Open" for the full experience.</span><span class="zh"> 一盏心灯，长明不灭 —— 小屏设备建议点击「全屏打开」获得完整体验。</span></span>
      </p>
    </div>
  </section>

  <!-- ═══════════ Quotes ═══════════ -->
  <section class="quote-sec" id="quotes" aria-label="Rotating Zen quotes">
    <img class="quote-bg" src="https://images.unsplash.com/photo-1783501380692-6e764f136510?q=80&amp;w=1800&amp;auto=format&amp;fit=crop" alt="" aria-hidden="true" loading="lazy">
    <div class="quote-overlay" aria-hidden="true"></div>
    <div class="quote-inner">
      <div class="quote-mark" aria-hidden="true">「</div>
      <blockquote id="zh-quote">Form is emptiness; emptiness is form.</blockquote>
      <cite id="zh-quote-author">— Heart Sutra, Prajnaparamita</cite>
    </div>
  </section>

  <!-- ═══════════ 08 Contact ═══════════ -->
  <section class="sec sec-alt" id="contact">
    <div class="wrap center">
      <div class="sec-head reveal" style="margin-left:auto;margin-right:auto;">
        <p class="eyebrow"># 08 / contact</p>
        <h2><span class="en">Connect <em>· Contact</em></span><span class="zh"> 结缘 <em>· 联系</em></span></h2>
      </div>
      <p class="contact-line reveal"><span class="en">Let's talk about code, AI, Zen — or anything that seems impossible.</span><span class="zh"> 期待与你聊聊代码、AI、禅，或任何「看似不可能」的想法。</span></p>
      <div class="hero-cta reveal" style="--d:.1s">
        <a class="btn btn-gold" href="https://www.linkedin.com/in/seth-li-a825893b" target="_blank" rel="noopener">LinkedIn ↗</a>
        <a class="btn btn-ghost" href="https://github.com/seth2000" target="_blank" rel="noopener">GitHub ↗</a>
        <a class="btn btn-ghost" href="https://zen.sethfengli.com/" target="_blank" rel="noopener">🪷 <span class="en">Zen Temple</span><span class="zh"> 慧灯禅院</span></a>
        <a class="btn btn-ghost" href="https://www.fengtech.com.au/home" target="_blank" rel="noopener">🏢 Feng Tech</a>
      </div>
      <p class="contact-info">📍 Greater Sydney Area, Australia &nbsp;·&nbsp; 🏢 DASH Technology Group &amp; Feng Tech &nbsp;·&nbsp; 🕉 <span class="en">Building since 1993</span><span class="zh"> 自 1993 持续构建</span></p>
    </div>
  </section>
</main>

<!-- ═══════════ 页脚 ═══════════ -->
<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot-brand">
        <span class="en">Zen · Code · One Practice</span><span class="zh"> 禅 · 码 · 同修</span>
        <small>Seth Li — Senior Software Developer · Full-Stack &amp; Database Engineer · AI Explorer</small>
      </div>
      <div class="foot-credits">
        <span class="en">Photos: </span><span class="zh"> 图片来源：</span><a href="https://unsplash.com/photos/misty-mountains-shrouded-in-dense-fog-and-clouds-J6hzH64fNHg" target="_blank" rel="noopener">Jayakrishnan K P</a> ·
        <a href="https://unsplash.com/photos/a-serene-buddha-statue-bathed-in-mystical-light-s4FU4MGS8_M" target="_blank" rel="noopener">itsiken</a> ·
        <a href="https://unsplash.com/photos/a-pink-flower-is-growing-out-of-the-water-oMjI_2khnJE" target="_blank" rel="noopener">Jerry She</a> (Unsplash) ·
        <a href="https://www.pexels.com/photo/c-n-c-nh-ma-l-p-trinh-tren-man-hinh-may-tinh-34804020/" target="_blank" rel="noopener">Daniil Komov</a> (Pexels) — free for commercial use.<br>
        <span class="en">Fonts: </span><span class="zh"> 字体：</span>Inter · JetBrains Mono · Noto Serif SC (Google Fonts, SIL OFL) ·
        <span class="en">Stats: </span><span class="zh"> 数据卡片：</span><a href="https://github.com/anuraghazra/github-readme-stats" target="_blank" rel="noopener">github-readme-stats</a> ·
        <span class="en">Company: </span><span class="zh"> 公司官网：</span><a href="https://www.fengtech.com.au/home" target="_blank" rel="noopener">fengtech.com.au</a> ·
        <span class="en">Hosted on GitHub Pages</span><span class="zh"> 托管于 GitHub Pages</span>
      </div>
    </div>
    <p class="foot-keywords">
      Keywords: Senior Software Developer · Full-Stack Engineer · Database Developer · AI &amp; Machine Learning · Generative AI · NLP · LLM · Prompt Engineering · Python · PowerShell · TypeScript · Angular · SQL · Azure DevOps · Automation · Fintech · Sydney Australia
    </p>
    <div class="foot-copy">
      <span>© <span id="zh-year">2025</span> Seth Li · <span class="en">Code with Zen · Zen with Code</span><span class="zh"> 以码参禅，以禅入码</span></span>
      <span>All things being equal = Everything happens as expected</span>
    </div>
    <p class="foot-credit">
      SethLee is maintained by <a href="https://github.com/seth2000" target="_blank" rel="noopener">seth2000</a> ·
      <span class="en">This page was generated by GitHub Pages.</span><span class="zh"> 本页由 GitHub Pages 生成。</span>
    </p>
  </div>
</footer>

<script>
(function () {
  'use strict';
  var d = document;
  var home = d.getElementById('zen-home');
  if (!home) { return; }
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  home.classList.add('js-ready');

  /* ── 语言管理（默认英文） ─────────────────────── */
  var langBtns = Array.prototype.slice.call(d.querySelectorAll('[data-lang]'));
  var currentLang = home.getAttribute('data-lang') === 'zh' ? 'zh' : 'en';
  function applyLang(l) {
    currentLang = (l === 'zh') ? 'zh' : 'en';
    home.setAttribute('data-lang', currentLang);
    home.setAttribute('lang', currentLang === 'zh' ? 'zh-CN' : 'en');
    try { localStorage.setItem('zh-lang', currentLang); } catch (e) {}
    langBtns.forEach(function (b) {
      var on = b.getAttribute('data-lang') === currentLang;
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    thLabel();
    typingInit();
    renderQuote(qi);
  }
  langBtns.forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  /* ── 主题管理（下拉式） ───────────────────────── */
  var THEME_KEYS = ['deep', 'mist', 'moss', 'dusk', 'snow'];
  var THEME_GRADS = {
    deep: 'linear-gradient(135deg,#0b1022,#e6c07a)',
    mist: 'linear-gradient(135deg,#f5f1e8,#a97f35)',
    moss: 'linear-gradient(135deg,#07110c,#7fd1a0)',
    dusk: 'linear-gradient(135deg,#120b1d,#f0b06e)',
    snow: 'linear-gradient(135deg,#f6f8fb,#2a6f9e)'
  };
  var THEME_NAMES = {
    deep: { en: 'Deep', zh: '深空' },
    mist: { en: 'Mist', zh: '晨雾' },
    moss: { en: 'Moss', zh: '苔庭' },
    dusk: { en: 'Dusk', zh: '暮山' },
    snow: { en: 'Snow', zh: '雪禅' }
  };
  var STAR_PALETTES = {
    deep: ['230,192,122', '125,211,252', '167,139,250', '255,255,255'],
    mist: ['169,127,53', '11,123,164', '112,87,184', '90,96,110'],
    moss: ['217,184,119', '143,214,200', '183,166,240', '205,232,214'],
    dusk: ['240,176,110', '143,199,232', '183,166,240', '255,240,230'],
    snow: ['42,111,158', '169,127,53', '94,79,163', '70,76,92']
  };
  var starColors = STAR_PALETTES[home.getAttribute('data-theme')] || STAR_PALETTES.deep;
  var thBtn = d.getElementById('th-btn');
  var thMenu = d.getElementById('th-menu');
  var thDot = d.getElementById('th-dot');
  var thLabelEl = d.getElementById('th-label');
  var thItems = Array.prototype.slice.call(d.querySelectorAll('.th-item'));
  var currentTheme = home.getAttribute('data-theme') || 'deep';
  function thLabel() {
    if (thLabelEl) {
      thLabelEl.textContent = THEME_NAMES[currentTheme] ? THEME_NAMES[currentTheme][currentLang] : currentTheme;
    }
  }
  function applyTheme(t) {
    if (THEME_KEYS.indexOf(t) < 0) { t = 'deep'; }
    currentTheme = t;
    home.setAttribute('data-theme', t);
    starColors = STAR_PALETTES[t] || STAR_PALETTES.deep;
    try { localStorage.setItem('zh-theme', t); } catch (e) {}
    thItems.forEach(function (s) {
      var on = s.getAttribute('data-theme') === t;
      s.classList.toggle('on', on);
      s.setAttribute('aria-checked', on ? 'true' : 'false');
    });
    if (thDot) { thDot.style.background = THEME_GRADS[t] || THEME_GRADS.deep; }
    thLabel();
    if (typeof stars !== 'undefined' && stars) {
      for (var si = 0; si < stars.length; si++) {
        stars[si].c = starColors[Math.floor(Math.random() * starColors.length)];
      }
    }
  }
  if (thBtn && thMenu) {
    thBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = thMenu.classList.toggle('open');
      thBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    d.addEventListener('click', function (e) {
      if (thMenu.classList.contains('open') && !thMenu.contains(e.target) && !thBtn.contains(e.target)) {
        thMenu.classList.remove('open');
        thBtn.setAttribute('aria-expanded', 'false');
      }
    });
    d.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && thMenu.classList.contains('open')) {
        thMenu.classList.remove('open');
        thBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
  thItems.forEach(function (s) {
    s.addEventListener('click', function () {
      applyTheme(s.getAttribute('data-theme'));
      if (thMenu) { thMenu.classList.remove('open'); }
      if (thBtn) { thBtn.setAttribute('aria-expanded', 'false'); }
    });
  });
  applyTheme(currentTheme);

  /* ── 阅读进度 + 导航毛玻璃 ─────────────────────── */
  var bar = d.getElementById('zh-progress');
  var nav = d.getElementById('zh-nav');
  function onScroll() {
    var max = home.scrollHeight - home.clientHeight;
    var p = max > 0 ? home.scrollTop / max : 0;
    if (bar) { bar.style.transform = 'scaleX(' + p + ')'; }
    if (nav) { nav.classList.toggle('scrolled', home.scrollTop > 24); }
    spy();
  }
  home.addEventListener('scroll', onScroll, { passive: true });

  /* ── 平滑滚动 + 滚动高亮 ─────────────────────── */
  var links = Array.prototype.slice.call(d.querySelectorAll('a[data-scroll]'));
  var secs = links.map(function (l) { return d.querySelector(l.getAttribute('data-scroll')); }).filter(Boolean);
  function spy() {
    var y = home.scrollTop + 120;
    var current = -1;
    for (var i = 0; i < secs.length; i++) {
      if (secs[i].getBoundingClientRect().top + home.scrollTop <= y) { current = i; }
    }
    for (var j = 0; j < links.length; j++) {
      links[j].classList.toggle('active', j === current);
    }
  }
  links.forEach(function (l) {
    l.addEventListener('click', function (e) {
      var t = d.querySelector(l.getAttribute('data-scroll'));
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      }
    });
  });

  /* ── 移动端菜单 ─────────────────────────────── */
  var burger = d.getElementById('zh-burger');
  var menu = d.getElementById('zh-menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[data-scroll]') : null;
      if (a) { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* ── 打字机效果（随语言切换） ──────────────────── */
  var typeEl = d.getElementById('zh-typing');
  var PHRASES = {
    en: [
      'Code with clarity. Live with emptiness.',
      '30+ years of full-stack & database engineering.',
      'Senior Software Developer · DASH Technology Group',
      'Exploring Generative AI · NLP · Zen'
    ],
    zh: [
      '以码参禅，以禅入码。',
      '三十余年全栈与数据库工程实践。',
      '高级软件工程师 · DASH Technology Group',
      '探索生成式 AI · NLP · 禅'
    ]
  };
  var pi = 0, ci = 0, deleting = false, typeTimer = null;
  function typingInit() {
    if (!typeEl) { return; }
    if (typeTimer) { clearTimeout(typeTimer); typeTimer = null; }
    pi = 0; ci = 0; deleting = false;
    if (reduce) { typeEl.textContent = PHRASES[currentLang][0]; return; }
    (function tick() {
      var full = PHRASES[currentLang][pi];
      if (!deleting) {
        ci++;
        typeEl.textContent = full.slice(0, ci);
        if (ci >= full.length) { deleting = true; typeTimer = setTimeout(tick, 1900); return; }
      } else {
        ci--;
        typeEl.textContent = full.slice(0, ci);
        if (ci <= 0) { deleting = false; pi = (pi + 1) % PHRASES[currentLang].length; }
      }
      typeTimer = setTimeout(tick, deleting ? 26 : 68);
    })();
  }
  typingInit();

  /* ── 滚动显现 ───────────────────────────────── */
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    Array.prototype.slice.call(d.querySelectorAll('.reveal')).forEach(function (n) { io.observe(n); });
  } else {
    Array.prototype.slice.call(d.querySelectorAll('.reveal')).forEach(function (n) { n.classList.add('in'); });
  }

  /* ── 禅语轮播（中英双语，随语言切换） ───────────── */
  var q = d.getElementById('zh-quote');
  var qa = d.getElementById('zh-quote-author');
  var quotes = [
    { en: { t: 'Form is emptiness; emptiness is form.', a: '— Heart Sutra, Prajnaparamita' }, zh: { t: '色即是空，空即是色。', a: '——《般若波罗蜜多心经》' } },
    { en: { t: 'Let the mind abide nowhere; let the mind arise freely.', a: '— Diamond Sutra' }, zh: { t: '应无所住，而生其心。', a: '——《金刚经》' } },
    { en: { t: 'Bodhi is no tree; the mirror has no stand. Nothing exists at all — where could dust alight?', a: '— Huineng, Platform Sutra' }, zh: { t: '菩提本无树，明镜亦非台。本来无一物，何处惹尘埃。', a: '—— 六祖惠能《坛经》' } },
    { en: { t: 'One flower, one world; one leaf, one Tathagata.', a: '— Avatamsaka Sutra (spirit)' }, zh: { t: '一花一世界，一叶一如来。', a: '——《华严经》意境' } },
    { en: { t: 'More the knowledge, lesser the ego.', a: '— Albert Einstein' }, zh: { t: 'More the knowledge, lesser the ego.', a: '—— Albert Einstein' } },
    { en: { t: 'See your true nature — enlightenment itself.', a: '— Chan Buddhism' }, zh: { t: '明心见性。', a: '—— 禅宗宗旨' } }
  ];
  var qi = 0;
  function renderQuote(i) {
    if (!q || !qa) { return; }
    var item = quotes[i] && quotes[i][currentLang] ? quotes[i][currentLang] : quotes[0][currentLang];
    q.textContent = item.t;
    qa.textContent = item.a;
  }
  renderQuote(0);
  if (!reduce) {
    setInterval(function () {
      qi = (qi + 1) % quotes.length;
      q.style.opacity = '0';
      qa.style.opacity = '0';
      setTimeout(function () {
        renderQuote(qi);
        q.style.opacity = '1';
        qa.style.opacity = '1';
      }, 450);
    }, 6500);
  }

  /* ── 站点嵌入 iframe 设备切换（禅院 / 公司官网） ── */
  var devBtns = Array.prototype.slice.call(d.querySelectorAll('[data-device]'));
  devBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      var host = b.closest('[data-mode]');
      if (!host) { return; }
      Array.prototype.slice.call(host.querySelectorAll('[data-device]')).forEach(function (x) {
        x.classList.remove('on');
        x.setAttribute('aria-pressed', 'false');
      });
      b.classList.add('on');
      b.setAttribute('aria-pressed', 'true');
      host.setAttribute('data-mode', b.getAttribute('data-device'));
    });
  });

  /* ── 粒子星空（颜色随主题切换） ───────────────── */
  var stars = [];
  var cv = d.getElementById('zh-stars');
  var hero = d.getElementById('top');
  if (cv && cv.getContext && !reduce) {
    var ctx = cv.getContext('2d');
    var W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);
    var N = Math.max(60, Math.min(130, Math.floor(W * H / 9000)));
    for (var i = 0; i < N; i++) {
      stars.push({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.4 + 0.3,
        c: starColors[Math.floor(Math.random() * starColors.length)],
        tw: Math.random() * 6.2832, tws: 0.004 + Math.random() * 0.015,
        vy: 0.05 + Math.random() * 0.25, vx: (Math.random() - 0.5) * 0.08
      });
    }
    var mx = 0, my = 0;
    if (hero) {
      hero.addEventListener('mousemove', function (e) {
        var r = hero.getBoundingClientRect();
        mx = (e.clientX - r.left) / r.width - 0.5;
        my = (e.clientY - r.top) / r.height - 0.5;
      });
    }
    (function frame() {
      ctx.clearRect(0, 0, W, H);
      for (var k = 0; k < stars.length; k++) {
        var s = stars[k];
        s.y -= s.vy; s.x += s.vx; s.tw += s.tws;
        if (s.y < -4) { s.y = H + 4; s.x = Math.random() * W; }
        if (s.x < -4) { s.x = W + 4; }
        if (s.x > W + 4) { s.x = -4; }
        var a = 0.22 + 0.5 * (0.5 + 0.5 * Math.sin(s.tw));
        ctx.beginPath();
        ctx.arc(s.x + mx * 14, s.y + my * 10, s.r, 0, 6.2832);
        ctx.fillStyle = 'rgba(' + s.c + ',' + a.toFixed(3) + ')';
        ctx.fill();
      }
      requestAnimationFrame(frame);
    })();
  }

  /* ── 页脚年份 ───────────────────────────────── */
  var yr = d.getElementById('zh-year');
  if (yr) { yr.textContent = String(new Date().getFullYear()); }

  applyLang(currentLang);
  onScroll();
})();
</script>

</div>
