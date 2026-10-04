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
    'nav.ai': 'AI 方向', 'nav.ventures': '旗下项目', 'nav.insights': '哲思',
    'nav.contact': '联系', 'nav.github': 'GitHub ↗',
    'nav.brandName': 'Seth Li', 'nav.brandRole': '全栈 · AI · 数据', 'nav.moreLabel': '更多',

    'hero.eyebrow': '~/seth-li ▸ 悉尼 · 全栈与数据库工程师 · AI 探索者',
    'hero.hudStatus': '在线', 'hero.hudLocation': '悉尼 · 澳洲',
    'hero.hudStackLabel': '技术栈', 'hero.hudSinceLabel': '始于', 'hero.hudRevLabel': '版本',
    'hero.hudRev': '2026.10',
    'hero.sub': '码 × AI × 禅 —— 33 年生产实践',    'hero.bio': '现任悉尼 <strong>DASH Technology Group</strong>（财富科技）全栈与数据库工程师，<strong>33 年</strong>一线生产实践，横跨金融科技、数字贷款、企业数据与 AI。我把核心投资组合系统重构到<strong>提速 4 倍、基础设施降至 1/22.5</strong>，然后继续往前推：如今同样的算力只需原来的 <strong>1/50</strong>，业务量却涨到 4 倍。再往前，我在 AME Group 任 CTO 时组建 AI 研究中心，让机器学会从财报中提取数据（NLP / BERT）；夜里我仍在教机器写格律诗。<strong>Feng Tech</strong> 创始人，<strong>慧灯禅院</strong> 创建者。',
    'hero.ctaCompany': '🏢 Feng Tech',
    'hero.ctaZen': '🪷 慧灯禅院',
    'hero.statYears': '年生产实践', 'hero.statPerf': '算力降至原来的',
    'hero.statScale': '倍的业务承载', 'hero.statAi': '年起深耕 AI / 数据挖掘',

    'about.title': '工程价值', 'about.titleEm': '· AI · 数据 · 交付',
    'about.kicker': '为何选我',
    'about.sub': '三十年持续交付生产级系统——专注 AI、数据与扎实工程三者交汇之处。',
    'about.nowLabel': '当前',
    'about.aiTitle': 'AI 与生成式 AI',
    'about.aiText': '任 CTO 期间组建公司<strong>AI 研究中心</strong>，让模型从非结构化 PDF 财报中读出数据（NLP / BERT），并落地了背后的<strong>PDF 表格提取器</strong>。如今我围绕模型构建检索、智能体与评估三层能力；chinesepoem 里，机器则在写格律诗。',
    'about.aiChip1': '生成式 AI', 'about.aiChip2': 'NLP', 'about.aiChip3': 'LLM',
    'about.aiChip4': 'BERT', 'about.aiChip5': 'RAG', 'about.aiChip6': 'AI 智能体',
    'about.aiChip7': '效果评估',
    'about.aiNow': '.NET 智能体框架 · 评估流水线 · 混合检索',
    'about.dbTitle': '数据库与数据',
    'about.dbText': '我首先、也始终是一名<strong>数据库开发者</strong>：SQL、库表设计与数据挖掘，横跨 SQL Server、PostgreSQL、MongoDB 与 Redshift，之间用 Kafka/CDC 打通。我做过一套被投行与政府机构采购的大宗商品经济数据库——因为模型的上限，取决于底下数据的质量。',
    'about.dbChip1': 'SQL', 'about.dbChip2': '数据库设计', 'about.dbChip3': '数据挖掘',
    'about.dbChip4': 'PostgreSQL', 'about.dbChip5': 'Kafka / CDC', 'about.dbChip6': '数据血缘',
    'about.dbNow': '向量库与关系型数据并存，权限边界不变',
    'about.fsTitle': '全栈与金融科技',
    'about.fsText': '现职 <strong>DASH Technology Group</strong> 全栈工程师，此前任职 Simpology 与 Roar——.NET / .NET Core、C#、TypeScript、Angular / React / Vue、AWS 与 Azure。我把核心 Holdings 与 Performance 系统重构到<strong>算力降至 1/50、业务量提升 4 倍</strong>，并主导 .NET Framework → .NET 10 现代化迁移。',
    'about.fsChip1': '金融科技', 'about.fsChip2': '现代化迁移', 'about.fsChip3': 'C#',
    'about.fsChip4': 'Angular', 'about.fsChip5': 'AWS', 'about.fsChip6': 'Azure',
    'about.fsNow': '为受监管系统补上智能体接口与审计链路',

    'career.title': '33 年工程履历', 'career.titleEm': '· 从第一行代码到 AI',
    'career.kicker': '履历',
    'career.sub': '持续交付、自动化与学习的记录——留下的是至今仍能解释我如何做事的那几个节点。',
    'career.dashTitle': '全栈工程师 · DASH Technology Group',
    'career.dashText': '重构核心 Holdings 与 Performance 系统：先是提速 4 倍、基础设施降至 1/22.5，最终同样的计算只需原来的 1/50，同时承载 4 倍的户数与业务量。自动化流动性检查（节省 2 个全职人力），并主导 .NET Framework 4.6.1 → .NET 10 现代化迁移。',
    'career.dashChip1': '财富科技', 'career.dashChip2': '.NET 10',
    'career.dashChip3': 'AWS Aurora', 'career.dashChip4': 'PostgreSQL',
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
    'career.ameText': '作为 CTO 组建公司 AI 研究中心（NLP / BERT 财务报表提取，以 BERT 取代 CNN+LSTM）；主导机器学习 GIS 数据挖掘系统；以 Git 与 Jira/Agile 制定 IT 战略；打造被投行与政府机构采购的大宗商品经济研究数据库。',
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
    'career.jinshiText': '创始团队核心成员——主导《商业银行国际贸易系统》（信用证、托收、汇兑），运行于全国交通银行各分行。',
    'career.jinshiChip1': 'COBOL / C', 'career.jinshiChip2': 'Delphi', 'career.jinshiChip3': 'Sybase',
    'career.edu1Title': '湘潭大学 · 硕士（人工智能与数据挖掘方向）',
    'career.edu1Text': '计算机应用工程专业硕士（人工智能与数据挖掘方向）——以全日制、公费全额身份录取，在职攻读完成。与上文工作经历的时间重叠是真实的，并非笔误。',
    'career.edu1Chip1': '硕士 · 双一流',
    'career.edu1Chip2': '公费全额 · 在职攻读',
    'career.edu2Title': '长沙大学 · 计算机科学与技术',
    'career.edu2Text': '计算机科学与技术专业大专——全日制，工程思维在此扎根。',
    'career.edu2Chip1': '高等教育',
    'career.netTitle': 'LinkedIn · 职业网络',
    'career.netText': '500+ 联系人 · 576 位关注者——欢迎连接，一起构建有意义的事。',
    'career.more': '展开全部履历', 'career.less': '收起',

    'stack.title': '技术栈', 'stack.titleEm': '· 日常共修的工具',
    'stack.kicker': '技术栈',
    'stack.sub': '选工具如选法器——趁手、可靠、可维护。',
    'stack.g1Title': '编程语言', 'stack.g2Title': 'AI 与数据',
    'stack.genAI': '生成式 AI', 'stack.llm': 'LLM', 'stack.agents': 'AI 智能体',
    'stack.rag': 'RAG 检索增强', 'stack.nlp': 'NLP', 'stack.evals': '效果评估',
    'stack.ml': '机器学习', 'stack.vector': '向量数据库',
    'stack.prompt': '提示词工程', 'stack.data': '数据工程', 'stack.mining': '数据挖掘',
    'stack.g3Title': '前端与框架', 'stack.g4Title': '云与 DevOps', 'stack.micro': '微服务',

    'projects.title': '精选项目', 'projects.titleEm': '· 交付 · 开源 · 修行',
    'projects.kicker': '项目',
    'projects.sub': '数十年交付的亮点——以及我持续练习的开源仓库。',
    'projects.f1Text': '分两步重构核心 Holdings 与 Performance 系统：先做到提速 4 倍、基础设施降至 1/22.5；最终同样的工作量只需 16 vCPU×4 小时，而此前需要 2,400+ vCPU×6 小时——算力降至原来的 1/50，同时承载 4 倍的户数与业务量。',
    'projects.f1Meta': 'DASH Technology Group · 2024–至今 · AWS Aurora · SQS · PostgreSQL',
    'projects.f2Text': '从非结构化 PDF 中还原表格：以 BERT 取代 CNN+LSTM 做区域分类，并用图搜索定位表格边框。目标是无人值守地跑完海量财报，把人工录入整段替换掉。',
    'projects.f2Meta': 'AME Group · 2017–2019 · NLP · 深度学习',
    'projects.f3Text': '为数千个项目自动生成现金流与估值报告；将 .NET 后端逻辑自动转换为 VBA/Excel，使分析师可直接在 Excel 中建模。',
    'projects.f3Meta': 'AME Group · 2016–2018 · Excel · VBA',
    'projects.f4Text': '把分析师赖以工作的矿业金属财务模型从 WinForms 迁到 .NET Core + Angular，交互速度与桌面版持平——6 人团队、6 个月交付，模型口径零回归。',
    'projects.f4Meta': 'AME Group · 2018 · .NET Core · Angular',
    'projects.osTitle': '开源项目',
    'projects.p1': '自动生成中国古典格律诗——NLP / 生成模型实验：教机器写诗，也从内部观察创造力。',
    'projects.p2': '灵棋经的数字实现——对传统占卜的现代化、可复现实验：结构化数据进，结构化预测出。',
    'projects.p3': '企业运维工具——从 Active Directory 查询用户登录时间，用于审计与账号治理：那种每天都会回本的自动化。',
    'projects.p4': '预测档案——记录、复盘与验证，让时间给出答案：一个在不确定性下校准判断的个人实验室。',
    'projects.more': '更多仓库：', 'projects.moreLink': '在 GitHub 查看全部 ↗',
    'projects.statsNote': '卡片由 github-readme-stats 实时渲染——始终为最新数据。',

    'ventures.title': '本职工作之外', 'ventures.titleEm': '· 两个事业，一门修行',
    'ventures.kicker': '旗下项目',
    'ventures.sub': '我拥有的两个产品的实时预览——IT 服务公司与数字禅院。预览会在你点击或滚动到该处时加载；上方按钮可切换设备宽度。',
    'ventures.ftTag': '· 悉尼 IT 服务公司',
    'ventures.ftSlogan': 'The tech experts',
    'ventures.ztTag': '· 慧灯禅院',
    'ventures.ztNote': '佛学文章 · 法音宣流 · 在线祈福 · 观音灵签——一盏心灯，长明不灭。小屏设备建议点击「全屏打开」获得完整体验。',

    'frame.desktop': '桌面', 'frame.tablet': '平板', 'frame.mobile': '手机', 'frame.open': '全屏打开 ↗',
    'frame.loadLabel': '加载实时预览', 'frame.loadNote': '第三方页面——只在你点击或滚动到此处时才加载。',

    'ai.title': '我看 AI 的走向', 'ai.titleEm': '· 以及我在其中的位置',
    'ai.kicker': 'AI 方向',
    'ai.sub': '这是一份可被检验的判断，而不是预言：四个我正在动手的方向，以及每一个方向里，三十年的数据与交付经验恰好能派上用场的地方。',
    'ai.d1Title': '「承载层」本身就是产品', 'ai.d1Tag': '智能体',
    'ai.d1Text': '2026 年的讨论早已越过提示词。生产团队真正争论的是模型外面的<strong>承载层</strong>——工具契约、重试、预算、权限，以及出问题后可以回放的那条链路。一旦这样看，它就是一道不出彩的分布式系统题：幂等、背压、精确一次、可审计。这正是我从 Sybase 与银行中间件时代就在做的事。',
    'ai.d1L1': '工具 / MCP 契约按 API 设计，而不是写成脚本',
    'ai.d1L2': '失败语义清晰：重试、补偿、或转交人工',
    'ai.d1L3': '把成本与延迟预算当作 SLO 来管',
    'ai.d2Title': '上下文比小聪明更重要', 'ai.d2Tag': '检索',
    'ai.d2Text': '大多数令人失望的 AI 功能并不是模型失败，而是<strong>检索</strong>失败。真正的壁垒在不起眼的中间层：干净的 schema、数据血缘、尊重文档结构的切分、在查询时生效的权限，以及知道该舍弃什么。我的 PDF 表格提取器当年就要从一页非结构化版面里重建表格的<em>结构</em>——同一种直觉，晚了一代的架构。',
    'ai.d2L1': '语义 + 关键词 + 结构化 的混合检索',
    'ai.d2L2': '行级权限一直延伸到向量库',
    'ai.d2L3': '每一条被检索到的事实都带时效与出处',
    'ai.d3Title': '评估就是新的回归测试', 'ai.d3Tag': '评估',
    'ai.d3Text': '测不了的东西就交付不了。真正从智能体拿到价值的团队，是在做 Demo 之前先搭好了<strong>数据集、评分器和闸门</strong>——黄金用例进 CI，每次改动都打分，只有在确实需要判断的地方才引入人工。这一步多数团队会跳过，而这恰恰是数据库纪律最值钱的地方。',
    'ai.d3L1': '带版本的评估集：让构建失败，而不是让用户失败',
    'ai.d3L2': '把链路追踪与反馈当作一等数据',
    'ai.d3L3': '成本、延迟与质量放在一起衡量',
    'ai.d4Title': '受监管行业仍是一片空地', 'ai.d4Tag': '机会',
    'ai.d4Text': '智能体工具链已经拥挤，<strong>财富管理、信贷、保险与医疗</strong>却没有——而这些领域恰恰要求智能体可审计、可解释、足够「无聊」。在这个市场里，二十年财富科技与数字贷款的经验不是劣势，而是入场券。价值不在于模型更聪明，而在于监管认可的那套可辩护流程。',
    'ai.d4L1': '在受监管的建议环节保留人工在环',
    'ai.d4L2': '每一个自动决策都留下确定性的审计轨迹',
    'ai.d4L3': '数据不出内网时，就用自有小模型',

    'now.title': '当下与下一步',
    'now.revLabel': '版本', 'now.rev': '2026.10',
    'now.updatedLabel': '更新于', 'now.updated': '2026-10',
    'now.learningLabel': '正在学',
    'now.learning1': '.NET 上的智能体框架——Microsoft Agent Framework / Semantic Kernel 一脉，以及什么时候该用图而不是循环',
    'now.learning2': '评估流水线：评分器、黄金用例集，以及让智能体保持诚实的 CI 闸门',
    'now.learning3': '在企业 SQL 与文档库之上的混合检索，且权限边界完好',
    'now.nextLabel': '未来 90 天',
    'now.next1': '开源一个参考实现：跑在真实 schema 上、自带评估的可度量智能体',
    'now.next2': '把反复向团队解释的检索与评估模式写成公开文档',
    'now.next3': '把一个财富科技流程从人工复核推进到 AI 辅助，并留下审计轨迹',
    'now.changedLabel': '本页变化',
    'now.changed1': '本页开始记录自己的方向与版本，而不只是履历',
    'now.changed2': '性能数据统一为唯一口径（见「项目」）',
    'now.changed3': '旗下项目预览改为按需加载——首屏不再依赖它们',
    'now.foot': '这一节本就该过期。等它过期时，上面的版本号会前进，条目会移入「本页变化」——自我介绍应该是一份活文档，而不是一块牌匾。',

    'insights.title': '禅是世界观，', 'insights.titleEm': '代码是方法论',
    'insights.kicker': '哲思',
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
    'insights.poemLabel': '📜 定场诗',
    'insights.poemEn': '双燕归南国，<br>来寻王谢家。<br>画堂春昼静，<br>于此托生涯。<br>气回天地运，<br>财聚八方华。<br>人途新起色，<br>福泽满云霞。',
    'insights.codeHint': '点中任意一个下落的字符 —— 屏幕冻结，我的一个 Python 函数浮出来，随后崩塌。',
    'contact.title': '结缘', 'contact.titleEm': '· 代码 · AI · 禅',
    'contact.kicker': '联系',
    'contact.line': '期待与有趣的你交谈——代码、AI、数据、禅，或任何「看似不可能」的想法。',
    'contact.email': '✉️ 邮箱',
    'contact.zen': '🪷 慧灯禅院',
    'contact.cardEmailLabel': '邮件主通道', 'contact.cardEmailNote': '最快的联系渠道——通常当天回复。',
    'contact.cardPhoneLabel': '语音线路', 'contact.cardPhoneNote': '悉尼时间 · 紧急问题优先。',
    'contact.cardLiLabel': '职业网络', 'contact.cardLiNote': '500+ 联系人 · 576 位关注者。',
    'contact.cardGhLabel': '源代码', 'contact.cardGhNote': '开源仓库、实验与档案。',
    'contact.cardFtLabel': '业务线路', 'contact.cardFtCity': '悉尼 IT 服务',
    'contact.cardFtNote': '网站、AI 自动化、数据库与技术支持。',
    'contact.cardZenLabel': '修行', 'contact.cardZenNote': '佛学文章、法音、在线祈福与观音灵签。',
    'contact.panelStatus': '信号畅通',
    'contact.panelOrgLabel': '组织', 'contact.panelFocusLabel': '方向', 'contact.panelModeLabel': '方式',
    'contact.panelHoursLabel': '时间', 'contact.panelSinceLabel': '构建',
    'contact.panelMode': '远程服务全球 · 悉尼地区可上门',
    'contact.panelSince': '自 1993 年持续交付软件，未曾中断',

    'footer.role': '全栈与数据库工程师 · .NET / C# / AI 探索者',
    'footer.photos': '图片来源（免费可商用）：', 'footer.pexels': 'Pexels',
    'footer.fonts': '字体：', 'footer.stats': '数据卡片：', 'footer.host': '托管于 GitHub Pages',
    'footer.keywords': '关键词：全栈工程师 · 数据库开发 · .NET / .NET Core · C# · Python · TypeScript · Angular · React · SQL · AWS · Azure · Kubernetes · 生成式 AI · LLM · RAG · AI 智能体 · NLP · 提示词工程 · 效果评估 · 金融科技 · 财富科技 · 数据挖掘 · 悉尼 澳大利亚',
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
      '33 years of full-stack & database engineering.',
      'Full-Stack Engineer · DASH Technology Group (WealthTech)',
      'Core systems: 1/50 of the compute, 4× the load.',
      'Agents, retrieval, evals — the harness is the product.'
    ],
    zh: [
      '以码之清明，铸系统之可靠。',
      '三十三年全栈与数据库工程实践。',
      '全栈工程师 · DASH Technology Group（财富科技）',
      '核心系统：算力降至 1/50，业务量提升 4 倍。',
      '智能体 · 检索 · 评估 —— 承载层才是产品。'
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
    var box = doc.createElement('div');
    box.className = 'frame-embed';
    var iframe = doc.createElement('iframe');
    iframe.setAttribute('src', url);
    iframe.setAttribute('title', stage.getAttribute('data-frame-title') || url);
    iframe.setAttribute('loading', force ? 'eager' : 'lazy');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    box.appendChild(iframe);
    var old = stage.querySelector ? stage.querySelector('.frame-load') : null;
    stage.appendChild(box);
    if (old && old.parentNode === stage) { stage.removeChild(old); }
    stage.classList.add('is-loaded');
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

  /* HUD clocks — Sydney wall time (AEST, UTC+10). */
  var hudClock = doc.getElementById('hud-clock');
  var contactClock = doc.getElementById('contact-clock');
  function two(n) { return (n < 10 ? '0' : '') + n; }
  function sydneyNow() {
    var d = new Date();
    return new Date(d.getTime() + (d.getTimezoneOffset() + 600) * 60000);
  }
  function tickClock() {
    var t = sydneyNow();
    if (hudClock) { hudClock.textContent = two(t.getHours()) + ':' + two(t.getMinutes()) + ':' + two(t.getSeconds()); }
    if (contactClock) { contactClock.textContent = 'AEST UTC+10 · ' + two(t.getHours()) + ':' + two(t.getMinutes()); }
  }
  if (hudClock || contactClock) {
    tickClock();
    setInterval(tickClock, 1000);
  }

  /* Boot */
  captureOriginals();
  applyTheme(theme);
  applyLang(lang);
  onScroll();
})();
