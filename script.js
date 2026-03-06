const profile = {
  openingLine:
    "这是一封写给 AI VC、互联网 AI 战略团队和咨询经理的网页化求职信。阅读时间大约 3 分钟。",
  heroTitle: "何泽宇，想做 AI 投资 / AI 产品 / AI 战略相关实习。",
  heroSubtitle:
    "如果你在找一个既能做 AI 行业研究、又能理解产品与商业化、还能把信息压缩成决策材料的人，这个页面就是写给你的。",
  email: "dracohe0609@gmail.com",
  phone: "156-1600-4799",
  resumeUrl: "./resume.pdf",
  target: "AI VC / 互联网 AI 战略 / 咨询",
  identity:
    "我现在是对外经济贸易大学本科生，未来是 Fudan DDIM incoming。过去这段时间里，我分别在基金、投后、战略团队和 AI 产品实践里工作过。也正因为这些经历交叉在一起，我越来越明确自己想去的方向，不是泛泛的“战略”或“商业分析”，而是更聚焦的 AI 投资、AI 产品和 AI 战略。我希望加入一个要求高、反馈真实、节奏快的团队，把对 AI 应用场景、商业化路径和竞争格局的判断，转化成真正有价值的研究、分析和输出。",
  valuesIntro:
    "我会被好的团队吸引，通常不是因为 title，而是因为它们同时重视 <mark>判断力</mark>、<mark>诚实沟通</mark> 和 <mark>长期主义</mark>。这也是我想加入 AI VC、互联网 AI 战略和咨询团队的原因。",
  values: [
    {
      keyword: "我认同高标准。",
      text: "我更愿意在一个要求清晰、反馈直接、对材料质量有要求的环境里工作，而不是只做表面完成度。",
    },
    {
      keyword: "我喜欢问题导向。",
      text: "无论是赛道研究、产品分析还是竞争格局判断，我都习惯先定义问题，再拆变量，而不是一上来堆信息。",
    },
    {
      keyword: "我相信长期复利。",
      text: "我很在意一份工作能否持续训练我的判断力、表达能力和对技术商业化的理解，而不只是短期执行。",
    },
  ],
  resultsIntro:
    "如果用一句话总结我的经历，就是我已经在多个真实业务环境里练过“快速进入新语境并稳定输出”的能力。",
  results: [
    {
      keyword: "AI 投资研究。",
      text: "在锦秋基金做 AI 投资实习时，我围绕短剧、电商、机器人等方向做赛道拆解、访谈纪要、竞品测评和商业化分析，6 个月内累计完成 70+ 篇会议纪要、10 篇 IC Memo 和 3 篇深度研究。",
    },
    {
      keyword: "战略分析。",
      text: "在滴滴国际化外卖团队，我长期跟踪拉美市场，分析 Uber Eats、Rappi、Mercado Libre 等对手的 GMV、Revenue、Adjusted EBITDA 和市场动态，把零散信息转化成月度市场分析和行业简报。",
    },
    {
      keyword: "投后与财务。",
      text: "在 BAI Capital，我结合财报和 Capital IQ 跟踪被投企业的财务与经营异动，支持季度汇报和数据库维护，训练了面向管理层的表达方式。",
    },
    {
      keyword: "AI 产品实践。",
      text: "我自己做过 AI 驱动的沉浸式旅行决策模拟器，从产品问题定义、约束模型到 Prompt 策略和缓存优化，完整走过了一遍从 idea 到 demo 的过程。",
    },
  ],
  fitIntro:
    "除了“做过什么”，我也想补充一下“我怎么工作”。对我来说，Character & Fit 不是空话，而是决定能不能和团队长期一起做事的部分。",
  fit: [
    {
      keyword: "我进入状态快。",
      text: "新行业、新团队、新问题对我不是阻力。我比较擅长先快速建立问题地图，再逐步把细节补齐。",
    },
    {
      keyword: "我写作和表达稳定。",
      text: "我对材料质量有要求，会主动把复杂信息整理成经理愿意看、也看得快的版本。",
    },
    {
      keyword: "我不是只会研究。",
      text: "我对 AI 产品也有真实兴趣，愿意从场景、用户、流程和交互去理解技术如何真正落地。",
    },
    {
      keyword: "我合作方式直接但认真。",
      text: "我很珍惜明确目标、及时沟通和高质量反馈，也愿意在压力下持续把输出打磨到更可靠。",
    },
  ],
  quote:
    "“我想做的，不只是把信息收集完整，而是把复杂问题整理到足够清楚，让别人可以更快做判断。”",
  closing:
    "如果你正在招募 AI 投资、AI 产品或 AI 战略方向的实习生，也希望这个人既能做 research，也能理解产品和商业化，我会很希望和你聊聊。谢谢你花时间看到这里。",
  signoff: "谢谢阅读。期待有机会进一步交流。 - 何泽宇",
};

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
}

function setHTML(id, value) {
  const node = document.getElementById(id);
  if (node) node.innerHTML = value;
}

function setLink(id, href, text) {
  const node = document.getElementById(id);
  if (!node) return;
  node.href = href;
  if (text) node.textContent = text;
}

function renderBulletList(id, items) {
  const node = document.getElementById(id);
  if (!node) return;
  node.innerHTML = items
    .map(
      (item) => `
        <li class="reveal">
          <strong>${item.keyword}</strong>${item.text}
        </li>
      `
    )
    .join("");
}

function init() {
  document.title = "何泽宇 | Web Cover Letter";
  setText("opening-line", profile.openingLine);
  setText("hero-title", profile.heroTitle);
  setText("hero-subtitle", profile.heroSubtitle);
  setText("identity-text", profile.identity);
  setHTML("values-intro", profile.valuesIntro);
  setText("results-intro", profile.resultsIntro);
  setText("fit-intro", profile.fitIntro);
  setText("quote-block", profile.quote);
  setText("closing-text", profile.closing);
  setText("signoff", profile.signoff);
  setText("phone-text", profile.phone);
  setText("target-text", profile.target);

  setLink("email-link", `mailto:${profile.email}`, "邮件联系");
  setLink("resume-link", profile.resumeUrl, "查看简历 PDF");
  setLink("resume-inline-link", profile.resumeUrl, "查看 PDF");
  setLink("contact-email-link", `mailto:${profile.email}`, profile.email);

  renderBulletList("values-list", profile.values);
  renderBulletList("results-list", profile.results);
  renderBulletList("fit-list", profile.fit);

  const quickFacts = document.getElementById("quick-facts");
  quickFacts.innerHTML = `
    <article class="fact-item reveal"><span class="fact-label">方向</span><span class="fact-value">${profile.target}</span></article>
    <article class="fact-item reveal"><span class="fact-label">教育</span><span class="fact-value">对外经贸本科，Fudan DDIM incoming</span></article>
    <article class="fact-item reveal"><span class="fact-label">联系</span><span class="fact-value">${profile.phone}<br />${profile.email}</span></article>
    <article class="fact-item reveal"><span class="fact-label">关键词</span><span class="fact-value">AI investment, AI product, AI strategy</span></article>
  `;
}

init();
