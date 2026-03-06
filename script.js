const profile = {
  name: "何泽宇",
  title: "求职方向：战略、投资、商业分析、AI 应用相关实习",
  summary:
    "我有基金、投后、战略团队和 AI 产品实践的交叉经历，能在较短时间内完成行业扫描、信息结构化、竞品与财务分析，并输出面向管理层或投资决策的研究材料。",
  email: "dracohe0609@gmail.com",
  resumeUrl: "./resume.pdf",
  secondaryLink: {
    label: "查看简历",
    url: "./resume.pdf",
  },
  about:
    "本科就读于对外经济贸易大学国际商学院市场营销专业，曾于法国 Kedge Business School 交换，并将于 2026 年进入复旦大学管理学院攻读国际管理双硕士。我的优势不在单一职能，而在于能够快速进入业务语境，抓住关键变量，搭建分析框架，并把结论沉淀成可直接用于沟通和决策的材料。",
  thesis: [
    "能快速进入新行业语境并完成结构化研究",
    "兼具投资、战略、投后与 AI 应用的交叉视角",
    "输出稳定，适合高密度信息环境下的分析工作",
  ],
  metrics: [
    { value: "4段", label: "核心实习经历" },
    { value: "70+", label: "会议纪要与研究输出" },
    { value: "10+", label: "IC Memo / 管理汇报" },
  ],
  quickFacts: [
    { label: "目标岗位", value: "投资 / 战略 / 商业分析 / AI 应用实习" },
    { label: "教育背景", value: "UIBE 本科，Fudan MIM incoming" },
    { label: "联系方式", value: "156-1600-4799 / dracohe0609@gmail.com" },
    { label: "工作工具", value: "Python, SQL, Matlab, Capital IQ, Think-cell" },
  ],
  projects: [
    {
      name: "AI 驱动的沉浸式旅行决策模拟器",
      tags: ["AI 应用", "产品建模", "Streamlit"],
      description:
        "针对复杂旅行场景中的多目标权衡问题，将传统静态推荐改造为可交互的决策模拟器，把时间、预算、体力损耗等变量纳入同一套决策框架。",
      outcome:
        "独立完成约束模型、Game Loop 和状态机式 Prompt 设计，并用缓存机制优化高频调用时延，使产品逻辑和交互体验同时成立。",
      linkText: "查看项目",
      linkUrl: "https://travelai-draco.streamlit.app",
    },
    {
      name: "万事达卡咨询案例大赛",
      tags: ["消费研究", "案例分析", "可视化表达"],
      description:
        "基于 20 余份 Z 世代消费行为研究，提炼目标客群的消费动因、使用场景与偏好差异，并围绕信用卡产品设计更具吸引力的权益组合。",
      outcome:
        "使用 Think-cell 搭建 13 张图表与数据展示逻辑，将用户洞察转化为产品权益设计和触达策略建议。",
      linkText: "查看简历",
      linkUrl: "./resume.pdf",
    },
    {
      name: "AI 赛道研究与商业化分析",
      tags: ["行业研究", "投资分析", "商业化判断"],
      description:
        "围绕 AI 内容、机器人、效率工具和电商等方向，持续进行赛道拆解、公司研究、竞品测评和技术商业化路径分析。",
      outcome:
        "形成了从市场空间、产业链位置、核心指标到落地场景验证的一套分析方法，能够较快沉淀为 Memo、纪要和管理层汇报。",
      linkText: "查看简历",
      linkUrl: "./resume.pdf",
    },
  ],
  experience: [
    {
      title: "锦秋基金 | AI 投资实习生",
      date: "2025/07 - 2026/01",
      copy:
        "聚焦 AI 应用场景与产业链研究，围绕短剧、电商、机器人等方向完成赛道拆解、公司访谈、竞品测评和商业化分析。6 个月内产出 70+ 篇会议纪要、10 篇 IC Memo、3 篇深度研究，并参与 AI UGC 项目推进与技术尽调。",
    },
    {
      title: "滴滴 | 战略实习生（国际化外卖）",
      date: "2024/12 - 2025/04",
      copy:
        "负责拉美外卖市场的竞品追踪、行业扫描与经营指标分析，围绕 Uber Eats、Rappi、Mercado Libre 等玩家梳理 GMV、Revenue、Adjusted EBITDA 等核心指标，形成月度市场分析和全球外卖行业简报。",
    },
    {
      title: "BAI Capital | 投后管理实习生",
      date: "2025/04 - 2025/07",
      copy:
        "结合财报与 Capital IQ 跟踪被投企业的财务和经营异动，制作面向贝塔斯曼负责人的季度汇报材料，并维护基金收益与被投公司财务数据库，支撑投后判断和资产表现跟踪。",
    },
    {
      title: "BCG | 战略分析助理",
      date: "2024/06 - 2024/09",
      copy:
        "参与啤酒行业增长与利润问题分析，完成行业结构、品牌验证、消费者问卷和市场进入建议研究，输出面向客户的策略 slide 与商品结构优化建议。",
    },
  ],
  skillGroups: [
    {
      title: "研究与分析能力",
      note: "适合战略、投资、商业分析相关岗位。",
      items: ["行业研究", "竞品分析", "财务分析", "管理层汇报", "会议纪要 / Memo 撰写"],
    },
    {
      title: "工具与执行能力",
      note: "支持数据处理、建模、可视化和 AI 应用验证。",
      items: ["Python", "SQL", "Matlab", "Streamlit", "Think-cell", "Capital IQ"],
    },
    {
      title: "国际化与沟通背景",
      note: "跨文化学习与业务语境适配是我的明显优势。",
      items: ["中英双语材料", "法国交换经历", "跨区域市场研究", "高密度沟通协作"],
    },
  ],
  contactText:
    "如果你正在招募能够快速进入业务、完成研究分析并稳定输出决策材料的实习生，欢迎直接联系我。我希望进入要求高、节奏快、反馈真实的团队，在更复杂的商业问题中继续提升判断力与执行力。",
};

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function setLink(id, href, text) {
  const element = document.getElementById(id);
  if (element) {
    element.href = href;
    if (text) element.textContent = text;
  }
}

