/* ════════════════════════════════════════════════════════════
   Seth Li — homepage interactions
   01 i18n (EN default in DOM, ZH dictionary) · 02 theme ·
   03 nav (progress, scrollspy, burger, float-nav) · 04 typing ·
   05 reveal · 06 quotes · 07 device preview · 08 starfield ·
   09 CRT code-rain · 10 misc
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

    'hero.eyebrow': '~/seth-li ▸ 悉尼 · 全栈与数据库工程师 · AI 探索者',
    'hero.sub': '码 × AI × 禅 —— 30 余年工程实践',
    'hero.bio': '现任悉尼 <strong>DASH Technology Group</strong>（财富科技）全栈与数据库工程师，<strong>30 余年</strong>深耕金融科技、数字贷款与 AI。我重构核心投资组合系统，使其<strong>性能提升 4 倍、基础设施降至 1/22.5</strong>；组建 AI 研究中心，让机器学会从财报中提取数据（NLP / BERT）；夜里仍教机器写格律诗。<strong>Feng Tech</strong> 创始人，<strong>慧灯禅院</strong> 创建者。',
    'hero.ctaCompany': '🏢 Feng Tech',
    'hero.ctaZen': '🪷 慧灯禅院',
    'hero.statYears': '年工程经验', 'hero.statNetwork': 'LinkedIn 人脉',
    'hero.statPerf': '核心系统提速', 'hero.statLearn': '持续精进',

    'about.title': '工程价值', 'about.titleEm': '· AI · 数据 · 交付',
    'about.sub': '三十年持续交付生产级系统——专注 AI、数据与扎实工程三者交汇之处。',
    'about.aiTitle': 'AI 与生成式 AI',
    'about.aiText': '组建公司<strong>AI 研究中心</strong>，训练模型从非结构化 PDF 财报中提取数据（NLP / BERT），打造业内领先的<strong>PDF 表格提取器</strong>；还有我的 chinesepoem 项目——教机器写格律诗。',
    'about.aiChip1': '生成式 AI', 'about.aiChip2': 'NLP', 'about.aiChip3': 'LLM',
    'about.aiChip4': 'BERT', 'about.aiChip5': '提示词工程',
    'about.dbTitle': '数据库与数据',
    'about.dbText': '30 余年 SQL、库表设计与数据挖掘的<strong>数据库开发</strong>经验——SQL Server、PostgreSQL、MongoDB、Redshift，以及 Kafka/CDC 数据管道。我打造过被多家投行与政府部门采购的大宗商品经济研究数据库。',
    'about.dbChip1': 'SQL', 'about.dbChip2': '数据库设计', 'about.dbChip3': '数据挖掘',
    'about.dbChip4': 'PostgreSQL', 'about.dbChip5': 'Kafka / CDC',
    'about.fsTitle': '全栈与金融科技',
    'about.fsText': '现职 <strong>DASH Technology Group</strong> 全栈工程师，历经 Simpology 与 Roar——.NET/.NET Core、C#、TypeScript、Angular/React/Vue、AWS 与 Azure。我重构核心 Holdings 与 Performance 系统，使其<strong>提速 4 倍</strong>，并主导 .NET Framework → .NET 6/8/10 现代化迁移。',
    'about.fsChip1': '金融科技', 'about.fsChip2': '.NET Core', 'about.fsChip3': 'C#',
    'about.fsChip4': 'Angular', 'about.fsChip5': 'AWS',

    'career.title': '30 余年工程履历', 'career.titleEm': '· 从第一行代码到 AI',
    'career.sub': '持续交付、自动化与学习的记录——重要里程碑一览。',
    'career.dashTitle': '全栈工程师 · DASH Technology Group',
    'career.dashText': '重构核心 Holdings 与 Performance 系统（提速约 4 倍、基础设施降至 1/22.5）；自动化流动性检查（节省 2 个全职人力）；主导 .NET Framework 4.6.1 → .NET 6/8/10 现代化迁移。',
    'career.dashChip1': '财富科技', 'career.dashChip2': '.NET Core', 'career.dashChip3': 'AWS',
    'career.ftTitle': '创始人兼首席工程师 · Feng Tech',
    'career.ftText': '悉尼 IT 服务公司——高效建站、快速排障与可靠支持（The tech experts）。下方「旗下项目」有实时预览。',
    'career.ftChip1': 'IT 服务', 'career.ftChip2': '网站开发', 'career.ftChip3': '技术支持',
    'career.simpTitle': '软件工程师 · Simpology Australia',
    'career.simpText': '云原生数字贷款平台——.NET Core 与 AWS 后端服务，Angular 与 TypeScript 前端。',
    'career.simpChip1': '数字贷款', 'career.simpChip2': '.NET Core', 'career.simpChip3': 'Angular',
    'career.roarTitle': '软件工程师 · Roar Software',
    'career.roarText': '基于 Azure 与 .NET Core 构建可扩展系统；集成 OAuth2 / Identity Server 4 与 DocuSign；Vue.js、Angular 与 TypeScript 前端开发。',
    'career.roarChip1': 'Azure', 'career.roarChip2': 'OAuth2', 'career.roarChip3': 'Vue.js',
    'career.learnTitle': '全栈工程师 · Learn It All',
    'career.learnText': '主导基于 NopCommerce 的在线教育平台开发，覆盖课程管理、支付集成与学习体验优化。',
    'career.learnChip1': 'NopCommerce', 'career.learnChip2': '在线教育',
    'career.deependTitle': '全栈工程师 · Deepend',
    'career.deependText': '使用 React 与 Redux 开发 API 与复杂前端功能，服务多个品牌客户的数字项目。',
    'career.deependChip1': 'React', 'career.deependChip2': 'Redux',
    'career.argentTitle': '售前技术支持工程师 · Argent Software',
    'career.argentText': '使用 SQL Server 与 .NET 提供现场技术支持与方案演示；负责澳大利亚及周边地区的客户开发与支持。',
    'career.argentChip1': 'SQL Server', 'career.argentChip2': '.NET',
    'career.ameTitle': '首席技术官（CTO）· AME Group',
    'career.ameText': '组建公司 AI 研究中心（NLP / BERT 财报抽取）；主导机器学习 GIS 数据挖掘系统；制定 IT 战略并引入 Git + Jira/Agile；打造被投行与政府机构采购的大宗商品经济研究数据库。',
    'career.ameChip1': 'CTO', 'career.ameChip2': 'AI / NLP', 'career.ameChip3': '数据挖掘',
    'career.bpsTitle': '软件工程师 · BPS Australia',
    'career.bpsText': '主导 EFS 设备租赁管理系统；实现银行账务、邮局地址与信用管理数据库的自动对接，降低人力与资金风险。',
    'career.bpsChip1': '.NET', 'career.bpsChip2': '系统集成',
    'career.mtcTitle': '软件工程师 · MTC Australia',
    'career.mtcText': '基于遗留 MS Access 系统开发数据库；担任 Web 应用设计师。',
    'career.mtcChip1': 'Access', 'career.mtcChip2': '网页设计',
    'career.austcareTitle': '数据开发 · AUSTCARE',
    'career.austcareText': '数据库助理，负责数据库维护与数据处理，支持难民援助项目的信息系统稳定运行。',
    'career.austcareChip1': '数据库',
    'career.abcTitle': '运维工程师 · 中国农业银行（长沙分行）',
    'career.abcText': '构建《银行OA管理系统》（数据挖掘 + 决策支持）与面向信用卡用户的信使平台（Email/短信对账单）。',
    'career.abcChip1': 'VB6 / VC6', 'career.abcChip2': 'Sybase', 'career.abcChip3': 'Exchange SDK',
    'career.jinshiTitle': '项目经理 · 长沙金石电脑公司',
    'career.jinshiText': '创始团队核心成员——主导《商业银行国际贸易系统》（信用证、托收、汇兑），运行于南京、上海、青岛等地交通银行。',
    'career.jinshiChip1': 'COBOL / C', 'career.jinshiChip2': 'Delphi', 'career.jinshiChip3': 'Sybase',
    'career.edu1Title': '湘潭大学 · 硕士（人工智能与数据挖掘方向）',
    'career.edu1Text': '计算机应用工程专业硕士（人工智能与数据挖掘方向）——全日制，全额奖学金。',
    'career.edu1Chip1': '硕士 · 双一流',
    'career.edu2Title': '长沙大学 · 计算机科学与技术',
    'career.edu2Text': '计算机科学与技术专业大专——全日制，工程思维在此扎根。',
    'career.edu2Chip1': '高等教育',
    'career.netTitle': 'LinkedIn · 职业网络',
    'career.netText': '500+ 联系人 · 576 位关注者——欢迎连接，一起构建有意义的事。',
    'career.more': '展开全部履历', 'career.less': '收起',

    'stack.title': '技术栈', 'stack.titleEm': '· 日常共修的工具',
    'stack.sub': '选工具如选法器——趁手、可靠、可维护。',
    'stack.g1Title': '编程语言', 'stack.g2Title': 'AI 与数据',
    'stack.genAI': '生成式 AI', 'stack.llm': 'LLM', 'stack.nlp': 'NLP', 'stack.ml': '机器学习',
    'stack.prompt': '提示词工程', 'stack.data': '数据工程', 'stack.mining': '数据挖掘',
    'stack.g3Title': '前端与框架', 'stack.g4Title': '云与 DevOps', 'stack.micro': '微服务',

    'projects.title': '精选项目', 'projects.titleEm': '· 交付 · 开源 · 修行',
    'projects.sub': '数十年交付的亮点——以及我持续练习的开源仓库。',
    'projects.f1Text': '重构核心 Holdings 与 Performance 系统，处理性能提升约 10 倍，基础设施从 2,400+ vCPU×6 小时降至 16 vCPU×4 小时（仅为原来的 1/50），并支撑 4 倍用户与交易量增长。',
    'projects.f1Meta': 'DASH Technology Group · 2024–至今 · AWS Aurora · SQS · PostgreSQL',
    'projects.f2Text': '业内领先的 PDF 表格提取器：从复杂非结构化版面还原行列结构；采用 BERT（替代 CNN+LSTM）做 NLP 分类，并以图搜索改进表格边框识别，每年节省大量人工成本。',
    'projects.f2Meta': 'AME Group · 2017–2019 · NLP · 深度学习',
    'projects.f3Text': '为数千个项目自动生成现金流与估值报告；将 .NET 后端逻辑自动转换为 VBA/Excel，使分析师可直接在 Excel 中建模。',
    'projects.f3Meta': 'AME Group · 2016–2018 · Excel · VBA',
    'projects.f4Text': '将业内最复杂的矿业金属财务模型从 WinForms 迁移至 .NET Core + Angular，交互与桌面版同样流畅；由 6 人团队半年内交付。',
    'projects.f4Meta': 'AME Group · 2018 · .NET Core · Angular',
    'projects.osTitle': '开源项目',
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
    'contact.email': '✉️ 邮箱',
    'contact.zen': '🪷 慧灯禅院', 'contact.ft': '🏢 Feng Tech',
    'contact.info': '📍 澳大利亚大悉尼地区 · ✉️ sethfengli@yahoo.com.au · 📞 +61 411 758 128 · 🕉 自 1993 持续构建',

    'footer.role': '全栈与数据库工程师 · .NET / C# / AI 探索者',
    'footer.photos': '图片来源（免费可商用）：', 'footer.pexels': 'Pexels',
    'footer.fonts': '字体：', 'footer.stats': '数据卡片：', 'footer.host': '托管于 GitHub Pages',
    'footer.keywords': '关键词：全栈工程师 · 数据库开发 · .NET / .NET Core · C# · Python · TypeScript · Angular · React · SQL · AWS · Azure · Kubernetes · 生成式 AI · NLP · LLM · 提示词工程 · 金融科技 · 财富科技 · 数据挖掘 · 悉尼 澳大利亚'
  };

  /* 浏览器语言默认值：zh* → 中文，其余英文（本地存储优先） */
  function detectLang() {
    try {
      var l = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
      return l.indexOf('zh') === 0 ? 'zh' : 'en';
    } catch (e) { return 'en'; }
  }
  var lang = fetchStore('sl-lang');
  if (lang !== 'zh' && lang !== 'en') { lang = detectLang(); }
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
    updateCareerCount();
    typingInit();
    renderQuote(quoteIndex);
  }

  qsa('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  /* ── 02 Theme (light / night) ───────────────────────────── */
  /* 主题默认值：按浏览器本地时区时间（06:00–18:00 白天 / 其余夜晚）；
     本地存储的用户选择优先。 */
  function detectTheme() {
    try {
      var h = new Date().getHours();
      return (h >= 6 && h < 18) ? 'light' : 'night';
    } catch (e) { return 'light'; }
  }
  var theme = fetchStore('sl-theme');
  if (theme !== 'light' && theme !== 'night') { theme = detectTheme(); }

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

  /* GitHub stats cards — light / night variants (indigo palette) */
  var STATS = [
    { main: 'https://github-readme-stats.vercel.app/api?username=seth2000&show_icons=true&hide_title=true&hide_rank=true&hide=contribs&bg_color=f6f8fc&title_color=18233f&text_color=45536e&icon_color=6366f1&border_color=dde3f0', langs: 'https://github-readme-stats.vercel.app/api/top-langs/?username=seth2000&layout=compact&hide_title=true&bg_color=f6f8fc&title_color=18233f&text_color=45536e&border_color=dde3f0&langs_count=6' },
    { main: 'https://github-readme-stats.vercel.app/api?username=seth2000&show_icons=true&hide_title=true&hide_rank=true&hide=contribs&bg_color=131c31&title_color=eef2ff&text_color=c3cde3&icon_color=818cf8&border_color=27314f', langs: 'https://github-readme-stats.vercel.app/api/top-langs/?username=seth2000&layout=compact&hide_title=true&bg_color=131c31&title_color=eef2ff&text_color=c3cde3&border_color=27314f&langs_count=6' }
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
      'Full-Stack Engineer · DASH Technology Group (WealthTech)',
      'Core systems 4× faster on 1/22.5 of the infrastructure.',
      'Generative AI · NLP · Zen — one practice.'
    ],
    zh: [
      '以码之清明，铸系统之可靠。',
      '三十余年全栈与数据库工程实践。',
      '全栈工程师 · DASH Technology Group（财富科技）',
      '核心系统提速 4 倍 · 基础设施降至 1/22.5。',
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

  /* ── 05b Career timeline — expand / collapse ──────────────
     默认只显示前 5 条，点按钮展开其余条目；无 JS 时全部可见。 */
  var careerMore = doc.getElementById('career-more');
  var careerToggle = doc.getElementById('career-toggle');
  var careerActions = careerToggle ? careerToggle.parentNode : null;
  var careerCount = doc.getElementById('career-count');

  function updateCareerCount() {
    if (!careerMore || !careerCount) { return; }
    var n = qsa('.tl-item', careerMore).length;
    careerCount.textContent = (lang === 'zh') ? (' · 余 ' + n + ' 项') : (' · ' + n + ' more');
  }

  if (careerToggle && careerMore && careerActions) {
    careerToggle.addEventListener('click', function () {
      var open = careerMore.classList.toggle('open');
      careerActions.classList.toggle('open', open);
      careerToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        /* 展开区内的 reveal 立即淡入，不依赖滚动触发 */
        qsa('.reveal', careerMore).forEach(function (n) { n.classList.add('in'); });
      }
    });
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
    light: ['99,102,241', '14,165,233', '13,148,136', '139,92,246'],
    night: ['129,140,248', '56,189,248', '45,212,191', '196,181,253']
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

  /* ── 09 CRT code-rain ──────────────────────────────────────
     用「现有代码」的字符生成雨点，纯 CSS 动画驱动：
     不依赖 canvas / IntersectionObserver / rAF，稳定可靠。
     每列随机时长与相位；字符取自 code-source 的非空白字符。 */
  var codeSrc = doc.getElementById('code-source');
  if (codeSrc && codeSrc.textContent) {
    try {
      var glyphs = codeSrc.textContent.replace(/\s+/g, '').split('');
      if (glyphs.length) {
        var card = codeSrc.closest ? codeSrc.closest('.code-card') : null;
        if (!card) { card = codeSrc.parentNode; }
        var W = Math.max(card.clientWidth, 320);
        var H = Math.max(card.clientHeight, 320);
        var fw = 16, fh = 19;
        var cols = Math.max(6, Math.floor(W / fw));
        var rows = Math.ceil(H / fh) + 1;

        var rain = doc.createElement('div');
        rain.className = 'code-rain';
        rain.setAttribute('aria-hidden', 'true');
        rain.style.setProperty('--ch', H + 'px');

        for (var c = 0; c < cols; c++) {
          var col = doc.createElement('span');
          col.className = 'rain-col';
          col.style.left = (c * fw) + 'px';
          var dur = 4 + Math.random() * 5;               /* 4–9 秒一列 */
          var phase = Math.random() * dur;               /* 随机相位 */
          var step = (fh / H) * dur;                     /* 相邻字符时间差 */
          for (var r = 0; r < rows; r++) {
            var s = doc.createElement('span');
            s.className = 'char';
            s.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
            s.style.animationDuration = dur + 's';
            s.style.animationDelay = (-phase - r * step) + 's';
            col.appendChild(s);
          }
          rain.appendChild(col);
        }
        card.insertBefore(rain, card.firstChild);
        codeSrc.style.display = 'none';                  /* 隐藏静态代码，雨已接管 */
      }
    } catch (e) { /* 失败则保留静态代码兜底 */ }
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
