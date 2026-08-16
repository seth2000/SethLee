<!--
  ════════════════════════════════════════════════════════════════════════
   Seth Lee · 个人主页（单文件版） · "禅 × 码" 设计系统
  ════════════════════════════════════════════════════════════════════════
   线上地址 : https://sethfengli.com/          (GitHub Pages, 由本 README 渲染)
   仓库地址 : https://github.com/seth2000/SethLee
   禅院子站 : https://zen.sethfengli.com/       (慧灯禅院, 已嵌入主页)

   ▸ 部署：GitHub 仓库 → Settings → Pages → Source: Deploy from a branch
           → Branch: master / (root) → Save。自定义域名在 Pages 中配置
           sethfengli.com（DNS 需 CNAME 记录指向 seth2000.github.io）。
   ▸ 说明：本文件同时是 GitHub 仓库首页与 sethfengli.com 的完整主页。
           GitHub.com 上的渲染会过滤 style/script/iframe（显示静态预览），
           GitHub Pages 上呈现完整交互效果（粒子星空、动效、嵌入禅院）。

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

<div markdown="0" lang="zh-CN" id="zen-home">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&amp;family=JetBrains+Mono:wght@400;500;700&amp;family=Noto+Serif+SC:wght@500;700;900&amp;display=swap" rel="stylesheet">

<style>
/* ═══════════════ 1. 基础 / 重置 ═══════════════ */
html, body {
  height: 100%;
  margin: 0 !important;
  overflow: hidden !important;
}
#zen-home {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  overflow-y: auto; overflow-x: hidden;
  background: #05070f; color: #e8ecf4;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  line-height: 1.7;
  scroll-behavior: smooth;
  scrollbar-color: #2b3550 #070b16;
  --gold: #e6c07a; --gold-2: #f2d9a4; --gold-deep: #b98a3e;
  --cyan: #7dd3fc; --violet: #a78bfa; --jade: #7fd1c0; --rose: #e8a0bf;
  --ink: #e8ecf4; --dim: #9aa5bd; --faint: #5f6b85;
  --line: rgba(255,255,255,.08); --line-2: rgba(255,255,255,.14);
  --glass: rgba(255,255,255,.045); --glass-2: rgba(255,255,255,.07);
  --serif: 'Noto Serif SC', 'Songti SC', SimSun, serif;
  --mono: 'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
}
#zen-home ::selection { background: rgba(230,192,122,.35); }
#zen-home :focus-visible { outline: 2px solid #e6c07a; outline-offset: 3px; border-radius: 4px; }
#zen-home ::-webkit-scrollbar { width: 10px; }
#zen-home ::-webkit-scrollbar-thumb { background: #232c44; border-radius: 8px; border: 2px solid #070b16; }
#zen-home ::-webkit-scrollbar-track { background: #070b16; }
#zen-home a { text-decoration: none; }
#zen-home img { max-width: 100%; }