function renderMetrics() {
  const root = document.getElementById("hero-metrics");
  root.innerHTML = profile.metrics
    .map(
      (metric, index) => `
        <li class="reveal reveal-delay-${index}">
          <span class="metric-value">${metric.value}</span>
          <span class="metric-label">${metric.label}</span>
        </li>
      `
    )
    .join("");
}

function renderThesis() {
  const root = document.getElementById("hero-thesis");
  root.innerHTML = profile.thesis
    .map(
      (item, index) => `
        <div class="thesis-item reveal reveal-delay-${index}">
          <span class="thesis-index">0${index + 1}</span>
          <p>${item}</p>
        </div>
      `
    )
    .join("");
}

function renderQuickFacts() {
  const root = document.getElementById("quick-facts");
  root.innerHTML = profile.quickFacts
    .map(
      (fact, index) => `
        <article class="fact-item reveal reveal-delay-${index}">
          <span class="fact-label">${fact.label}</span>
          <span class="fact-value">${fact.value}</span>
        </article>
      `
    )
    .join("");
}

function renderProjects() {
  const root = document.getElementById("project-list");
  root.innerHTML = profile.projects
    .map(
      (project, index) => `
        <article class="project-card reveal reveal-delay-${index}">
          <div class="project-meta">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <h3 class="project-title">${project.name}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-footer">
            <span class="project-outcome">${project.outcome}</span>
            <a class="project-link" href="${project.linkUrl}" target="_blank" rel="noreferrer">${project.linkText}</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderExperience() {
  const root = document.getElementById("experience");
  root.innerHTML = `
    <p class="eyebrow">Experience</p>
    <h3>实习经历</h3>
    <div class="timeline">
      ${profile.experience
        .map(
          (item) => `
            <article class="timeline-item">
              <div class="timeline-head">
                <span class="timeline-title">${item.title}</span>
                <span class="timeline-date">${item.date}</span>
              </div>
              <div class="timeline-copy">${item.copy}</div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderSkills() {
  const root = document.getElementById("skills");
  root.innerHTML = `
    <p class="eyebrow">Capabilities</p>
    <h3>能力概览</h3>
    <div class="skill-groups">
      ${profile.skillGroups
        .map(
          (group) => `
            <section class="skill-group">
              <h4 class="skill-group-title">${group.title}</h4>
              <p class="skill-note">${group.note}</p>
              <div class="skill-tags">
                ${group.items.map((item) => `<span class="skill-tag">${item}</span>`).join("")}
              </div>
            </section>
          `
        )
        .join("")}
    </div>
  `;
}

function init() {
  document.title = `${profile.name} | Strategy & Investment Portfolio`;
  setText("hero-summary", `${profile.title}。${profile.summary}`);
  setText("about-text", profile.about);
  setText("contact-text", profile.contactText);

  setLink("email-link", `mailto:${profile.email}`, "邮件联系");
  setLink("contact-email-link", `mailto:${profile.email}`, profile.email);
  setLink("resume-link", profile.resumeUrl, "查看简历");
  setLink("contact-secondary-link", profile.secondaryLink.url, profile.secondaryLink.label);

  renderMetrics();
  renderThesis();
  renderQuickFacts();
  renderProjects();
  renderExperience();
  renderSkills();
}

init();
