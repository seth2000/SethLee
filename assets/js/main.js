/* ════════════════════════════════════════════════════════════
   Seth Li — homepage interactions
   01 i18n (EN default in DOM, ZH dictionary) · 02 theme ·
   03 nav (progress, scrollspy, burger, overflow tray) · 04 typing ·
   05 reveal · 06 quotes · 07 device preview + lazy frames ·
   08 starfield · 09 matrix rain · 10 misc
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
    'nav.ai': 'AI 方向', 'nav.ventures': '旗下项目', 'nav.insights': '代码与禅',
    'nav.contact': '联系', 'nav.github': 'GitHub ↗',
    'nav.brandName': 'Seth Li', 'nav.brandRole': '全栈 · AI · 数据', 'nav.moreLabel': '更多',
    'nav.search': '搜索',
    'nav.paletteTitle': '搜索与跳转',
    'nav.palettePlaceholder': '跳到某个分区，或者搜索本页内容',
    'nav.paletteEsc': '关闭',
    'nav.paletteActions': '操作',
    'nav.paletteSections': '分区',
    'nav.paletteOnPage': '本页命中',
    'nav.paletteHint': '↑↓ 移动，Enter 打开，Esc 关闭。',
    'nav.paletteLocal': '搜索在你自己的浏览器里跑——输入的内容不会离开这一页。',
    'nav.paletteTheme': '切换白天 / 夜晚主题',
    'nav.paletteLang': '切换语言 · 中 / EN',
    'nav.paletteTop': '回到页首',

    'hero.eyebrow': '~/seth-li ▸ 悉尼 · 全栈与数据库工程师 · AI 探索者',
    'hero.hudStatus': '在线', 'hero.hudLocation': '悉尼 · 澳大利亚',
    'hero.hudStackLabel': '技术栈', 'hero.hudSinceLabel': '始于', 'hero.hudRevLabel': '版本',
    'hero.hudRev': '2026.10',
    'hero.sub': '码 × AI × 禅——我做的系统，必须一直跑得住',
    'hero.bio': '我在悉尼的财富科技公司 <strong>DASH Technology Group</strong> 写软件，写了 <strong>33 年</strong>，大半时间都在数据这一层——数据库、报表，那些托着别的东西的地基。在 DASH 我把核心投资组合系统重构了两遍：第一遍<strong>提速 4 倍，服务器只剩 1/22.5</strong>；第二遍把同样的活压到<strong>原来 1/225 的算力</strong>，业务量却是 <strong>4 倍</strong>。再早，我在 AME Group 做 CTO，拉起一个<strong> AI 研究小组</strong>，教模型读财报。此外我经营 <strong>Feng Tech</strong>，守着<strong>慧灯禅院</strong>；夜里教机器写格律诗。',
    'hero.ctaCompany': 'Feng Tech',
    'hero.ctaZen': '慧灯禅院',
    'hero.statYears': '年写软件', 'hero.statPerf': '算力降至原来的',
    'hero.statScale': '业务量倍数，同一套系统', 'hero.statAi': '年起做 AI 与数据挖掘',

    'about.title': '我做什么', 'about.titleEm': '· AI · 数据 · 交付',
    'about.kicker': '为何选我',
    'about.sub': '做了 33 年生产系统，最近几年都花在 AI 最要命的那一环：它到底能不能让人信。',
    'about.nowLabel': '当前',
    'about.aiTitle': 'AI 与生成式 AI',
    'about.aiText': '做 CTO 时我拉起一个 AI 研究小组，让模型从非结构化 PDF 里读出财报，并把背后的表格提取器做成了产品。（当年用的语言模型叫 BERT——今天这些 AI 助手，底子上是同一个思路。）如今我做的是让助手靠得住的那部分：找对资料、给对工具、量准它到底有没有变好。',
    'about.aiChip1': '生成式 AI', 'about.aiChip2': 'NLP', 'about.aiChip3': 'LLM',
    'about.aiChip4': 'BERT', 'about.aiChip5': 'RAG', 'about.aiChip6': 'AI 智能体',
    'about.aiChip7': '效果评估',
    'about.aiNow': '让助手在不知道的时候，老实说不知道',
    'about.dbTitle': '数据库与数据',
    'about.dbText': '我首先、到现在也还是<strong>数据库开发者</strong>：库表设计、SQL、数据挖掘，横跨 SQL Server、PostgreSQL、MongoDB 与 Redshift，彼此之间用变更捕获管道打通。我做过一套大宗商品经济数据库，投行与政府机构都买过。',
    'about.dbChip1': 'SQL', 'about.dbChip2': '数据库设计', 'about.dbChip3': '数据挖掘',
    'about.dbChip4': 'PostgreSQL', 'about.dbChip5': 'Kafka / CDC', 'about.dbChip6': '数据质量',
    'about.dbNow': '让助手读企业自己的文档，权限和员工本人一模一样',
    'about.fsTitle': '全栈与金融科技',
    'about.fsText': '现职 <strong>DASH Technology Group</strong> 全栈工程师，此前待过 Simpology、Roar、Deepend 与 Argent Software。.NET 与 C#、TypeScript、Angular / React / Vue、AWS 与 Azure。我重构了核心的 Holdings 与 Performance 系统，并主导从 .NET Framework 4.6.1 迁到 .NET 10。',
    'about.fsChip1': '金融科技', 'about.fsChip2': '现代化迁移', 'about.fsChip3': 'C#',
    'about.fsChip4': 'Angular', 'about.fsChip5': 'AWS', 'about.fsChip6': 'Azure',
    'about.fsNow': '把受监管的系统准备好接 AI，并且留下证据',

    'career.title': '33 年工程履历', 'career.titleEm': '· 还在写代码',
    'career.kicker': '履历',
    'career.sub': '几个至今还能解释我怎么做事的节点。',
    'career.glanceNowK': '现职',
    'career.glanceNowV': '全栈工程师 · DASH Technology Group，悉尼',
    'career.glanceCtoK': '最高职位',
    'career.glanceCtoV': 'CTO · AME Group（2007–19）——组建公司的 AI 研究小组，并把 PDF 表格提取器做成产品',
    'career.glanceStartK': '第一份有报酬的活',
    'career.glanceStartV': '1993 年，还在念大学——此后没有中断过',
    'career.workGroup': '更早的岗位',
    'career.eduGroup': '教育经历',
    'career.dashTitle': '全栈工程师 · DASH Technology Group',
    'career.dashText': '分两步重构核心的 Holdings 与 Performance 系统：先做到提速 4 倍、服务器只剩 1/22.5；再压到原来 1/225 的算力，同时扛住 4 倍的户数与业务量。把流动性检查自动化（省下 2 个全职人力），并主导 .NET Framework 4.6.1 到 .NET 10 的迁移。',
    'career.dashChip1': '财富科技', 'career.dashChip2': '.NET 10',
    'career.dashChip3': 'AWS Aurora', 'career.dashChip4': 'PostgreSQL',
    'career.ftTitle': '创始人兼首席工程师 · Feng Tech',
    'career.ftText': '悉尼的 IT 服务公司——建站、AI 自动化、数据库与技术支持。下方「旗下项目」有实时预览。',
    'career.ftChip1': 'IT 服务', 'career.ftChip2': '网站开发', 'career.ftChip3': '技术支持',
    'career.simpTitle': '软件工程师 · Simpology Australia',
    'career.simpText': '云原生的数字贷款平台——后端用 .NET Core 与 AWS，前端用 Angular 与 TypeScript，面向经纪人与贷款机构。',
    'career.simpChip1': '数字贷款', 'career.simpChip2': '.NET Core', 'career.simpChip3': 'Angular',
    'career.roarTitle': '软件工程师 · Roar Software',
    'career.roarText': '在 Azure 与 .NET Core 上构建系统；集成 OAuth2 / Identity Server 4 与 DocuSign；前端用 Vue.js、Angular 与 TypeScript。',
    'career.roarChip1': 'Azure', 'career.roarChip2': 'OAuth2', 'career.roarChip3': 'Vue.js',
    'career.learnTitle': '全栈工程师 · Learn It All',
    'career.learnText': '主导一个基于 NopCommerce 的在线教育平台：课程管理、支付，以及学习体验本身。',
    'career.learnChip1': 'NopCommerce', 'career.learnChip2': '在线教育',
    'career.deependTitle': '全栈工程师 · Deepend',
    'career.deependText': '用 React 与 Redux 做 API 和吃力的前端功能，服务好几个品牌客户。',
    'career.deependChip1': 'React', 'career.deependChip2': 'Redux',
    'career.argentTitle': '售前技术支持工程师 · Argent Software',
    'career.argentText': '用 SQL Server 与 .NET 做现场技术支持和方案演示，客户遍布澳大利亚及周边地区。',
    'career.argentChip1': 'SQL Server', 'career.argentChip2': '.NET',
    'career.ameTitle': '首席技术官（CTO）· AME Group',
    'career.ameText': '作为 CTO，我组建了公司的 AI 研究小组，带团队把表格从财报文件里抠出来——用 BERT 换掉了早期的 CNN+LSTM。此外还主导了一套面向 GIS 的机器学习数据挖掘系统，用 Git 与 Jira/Agile 立起 IT 规范，并做出投行与政府机构都采购过的大宗商品经济数据库。',
    'career.ameChip1': 'CTO', 'career.ameChip2': 'AI / NLP', 'career.ameChip3': '数据挖掘',
    'career.bpsTitle': '软件工程师 · BPS Australia',
    'career.bpsText': '主导 EFS 设备租赁管理系统；把银行、邮政地址与征信机构的对接全部自动化，既省人力也降风险。',
    'career.bpsChip1': '.NET', 'career.bpsChip2': '系统集成',
    'career.mtcTitle': '软件工程师 · MTC Australia',
    'career.mtcText': '在一套遗留的 MS Access 系统上做数据库开发，同时设计网页界面。',
    'career.mtcChip1': 'Access', 'career.mtcChip2': '网页设计',
    'career.austcareTitle': '数据开发 · AUSTCARE',
    'career.austcareText': '负责数据库维护与数据处理，支持难民援助项目的日常运作。',
    'career.austcareChip1': '数据库',
    'career.abcTitle': '运维工程师 · 中国农业银行（长沙分行）',
    'career.abcText': '做了银行的 OA 管理系统（数据挖掘 + 决策支持），以及面向持卡人的消息通知平台（邮件与短信对账单）。',
    'career.abcChip1': 'VB6 / VC6', 'career.abcChip2': 'Sybase', 'career.abcChip3': 'Exchange SDK',
    'career.jinshiTitle': '项目经理 · 长沙金石电脑公司',
    'career.jinshiText': '创始团队成员——主导《商业银行国际贸易系统》（信用证、托收、汇兑），运行于全国交通银行各分行。',
    'career.jinshiChip1': 'COBOL / C', 'career.jinshiChip2': 'Delphi', 'career.jinshiChip3': 'Sybase',
    'career.edu1Title': '湘潭大学 Xiangtan University · 硕士 M.Eng（人工智能与数据挖掘）',
    'career.edu1Text': '计算机应用工程专业硕士（人工智能与数据挖掘方向）——以全日制、公费全额录取，在职读完，所以时间与上面的工作有重叠。',
    'career.edu1Chip1': '硕士 · 双一流',
    'career.edu1Chip2': '公费全额 · 在职攻读',
    'career.edu2Title': '长沙大学 · 计算机科学与技术（大专）',
    'career.edu2Text': '计算机科学与技术大专，全日制——工程思维就是从这里扎下根的。',
    'career.edu2Chip1': '高等教育',
    'career.netTitle': 'LinkedIn · 职业网络',
    'career.netText': '500+ 联系人——欢迎来打个招呼。',
    'career.more': '展开全部履历', 'career.less': '收起',

    'stack.title': '技术栈', 'stack.titleEm': '· 每天上手用的工具',
    'stack.kicker': '技术栈',
    'stack.sub': '用得够久、也有自己看法的那些工具。',
    'stack.g1Title': '编程语言', 'stack.g2Title': 'AI 与数据',
    'stack.genAI': '生成式 AI', 'stack.llm': 'LLM', 'stack.agents': 'AI 智能体',
    'stack.rag': 'RAG 检索增强', 'stack.nlp': 'NLP', 'stack.evals': '效果评估',
    'stack.ml': '机器学习', 'stack.vector': '文档检索',
    'stack.prompt': '提示词工程', 'stack.data': '数据工程', 'stack.mining': '数据挖掘',
    'stack.g3Title': '前端与框架', 'stack.g4Title': '云与 DevOps', 'stack.micro': '微服务',

    'projects.title': '精选项目', 'projects.titleEm': '· 交付 · 开源 · 修行',
    'projects.kicker': '项目',
    'projects.sub': '几件做完了还在跑的东西，以及我持续练手的那几个仓库。',
    'projects.f1Text': '分两步重建核心的 Holdings 与 Performance 系统。第一步提速 4 倍、服务器降到 1/22.5；第二步把同样的活压到 16 vCPU 跑 4 小时——过去要 2,400 vCPU 跑 6 小时。算力只剩 1/225，业务量却是 4 倍。',
    'projects.f1Meta': 'DASH Technology Group · 自 2022 年 · AWS Aurora · SQS · PostgreSQL',
    'projects.f2Text': '从非结构化 PDF 里还原表格：用语言模型 BERT 取代 CNN+LSTM 做区域分类，再用图搜索定位表格边框。目标是无人值守地跑完一批批财报，而不是靠人一行行录。',
    'projects.f2Meta': 'AME Group · 2017–2019 · NLP · 深度学习',
    'projects.f3Text': '为数千个项目自动生成现金流与估值报告；把 .NET 后端逻辑翻成 VBA/Excel，分析师可以直接在 Excel 里建模。',
    'projects.f3Meta': 'AME Group · 2016–2018 · Excel · VBA',
    'projects.f4Text': '6 人团队、6 个月，把分析师赖以工作的矿业金属财务模型从 WinForms 迁到 .NET Core + Angular，交互速度与桌面版持平，模型口径零回归。',
    'projects.f4Meta': 'AME Group · 2018 · .NET Core · Angular',
    'projects.osTitle': '开源项目',
    'projects.p1': '自动生成中国古典格律诗——一个 NLP 实验：教机器写诗，也从里面看创造力长什么样。',
    'projects.p2': '《灵棋经》的数字实现——把一个古老的占卜方法做成可复现的实验：结构化数据进，结构化预测出。',
    'projects.p3': '一个运维小工具：从 Active Directory 里查用户登录时间，用于审计与账号治理。那种每天都能回本的自动化。',
    'projects.p4': '预测档案——先记下来，回头复盘，让时间给答案。一个校准判断力的私人实验室。',
    'projects.more': '更多仓库：', 'projects.moreLink': '在 GitHub 查看全部 ↗',
    'projects.statsNote': '卡片由 github-readme-stats 实时渲染，所以一直是最新的。',
    'projects.statsFallback': '卡片加载不出来时，同样的数据在',

    'ventures.title': '本职工作之外', 'ventures.titleEm': '· 两个事业，一门修行',
    'ventures.kicker': '旗下项目',
    'ventures.sub': '我自己拥有并运营的两样东西。预览只在你按下按钮、或滚到这里时才加载——第三方站点因此拖不慢这一页。',
    'ventures.ftTag': '· 悉尼 IT 服务公司',
    'ventures.ftSlogan': 'The tech experts',
    'ventures.ztTag': '· 慧灯禅院',
    'ventures.ztNote': '佛学文章、法音宣流、在线祈福、观音灵签——一盏长明的灯。小屏上点「全屏打开」看完整效果。',
    'ventures.privacy': '这两个预览是独立的网站。每个都跑在沙箱框架里，读不到这一页，也不能为本站域名写 cookie。',

    'frame.desktop': '桌面', 'frame.tablet': '平板', 'frame.mobile': '手机', 'frame.open': '全屏打开 ↗',
    'frame.loadLabel': '加载实时预览', 'frame.loadNote': '第三方页面——你点了它才加载，滚到这里也会自动加载。',
    'frame.reload': '重新加载',

    'ai.title': '我看 AI 往哪走', 'ai.titleEm': '· 以及我站在哪里',
    'ai.kicker': 'AI 方向',
    'ai.sub': '关于 AI，我真正相信的四件事，用大白话说——以及为什么 33 年伺候数据的苦活，恰好是最好的准备。',
    'ai.d1Title': '做个演示只要一个周末，做得让人敢用要一年', 'ai.d1Tag': '可靠性',
    'ai.d1Text': '谁都能让一个 AI 助手在五分钟里看起来挺惊艳。难的是剩下那 99% 的时间。',
    'ai.d1Text2': '中间某一步失败了怎么办？两件事同时改同一条数据怎么办？AI 一本正经地说错话怎么办？客户追问「你凭什么这么判断」又怎么办？这些都不是模型的问题，而是模型外面那套管道的问题——而这套管道，我在银行系统里已经修了 33 年。',
    'ai.d1L1': '每一步要么能安全重来，要么能干净撤回',
    'ai.d1L2': '拿不准就停下来问人，而不是硬猜',
    'ai.d1L3': '每个决定都留档，连花了多少钱一起记，事后能解释清楚',
    'ai.d2Title': '最难的不是「会想」，而是「找对材料」', 'ai.d2Tag': '数据',
    'ai.d2Text': '你问 AI 一个关于自己公司的问题，不管有没有找到对的资料，它都会理直气壮地答。我见过让人失望的 AI 功能，几乎都是<strong>找资料</strong>这一步出了错，而不是推理不行。',
    'ai.d2Text2': '修它的活儿又脏又累，多数团队宁愿绕开：把数据洗干净，让它不过期，让文档在被切开之后意思还在，还要守住谁有权看什么。我当年的 PDF 表格提取器，就是要从一张乱七八糟的扫描件里把表格结构重新拼回来——同一副直觉，晚了一代技术。',
    'ai.d2L1': '按意思找、按关键词找，再让数据自己筛一遍',
    'ai.d2L2': '员工本来能看什么，AI 就只能看什么',
    'ai.d2L3': '每个答案都能追回它出自哪份文件、哪一天',
    'ai.d3Title': '没量过的东西，不可能变好', 'ai.d3Tag': '测试',
    'ai.d3Text': '要是没人记下上周 AI 表现如何，这周的改动是让它变好还是变坏，谁也说不清。真正靠 AI 拿到价值的团队，都会养一批「标准答案题」，每次改动自动跑一遍，把每一次失败和每一次纠正都记下来。听着确实枯燥。可这正是「大家悄悄不用了」和「敢拿它干正经活」之间的差别。',
    'ai.d3L1': '固定一套测试题，每次改动后自动重跑',
    'ai.d3L2': '失败和纠正都留痕，不许忘',
    'ai.d3L3': '质量、速度、花销放在一起看，而不是只看一样',
    'ai.d4Title': '最大的机会，在那些谁都觉得没劲的行业里', 'ai.d4Tag': '机会',
    'ai.d4Text': '大多数 AI 工具是给写作和营销做的，很少有人做银行、信贷、保险和医疗——可这些地方恰恰最不容出错，错一次代价最大。一个准确率 95% 的助手，放在聊天窗口里是玩具，放进一笔贷款决策里就是不能接受。这里要的不是更聪明的模型，而是一套风控和监管都点头的流程。我整个职业生涯都在银行、贷款平台和财富管理系统里，在这个市场上这不是短板——它是我知道该问什么问题的原因。',
    'ai.d4L1': '凡涉及受监管的建议，人始终留在环里',
    'ai.d4L2': '每一个自动决定都留下经得起查的证据',
    'ai.d4L3': '数据不许出内网，就把小模型放进内网跑',

    'now.title': '当下与下一步',
    'now.revLabel': '版本', 'now.rev': '2026.10',
    'now.updatedLabel': '复查于', 'now.updated': '2026-10-04',
    'now.learningLabel': '正在学',
    'now.learning1': '用 .NET 和微软的智能体工具搭 AI 助手——以及什么时候一个简单循环就够了，不必搞复杂架构',
    'now.learning2': '让 AI 保持诚实的测试习惯：固定测试题、自动打分、每次发布前先过一道闸',
    'now.learning3': '让 AI 在企业自己的数据库和文档里找到对的答案，同时不越权限的界',
    'now.nextLabel': '未来 90 天',
    'now.next1': '开源一个能跑的样例：一个跑在真实数据库上的 AI 助手，连测试一起给',
    'now.next2': '把上一季度写下来的那套套路，做成别人不靠我也能直接上手的东西',
    'now.next3': '让那件 AI 辅助的财富管理事务继续在生产里跑，并且量一量它到底靠不靠得住',
    'now.changedLabel': '本页变化',
    'now.changed1': '算力数字更正为 1/225——原来的 1/50 和旁边印着的原始数字对不上',
    'now.changed2': '英文全篇改用更直白的写法；中文整篇重写成像中文，而不是英文的译本',
    'now.changed3': '新增搜索跳转面板（页面上按 / 就行）、打印版式，以及联系方式的复制按钮',
    'now.foot': '这一节我每季度重看一次，上面的日期就是那次重看的痕迹。要是这里有哪句话已经过时了，欢迎拿它来质问我——这个日期就是为了这个。',

    'insights.title': '禅是世界观，', 'insights.titleEm': '代码是方法论',
    'insights.kicker': '代码与禅',
    'insights.sub': '用程序员的语言再说一遍佛学里的老概念——同一件事的另一面。',
    'insights.c1Title': '「空」是抽象类 · 空即是色',
    'insights.c1Text': '空是抽象类，色是具体类，相是实例。你看见一只猫：眼前这只是实例，「猫」是抽象类，「黑猫」是具体类。心智就是从具体走向抽象。',
    'insights.c1Eng': 'Emptiness : Form : Appearance = 抽象类 : 具体类 : 实例',
    'insights.c2Title': '「我」无法被实例化',
    'insights.c2Text': '「我」本质上是一个抽象类：不能用 <code>this</code>，所以无我；不能实例化，所以无人；没有生命周期方法，所以无寿者。四句偈读到最后，是一个永远 new 不出来的对象。',
    'insights.c2Eng': '无 this · 无实例化 · 无生命周期',
    'insights.c3Title': '知识越多，我执越少 · Ego = 1 / Knowledge',
    'insights.c3Text': '「知识越多，我执越少；知识越少，我执越多。」还有一句提醒：「当心别把理智奉若神明——它肌肉强健，却没有个性。」',
    'insights.c3Eng': '知识越多，我执越少',
    'insights.poemLabel': '📜 定场诗',
    'insights.poemEn': '双燕归南国，<br>来寻王谢家。<br>画堂春昼静，<br>于此托生涯。<br>气回天地运，<br>财聚八方华。<br>人途新起色，<br>福泽满云霞。',
    'insights.codeTap': '冻结屏幕',
    'insights.codeHint': '点中任意一列最前面那个下落的字符——或者按「冻结屏幕」——屏幕就停住，我的一个 Python 函数浮出来，随后崩塌。',
    'contact.title': '结缘', 'contact.titleEm': '· 代码 · AI · 禅',
    'contact.kicker': '联系',
    'contact.line': '想聊点有意思的——代码、AI、数据、禅，或者任何「看起来不可能」的事。',
    'contact.email': '写邮件',
    'contact.zen': '慧灯禅院',
    'contact.availOn': '此刻在工位上——邮件最快',
    'contact.availOff': '悉尼这边已是深夜——明天回你',
    'contact.cardEmailLabel': '邮件主通道', 'contact.cardEmailNote': '最快的渠道——通常当天回。',
    'contact.cardPhoneLabel': '语音线路', 'contact.cardPhoneNote': '悉尼时间——急事先说。',
    'contact.cardLiLabel': '职业网络', 'contact.cardLiNote': '完整的工作经历都在那里。',
    'contact.cardGhLabel': '源代码', 'contact.cardGhNote': '开源仓库、实验与档案。',
    'contact.cardFtLabel': '业务线路', 'contact.cardFtCity': '悉尼 IT 服务',
    'contact.cardFtNote': '网站、AI 自动化、数据库与技术支持。',
    'contact.cardZenLabel': '修行', 'contact.cardZenNote': '佛学文章、法音、在线祈福与观音灵签。',
    'contact.panelOrgLabel': '现职',
    'contact.panelOrg': '全栈工程师 · DASH Technology Group · 澳大利亚大悉尼地区',
    'contact.panelFocusLabel': '方向', 'contact.panelModeLabel': '方式',
    'contact.panelHoursLabel': '时间', 'contact.panelSinceLabel': '构建',
    'contact.panelMode': '远程服务全球 · 悉尼地区可上门',
    'contact.panelSince': '自 1993 年起持续交付软件，从未中断',
    'contact.copyEmail': '复制邮箱', 'contact.copyPhone': '复制电话',
    'contact.copied': '已复制', 'contact.print': '打印或存为 PDF',

    'footer.role': '全栈与数据库工程师 · .NET / C# / AI',
    'footer.photos': '图片来源（免费可商用）：', 'footer.pexels': 'Pexels',
    'footer.fonts': '字体：', 'footer.stats': '数据卡片：', 'footer.host': '托管于 GitHub Pages',
    'footer.llms': '给 AI 读的 llms.txt',
    'footer.rev': '版本 2026.10 · All things being equal = Everything happens as expected'
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
  /* Attribute translations (placeholders, titles) need their own pass: the
     dictionary supplies innerHTML, which a placeholder does not accept. */
  var i18nAttrs = qsa('[data-i18n-placeholder]');

  function captureOriginals() {
    i18nEls.forEach(function (el) {
      if (!el.hasAttribute('data-en-orig')) { el.setAttribute('data-en-orig', el.innerHTML); }
    });
    i18nAttrs.forEach(function (el) {
      if (!el.hasAttribute('data-en-placeholder')) {
        el.setAttribute('data-en-placeholder', el.getAttribute('placeholder') || '');
      }
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
    i18nAttrs.forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var zh = ZH[key];
      el.setAttribute('placeholder', (lang === 'zh' && zh !== undefined)
        ? zh
        : (el.getAttribute('data-en-placeholder') || ''));
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
    syncThemeColor();
    syncStatsCards();
    recolorStars();
  }

  /* 主题切换时同步浏览器界面色（移动端地址栏）。
     带 media 的两条 meta 交给浏览器按系统偏好选，无 media 的那条由这里改写。 */
  function syncThemeColor() {
    var color = theme === 'night' ? '#050a16' : '#eff3fa';
    qsa('meta[name="theme-color"]').forEach(function (m) {
      if (!m.getAttribute('media')) { m.setAttribute('content', color); }
    });
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
        overflow tray ───────────────────────────────────────── */
  var bar = doc.getElementById('progress');
  var nav = doc.getElementById('nav');
  var spyLinks = qsa('.menu a[data-scroll]');
  var navSpyLinks = qsa('.menu a[data-scroll]:not([data-nav-dup])');
  var spyTargets = navSpyLinks
    .map(function (a) { return doc.querySelector(a.getAttribute('data-scroll')); })
    .filter(Boolean);
  var navCount = doc.getElementById('nav-count');
  /* 顶部读数按「全站第几节」计数：hero 是 01，其后每个分区 +1，
     与各分区 eyebrow 里的编号一致（导航不必列出全部，例如 Ventures）。 */
  var SECTION_IDS = ['#top', '#about', '#career', '#stack', '#projects', '#ventures', '#ai', '#insights', '#contact'];
  var numberedSections = SECTION_IDS
    .map(function (sel) { return doc.querySelector(sel); })
    .filter(Boolean);
  var navTotal = doc.querySelector('.nav-index u');
  var scrollLinks = qsa('a[data-scroll]');
  if (navTotal) { navTotal.textContent = '/' + (SECTION_IDS.length < 10 ? '0' : '') + SECTION_IDS.length; }

  function onScroll() {
    var max = doc.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? window.scrollY / max : 0;
    if (bar) { bar.style.transform = 'scaleX(' + p + ')'; }
    if (nav) { nav.classList.toggle('scrolled', window.scrollY > 20); }
    if (toTop) { toTop.classList.toggle('on', window.scrollY > 700); }
    spy();
  }

  function spy() {
    var y = window.scrollY + 120;
    var current = -1;
    for (var i = 0; i < spyTargets.length; i++) {
      if (spyTargets[i].getBoundingClientRect().top + window.scrollY <= y) { current = i; }
    }
    spyLinks.forEach(function (a) {
      var t = doc.querySelector(a.getAttribute('data-scroll'));
      a.classList.toggle('active', current >= 0 && t === spyTargets[current]);
    });
    if (navCount) {
      /* 读数用「全站第几节」，不是「导航第几项」——Ventures 不在导航里，
         但它仍是第 06 节。 */
      var here = 1;
      for (var k = 0; k < numberedSections.length; k++) {
        var sec = numberedSections[k];
        if (sec.getBoundingClientRect().top + window.scrollY <= y) { here = k + 1; }
      }
      navCount.textContent = (here < 10 ? '0' : '') + here;
    }
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

  /* Narrow-bar overflow tray — every link the wide row can't fit. */
  var moreBtn = doc.getElementById('nav-more-btn');
  var moreMenu = doc.getElementById('nav-more-menu');
  function closeMore() {
    if (!moreMenu) { return; }
    moreMenu.classList.remove('open');
    if (moreBtn) { moreBtn.setAttribute('aria-expanded', 'false'); }
  }
  if (moreBtn && moreMenu) {
    moreBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = moreMenu.classList.toggle('open');
      moreBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    moreMenu.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a[data-scroll]')) { closeMore(); }
    });
    doc.addEventListener('click', function (e) {
      if (!moreMenu.classList.contains('open')) { return; }
      if (e.target && e.target.closest && e.target.closest('.nav-more')) { return; }
      closeMore();
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && moreMenu.classList.contains('open')) { closeMore(); }
    });
    window.addEventListener('resize', closeMore);
  }

  /* ── 04 Typing effect ───────────────────────────────────── */
  var typeEl = doc.getElementById('typing');
  var PHRASES = {
    en: [
      'Code with clarity. Build with intent.',
      '33 years of full-stack and database work.',
      'Full-stack engineer · DASH Technology Group, Sydney',
      'Core systems: 1/225 of the compute, 4× the load.',
      'Retrieval, agents, evaluations — and the dull parts that make them trustworthy.'
    ],
    zh: [
      '把代码写清楚，把事情做成。',
      '33 年，全栈与数据库。',
      '全栈工程师 · DASH Technology Group（悉尼）',
      '核心系统：算力降到 1/225，业务量 4 倍。',
      '检索、智能体、效果评估——还有那些让它们可信的无聊功夫。'
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

  /* ── 07 Device preview toggles + lazy venture frames ─────
     两个事业预览是第三方站点：首屏不建 iframe，等容器接近视口
     或访客按下按钮时再注入，第三方 CSS / JS 因此不会拖慢首屏。 */
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
    if (btn.getAttribute('data-device') !== 'desktop') { loadFrame(frame, true); }
  });

  function loadFrame(frame, force) {
    var stage = frame.querySelector ? frame.querySelector('.browser-stage') : null;
    if (!stage || stage.getAttribute('data-loaded') === '1') { return; }
    var url = stage.getAttribute('data-frame-url');
    if (!url) { return; }
    stage.setAttribute('data-loaded', '1');

    /* 这段尺寸必须写死在 iframe 上。iframe 是替换元素，没有显式宽高时
       浏览器按 300×150 渲染，父容器的 width:100% 传不下去 —— 线上就表现
       成「内页缩在左上角一小条」。stage 量不到宽度时（如脚本/无布局环境）
       退回桌面尺寸，宁可大一点也不要退化成 300px。 */
    var w = stage.clientWidth || 0;
    var h = stage.clientHeight || 0;

    var box = doc.createElement('div');
    box.className = 'frame-embed';
    var iframe = doc.createElement('iframe');
    iframe.setAttribute('src', url);
    iframe.setAttribute('title', stage.getAttribute('data-frame-title') || url);
    iframe.setAttribute('loading', force ? 'eager' : 'lazy');
    iframe.setAttribute('allowfullscreen', '');
    /* A third-party site framed in our page should not be able to reach the
       page: sandbox it, and do not hand it our full URL as a referrer. */
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups allow-forms');
    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    iframe.style.display = 'block';
    iframe.style.width = (w > 0 ? w : 960) + 'px';
    iframe.style.height = (h > 0 ? h : 620) + 'px';
    iframe.style.maxWidth = '100%';
    iframe.style.border = '0';
    box.appendChild(iframe);
    var old = stage.querySelector ? stage.querySelector('.frame-load') : null;
    stage.appendChild(box);
    if (old && old.parentNode === stage) { stage.removeChild(old); }
    stage.classList.add('is-loaded');

    /* 设备切换会把 stage 收窄，iframe 的像素宽度要跟着走 —— 样式表管不到
       一个由脚本创建的节点，所以在这里补一次。 */
    if (typeof ResizeObserver === 'function') {
      new ResizeObserver(function () {
        var nw = stage.clientWidth || 0;
        if (nw > 0 && Math.abs(nw - parseFloat(iframe.style.width || '0')) > 1) {
          iframe.style.width = nw + 'px';
        }
      }).observe(stage);
    } else {
      window.addEventListener('resize', function () {
        var nw = stage.clientWidth || 0;
        if (nw > 0) { iframe.style.width = nw + 'px'; }
      });
    }
  }

  var frameStages = qsa('.browser-stage[data-frame-url]');
  frameStages.forEach(function (stage) {
    var btn = stage.querySelector ? stage.querySelector('.frame-load') : null;
    if (btn) {
      btn.addEventListener('click', function () {
        var f = btn.closest ? btn.closest('.browser-frame') : null;
        if (f) { loadFrame(f, true); }
      });
    }
    var again = stage.querySelector ? stage.querySelector('[data-reload]') : null;
    if (again) {
      again.addEventListener('click', function () {
        var f = again.closest ? again.closest('.browser-frame') : null;
        if (!f) { return; }
        var box = stage.querySelector ? stage.querySelector('.frame-embed') : null;
        if (box && stage.removeChild) { stage.removeChild(box); }
        stage.setAttribute('data-loaded', '0');
        stage.classList.remove('is-loaded');
        loadFrame(f, true);
      });
    }
  });
  if ('IntersectionObserver' in window) {
    var frameIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var f = en.target.closest ? en.target.closest('.browser-frame') : null;
          if (f) { loadFrame(f, false); }
          frameIO.unobserve(en.target);
        }
      });
    }, { rootMargin: '300px 0px' });
    frameStages.forEach(function (s) { frameIO.observe(s); });
  }

  /* ── 07b Menu focus management ─────────────────────────────
     The burger overlay and the overflow tray are two menus with one job:
     open, take focus, close on Escape, and give focus back to whatever
     opened them. Previously Escape only knew about the tray, so a keyboard
     user could tab through the page behind the open burger overlay. */
  var lastFocus = null;

  function closeMenus(restore) {
    var changed = false;
    if (menu && menu.classList.contains('open')) {
      menu.classList.remove('open');
      if (burger) { burger.setAttribute('aria-expanded', 'false'); }
      changed = true;
    }
    if (moreMenu && moreMenu.classList.contains('open')) {
      moreMenu.classList.remove('open');
      if (moreBtn) { moreBtn.setAttribute('aria-expanded', 'false'); }
      changed = true;
    }
    if (changed && restore && lastFocus && typeof lastFocus.focus === 'function') {
      lastFocus.focus();
    }
    return changed;
  }

  doc.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeMenus(true); }
  });

  /* ── 07c Copy buttons / print / back to top ────────────────
     Copy uses the async clipboard where it exists and a selected-textarea
     fallback where it does not. A failure stays silent rather than showing
     "Copied" for something that was not copied. */
  function copyText(text, done) {
    var nav = window.navigator || {};
    if (nav.clipboard && typeof nav.clipboard.writeText === 'function') {
      nav.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      return;
    }
    try {
      var ta = doc.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      doc.body.appendChild(ta);
      if (typeof ta.select === 'function') { ta.select(); }
      var ok = typeof doc.execCommand === 'function' ? doc.execCommand('copy') : false;
      if (doc.body.removeChild) { doc.body.removeChild(ta); }
      done(!!ok);
    } catch (e) { done(false); }
  }

  qsa('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      copyText(btn.getAttribute('data-copy') || '', function (ok) {
        if (!ok) { return; }
        btn.classList.add('is-done');
        setTimeout(function () { btn.classList.remove('is-done'); }, 1600);
      });
    });
  });

  var printBtn = doc.getElementById('print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', function () {
      if (typeof window.print === 'function') { window.print(); }
    });
  }

  var toTop = doc.getElementById('to-top');
  if (toTop) {
    toTop.addEventListener('click', function () {
      if (typeof window.scrollTo === 'function') { window.scrollTo(0, 0); }
    });
  }

  /* ── 07d Availability, from the real Sydney clock ──────────
     "AEST UTC+10" was hard-coded, so for the six months of daylight saving
     the page stated the wrong timezone next to a correctly-computed clock.
     Intl gives the zone, its current name and the hour; without Intl the
     arithmetic fallback is right outside daylight saving and says so. */
  var avail = doc.getElementById('avail');

  function sydneyNow() {
    var now = new Date();
    var out = { hour: null, minute: 0, tz: '', weekday: null };
    if (typeof Intl !== 'undefined' && Intl.DateTimeFormat) {
      try {
        var opts = {
          timeZone: 'Australia/Sydney', hour12: false, weekday: 'short',
          hour: '2-digit', minute: '2-digit', timeZoneName: 'shortOffset'
        };
        var parts = new Intl.DateTimeFormat('en-AU', opts).formatToParts(now);
        for (var i = 0; i < parts.length; i++) {
          var v = parts[i].value;
          if (parts[i].type === 'hour') { out.hour = parseInt(v, 10) % 24; }
          else if (parts[i].type === 'minute') { out.minute = parseInt(v, 10); }
          else if (parts[i].type === 'weekday') { out.weekday = v; }
          else if (parts[i].type === 'timeZoneName') {
            out.tz = String(v).replace(/^GMT/, 'UTC').replace(/^UTC([+-])0?/, 'UTC$1');
          }
        }
      } catch (e) { out.hour = null; }
    }
    if (out.hour === null) {
      var d = new Date(now.getTime() + (now.getTimezoneOffset() + 600) * 60000);
      out.hour = d.getHours();
      out.minute = d.getMinutes();
      out.tz = 'AEST';
      out.weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()];
    }
    return out;
  }

  function applyAvail(t) {
    if (!avail) { return; }
    var weekend = t.weekday === 'Sat' || t.weekday === 'Sun';
    var open = !weekend && t.hour >= 8 && t.hour < 19;
    avail.classList.toggle('is-on', open);
    avail.classList.toggle('is-off', !open);
  }

  /* ── 07e Search-and-jump palette ───────────────────────────
     The commands and section links are static markup, so they translate with
     the rest of the page. Only the "on this page" hits are built here, from
     the text already rendered in the DOM — which means search runs entirely
     in the browser and matches whatever language the page is showing. */
  var paletteEl = doc.getElementById('palette');
  var paletteBtn = doc.getElementById('palette-btn');
  var paletteInput = doc.getElementById('palette-input');

  if (paletteEl && paletteBtn && paletteInput) {
    var paletteList = doc.getElementById('palette-list');
    var hitsSec = doc.getElementById('palette-hits-sec');
    var cmds = qsa('.palette__item', paletteList);
    var hits = [];
    var visible = [];
    var cursor = 0;
    var openedBy = null;

    function isTyping(el) {
      if (!el || !el.tagName) { return false; }
      var t = el.tagName.toUpperCase();
      return t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT' || el.isContentEditable === true;
    }

    function paletteOpen() { return paletteEl.classList.contains('open'); }

    /* Strip the tags a card may carry and flatten whitespace, so a hit reads
       as one line of prose rather than as markup. */
    function flat(el) {
      var t = el && el.textContent ? el.textContent : '';
      return String(t).replace(/\s+/g, ' ').trim();
    }

    function index() {
      var out = [];
      qsa('#main section').forEach(function (sec) {
        var id = sec.getAttribute('id');
        if (!id) { return; }
        var head = sec.querySelector ? sec.querySelector('h2') : null;
        var label = head ? flat(head) : id;
        var body = [];
        qsa('p, li', sec).forEach(function (n) {
          var t = flat(n);
          if (t.length > 30) { body.push(t); }
        });
        if (body.length) { out.push({ id: id, label: label, body: body.join('  ·  ') }); }
      });
      return out;
    }

    function clearHits() {
      for (var i = 0; i < hits.length; i++) {
        var n = hits[i].node;
        if (n && n.parentNode === paletteList) { paletteList.removeChild(n); }
      }
      hits = [];
    }

    function makeHit(entry, snippet) {
      var li = doc.createElement('li');
      li.className = 'palette__item palette__hit';
      li.setAttribute('role', 'option');
      li.setAttribute('tabindex', '-1');
      li.setAttribute('aria-selected', 'false');
      li.setAttribute('data-goto', '#' + entry.id);
      var b = doc.createElement('b');
      b.textContent = entry.label;
      var em = doc.createElement('em');
      em.textContent = snippet;
      li.appendChild(b);
      li.appendChild(em);
      return li;
    }

    function search(q) {
      clearHits();
      var terms = q.toLowerCase().split(/\s+/).filter(function (t) { return t.length > 1; });
      if (!terms.length) { return; }
      var found = [];
      index().forEach(function (entry) {
        var hay = (entry.label + ' ' + entry.body).toLowerCase();
        var score = 0;
        for (var i = 0; i < terms.length; i++) {
          if (hay.indexOf(terms[i]) >= 0) { score += 1; }
        }
        if (!score) { return; }
        if (entry.label.toLowerCase().indexOf(terms[0]) >= 0) { score += 2; }
        var at = entry.body.toLowerCase().indexOf(terms[0]);
        var snippet = at < 0 ? entry.body.slice(0, 110)
          : (at > 40 ? '…' : '') + entry.body.slice(Math.max(0, at - 30), at + 90);
        found.push({ entry: entry, score: score, snippet: snippet.trim() + '…' });
      });
      found.sort(function (a, b) { return b.score - a.score; });
      found = found.slice(0, 6);
      for (var k = 0; k < found.length; k++) {
        var node = makeHit(found[k].entry, found[k].snippet);
        paletteList.appendChild(node);
        hits.push({ node: node });
      }
    }

    function refresh() {
      var q = paletteInput.value || '';
      search(q);
      visible = cmds.concat(hits.map(function (h) { return h.node; })).filter(function (item) {
        var text = flat(item).toLowerCase();
        var keep = !q || text.indexOf(q.toLowerCase().split(/\s+/)[0]) >= 0;
        if (item.setAttribute) { /* hidden must be an attribute, not a class: the
            palette list is a listbox and screen readers honour [hidden]. */
          if (keep) { item.removeAttribute('hidden'); } else { item.setAttribute('hidden', ''); }
        }
        return keep;
      });
      if (hitsSec) {
        if (hits.length) { hitsSec.removeAttribute('hidden'); } else { hitsSec.setAttribute('hidden', ''); }
      }
      /* Section headings only make sense when something under them shows. */
      var isSec = function (n) {
        return (n.className || '').split(/\s+/).indexOf('palette__sec') >= 0;
      };
      qsa('.palette__sec', paletteList).forEach(function (sec) {
        if (sec === hitsSec) { return; }
        var any = false;
        var n = sec.nextElementSibling;
        while (n && !isSec(n)) {
          if (visible.indexOf(n) >= 0) { any = true; break; }
          n = n.nextElementSibling;
        }
        if (!any) { sec.setAttribute('hidden', ''); }
      });
      cursor = 0;
      paint();
    }

    function paint() {
      for (var i = 0; i < visible.length; i++) {
        visible[i].setAttribute('aria-selected', i === cursor ? 'true' : 'false');
      }
      /* Focus stays in the input, so the selected option is announced through
         aria-activedescendant — which needs the option to carry an id. */
      var sel = visible[cursor];
      if (sel && sel.getAttribute) {
        if (!sel.getAttribute('id')) { sel.setAttribute('id', 'palette-opt-' + cursor); }
        paletteInput.setAttribute('aria-activedescendant', sel.getAttribute('id'));
      }
    }

    function move(step) {
      if (!visible.length) { return; }
      cursor = (cursor + step + visible.length) % visible.length;
      paint();
    }

    function activate(item) {
      if (!item) { return; }
      var cmd = item.getAttribute('data-cmd');
      var href = item.getAttribute('data-href');
      var goto = item.getAttribute('data-goto');
      closePalette(true);
      if (cmd === 'copy-email') { copyText('sethfengli@yahoo.com.au', function () {}); return; }
      if (cmd === 'print') { if (typeof window.print === 'function') { window.print(); } return; }
      if (cmd === 'theme') { applyTheme(theme === 'night' ? 'light' : 'night'); return; }
      if (cmd === 'lang') { applyLang(lang === 'zh' ? 'en' : 'zh'); return; }
      if (cmd === 'top') { if (typeof window.scrollTo === 'function') { window.scrollTo(0, 0); } return; }
      if (href) {
        if (typeof window.open === 'function') { window.open(href, '_blank', 'noopener'); }
        return;
      }
      if (goto) {
        var target = doc.querySelector(goto);
        if (target && target.scrollIntoView) { target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); }
      }
    }

    function openPalette(from) {
      openedBy = from || null;
      lastFocus = from || null;
      paletteEl.classList.add('open');
      paletteInput.value = '';
      refresh();
      if (typeof paletteInput.focus === 'function') { paletteInput.focus(); }
    }

    function closePalette(restore) {
      if (!paletteOpen()) { return; }
      paletteEl.classList.remove('open');
      clearHits();
      if (restore && openedBy && typeof openedBy.focus === 'function') { openedBy.focus(); }
    }

    paletteBtn.addEventListener('click', function () { openPalette(paletteBtn); });
    qsa('[data-palette-close]', paletteEl).forEach(function (n) {
      n.addEventListener('click', function () { closePalette(true); });
    });
    paletteInput.addEventListener('input', refresh);
    paletteInput.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
      else if (e.key === 'Enter') { e.preventDefault(); activate(visible[cursor]); }
      else if (e.key === 'Tab') {
        /* Only two focusable things in here: keep Tab inside the dialog. */
        e.preventDefault();
        var esc = paletteEl.querySelector('.palette__esc');
        if (esc && typeof esc.focus === 'function') { esc.focus(); }
      }
    });
    paletteList.addEventListener('click', function (e) {
      var item = e.target && e.target.closest ? e.target.closest('.palette__item') : null;
      if (item) { activate(item); }
    });

    doc.addEventListener('keydown', function (e) {
      var k = e.key;
      if (k === 'Escape' && paletteOpen()) { e.preventDefault(); closePalette(true); return; }
      if (paletteOpen() || isTyping(e.target)) { return; }
      if (k === '/' || ((e.ctrlKey || e.metaKey) && (k === 'k' || k === 'K'))) {
        e.preventDefault();
        openPalette(paletteBtn);
      }
    });
  }

  /* ── 07f Pointer spotlight on cards ────────────────────────
     One delegated listener instead of 40 per-card ones; the coordinates land
     in --mx/--my and the paint is CSS. */
  doc.addEventListener('pointermove', function (e) {
    var card = e.target && e.target.closest ? e.target.closest('.card') : null;
    if (!card || typeof card.getBoundingClientRect !== 'function') { return; }
    var r = card.getBoundingClientRect();
    if (!r.width || !r.height) { return; }
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
    card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
  }, { passive: true });

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

  /* Scroll the hero away and the canvas stops being drawn. The loop keeps
     re-arming so it can resume instantly, but a frame that only returns is
     ~free, whereas 120 arcs per frame forever is not. */
  var starsOn = true;
  if (heroSec && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) { starsOn = entries[i].isIntersecting; }
    }, { threshold: 0 }).observe(heroSec);
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
      requestAnimationFrame(frame);          /* re-arm first: the early outs below must not stop the loop */
      if (!starsOn || doc.hidden) { return; }
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

  /* ── 09 Matrix panel — digital rain ────────────────────────
     每列是一条拖着尾迹的彗星：列整体匀速下落（一个 transform
     动画，合成层里跑），列内字符的亮度在生成时就按“到流头的
     距离”算好 —— 流头近白、其后磷光绿、再往上渐隐。因此没有
     逐字动画与逐帧重绘，成本只有几十个合成层。
     字符取自源码 + 半角片假名 / 数字，并由定时器随机换字
     （mutation，Matrix 的灵魂）；片假名刻意压到一成，屏幕上主要是
     自己的 Python 代码。
     点中任意一个字符 → 雨几乎停住，等 5–10 秒后从源码里随机弹出一个
     函数块，块停留 5–10 秒后逐行崩塌，随后雨恢复原速。
     下落关键帧写在 JS 里（Web Animations API），不放进 @keyframes：
     ① 绕开 WebKit「@keyframes 里的 var() 不生效」的老问题；
     ② 就算 CSS / JS 缓存版本错配，雨也不会被冻住。
     不支持 WAAPI 的老浏览器回落到 §12 里那套 CSS 动画。
     ⚠ 雨不随 prefers-reduced-motion 关闭 —— 这块屏是本节的主角，
     老版本也一直在动；该偏好只把雨和换字放慢（见 calm / tick）。
     只有关闭 JS 时才退回到可读的静态代码。                    */
  var codeSrc = doc.getElementById('code-source');
  if (codeSrc && codeSrc.textContent) {
    var KATA = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
    var NUM = '0123456789';
    var SYM = ':=+-*/<>[]{}()_$#';
    var SRC = codeSrc.textContent.replace(/\s+/g, '');
    var card = codeSrc.closest ? codeSrc.closest('.code-card') : codeSrc.parentNode;

    function rnd(n) { return Math.floor(Math.random() * n); }
    /* 磷光绿的 RGB 分量取自 tokens.css 的 --matrix-body，颜色只有一处定义 */
    var GREEN = (function () {
      var v = window.getComputedStyle(card).getPropertyValue('--matrix-body').trim();
      var hex = /^#?([0-9a-f]{6})$/i.exec(v);
      if (hex) {
        var n = parseInt(hex[1], 16);
        return ((n >> 16) & 255) + ', ' + ((n >> 8) & 255) + ', ' + (n & 255);
      }
      var rgb = /(\d+)\D+(\d+)\D+(\d+)/.exec(v);
      return rgb ? (rgb[1] + ', ' + rgb[2] + ', ' + rgb[3]) : '31, 224, 106';
    })();
    /* 字库：源码字符约七成半，日文半角片假名只占一成（留一点 Matrix 味即可），
       其余是数字与符号 */
    function glyph() {
      var r = Math.random();
      if (r < 0.10) { return KATA.charAt(rnd(KATA.length)); }
      if (r < 0.25) { return NUM.charAt(rnd(NUM.length)); }
      if (r < 0.375) { return SYM.charAt(rnd(SYM.length)); }
      return SRC.charAt(rnd(SRC.length));
    }

    var rain = null, cells = [], anims = [], builtH = 0;
    var timer = null, onScreen = true;
    /* 偏好减少动态的访客：雨照下，但慢下来、换字也慢下来 */
    var calm = reduce ? 0.7 : 1;
    var tick = reduce ? 220 : 110;
    var canAnimate = typeof Element !== 'undefined' &&
      typeof Element.prototype.animate === 'function';

    /* 静止 / 恢复的滑行时长：播放速率线性过渡，雨是“刹住”而不是“卡住” */
    var GLIDE = 900;
    var busy = false, seq = 0, seqTimer = null, glideTimers = [], activeTweens = [];

    /* 源码按行切好，供随机“弹出”一块函数用 */
    var srcLines = [];
    (function () {
      var raw = codeSrc.textContent.replace(/\r/g, '').split('\n');
      for (var i = 0; i < raw.length; i++) {
        if (raw[i].trim()) { srcLines.push(raw[i].replace(/\s+$/, '')); }
        else if (srcLines.length) { srcLines.push(''); }
      }
      while (srcLines.length && !srcLines[srcLines.length - 1]) { srcLines.pop(); }
    })();

    /* 清掉所有在跑的定时器与缓动（重建 / 出错时用） */
    function clearSeq() {
      seq++;
      busy = false;
      if (seqTimer) { clearTimeout(seqTimer); seqTimer = null; }
      for (var g = 0; g < glideTimers.length; g++) { clearTimeout(glideTimers[g]); }
      glideTimers = [];
      for (var i = 0; i < activeTweens.length; i++) { cancelAnimationFrame(activeTweens[i]); }
      activeTweens = [];
      if (rain) { rain.classList.remove('is-frozen'); }
      var stale = card.querySelectorAll ? card.querySelectorAll('.code-block') : [];
      for (var k = 0; k < stale.length; k++) {
        try { card.removeChild(stale[k]); } catch (e) { /* 已经被摘掉了 */ }
      }
    }

    /* 每个动画对象单独缓动到某个播放速率（点中字符时刹住，之后恢复）。
       缓动按时间走；再挂一个 1.6×GLIDE 的保险定时器，保证帧被丢光时
       也一定落在目标值上，雨不会永远卡在“正在减速”的中间态。 */
    var clockMs = (typeof performance !== 'undefined' && performance.now)
      ? function () { return performance.now(); }
      : function () { return Date.now(); };
    function glide(anim, to) {
      if (!anim || typeof anim.playbackRate !== 'number') { return; }
      var from = anim.playbackRate;
      if (Math.abs(from - to) < 0.01) { anim.playbackRate = to; return; }
      var t0 = clockMs();
      var done = false;
      var step = function () {
        if (done) { return; }
        if (anim.playbackRate === to) { done = true; return; }
        var p = Math.min(1, (clockMs() - t0) / GLIDE);
        anim.playbackRate = from + (to - from) * (p < 0.5 ? 2 * p * p : 1 - 2 * (1 - p) * (1 - p));
        if (p < 1) { activeTweens.push(requestAnimationFrame(step)); }
        else { done = true; }
      };
      activeTweens.push(requestAnimationFrame(step));
      glideTimers.push(setTimeout(function () {          /* 兜底：直接落到位 */
        if (anim.playbackRate !== to) { anim.playbackRate = to; }
      }, GLIDE * 1.6));
    }

    /* 屏幕中央弹出一块随机源码。源码里每个方法都只有一两行，所以先随机挑
       几行的窗口（2–6 行），再在窗口内收边：退回到窗口内最后一个空行，
       保证不把两个不相关的块拼在一起。 */
    function randomChunk() {
      if (!srcLines.length) { return { head: 'python', lines: ['# (no source)'] }; }
      var heads = [];
      for (var i = 0; i < srcLines.length; i++) {
        if (/^(\s*)(def|class)\s/.test(srcLines[i])) { heads.push(i); }
      }
      var s = heads.length ? heads[rnd(heads.length)] : rnd(Math.max(1, srcLines.length - 4));
      if (s > 0 && /^\s*@/.test(srcLines[s - 1])) { s--; }            /* 带上装饰器 */
      var e = s + 2 + rnd(5);
      if (e > srcLines.length) { e = srcLines.length; }
      for (var k = e - 1; k > s + 1; k--) {                          /* 退到块内最后一个空行之后 */
        if (srcLines[k].replace(/\s+$/, '') === '') { e = k; break; }
      }
      var name = /^\s*(?:def|class)\s+([A-Za-z_][\w]*)/.exec(srcLines[s]);
      return { head: name ? (name[1] === '__init__' ? 'Supreme_Wisdom.__init__' : name[1]) : 'python',
        lines: srcLines.slice(s, e) };
    }

    function buildBlock() {
      var chunk = randomChunk();
      var box = doc.createElement('div');
      box.className = 'code-block';
      /* 窄屏上最长的源码行会顶出屏幕：按行长把字号缩到装得下为止
         （单宽字体约 0.62em/字符），既不改动代码也不让它被裁掉 */
      var longest = chunk.head.length;
      for (var n = 0; n < chunk.lines.length; n++) {
        if (chunk.lines[n].length > longest) { longest = chunk.lines[n].length; }
      }
      var room = Math.max(180, (card.clientWidth || 620) * 0.86);
      var fs = Math.min(12.5, Math.floor(room / Math.max(1, longest) / 0.62));
      box.style.fontSize = Math.max(8, fs) + 'px';
      var head = doc.createElement('span');
      head.className = 'cb-head';
      head.textContent = chunk.head + '()';
      box.appendChild(head);
      for (var i = 0; i < chunk.lines.length; i++) {
        var ln = doc.createElement('span');
        ln.className = 'cb-line';
        ln.textContent = chunk.lines[i] === '' ? '\u00a0' : chunk.lines[i];
        box.appendChild(ln);
      }
      var osd = card.querySelector ? card.querySelector('.code-osd') : null;
      card.insertBefore(box, osd || null);
      if (canAnimate) {
        box.animate([
          { opacity: 0, transform: 'translate(-50%, -50%) scale(0.94)' },
          { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
        ], { duration: reduce ? 1 : 460, easing: 'cubic-bezier(0.2, 0.9, 0.25, 1)', fill: 'both' });
        var lines = box.children || [];
        for (var k = 1; k < lines.length; k++) {
          if (typeof lines[k].animate === 'function') {
            lines[k].animate([{ opacity: 0 }, { opacity: 1 }],
              { duration: reduce ? 1 : 320, delay: k * 135, fill: 'both' });
          }
        }
      }
      return box;
    }

    function dropBlock(box, done) {
      if (!box) { done(); return; }
      if (canAnimate && typeof box.animate === 'function') {
        var lines = box.children || [];
        for (var i = 1; i < lines.length; i++) {
          if (typeof lines[i].animate === 'function') {
            lines[i].animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, delay: i * 60, fill: 'both' });
          }
        }
        box.animate([
          { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
          { opacity: 0, transform: 'translate(-50%, -50%) scale(0.97)' }
        ], { duration: 420, delay: 260, fill: 'both' });
      }
      seqTimer = setTimeout(function () {
        /* 用 card 直接摘，别问 box.parentNode —— 节点是刚 createElement 出来的，
           某些环境下它不会在插入后回填 */
        try { card.removeChild(box); } catch (e) { /* 已经被摘掉了 */ }
        done();
      }, canAnimate ? 760 : 60);
    }

    /* 点中一个字符 → 雨近乎停住（换字也停） → 5–10 秒后弹出函数块 →
       块自身停留 5–10 秒后崩塌 → 雨恢复原速 */
    function collapseCycle() {
      if (busy) { return; }                       /* 一轮没走完，再点不叠加 */
      busy = true;
      var me = ++seq;
      if (rain) { rain.classList.add('is-frozen'); }

      for (var i = 0; i < anims.length; i++) { glide(anims[i], 0.04); }
      if (timer) { clearInterval(timer); timer = null; }

      var box = null;
      seqTimer = setTimeout(function () {          /* 1.8–4.2 秒的“停格” */
        if (me !== seq) { return; }
        try { box = buildBlock(); } catch (e) { box = null; }
        var hold = 5000 + rnd(5000);               /* 2. 块停留 5–10 秒 */
        seqTimer = setTimeout(function () {
          if (me !== seq) { return; }
          dropBlock(box, function () {             /* 3. 逐行崩塌 */
            if (me !== seq) { return; }
            if (rain) { rain.classList.remove('is-frozen'); }
            for (var k = 0; k < anims.length; k++) { glide(anims[k], 1); }
            activeTweens.push(requestAnimationFrame(function () {
              if (me !== seq) { return; }
              busy = false;
              run(onScreen);                       /* 4. 回到开始的掉落 */
            }));
          });
        }, hold);
      }, reduce ? 1200 : (1800 + rnd(2400)));
    }

    /* Keyboard and touch route into the same cycle. The rain is aria-hidden
       decoration, which left the whole interaction unreachable without a
       pointer — this button is the accessible equivalent of tapping a head. */
    var codeTap = doc.getElementById('code-tap');
    if (codeTap) {
      codeTap.addEventListener('click', function () { if (!busy) { collapseCycle(); } });
    }

    function bindTap(el) {
      if (!el || typeof el.addEventListener !== 'function') { return; }
      var x0 = 0, y0 = 0, moved = false;
      el.addEventListener('pointerdown', function (e) {
        x0 = e.clientX; y0 = e.clientY; moved = false;
      });
      el.addEventListener('pointermove', function (e) {
        if (Math.abs(e.clientX - x0) > 8 || Math.abs(e.clientY - y0) > 8) { moved = true; }
      });
      el.addEventListener('pointerup', function (e) {
        if (moved) { return; }                     /* 是滚动，不是点击 */
        if (!reduce) { el.textContent = glyph(); } /* 点中的那个字符先换一下 */
        collapseCycle();
      });
      el.addEventListener('click', function (e) {  /* 老浏览器 / 键盘 */
        if (e && e.preventDefault) { e.preventDefault(); }
        if (busy) { return; }
        collapseCycle();
      });
      el.style.cursor = 'pointer';
    }

    function stopAnims() {
      clearSeq();
      for (var i = 0; i < anims.length; i++) { anims[i].cancel(); }
      anims = [];
    }

    function buildRain() {
      /* 先收起静态代码，再量屏 —— 量到的是屏幕的最终高度 */
      codeSrc.style.display = 'none';
      var W = card.clientWidth, H = card.clientHeight;
      if (!W || !H) {                                    /* 还没排完版 */
        if (!rain) { codeSrc.style.display = ''; }
        return;
      }
      if (rain && Math.abs(H - builtH) < 24) { return; }    /* 高度没变，不重排 */
      if (rain && rain.parentNode) { rain.parentNode.removeChild(rain); }
      stopAnims();

      try {
        var fw = 16, fh = 19;                              /* 格宽 / 行高 */
        var cols = Math.max(4, Math.floor(W / fw));

        rain = doc.createElement('div');
        rain.className = 'code-rain';
        rain.setAttribute('aria-hidden', 'true');
        cells = [];

        for (var c = 0; c < cols; c++) {
          var far = Math.random() < 0.30;                  /* 远景列：更暗更慢 */
          var left = c * fw + rnd(5);
          var alpha = far
            ? (0.34 + Math.random() * 0.20).toFixed(2)
            : (0.80 + Math.random() * 0.20).toFixed(2);
          var speed = ((far ? 58 : 96) + Math.random() * 74) * calm;  /* px/秒 */
          /* 相位按黄金比错开（而非纯随机）：任何一刻屏幕上的雨都分布均匀 */
          var phase = (c * 0.6180339887 + Math.random() * 0.08) % 1;
          var tail = (far ? 3 : 4) + rnd(5);               /* 尾迹 3–8 行：一小段彗尾 */
          var L = tail * fh;
          var dur = (H + L) / speed;

          var col = doc.createElement('span');
          col.className = 'rain-col';
          col.style.left = left + 'px';
          col.style.height = L + 'px';
          col.style.opacity = alpha;

          if (canAnimate) {
            /* 关键帧由 JS 提供，CSS 里的 col-fall 只作老浏览器兜底 */
            col.style.animation = 'none';
            anims.push(col.animate(
              [{ transform: 'translate3d(0,' + (-L) + 'px,0)' },
               { transform: 'translate3d(0,' + H + 'px,0)' }],
              { duration: dur * 1000, delay: -phase * dur * 1000,
                iterations: Infinity, easing: 'linear' }
            ));
          } else {
            col.style.setProperty('--y0', -L + 'px');
            col.style.setProperty('--y1', H + 'px');
            col.style.animationDuration = dur.toFixed(2) + 's';
            col.style.animationDelay = (-phase * dur).toFixed(2) + 's';
          }

          for (var k = 0; k < tail; k++) {                 /* k = 0 是最前的流头 */
            var s = doc.createElement('span');
            s.className = k === 0 ? 'char char-head' : 'char';
            s.textContent = glyph();
            s.style.top = (L - fh - k * fh) + 'px';
            if (k > 0) {
              var a = Math.pow(1 - k / tail, 2);           /* 尾迹：几行内跌进黑暗 */
              s.style.color = 'rgba(' + GREEN + ', ' + (0.04 + 0.96 * a).toFixed(3) + ')';
              if (k < 3) { s.style.textShadow = '0 0 10px rgba(' + GREEN + ', ' + (0.60 * a).toFixed(2) + ')'; }
            }
            cells.push(s);
            col.appendChild(s);
            if (k === 0) { bindTap(s); }              /* 点中流头即触发崩塌一轮 */
          }
          rain.appendChild(col);
        }

        card.insertBefore(rain, card.firstChild);
        builtH = H;
        run(onScreen);                                     /* 离屏就先停住 */
      } catch (e) {
        /* 兜底：出任何差错都退回可读的静态代码，别留一块黑屏 */
        stopAnims();
        if (rain && rain.parentNode) { rain.parentNode.removeChild(rain); }
        rain = null; cells = [];
        codeSrc.style.display = '';
        run(false);
      }
    }

    buildRain();

    /* 字体 / 图片加载完成或窗口尺寸变化后，屏幕高度可能变了 */
    var rebuild = null;
    window.addEventListener('resize', function () {
      if (rebuild) { clearTimeout(rebuild); }
      rebuild = setTimeout(buildRain, 220);
    });
    window.addEventListener('load', function () { setTimeout(buildRain, 60); });

    /* 随机换字：每 ~110ms（reduce 下 220ms）换掉约 1.2% 的字符。
       面板离开视口或标签页隐藏时暂停，别浪费电。 */
    function mutate() {
      if (!cells.length) { return; }
      var n = Math.max(1, Math.round(cells.length * 0.012));
      for (var i = 0; i < n; i++) { cells[rnd(cells.length)].textContent = glyph(); }
    }
    function run(on) {
      for (var i = 0; i < anims.length; i++) {
        if (on) { anims[i].play(); } else { anims[i].pause(); }
      }
      if (on && !timer && !doc.hidden) { timer = setInterval(mutate, tick); }
      else if (!on && timer) { clearInterval(timer); timer = null; }
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) { onScreen = entries[i].isIntersecting; }
        run(onScreen);
      }, { threshold: 0.05 }).observe(card);
    } else { run(true); }
    doc.addEventListener('visibilitychange', function () { run(onScreen); }, false);
  }

  /* ── 10 Misc ─────────────────────────────────────────────── */
  var yr = doc.getElementById('year');
  if (yr) { yr.textContent = String(new Date().getFullYear()); }

  /* HUD clocks — Sydney wall time, with the zone label the clock actually is
     (AEST UTC+10 / AEDT UTC+11) instead of a fixed string that is wrong for
     half the year. */
  var hudClock = doc.getElementById('hud-clock');
  var contactClock = doc.getElementById('contact-clock');
  function two(n) { return (n < 10 ? '0' : '') + n; }
  function tickClock() {
    var t = sydneyNow();
    if (hudClock) {
      hudClock.textContent = two(t.hour) + ':' + two(t.minute) + ':' + two(new Date().getSeconds());
    }
    if (contactClock) {
      contactClock.textContent = (t.tz ? t.tz + ' · ' : '') + two(t.hour) + ':' + two(t.minute);
    }
    applyAvail(t);
  }
  if (hudClock || contactClock || avail) {
    tickClock();
    setInterval(tickClock, 1000);
  }

  /* Boot */
  captureOriginals();
  applyTheme(theme);
  applyLang(lang);
  onScroll();
})();