/* ═══════════════ 2. 全局背景特效 ═══════════════ */
.bg-fx { position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
.orb { position: absolute; border-radius: 50%; filter: blur(90px); opacity: .3; }
.orb-a { width: 46vw; height: 46vw; left: -12vw; top: -16vw; background: radial-gradient(circle, #8a5a2b, transparent 65%); animation: drift1 26s ease-in-out infinite alternate; }
.orb-b { width: 40vw; height: 40vw; right: -14vw; top: 20vh; background: radial-gradient(circle, #143a5e, transparent 65%); animation: drift2 32s ease-in-out infinite alternate; }
.orb-c { width: 34vw; height: 34vw; left: 30vw; bottom: -18vw; background: radial-gradient(circle, #3b2a6e, transparent 65%); animation: drift3 38s ease-in-out infinite alternate; }
@keyframes drift1 { to { transform: translate(6vw, 8vh) scale(1.12); } }
@keyframes drift2 { to { transform: translate(-5vw, -7vh) scale(1.08); } }
@keyframes drift3 { to { transform: translate(-4vw, -6vh) scale(1.15); } }
.grid-fx {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
  background-size: 56px 56px;
  -webkit-mask-image: radial-gradient(ellipse at 50% 28%, #000 0%, transparent 72%);
  mask-image: radial-gradient(ellipse at 50% 28%, #000 0%, transparent 72%);
}
.noise-fx {
  position: absolute; inset: 0; opacity: .05;
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
  background: rgba(5,8,18,.72);
  -webkit-backdrop-filter: blur(14px) saturate(150%); backdrop-filter: blur(14px) saturate(150%);
  border-bottom-color: var(--line);
  box-shadow: 0 10px 30px -18px rgba(0,0,0,.8);
}
.nav-inner { max-width: 1120px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; gap: 16px; }
.brand { display: flex; align-items: center; gap: 10px; color: var(--ink); font-weight: 800; letter-spacing: .2px; }
.brand-mark {
  width: 34px; height: 34px; border-radius: 10px; display: grid; place-items: center;
  background: linear-gradient(135deg, #2a2438, #101a33); border: 1px solid var(--line-2);
  font-family: var(--serif); color: var(--gold-2); font-size: 15px;
  box-shadow: 0 0 18px rgba(230,192,122,.25) inset;
}
.nav-links { margin-left: auto; display: flex; align-items: center; gap: 4px; }
.nav-links a { padding: 8px 13px; border-radius: 999px; color: var(--dim); font-size: 13.5px; font-weight: 500; transition: color .25s, background .25s; }
.nav-links a:hover { color: var(--ink); background: var(--glass-2); }
.nav-links a.active { color: var(--gold-2); background: rgba(230,192,122,.1); }
.nav-cta { margin-left: 6px; padding: 8px 16px !important; border: 1px solid var(--line-2); color: var(--gold-2) !important; font-family: var(--mono); font-size: 12.5px !important; }
#zh-burger {
  display: none; margin-left: auto; width: 40px; height: 40px; border-radius: 12px;
  border: 1px solid var(--line-2); background: var(--glass); color: var(--ink);
  cursor: pointer; font-size: 17px;
}

/* ═══════════════ 4. Hero ═══════════════ */
.hero { position: relative; z-index: 1; min-height: 92vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 120px 24px 84px; }
#zh-stars { position: absolute; inset: 0; width: 100%; height: 100%; }
.hero-inner { position: relative; max-width: 880px; }
.eyebrow { font-family: var(--mono); font-size: 12.5px; letter-spacing: .08em; color: var(--gold); }
.caret { display: inline-block; margin-left: 2px; color: var(--gold); animation: blink 1.1s steps(1) infinite; }
@keyframes blink { 50% { opacity: 0; } }
.hero-title {
  margin: 18px 0 6px; font-size: clamp(2.7rem, 7.5vw, 5.2rem); line-height: 1.05; font-weight: 800; letter-spacing: -.02em;
  background: linear-gradient(100deg, #f6e7c6 0%, #e6c07a 38%, #7dd3fc 78%, #a78bfa 100%);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent; color: transparent;
}
.hero-sub {
  display: block; margin-top: 14px; font-family: var(--serif);
  font-size: clamp(1rem, 2.6vw, 1.35rem); font-weight: 500; letter-spacing: .28em;
  -webkit-text-fill-color: #f2d9a4; color: #f2d9a4;
}
.hero-type { min-height: 30px; margin-top: 22px; font-family: var(--mono); font-size: clamp(.9rem, 2vw, 1.05rem); color: var(--dim); }
.hero-bio { max-width: 660px; margin: 20px auto 0; color: var(--dim); font-size: 15.5px; }
.hero-bio strong { color: var(--gold-2); font-weight: 600; }
.hero-cta { margin-top: 34px; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.btn {
  display: inline-flex; align-items: center; gap: 8px; padding: 13px 26px; border-radius: 999px;
  font-weight: 600; font-size: 14.5px; color: var(--ink);
  transition: transform .25s, box-shadow .25s, border-color .25s, background .25s;
}
.btn-gold { background: linear-gradient(135deg, #f2d9a4, #d4a94e); color: #1a1306 !important; box-shadow: 0 10px 34px -12px rgba(230,192,122,.55); }
.btn-gold:hover { transform: translateY(-2px); box-shadow: 0 16px 44px -12px rgba(230,192,122,.7); }
.btn-ghost { border: 1px solid var(--line-2); background: var(--glass); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }
.btn-ghost:hover { transform: translateY(-2px); border-color: rgba(125,211,252,.5); box-shadow: 0 12px 34px -16px rgba(125,211,252,.35); }
.hero-stats { margin-top: 56px; display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
.stat {
  min-width: 132px; padding: 18px 20px; border-radius: 16px; border: 1px solid var(--line);
  background: var(--glass); -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px);
}
.stat b { display: block; font-family: var(--mono); font-size: 1.45rem; color: var(--gold-2); font-weight: 700; }
.stat span { font-size: 12px; color: var(--faint); letter-spacing: .06em; }
.scroll-hint { position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); color: var(--faint); font-size: 24px; animation: bob 2.2s ease-in-out infinite; }
@keyframes bob { 0%, 100% { transform: translate(-50%, 0); } 50% { transform: translate(-50%, 8px); } }

/* ═══════════════ 5. 区块骨架 ═══════════════ */
.sec { position: relative; z-index: 1; padding: 96px 24px; scroll-margin-top: 84px; }
.sec-alt { background: linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,.02)); }
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
  background: linear-gradient(160deg, rgba(255,255,255,.055), rgba(255,255,255,.02));
  -webkit-backdrop-filter: blur(14px) saturate(140%); backdrop-filter: blur(14px) saturate(140%);
  transition: transform .35s, border-color .35s, box-shadow .35s;
}
.card:hover {
  transform: translateY(-5px); border-color: rgba(230,192,122,.35);
  box-shadow: 0 24px 60px -28px rgba(0,0,0,.85), 0 0 0 1px rgba(230,192,122,.12), 0 0 44px -18px rgba(230,192,122,.35);
}
.card-img { position: relative; aspect-ratio: 16 / 9; overflow: hidden; }
.card-img img { width: 100%; height: 100%; object-fit: cover; display: block; transform: scale(1.02); transition: transform .6s; }
.card:hover .card-img img { transform: scale(1.07); }
.card-img::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(5,8,18,0) 30%, rgba(5,8,18,.85) 100%); }
.img-credit { position: absolute; right: 10px; bottom: 8px; z-index: 1; font-size: 10px; color: rgba(255,255,255,.55); font-family: var(--mono); }
.card-body { padding: 24px 26px 28px; }
.card-icon { width: 46px; height: 46px; display: grid; place-items: center; font-size: 22px; border-radius: 13px; background: var(--glass-2); border: 1px solid var(--line-2); margin-bottom: 14px; }
.card-body h3 { margin: 0 0 10px; font-size: 1.22rem; font-weight: 700; color: var(--ink); }
.card-body h3 span { color: var(--faint); font-weight: 500; font-size: .9rem; }
.card-body p { margin: 0 0 16px; color: var(--dim); font-size: 14.5px; }
.chips { display: flex; flex-wrap: wrap; gap: 8px; }
.chip { font-family: var(--mono); font-size: 11.5px; padding: 5px 11px; border-radius: 999px; border: 1px solid var(--line-2); color: var(--dim); background: var(--glass); letter-spacing: .02em; }
.chip.hot { color: var(--gold-2); border-color: rgba(230,192,122,.4); background: rgba(230,192,122,.08); }

/* ═══════════════ 7. 哲思 / 代码 / 签诗 ═══════════════ */
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.ins-card { padding: 26px; }
.ins-card .tag {
  display: inline-block; font-family: var(--mono); font-size: 10.5px; letter-spacing: .12em; text-transform: uppercase;
  color: var(--jade); border: 1px solid rgba(127,209,192,.3); background: rgba(127,209,192,.06);
  border-radius: 999px; padding: 4px 10px; margin-bottom: 14px;
}
.ins-card h3 { margin: 0 0 10px; font-family: var(--serif); font-size: 1.12rem; font-weight: 700; color: var(--ink); line-height: 1.5; }
.ins-card p { margin: 0; color: var(--dim); font-size: 13.8px; }
.ins-card .eng { display: block; margin-top: 10px; font-family: var(--mono); font-size: 11px; color: var(--faint); letter-spacing: .02em; }
.code-row { display: grid; grid-template-columns: 1.2fr 1fr; gap: 20px; margin-top: 20px; }
pre.code { margin: 0; padding: 24px 26px; overflow-x: auto; font-family: var(--mono); font-size: 12.8px; line-height: 1.75; color: #c9d4ea; background: rgba(3,6,16,.75); }
pre.code .c-k { color: #a78bfa; } pre.code .c-t { color: #7dd3fc; } pre.code .c-f { color: #f2d9a4; }
pre.code .c-s { color: #7fd1c0; } pre.code .c-m { color: #e8a0bf; } pre.code .c-p { color: #8fa3c8; }
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

/* ═══════════════ 8. 技术栈 / 项目 ═══════════════ */
.stack-groups { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.stack-group { padding: 22px 24px; }
.stack-group h3 { margin: 0 0 14px; font-family: var(--mono); font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: var(--gold); }
.proj-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.proj-card { padding: 26px; display: flex; flex-direction: column; gap: 10px; }
.proj-top { display: flex; align-items: center; gap: 10px; }
.proj-name { font-family: var(--mono); font-size: 1.02rem; font-weight: 700; color: var(--ink); }
.proj-lang { font-size: 11px; padding: 3px 9px; border-radius: 999px; color: var(--cyan); border: 1px solid rgba(125,211,252,.35); background: rgba(125,211,252,.07); }
.proj-star { margin-left: auto; font-size: 12px; color: var(--gold-2); font-family: var(--mono); }
.proj-card p { margin: 0; color: var(--dim); font-size: 13.8px; flex: 1; }
.proj-link { font-family: var(--mono); font-size: 12px; color: var(--gold); }
.proj-more { margin-top: 18px; text-align: center; font-size: 13px; color: var(--faint); font-family: var(--mono); }
.proj-more a { color: var(--dim); }
.stats-row { margin-top: 30px; display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
.stats-row img { border-radius: 14px; border: 1px solid var(--line); background: rgba(255,255,255,.03); }

/* ═══════════════ 9. 禅院嵌入 ═══════════════ */
.zen-frame {
  border-radius: 20px; border: 1px solid var(--line-2); overflow: hidden;
  background: rgba(8,12,26,.6); -webkit-backdrop-filter: blur(16px); backdrop-filter: blur(16px);
  box-shadow: 0 40px 90px -40px rgba(0,0,0,.9), 0 0 0 1px rgba(230,192,122,.08);
}
.zen-bar { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-bottom: 1px solid var(--line); background: rgba(255,255,255,.03); flex-wrap: wrap; }
.zen-dots { display: flex; gap: 6px; }
.zen-dots i { width: 11px; height: 11px; border-radius: 50%; background: #f26d5f; display: block; }
.zen-dots i:nth-child(2) { background: #f2c94c; }
.zen-dots i:nth-child(3) { background: #6fcf97; }
.zen-url {
  flex: 1; min-width: 160px; font-family: var(--mono); font-size: 12px; color: var(--faint);
  background: rgba(255,255,255,.05); border: 1px solid var(--line); border-radius: 999px; padding: 6px 14px;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.zen-tools { display: flex; gap: 6px; align-items: center; }
.zen-tools button {
  font-family: var(--mono); font-size: 11.5px; padding: 6px 12px; border-radius: 999px;
  border: 1px solid var(--line-2); background: transparent; color: var(--dim); cursor: pointer;
  transition: color .25s, border-color .25s, background .25s;
}
.zen-tools button.on, .zen-tools button:hover { color: var(--gold-2); border-color: rgba(230,192,122,.45); background: rgba(230,192,122,.08); }
.zen-open { color: var(--ink) !important; border-color: rgba(125,211,252,.4) !important; }
.zen-stage { max-width: 100%; margin: 0 auto; transition: max-width .45s cubic-bezier(.2,.7,.2,1); }
.zen-stage iframe { display: block; width: 100%; height: 640px; border: 0; background: #12100c; }
#zen[data-mode="tablet"] .zen-stage { max-width: 768px; }
#zen[data-mode="mobile"] .zen-stage { max-width: 400px; }
.zen-note { margin-top: 20px; display: flex; align-items: center; justify-content: center; gap: 12px; color: var(--faint); font-size: 12.5px; font-family: var(--mono); text-align: left; }
.zen-note img { width: 46px; height: 46px; border-radius: 50%; object-fit: cover; border: 1px solid var(--line-2); flex: 0 0 auto; }

/* ═══════════════ 10. 心语横幅 / 联系 / 页脚 ═══════════════ */
.quote-sec { position: relative; z-index: 1; min-height: 62vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 96px 24px; overflow: hidden; }
.quote-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: .5; }
.quote-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(5,7,15,.94) 0%, rgba(5,7,15,.55) 45%, rgba(5,7,15,.94) 100%); }
.quote-inner { position: relative; max-width: 800px; }
.quote-mark { font-family: var(--serif); font-size: 3.4rem; color: var(--gold); line-height: 1; margin-bottom: 6px; }
#zh-quote { margin: 0; font-family: var(--serif); font-size: clamp(1.25rem, 3.4vw, 1.75rem); font-weight: 700; letter-spacing: .06em; color: #f4efe4; line-height: 2; transition: opacity .45s ease; }
#zh-quote-author { display: block; margin-top: 18px; font-style: normal; font-size: 13px; letter-spacing: .22em; color: var(--gold); transition: opacity .45s ease; }
.center { text-align: center; }
.contact-line { font-family: var(--serif); font-size: clamp(1.3rem, 3.2vw, 1.9rem); font-weight: 500; color: var(--ink); margin: 0 0 30px; }
.contact-info { margin-top: 34px; font-family: var(--mono); font-size: 12.5px; color: var(--faint); letter-spacing: .05em; }
footer { position: relative; z-index: 1; border-top: 1px solid var(--line); padding: 44px 24px 36px; background: rgba(3,5,12,.85); }
.foot-grid { display: flex; justify-content: space-between; gap: 26px; flex-wrap: wrap; }
.foot-brand { font-family: var(--serif); color: var(--gold-2); font-size: 1.02rem; letter-spacing: .08em; }
.foot-brand small { display: block; font-family: var(--mono); font-size: 11px; color: var(--faint); letter-spacing: .04em; margin-top: 6px; }
.foot-credits { max-width: 480px; font-size: 11.5px; color: var(--faint); line-height: 1.9; }
.foot-credits a { color: var(--dim); }
.foot-copy { width: 100%; margin-top: 20px; padding-top: 18px; border-top: 1px dashed var(--line); font-family: var(--mono); font-size: 11px; color: var(--faint); display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap; }

/* ═══════════════ 11. GitHub.com 降级（仅预览页可见） ═══════════════ */
.gh-only, .gh-fallback { display: none !important; }

/* ═══════════════ 12. 响应式 ═══════════════ */
@media (max-width: 900px) {
  .about-grid, .grid-3, .code-row, .stack-groups, .proj-grid { grid-template-columns: 1fr; }
  .sec { padding: 72px 20px; }
  .zen-stage iframe { height: 480px; }
  .hero { padding-top: 100px; min-height: auto; }
}
@media (max-width: 860px) {
  #zh-burger { display: block; }
  .nav-links {
    display: none; position: absolute; top: 64px; left: 16px; right: 16px;
    flex-direction: column; align-items: stretch; gap: 4px; padding: 12px;
    border-radius: 16px; background: rgba(8,12,26,.95);
    -webkit-backdrop-filter: blur(18px); backdrop-filter: blur(18px);
    border: 1px solid var(--line); box-shadow: 0 24px 60px -20px rgba(0,0,0,.8);
  }
  .nav-links.open { display: flex; }
  .nav-links a { padding: 12px 14px; }
  .nav-cta { margin-left: 0; text-align: center; }
}
@media (max-width: 560px) {
  .stat { min-width: 42%; }
  .zen-tools { width: 100%; justify-content: space-between; }
  .zen-stage iframe { height: 62vh; min-height: 420px; }
  .foot-copy { flex-direction: column; }
}

/* ═══════════════ 13. 减少动态偏好 ═══════════════ */
@media (prefers-reduced-motion: reduce) {
  #zen-home { scroll-behavior: auto; }
  .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
  .orb, .caret, .scroll-hint { animation: none !important; }
  .card, .btn, .zen-stage { transition: none !important; }
  .card:hover { transform: none; }
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
  📌 当前为 GitHub 预览版（动效与禅院嵌入被 GitHub 过滤）。完整交互版请访问
  <a href="https://sethfengli.com/" style="color:#f2d9a4;">https://sethfengli.com/</a>
</div>

<!-- ═══════════ 导航 ═══════════ -->
<header class="zh-nav" id="zh-nav">
  <div class="nav-inner">
    <a class="brand" href="#top" data-scroll="#top" aria-label="返回顶部">
      <span class="brand-mark" aria-hidden="true">禅</span>
      <span>Seth Lee</span>
    </a>
    <button id="zh-burger" aria-label="打开导航菜单" aria-expanded="false" aria-controls="zh-menu">☰</button>
    <nav class="nav-links" id="zh-menu" aria-label="主导航">
      <a href="#about" data-scroll="#about">关于</a>
      <a href="#insights" data-scroll="#insights">哲思</a>
      <a href="#stack" data-scroll="#stack">技术</a>
      <a href="#projects" data-scroll="#projects">项目</a>
      <a href="#zen" data-scroll="#zen">禅院</a>
      <a href="#contact" data-scroll="#contact">联系</a>
      <a class="nav-cta" href="https://github.com/seth2000" target="_blank" rel="noopener">GitHub ↗</a>
    </nav>
  </div>
</header>

<!-- ═══════════ Hero ═══════════ -->
<section class="hero" id="top" aria-label="首页">
  <canvas id="zh-stars" aria-hidden="true"></canvas>
  <div class="hero-inner">
    <p class="eyebrow">~/seth-lee ▸ sydney · senior software engineer · zen practitioner<span class="caret">▍</span></p>
    <h1 class="hero-title">Seth Lee<span class="hero-sub">以码参禅 · 以禅入码</span></h1>
    <p class="hero-type"><span id="zh-typing">以码参禅，以禅入码。</span><span class="caret">▍</span></p>
    <p class="hero-bio">
      现居悉尼的<strong>资深全栈工程师</strong>，自 2015 年踏上开源之路，深耕企业自动化、Web 工程与数据探索；
      同时也是一名<strong>佛学爱好者</strong>——相信「理解抽象」是编程与修行的共同法门，
      并运营线上数字禅院「慧灯禅院」。在这里，代码与禅，同源同修。
    </p>
    <div class="hero-cta">
      <a class="btn btn-gold" href="https://zen.sethfengli.com/" target="_blank" rel="noopener">🪷 进入禅院</a>
      <a class="btn btn-ghost" href="https://github.com/seth2000" target="_blank" rel="noopener">GitHub ↗</a>
      <a class="btn btn-ghost" href="#contact" data-scroll="#contact">联系我</a>
    </div>
    <div class="hero-stats">
      <div class="stat"><b>2015</b><span>GitHub 启程</span></div>
      <div class="stat"><b>8</b><span>开源仓库</span></div>
      <div class="stat"><b>1</b><span>数字禅院</span></div>
      <div class="stat"><b>∞</b><span>持续精进</span></div>
    </div>
  </div>
  <a class="scroll-hint" href="#about" data-scroll="#about" aria-label="向下滚动">⌄</a>
</section>

<main>
  <!-- ═══════════ 01 关于 ═══════════ -->
  <section class="sec" id="about">
    <div class="wrap">
      <div class="sec-head reveal">
        <p class="eyebrow"># 01 / about</p>
        <h2>两面人生 <em>· 一半代码，一半禅</em></h2>
        <p class="sub">一个把 Bug 当公案、把重构当修行的开发者；一条从悉尼写字楼通向线上禅院的小径。</p>
      </div>
      <div class="about-grid">
        <article class="card reveal">
          <div class="card-img">
            <img src="https://images.pexels.com/photos/34804020/pexels-photo-34804020.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200" alt="屏幕上运行的代码" loading="lazy" decoding="async">
            <span class="img-credit">Photo · Daniil Komov / Pexels</span>
          </div>
          <div class="card-body">
            <div class="card-icon" aria-hidden="true">🖥️</div>
            <h3>工程师 <span>· Engineer</span></h3>
            <p>
              十多年企业工程与自动化经验，信奉「自动化一切可自动化的」。
              从 Active Directory 运维工具到自动写诗的古诗生成器，再到 Web 前后端与数据实验，
              在 PowerShell、Python、JavaScript 之间自由穿行。
            </p>
            <div class="chips">
              <span class="chip hot">Full-Stack</span><span class="chip">Automation</span>
              <span class="chip">PowerShell</span><span class="chip">Python</span>
              <span class="chip">Web</span><span class="chip">Data</span>
            </div>
          </div>
        </article>
        <article class="card reveal" style="--d:.12s">
          <div class="card-img">
            <img src="https://images.unsplash.com/photo-1761632046628-db5195c5164d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" alt="佛光笼罩中的佛像" loading="lazy" decoding="async">
            <span class="img-credit">Photo · itsiken / Unsplash</span>
          </div>
          <div class="card-body">
            <div class="card-icon" aria-hidden="true">🪷</div>
            <h3>修行者 <span>· Practitioner</span></h3>
            <p>
              佛学爱好者，用工程师的思维解构佛学：
              「空」是抽象类，「色」是具体类，「相」是实例；无我，就是无法使用 this。
              运营「慧灯禅院」——佛学文章、法音宣流、在线祈福、观音灵签，
              让古老的智慧以数字的方式长明。
            </p>
            <div class="chips">
              <span class="chip hot">佛学</span><span class="chip">禅宗</span>
              <span class="chip">心经</span><span class="chip">数字禅院</span>
              <span class="chip">明心见性</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ═══════════ 02 哲思 ═══════════ -->
  <section class="sec sec-alt" id="insights">
    <div class="wrap">
      <div class="sec-head reveal">
        <p class="eyebrow"># 02 / insights · 禅码哲思</p>
        <h2>禅是世界观，<em>代码是方法论</em></h2>
        <p class="sub">以下哲思源自本主页的长期思考——以程序员的语言，重新诠释佛学中的经典概念。</p>
      </div>
      <div class="grid-3">
        <article class="card ins-card reveal">
          <span class="tag">心经 · OOP</span>
          <h3>「空」是抽象类 · 空即是色，色即是空</h3>
          <p>
            空（Emptiness）是 abstract class，色（Form）是 concrete class，相（Appearance）是 instance。
            你看见一只猫：眼前这只具体的猫是实例，「猫」是抽象类，「黑猫」是具体类——
            心智从具体走向抽象，这是一条可验证的认知路径。
          </p>
          <span class="eng">Emptiness : Form : Appearance = abstract class : concrete class : instance</span>
        </article>
        <article class="card ins-card reveal" style="--d:.08s">
          <span class="tag">四无 · 金刚经</span>
          <h3>「我」无法被实例化 · My Nature is an Abstract Class</h3>
          <p>
            「我」在本质上是一个抽象类：不能使用 this → 无我；不能实例化 → 无人；
            不能继承 → 无众生；没有生命周期方法 → 无寿者。
            四句偈的尽头，是一个永远无法 new 出来的对象。
          </p>
          <span class="eng">no this · no instantiate · no inherit · no lifecycle</span>
        </article>
        <article class="card ins-card reveal" style="--d:.16s">
          <span class="tag">世界观 · Pattern</span>
          <h3>世界是一个运行中的实例 · The World</h3>
          <p>
            宇宙是一个正在运行的虚拟系统（instance）。类（class）可以定义许多世界，
            而我们的宇宙实例独一无二；克隆出的对象，永远是新的对象。
            「我」是一个实现 State Pattern 的对象——随内部状态而改变行为。
          </p>
          <span class="eng">universe = a running instance of class World</span>
        </article>
        <article class="card ins-card reveal">
          <span class="tag">认识论 · Testing</span>
          <h3>在系统之外，才能测试系统 · The Predict Principle</h3>
          <p>
            拿到底层 SDK，就能调试这个世界。参数是伪随机的：相同输入，必然得到相同输出。
            而有效的测试必须在系统之外进行——系统之内，测试数据、系统执行与观测结果，
            无法被干净地分离。
          </p>
          <span class="eng">identical input yields identical output</span>
        </article>
        <article class="card ins-card reveal" style="--d:.08s">
          <span class="tag">思考实验 · Game</span>
          <h3>我们是 NPC，还是玩家？ · Virtual Game</h3>
          <p>
            在这个世界实例中，我们通常表现得像 NPC。
            外部的「玩家」可能存在，但他们的出现形式或许多样而间接——
            未必只是简单的操控。这个问题本身，就是最好的调试断点。
          </p>
          <span class="eng">NPC or Player — that is the question</span>
        </article>
        <article class="card ins-card reveal" style="--d:.16s">
          <span class="tag">无我 · Einstein</span>
          <h3>知识越多，我执越少 · No Ego</h3>
          <p>
            Ego = 1 / Knowledge。主页长期引用的爱因斯坦语录：
            「知识越多，我执越少；知识越少，我执越多。」
            「当心别把理智奉若神明——它虽肌肉强健，却没有个性。」
          </p>
          <span class="eng">More the knowledge, lesser the ego</span>
        </article>
      </div>
      <div class="code-row">
        <article class="card reveal">
          <pre class="code" aria-label="Python 概念模型代码"><code><span class="c-k">import</span> math

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
            <small>📜 签诗 · 2021/07/20 — 回收台湾</small>
            欲进又徘徊，心危事不危。<br>
            水边人指引，名利得荣归。
          </p>
          <p class="poem-en">
            I wished to move forward but hesitated. The heart sensed danger, yet all was actually well.<br>
            Guided by one who lives by the water, fame and fortune return in honor.
          </p>
          <div class="seal" aria-hidden="true">禅</div>
          <p class="poem-note">
            与「明心见性」同源——记录对抽象之「我」的理解：<br>
            Consciousness: understanding the abstract "I" and nothing else.
          </p>
        </article>
      </div>
    </div>
  </section>

  <!-- ═══════════ 03 技术栈 ═══════════ -->
  <section class="sec" id="stack">
    <div class="wrap">
      <div class="sec-head reveal">
        <p class="eyebrow"># 03 / stack</p>
        <h2>技术栈 <em>· 工具箱</em></h2>
        <p class="sub">选工具如选法器——趁手、可靠、可维护。以下是与日常共修的技术。</p>
      </div>
      <div class="stack-groups">
        <div class="card stack-group reveal">
          <h3>语言 · Languages</h3>
          <div class="chips">
            <span class="chip hot">Python</span><span class="chip hot">PowerShell</span>
            <span class="chip">JavaScript</span><span class="chip">TypeScript</span>
            <span class="chip">HTML</span><span class="chip">CSS</span>
          </div>
        </div>
        <div class="card stack-group reveal" style="--d:.06s">
          <h3>框架与工具 · Frameworks</h3>
          <div class="chips">
            <span class="chip hot">Angular</span><span class="chip">Bootstrap 5</span>
            <span class="chip">Node.js</span><span class="chip">Jupyter</span>
          </div>
        </div>
        <div class="card stack-group reveal">
          <h3>工程实践 · Engineering</h3>
          <div class="chips">
            <span class="chip hot">Git</span><span class="chip">GitHub</span>
            <span class="chip">Azure DevOps</span><span class="chip">CI/CD</span>
            <span class="chip">GitHub Pages</span>
          </div>
        </div>
        <div class="card stack-group reveal" style="--d:.06s">
          <h3>兴趣方向 · Interests</h3>
          <div class="chips">
            <span class="chip hot">古诗生成 AI</span><span class="chip">数据工程</span>
            <span class="chip">企业自动化</span><span class="chip">佛学数字化</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════ 04 项目 ═══════════ -->
  <section class="sec sec-alt" id="projects">
    <div class="wrap">
      <div class="sec-head reveal">
        <p class="eyebrow"># 04 / projects</p>
        <h2>开源项目 <em>· 精选</em></h2>
        <p class="sub">从企业效率工具到「让机器写诗」的实验——每一个仓库都是一次修行。</p>
      </div>
      <div class="proj-grid">
        <article class="card proj-card reveal">
          <div class="proj-top">
            <span class="proj-name">chinesepoem</span>
            <span class="proj-lang">Jupyter</span>
          </div>
          <p>自动生成中文古诗——让机器学会写诗（生成模型实验）。</p>
          <a class="proj-link" href="https://github.com/seth2000/chinesepoem" target="_blank" rel="noopener">github.com/seth2000/chinesepoem ↗</a>
        </article>
        <article class="card proj-card reveal" style="--d:.06s">
          <div class="proj-top">
            <span class="proj-name">linqijing</span>
            <span class="proj-lang">Python</span>
          </div>
          <p>灵棋经的数字实现——传统占卜的现代实验。</p>
          <a class="proj-link" href="https://github.com/seth2000/linqijing" target="_blank" rel="noopener">github.com/seth2000/linqijing ↗</a>
        </article>
        <article class="card proj-card reveal">
          <div class="proj-top">
            <span class="proj-name">predictions</span>
            <span class="proj-lang">档案</span>
          </div>
          <p>预测档案——记录、复盘与验证，让时间给出答案。</p>
          <a class="proj-link" href="https://github.com/seth2000/predictions" target="_blank" rel="noopener">github.com/seth2000/predictions ↗</a>
        </article>
        <article class="card proj-card reveal" style="--d:.06s">
          <div class="proj-top">
            <span class="proj-name">PSGetUserLogonTimeFromAD</span>
            <span class="proj-lang">PowerShell</span>
            <span class="proj-star">★ 2</span>
          </div>
          <p>从 Active Directory 查询用户登录时间的企业运维工具。</p>
          <a class="proj-link" href="https://github.com/seth2000/PSGetUserLogonTimeFromAD" target="_blank" rel="noopener">github.com/seth2000/PSGetUserLogonTimeFromAD ↗</a>
        </article>
      </div>
      <p class="proj-more">
        更多仓库：country-name-detected · covertJPGToCSV · WindowsCommandAndPS —
        <a href="https://github.com/seth2000?tab=repositories" target="_blank" rel="noopener">在 GitHub 查看全部 ↗</a>
      </p>
      <div class="stats-row">
        <a href="https://github.com/seth2000" target="_blank" rel="noopener">
          <img src="https://github-readme-stats.vercel.app/api?username=seth2000&amp;show_icons=true&amp;hide_title=true&amp;hide_rank=true&amp;hide=contribs&amp;bg_color=0b1022&amp;title_color=e6c07a&amp;text_color=9aa5bd&amp;icon_color=7dd3fc&amp;border_color=ffffff14" alt="Seth Lee 的 GitHub 统计" loading="lazy">
        </a>
        <a href="https://github.com/seth2000" target="_blank" rel="noopener">
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=seth2000&amp;layout=compact&amp;hide_title=true&amp;bg_color=0b1022&amp;title_color=e6c07a&amp;text_color=9aa5bd&amp;border_color=ffffff14&amp;langs_count=6" alt="Seth Lee 最常用的语言" loading="lazy">
        </a>
      </div>
    </div>
  </section>

  <!-- ═══════════ 05 禅院 ═══════════ -->
  <section class="sec" id="zen" data-mode="desktop">
    <div class="wrap">
      <div class="sec-head reveal">
        <p class="eyebrow"># 05 / zen temple · 慧灯禅院</p>
        <h2>线上数字禅院 <em>· 24 小时长明</em></h2>
        <p class="sub">
          佛学文章 · 法音宣流 · 在线祈福 · 观音灵签——
          一座随缘而开的数字寺庙，已经完整嵌入本页。切换设备宽度，预览它在不同屏幕上的样子。
        </p>
      </div>
      <div class="zen-frame reveal">
        <div class="zen-bar">
          <span class="zen-dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <span class="zen-url">https://zen.sethfengli.com/</span>
          <div class="zen-tools" role="group" aria-label="预览设备切换">
            <button type="button" data-device="desktop" class="on" aria-pressed="true">桌面</button>
            <button type="button" data-device="tablet" aria-pressed="false">平板</button>
            <button type="button" data-device="mobile" aria-pressed="false">手机</button>
            <a class="zen-open btn" href="https://zen.sethfengli.com/" target="_blank" rel="noopener">全屏打开 ↗</a>
          </div>
        </div>
        <div class="zen-stage">
          <iframe src="https://zen.sethfengli.com/" title="慧灯禅院 · zen.sethfengli.com（内嵌预览）" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <!-- GitHub.com 上 iframe 会被过滤，此卡片仅在那里显示 -->
      <div class="gh-fallback card" style="margin-top:18px;padding:24px;text-align:center;">
        <p style="margin:0 0 14px;color:#9aa5bd;">GitHub 预览版无法内嵌 iframe，请直接访问禅院：</p>
        <a class="btn btn-gold" href="https://zen.sethfengli.com/" target="_blank" rel="noopener">🪷 打开 zen.sethfengli.com ↗</a>
      </div>
      <p class="zen-note">
        <img src="https://images.unsplash.com/photo-1719823255248-f51a0b0975c4?q=80&amp;w=200&amp;auto=format&amp;fit=crop" alt="水中莲花 · Photo by Jerry She on Unsplash" loading="lazy">
        <span>一盏心灯，长明不灭 —— 小屏设备建议点击「全屏打开」获得完整体验。</span>
      </p>
    </div>
  </section>

  <!-- ═══════════ 06 心语 ═══════════ -->
  <section class="quote-sec" id="quotes" aria-label="禅语轮播">
    <img class="quote-bg" src="https://images.unsplash.com/photo-1783501380692-6e764f136510?q=80&amp;w=1800&amp;auto=format&amp;fit=crop" alt="" aria-hidden="true" loading="lazy">
    <div class="quote-overlay" aria-hidden="true"></div>
    <div class="quote-inner">
      <div class="quote-mark" aria-hidden="true">「</div>
      <blockquote id="zh-quote">色即是空，空即是色。</blockquote>
      <cite id="zh-quote-author">——《般若波罗蜜多心经》</cite>
    </div>
  </section>

  <!-- ═══════════ 07 联系 ═══════════ -->
  <section class="sec" id="contact">
    <div class="wrap center">
      <div class="sec-head reveal" style="margin-left:auto;margin-right:auto;">
        <p class="eyebrow"># 07 / contact</p>
        <h2>结缘 <em>· 联系</em></h2>
      </div>
      <p class="contact-line reveal">期待与你聊聊代码、禅，或任何「看似不可能」的想法。</p>
      <div class="hero-cta reveal" style="--d:.1s">
        <a class="btn btn-gold" href="https://github.com/seth2000" target="_blank" rel="noopener">GitHub ↗</a>
        <a class="btn btn-ghost" href="https://zen.sethfengli.com/" target="_blank" rel="noopener">🪷 慧灯禅院</a>
        <a class="btn btn-ghost" href="https://sethfengli.com/" target="_blank" rel="noopener">sethfengli.com ↗</a>
      </div>
      <p class="contact-info">📍 Sydney, Australia &nbsp;·&nbsp; 🏢 Feng Tech &nbsp;·&nbsp; 🕉 自 2015 持续构建</p>
    </div>
  </section>
</main>

<!-- ═══════════ 页脚 ═══════════ -->
<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot-brand">
        禅 · 码 · 同修
        <small>Seth Lee — Senior Software Engineer × Zen Practitioner</small>
      </div>
      <div class="foot-credits">
        图片来源：<a href="https://unsplash.com/photos/misty-mountains-shrouded-in-dense-fog-and-clouds-J6hzH64fNHg" target="_blank" rel="noopener">Jayakrishnan K P</a> ·
        <a href="https://unsplash.com/photos/a-serene-buddha-statue-bathed-in-mystical-light-s4FU4MGS8_M" target="_blank" rel="noopener">itsiken</a> ·
        <a href="https://unsplash.com/photos/a-pink-flower-is-growing-out-of-the-water-oMjI_2khnJE" target="_blank" rel="noopener">Jerry She</a>（Unsplash）·
        <a href="https://www.pexels.com/photo/c-n-c-nh-ma-l-p-trinh-tren-man-hinh-may-tinh-34804020/" target="_blank" rel="noopener">Daniil Komov</a>（Pexels）——均免费可商用。<br>
        字体：Inter · JetBrains Mono · Noto Serif SC（Google Fonts，SIL OFL 开源许可）·
        数据卡片：<a href="https://github.com/anuraghazra/github-readme-stats" target="_blank" rel="noopener">github-readme-stats</a> ·
        托管：GitHub Pages
      </div>
    </div>
    <div class="foot-copy">
      <span>© <span id="zh-year">2025</span> Seth Lee · 以码参禅，以禅入码</span>
      <span>All things being equal = Everything happens as expected</span>
    </div>
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

  /* ── 打字机效果 ─────────────────────────────── */
  var typeEl = d.getElementById('zh-typing');
  var phrases = [
    '以码参禅，以禅入码。',
    'Code with clarity. Live with emptiness.',
    'All things being equal = Everything happens as expected.',
    'Senior Software Engineer × Zen Practitioner'
  ];
  if (typeEl && !reduce) {
    var pi = 0, ci = 0, deleting = false;
    (function tick() {
      var full = phrases[pi];
      if (!deleting) {
        ci++;
        typeEl.textContent = full.slice(0, ci);
        if (ci >= full.length) { deleting = true; setTimeout(tick, 1900); return; }
      } else {
        ci--;
        typeEl.textContent = full.slice(0, ci);
        if (ci <= 0) { deleting = false; pi = (pi + 1) % phrases.length; }
      }
      setTimeout(tick, deleting ? 26 : 68);
    })();
  } else if (typeEl) {
    typeEl.textContent = phrases[0];
  }

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

  /* ── 禅语轮播 ───────────────────────────────── */
  var q = d.getElementById('zh-quote');
  var qa = d.getElementById('zh-quote-author');
  var quotes = [
    { t: '色即是空，空即是色。', a: '——《般若波罗蜜多心经》' },
    { t: '应无所住，而生其心。', a: '——《金刚经》' },
    { t: '菩提本无树，明镜亦非台。本来无一物，何处惹尘埃。', a: '—— 六祖惠能《坛经》' },
    { t: '一花一世界，一叶一如来。', a: '——《华严经》意境' },
    { t: 'More the knowledge, lesser the ego.', a: '—— Albert Einstein' },
    { t: '明心见性。', a: '—— 禅宗宗旨' }
  ];
  if (q && qa && !reduce) {
    var qi = 0;
    setInterval(function () {
      qi = (qi + 1) % quotes.length;
      q.style.opacity = '0';
      qa.style.opacity = '0';
      setTimeout(function () {
        q.textContent = quotes[qi].t;
        qa.textContent = quotes[qi].a;
        q.style.opacity = '1';
        qa.style.opacity = '1';
      }, 450);
    }, 6500);
  }

  /* ── 禅院 iframe 设备切换 ─────────────────────── */
  var zen = d.getElementById('zen');
  var devBtns = Array.prototype.slice.call(d.querySelectorAll('[data-device]'));
  if (zen && devBtns.length) {
    devBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        devBtns.forEach(function (x) { x.classList.remove('on'); x.setAttribute('aria-pressed', 'false'); });
        b.classList.add('on');
        b.setAttribute('aria-pressed', 'true');
        zen.setAttribute('data-mode', b.getAttribute('data-device'));
      });
    });
  }

  /* ── 粒子星空 ───────────────────────────────── */
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
    var COLORS = ['230,192,122', '125,211,252', '167,139,250', '255,255,255'];
    var stars = [];
    var N = Math.max(60, Math.min(130, Math.floor(W * H / 9000)));
    for (var i = 0; i < N; i++) {
      stars.push({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.4 + 0.3,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
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

  onScroll();
})();
</script>

</div>
