/* ════════════════════════════════════════════════════════════
   Seth Li — homepage interactions
   01 i18n (EN default in DOM, ZH dictionary) · 02 theme ·
   03 nav (progress, scrollspy, burger, float-nav) · 04 typing ·
   05 reveal · 06 quotes · 07 device preview · 08 starfield ·
   09 matrix rain · 10 misc
   ════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function qsa(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  function store(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }
  function fetchStore(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

  /* ── 01 i18n ─────────────────────────────────────────────
     English lives in the HTML (good for SEO / no-JS);
     this dictionary supplies Chinese. Origins are captured
     once so switching back to EN needs no duplication.     */
  var ZH = {
    'nav.about': '关于', 'nav.career': '履历', 'nav.stack': '技术', 'nav.projects': '项目',
    'nav.ventures': '旗下项目', 'nav.insights': '哲思', 'nav.contact': '联系', 'nav.github': 'GitHub ↗',

    'hero.eyebrow': '~/seth-li ▸ 悉尼 · 高级软件工程师 · AI · 全栈 · 数据库',
    'hero.sub': '码 × AI × 禅 —— 30 余年工程实践',
    'hero.bio': '现任悉尼 <strong>DASH Technology Group</strong> 高级软件工程师，拥有 <strong>30 余年</strong>全栈与数据库工程经验。白天构建金融服务科技平台，夜里教机器写格律诗（生成式 AI / NLP）。<strong>Feng Tech</strong> 创始人，<strong>慧灯禅院</strong> 创建者。',
    'hero.ctaCompany': '🏢 Feng Tech',
    'hero.ctaZen': '🪷 慧灯禅院',
    'hero.statYears': '年工程经验', 'hero.statNetwork': 'LinkedIn 人脉',
    'hero.statRepos': '开源仓库', 'hero.statLearn': '持续精进',

    'about.title': '工程价值', 'about.titleEm': '· AI · 数据 · 交付',
    'about.sub': '三十年持续交付生产级系统——专注 AI、数据与扎实工程三者交汇之处。',
    'about.aiTitle': 'AI 与生成式 AI',
    'about.aiText': '我的 chinesepoem 项目一直在<strong>教机器写古典格律诗</strong>——NLP / 生成模型、Jupyter、提示词工程、LLM 工作流与 AI 辅助开发。AI 是工程师心智的新乘数。',
    'about.aiChip1': '生成式 AI', 'about.aiChip2': 'NLP', 'about.aiChip3': 'LLM',
    'about.aiChip4': '提示词工程', 'about.aiChip5': 'Jupyter',
    'about.dbTitle': '数据库与数据',
    'about.dbText': '30 余年 SQL、库表设计与数据驱动自动化的<strong>数据库开发</strong>经验——PowerShell 与 Python 企业级工具链：基础设施、Active Directory 与平台数据。数据可靠，决策才可靠。',
    'about.dbChip1': 'SQL', 'about.dbChip2': '数据库设计', 'about.dbChip3': 'PowerShell',
    'about.dbChip4': 'Python', 'about.dbChip5': '自动化',
    'about.fsTitle': '全栈与金融科技',
    'about.fsText': '现职 <strong>DASH Technology Group</strong> 高级软件工程师——服务澳大利亚财富与投顾行业的金融科技：TypeScript、Angular、Node.js、Azure DevOps CI/CD，为规模、合规与可维护性而工程化。',
    'about.fsChip1': '金融科技', 'about.fsChip2': 'TypeScript', 'about.fsChip3': 'Angular',
    'about.fsChip4': 'Node.js', 'about.fsChip5': 'CI/CD',

    'career.title': '30 余年工程履历', 'career.titleEm': '· 从第一行代码到 AI',
    'career.sub': '持续交付、自动化与学习的记录——重要里程碑一览。',
    'career.jobTitle': '高级软件工程师 · DASH Technology Group',
    'career.jobText': '为澳大利亚财富与投顾行业构建金融服务科技——大规模全栈工程、数据库开发与平台建设。',
    'career.jobChip1': '金融科技', 'career.jobChip2': '全栈', 'career.jobChip3': '数据库',
    'career.ftTitle': '创始人兼首席工程师 · Feng Tech',
    'career.ftText': '悉尼 IT 服务公司——高效建站、快速排障与可靠支持（The tech experts）。下方「旗下项目」有实时预览。',
    'career.ftChip1': 'IT 服务', 'career.ftChip2': '网站开发', 'career.ftChip3': '技术支持',
    'career.uniTitle': '湘潭大学',
    'career.uniText': '工程思维在此扎根——终身学习的习惯，也是从这里开始。',
    'career.uniChip1': '高等教育',
    'career.expTitle': '30 余年软件与数据库工程',
    'career.expText': '从 1993 年的第一行代码，到今天的云时代技术栈——三十年构建的是跑在生产环境里的系统，而不只是演示文稿。',
    'career.expChip1': '1993 → 至今',
    'career.netTitle': 'LinkedIn · 职业网络',
    'career.netText': '500+ 联系人 · 576 位关注者——欢迎连接，一起构建有意义的事。',

    'stack.title': '技术栈', 'stack.titleEm': '· 日常共修的工具',
    'stack.sub': '选工具如选法器——趁手、可靠、可维护。',
    'stack.g1Title': '语言', 'stack.g2Title': 'AI 与数据',
    'stack.genAI': '生成式 AI', 'stack.llm': 'LLM', 'stack.nlp': 'NLP', 'stack.ml': '机器学习',
    'stack.prompt': '提示词工程', 'stack.data': '数据工程',
    'stack.g3Title': '框架', 'stack.g4Title': '云与 DevOps', 'stack.schema': '数据库设计',

    'projects.title': '开源项目', 'projects.titleEm': '· 精选',
    'projects.sub': '从企业效率工具到「教机器写诗」——每个仓库都是一次修行。',
    'projects.p1': '自动生成中国古典格律诗——NLP / 生成模型实验：教机器写诗，也从内部观察创造力。',
    'projects.p2': '灵棋经的数字实现——对传统占卜的现代化、可复现实验：结构化数据进，结构化预测出。',
    'projects.p3': '企业运维工具——从 Active Directory 查询用户登录时间，用于审计与账号治理：那种每天都会回本的自助化。',
    'projects.p4': '预测档案——记录、复盘与验证，让时间给出答案：一个在不确定性下校准判断的个人实验室。',
    'projects.more': '更多仓库：', 'projects.moreLink': '在 GitHub 查看全部 ↗',

    'ventures.title': '本职工作之外', 'ventures.titleEm': '· 两个事业，一门修行',
    'ventures.sub': '我拥有的两个产品的实时预览——IT 服务公司与数字禅院。用预览上方的按钮切换设备宽度。',
    'ventures.ftTag': '· 悉尼 IT 服务公司',
    'ventures.ftSlogan': 'The tech experts',
    'ventures.ztTag': '· 慧灯禅院',
    'ventures.ztNote': '佛学文章 · 法音宣流 · 在线祈福 · 观音灵签——一盏心灯，长明不灭。小屏设备建议点击「全屏打开」获得完整体验。',

    'frame.desktop': '桌面', 'frame.tablet': '平板', 'frame.mobile': '手机', 'frame.open': '全屏打开 ↗',

    'insights.title': '禅是世界观，', 'insights.titleEm': '代码是方法论',
    'insights.sub': '以程序员的语言重新诠释佛学经典——同一种修行的另一面。',
    'insights.c1Title': '「空」是抽象类 · 空即是色',
    'insights.c1Text': '空（Emptiness）是 abstract class，色（Form）是 concrete class，相（Appearance）是 instance。你看见一只猫：眼前这只具体的猫是实例，「猫」是抽象类，「黑猫」是具体类——心智从具体走向抽象，一条可验证的认知路径。',
    'insights.c1Eng': 'Emptiness : Form : Appearance = 抽象类 : 具体类 : 实例',
    'insights.c2Title': '「我」无法被实例化',
    'insights.c2Text': '「我」在本质上是一个抽象类：不能使用 <code>this</code> → 无我；不能实例化 → 无人；没有生命周期方法 → 无寿者。四句偈的尽头，是一个永远无法 new 出来的对象。',
    'insights.c2Eng': 'no this · no instantiate · no lifecycle',
    'insights.c3Title': '知识越多，我执越少 · Ego = 1 / Knowledge',
    'insights.c3Text': '「知识越多，我执越少；知识越少，我执越多。」以及提醒：「当心别把理智奉若神明——它虽肌肉强健，却没有个性。」',
    'insights.c3Eng': 'More the knowledge, lesser the ego',
    'insights.poemLabel': '📜 预测回收签诗 · 2021/07/20',
    'insights.poemNote': '与「明心见性」同源——记录对抽象之「我」的理解。',

    'contact.title': '结缘', 'contact.titleEm': '· 代码 · AI · 禅',
    'contact.line': '期待与有趣的你交谈——代码、AI、数据、禅，或任何「看似不可能」的想法。',
    'contact.zen': '🪷 慧灯禅院', 'contact.ft': '🏢 Feng Tech',
    'contact.info': '📍 澳大利亚大悉尼地区 · 🏢 DASH Technology Group 与 Feng Tech · 🕉 自 1993 持续构建',

    'footer.role': '高级软件工程师 · 全栈与数据库 · AI 探索者',
    'footer.photos': '图片来源（免费可商用）：', 'footer.pexels': 'Pexels',
    'footer.fonts': '字体：', 'footer.stats': '数据卡片：', 'footer.host': '托管于 GitHub Pages',
    'footer.keywords': '关键词：高级软件工程师 · 全栈工程师 · 数据库开发 · AI 与机器学习 · 生成式 AI · NLP · LLM · 提示词工程 · Python · PowerShell · TypeScript · Angular · SQL · Azure DevOps · 自动化 · 金融科技 · 悉尼 澳大利亚'
  };

  var lang = fetchStore('sl-lang') === 'zh' ? 'zh' : 'en';
  var i18nEls = qsa('[data-i18n]');

  function captureOriginals() {
    i18nEls.forEach(function (el) {
      if (!el.hasAttribute('data-en-orig')) { el.setAttribute('data-en-orig', el.innerHTML); }
    });
  }

  function applyLang(l) {
    lang = l === 'zh' ? 'zh' : 'en';
    root.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
    store('sl-lang', lang);
    i18nEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      el.innerHTML = (lang === 'zh' && ZH[key] !== undefined)
        ? ZH[key]
        : el.getAttribute('data-en-orig');
    });
    qsa('[data-lang]').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    typingInit();
    renderQuote(quoteIndex);
  }

  qsa('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  /* ── 02 Theme (light / night) ───────────────────────────── */
  var theme = fetchStore('sl-theme') === 'night' ? 'night' : 'light';

  function applyTheme(t) {
    theme = t === 'night' ? 'night' : 'light';
    root.setAttribute('data-theme', theme);
    store('sl-theme', theme);
    syncStatsCards();
    recolorStars();
  }

  var themeBtn = doc.getElementById('theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () { applyTheme(theme === 'night' ? 'light' : 'night'); });
  }

  /* GitHub stats cards — ivory / night variants */
  var STATS = [
    { main: 'https://github-readme-stats.vercel.app/api?username=seth2000&show_icons=true&hide_title=true&hide_rank=true&hide=contribs&bg_color=fff9f0&title_color=22304a&text_color=4d5a72&icon_color=f59e0b&border_color=e6ddc9', langs: 'https://github-readme-stats.vercel.app/api/top-langs/?username=seth2000&layout=compact&hide_title=true&bg_color=fff9f0&title_color=22304a&text_color=4d5a72&border_color=e6ddc9&langs_count=6' },
    { main: 'https://github-readme-stats.vercel.app/api?username=seth2000&show_icons=true&hide_title=true&hide_rank=true&hide=contribs&bg_color=1a2338&title_color=f2f6ff&text_color=c6d0e4&icon_color=ffb84d&border_color=2e3a55', langs: 'https://github-readme-stats.vercel.app/api/top-langs/?username=seth2000&layout=compact&hide_title=true&bg_color=1a2338&title_color=f2f6ff&text_color=c6d0e4&border_color=2e3a55&langs_count=6' }
  ];
  function syncStatsCards() {
    var s = STATS[theme === 'night' ? 1 : 0];
    var m = doc.getElementById('stats-main');
    var l = doc.getElementById('stats-langs');
    if (m) { m.src = s.main; }
    if (l) { l.src = s.langs; }
  }

  /* ── 03 Nav: progress, scrollspy, smooth scroll, burger,
        float-nav ──────────────────────────────────────────── */
  var bar = doc.getElementById('progress');
  var nav = doc.getElementById('nav');
  var spyLinks = qsa('.menu a[data-scroll], .float-menu a[data-scroll]');
  var spyTargets = spyLinks
    .map(function (a) { return doc.querySelector(a.getAttribute('data-scroll')); })
    .filter(Boolean);
  var scrollLinks = qsa('a[data-scroll]');

  function onScroll() {
    var max = doc.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? window.scrollY / max : 0;
    if (bar) { bar.style.transform = 'scaleX(' + p + ')'; }
    if (nav) { nav.classList.toggle('scrolled', window.scrollY > 20); }
    spy();
  }

  function spy() {
    var y = window.scrollY + 120;
    var current = -1;
    for (var i = 0; i < spyTargets.length; i++) {
      if (spyTargets[i].getBoundingClientRect().top + window.scrollY <= y) { current = i; }
    }
    spyLinks.forEach(function (a, idx) { a.classList.toggle('active', idx === current); });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  scrollLinks.forEach(function (a) {
    a.addEventListener('click', function (e) {
      var t = doc.querySelector(a.getAttribute('data-scroll'));
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      }
    });
  });

  var burger = doc.getElementById('burger');
  var menu = doc.getElementById('menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      var a = e.target.closest ? e.target.closest('a[data-scroll]') : null;
      if (a) {
        menu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Float-nav (top-left quick menu) */
  var floatBrand = doc.getElementById('float-brand');
  var floatMenu = doc.getElementById('float-menu');
  function closeFloat() {
    floatMenu.classList.remove('open');
    floatBrand.setAttribute('aria-expanded', 'false');
  }
  if (floatBrand && floatMenu) {
    /* 品牌按钮：阻止冒泡，避免同一次点击被 document 的
       "点击外部关闭" 监听判定为外部点击（修复：点击后无法展开） */
    floatBrand.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = floatMenu.classList.toggle('open');
      floatBrand.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    doc.addEventListener('click', function (e) {
      if (!floatMenu.classList.contains('open')) { return; }
      if (e.target && e.target.closest && e.target.closest('.float-nav')) { return; }
      closeFloat();
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && floatMenu.classList.contains('open')) { closeFloat(); }
    });
    floatMenu.addEventListener('click', function (e) {
      var a = e.target.closest ? e.target.closest('a[data-scroll]') : null;
      if (a) { closeFloat(); }
    });
  }

  /* ── 04 Typing effect ───────────────────────────────────── */
  var typeEl = doc.getElementById('typing');
  var PHRASES = {
    en: [
      'Code with clarity. Build with intent.',
      '30+ years of full-stack & database engineering.',
      'Senior Software Developer · DASH Technology Group',
      'Generative AI · NLP · Zen — one practice.'
    ],
    zh: [
      '以码之清明，铸系统之可靠。',
      '三十余年全栈与数据库工程实践。',
      '高级软件工程师 · DASH Technology Group',
      '生成式 AI · NLP · 禅 —— 一门修行。'
    ]
  };
  var pi = 0, ci = 0, deleting = false, typeTimer = null;

  function typingInit() {
    if (!typeEl) { return; }
    if (typeTimer) { clearTimeout(typeTimer); typeTimer = null; }
    pi = 0; ci = 0; deleting = false;
    if (reduce) {
      typeEl.textContent = PHRASES[lang][0];
      return;
    }
    (function tick() {
      var full = PHRASES[lang][pi];
      if (!deleting) {
        ci++;
        typeEl.textContent = full.slice(0, ci);
        if (ci >= full.length) {
          deleting = true;
          typeTimer = setTimeout(tick, 2000);
          return;
        }
      } else {
        ci--;
        typeEl.textContent = full.slice(0, ci);
        if (ci <= 0) {
          deleting = false;
          pi = (pi + 1) % PHRASES[lang].length;
        }
      }
      typeTimer = setTimeout(tick, deleting ? 26 : 68);
    })();
  }

  /* ── 05 Reveal on scroll ────────────────────────────────── */
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    qsa('.reveal').forEach(function (n) { io.observe(n); });
  } else {
    qsa('.reveal').forEach(function (n) { n.classList.add('in'); });
  }

  /* ── 06 Rotating quotes (bilingual, in-page data) ───────── */
  var quoteEl = doc.getElementById('quote');
  var authorEl = doc.getElementById('quote-author');
  var QUOTES = [
    { en: { t: 'Form is emptiness; emptiness is form.', a: '— Heart Sutra, Prajnaparamita' }, zh: { t: '色即是空，空即是色。', a: '——《般若波罗蜜多心经》' } },
    { en: { t: 'Let the mind abide nowhere; let the mind arise freely.', a: '— Diamond Sutra' }, zh: { t: '应无所住，而生其心。', a: '——《金刚经》' } },
    { en: { t: 'Bodhi is no tree; the mirror has no stand. Nothing exists at all — where could dust alight?', a: '— Huineng, Platform Sutra' }, zh: { t: '菩提本无树，明镜亦非台。本来无一物，何处惹尘埃。', a: '—— 六祖惠能《坛经》' } },
    { en: { t: 'One flower, one world; one leaf, one Tathagata.', a: '— Avatamsaka Sutra (spirit)' }, zh: { t: '一花一世界，一叶一如来。', a: '——《华严经》意境' } },
    { en: { t: 'More the knowledge, lesser the ego.', a: '— Albert Einstein' }, zh: { t: '知识越多，我执越少。', a: '—— 阿尔伯特·爱因斯坦' } }
  ];
  var quoteIndex = 0;

  function renderQuote(i) {
    if (!quoteEl || !authorEl) { return; }
    var item = QUOTES[i] && QUOTES[i][lang] ? QUOTES[i][lang] : QUOTES[0][lang];
    quoteEl.textContent = item.t;
    authorEl.textContent = item.a;
  }

  if (!reduce && quoteEl) {
    setInterval(function () {
      quoteIndex = (quoteIndex + 1) % QUOTES.length;
      quoteEl.style.opacity = '0';
      authorEl.style.opacity = '0';
      setTimeout(function () {
        renderQuote(quoteIndex);
        quoteEl.style.opacity = '1';
        authorEl.style.opacity = '1';
      }, 450);
    }, 6500);
  }

  /* ── 07 Device preview toggles (event delegation) ───────── */
  doc.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('button[data-device]') : null;
    if (!btn) { return; }
    var frame = btn.closest('.browser-frame');
    if (!frame) { return; }
    qsa('[data-device]', frame).forEach(function (b) {
      b.classList.remove('on');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('on');
    btn.setAttribute('aria-pressed', 'true');
    frame.setAttribute('data-device', btn.getAttribute('data-device'));
  });

  /* ── 08 Starfield (theme-aware palette) ─────────────────── */
  var stars = [];
  var cv = doc.getElementById('stars');
  var heroSec = doc.getElementById('top');
  var PALETTES = {
    light: ['245,158,11', '59,157,255', '23,178,106', '255,138,61'],
    night: ['255,184,77', '108,182,255', '52,211,153', '242,246,255']
  };

  function palette() { return PALETTES[theme] || PALETTES.light; }

  function recolorStars() {
    var cols = palette();
    stars.forEach(function (s) {
      s.c = cols[Math.floor(Math.random() * cols.length)];
    });
  }

  if (cv && cv.getContext && !reduce) {
    var ctx = cv.getContext('2d');
    var W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var firstPalette = palette();

    function resize() {
      W = cv.clientWidth;
      H = cv.clientHeight;
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    var N = Math.max(50, Math.min(120, Math.floor(W * H / 10000)));
    for (var i = 0; i < N; i++) {
      stars.push({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.5 + 0.4,
        c: firstPalette[Math.floor(Math.random() * firstPalette.length)],
        tw: Math.random() * 6.2832, tws: 0.004 + Math.random() * 0.015,
        vy: 0.04 + Math.random() * 0.22, vx: (Math.random() - 0.5) * 0.08
      });
    }

    var mx = 0, my = 0;
    if (heroSec) {
      heroSec.addEventListener('mousemove', function (e) {
        var r = heroSec.getBoundingClientRect();
        mx = (e.clientX - r.left) / r.width - 0.5;
        my = (e.clientY - r.top) / r.height - 0.5;
      });
    }

    (function frame() {
      ctx.clearRect(0, 0, W, H);
      for (var k = 0; k < stars.length; k++) {
        var s = stars[k];
        s.y -= s.vy;
        s.x += s.vx;
        s.tw += s.tws;
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

  /* ── 09 Matrix rain (code panel) ─────────────────────────── */
  var mcv = doc.getElementById('matrix');
  if (mcv && mcv.getContext && !reduce) {
    var mctx = mcv.getContext('2d');
    var MTX = 'アィウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>{}[]=+*#$%&';
    var mfs = 16, mcols = 0, mdrops = [], mspeeds = [];

    function mResize() {
      var w = mcv.clientWidth || 320;
      var h = mcv.clientHeight || 220;
      mcv.width = w;
      mcv.height = h;
      mcols = Math.max(4, Math.floor(w / mfs));
      mdrops = [];
      mspeeds = [];
      for (var i = 0; i < mcols; i++) {
        mdrops.push(Math.floor(Math.random() * (h / mfs)));
        mspeeds.push(0.4 + Math.random() * 0.9);
      }
      mctx.fillStyle = 'rgb(6,10,7)';
      mctx.fillRect(0, 0, w, h);
    }
    mResize();
    window.addEventListener('resize', mResize);
    setTimeout(mResize, 600); /* 字体/布局稳定后校准一次 */

    var mRunning = false, mRaf = null;
    function mStep() {
      var w = mcv.width, h = mcv.height;
      mctx.fillStyle = 'rgba(6,10,7,0.12)';
      mctx.fillRect(0, 0, w, h);
      mctx.font = mfs + 'px "JetBrains Mono", monospace';
      for (var i = 0; i < mcols; i++) {
        var ch = MTX.charAt(Math.floor(Math.random() * MTX.length));
        var x = i * mfs;
        var y = Math.floor(mdrops[i]) * mfs;
        mctx.fillStyle = '#eafff2';
        mctx.fillText(ch, x, y);           /* 头部字符：亮白绿 */
        mctx.fillStyle = 'rgba(45,208,111,0.85)';
        mctx.fillText(MTX.charAt(Math.floor(Math.random() * MTX.length)), x, y - mfs);
        mdrops[i] += mspeeds[i];
        if (y > h + mfs && Math.random() > 0.975) { mdrops[i] = 0; }
      }
    }
    function mLoop() {
      mStep();
      mRaf = requestAnimationFrame(mLoop);
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && !mRunning) {
            mRunning = true;
            mRaf = requestAnimationFrame(mLoop);
          } else if (!en.isIntersecting && mRunning) {
            mRunning = false;
            cancelAnimationFrame(mRaf);
          }
        });
      }, { threshold: 0.05 }).observe(mcv);
    } else {
      mRunning = true;
      mRaf = requestAnimationFrame(mLoop);
    }
  }

  /* ── 10 Misc ─────────────────────────────────────────────── */
  var yr = doc.getElementById('year');
  if (yr) { yr.textContent = String(new Date().getFullYear()); }

  /* Boot */
  captureOriginals();
  applyTheme(theme);
  applyLang(lang);
  onScroll();
})();
