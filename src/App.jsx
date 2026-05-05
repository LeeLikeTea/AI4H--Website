import { useEffect, useCallback, useState, useMemo } from 'react'
import './App.css'

const COPY = {
  zh: {
    nav: [
      ['首页', '#home'],
      ['导师', '#faculty'],
      ['成员', '#members'],
      ['论文', '#publications'],
      ['动态', '#news'],
      ['方向', '#research'],
      ['联系', '#contact'],
      ['荣誉', '#honors'],
    ],
    heroEyebrow: 'AI4H³ Lab · 北京大学',
    heroTitle: 'AI4H³ 课题组',
    heroSub: '人工智能赋能健康、幸福与人性',
    heroCtaPrimary: '进入组会动态',
    heroCtaSecondary: '浏览科研成果',
    homeIntroTitle: '组会简介',
    homeIntroLead:
      '我们聚焦多模态理解、情感计算与人机协同，把严谨的科研与开放的讨论结合，让每一次组会都成为灵感碰撞的现场。',
    homeCardGroup: '课题组合影',
    homeCardLab: '实验室一角',
    homeCardMeet: '周例会现场',
    homeDynamicTitle: '动态入口',
    homeDynamic1: '本周轮值与议程',
    homeDynamic2: '新人入组指南',
    homeDynamic3: '开源工具与数据集',
    facultyTitle: '导师 · 老师',
    facultyLead: '学术引领与日常指导并肩而行。',
    facultyPi: '课题组长 / 教授',
    facultyCo: '合作导师 / 青年研究员',
    membersTitle: '课题组成员',
    membersLead: '多元背景，同一束光。',
    memberPhd: '博士生',
    memberMaster: '硕士生',
    memberUnder: '本科生科研',
    memberAlumni: '访问 / 校友',
    pubsTitle: '科研成果 · 论文',
    pubsLead: '近期代表工作（示意占位，可替换为真实列表）。',
    pubTag: '会议 / 期刊',
    newsTitle: '组会日常 · 活动新闻',
    newsLead: '记录我们一起走过的路，相册式慢速轮播；悬停可暂停浏览。',
    newsSlides: [
      { date: '2026.04', title: '春季团建 · 城市徒步', body: '用脚步丈量城市，用快门收藏笑容。', tone: 'a' },
      { date: '2026.03', title: '顶会论文分享夜', body: '师兄师姐拆解录用经验，现场答疑。', tone: 'b' },
      { date: '2026.02', title: '实验室开放日', body: '展示最新 demo，与访客面对面交流。', tone: 'c' },
      { date: '2026.01', title: '新年组会 · 年度计划', body: '复盘与展望，定下新一年的共同目标。', tone: 'a' },
      { date: '2025.12', title: '冬至饺子局', body: '热腾腾的饺子与热腾腾的讨论。', tone: 'b' },
      { date: '2025.11', title: '学术沙龙 · 特邀报告', body: '跨界嘉宾分享前沿视角。', tone: 'c' },
    ],
    researchTitle: '科研项目 · 研究方向',
    researchLead: '从问题出发，以系统收束。',
    research1: '情感与心理健康计算',
    research2: '多模态人机协同',
    research3: '可信与可解释 AI',
    contactTitle: '联系我们',
    contactLead: '欢迎邮件交流、预约参观或合作洽谈。',
    contactAddrLabel: '实验室地址',
    contactAddr: '北京市朝阳区平乐园100号',
    contactEmailLabel: '邮箱',
    contactEmail: 'ltmou@pku.edu.cn',
    contactWechatLabel: '微信',
    contactWechat: 'BeiDaLaoMou',
    honorsTitle: '荣誉 · 获奖',
    honorsLead: '每一份认可都属于团队。',
    honor1: '优秀研究生指导教师',
    honor2: '省部级科研奖励（示意）',
    honor3: '国际会议最佳论文提名',
    footerCopy: 'AI4H³ 课题组',
    shareLabel: '分享与社交',
    shareHint: '小红书 · 抖音 · 更多',
    langZh: '中',
    langEn: 'EN',
  },
  en: {
    nav: [
      ['Home', '#home'],
      ['Faculty', '#faculty'],
      ['Team', '#members'],
      ['Papers', '#publications'],
      ['News', '#news'],
      ['Research', '#research'],
      ['Contact', '#contact'],
      ['Honors', '#honors'],
    ],
    heroEyebrow: 'AI4H³ Lab · Peking University',
    heroTitle: 'AI4H³ Lab',
    heroSub: 'AI for Health, Happiness, and Humanity',
    heroCtaPrimary: 'Lab life & updates',
    heroCtaSecondary: 'Publications',
    homeIntroTitle: 'About our group',
    homeIntroLead:
      'We study multimodal understanding, affective computing, and human–AI collaboration—rigorous science, open seminars, and ideas that spark every week.',
    homeCardGroup: 'Group photo',
    homeCardLab: 'Lab corner',
    homeCardMeet: 'Weekly meeting',
    homeDynamicTitle: 'Quick links',
    homeDynamic1: 'This week’s agenda',
    homeDynamic2: 'Onboarding guide',
    homeDynamic3: 'Tools & datasets',
    facultyTitle: 'Faculty',
    facultyLead: 'Mentorship that scales with curiosity.',
    facultyPi: 'PI / Professor',
    facultyCo: 'Co-advisor / Junior faculty',
    membersTitle: 'Members',
    membersLead: 'Many paths, one orbit.',
    memberPhd: 'PhD students',
    memberMaster: 'Master students',
    memberUnder: 'Undergrad researchers',
    memberAlumni: 'Visitors & alumni',
    pubsTitle: 'Publications',
    pubsLead: 'Representative works (placeholder copy).',
    pubTag: 'Venue',
    newsTitle: 'News & activities',
    newsLead: 'A slow album-style carousel—hover to pause and read.',
    newsSlides: [
      { date: '2026.04', title: 'Spring outing · city walk', body: 'Miles, photos, and shared laughter.', tone: 'a' },
      { date: '2026.03', title: 'Paper night at top venues', body: 'Tips, timelines, and live Q&A.', tone: 'b' },
      { date: '2026.02', title: 'Lab open day', body: 'Latest demos and face-to-face chats with visitors.', tone: 'c' },
      { date: '2026.01', title: 'New year seminar', body: 'Reflect, plan, and align on shared goals.', tone: 'a' },
      { date: '2025.12', title: 'Winter solstice dumplings', body: 'Warm food, warm conversations.', tone: 'b' },
      { date: '2025.11', title: 'Invited talk salon', body: 'Cross-disciplinary perspectives from guests.', tone: 'c' },
    ],
    researchTitle: 'Projects & directions',
    researchLead: 'Problems first, systems that last.',
    research1: 'Affective & mental-health computing',
    research2: 'Multimodal human–AI teamwork',
    research3: 'Trustworthy & explainable AI',
    contactTitle: 'Contact',
    contactLead: 'Email us to visit, collaborate, or say hello.',
    contactAddrLabel: 'Address',
    contactAddr: 'No. 100 Pingleyuan, Chaoyang District, Beijing',
    contactEmailLabel: 'Email',
    contactEmail: 'ltmou@pku.edu.cn',
    contactWechatLabel: 'WeChat',
    contactWechat: 'BeiDaLaoMou',
    honorsTitle: 'Honors & awards',
    honorsLead: 'Recognition belongs to the whole team.',
    honor1: 'Outstanding graduate mentoring',
    honor2: 'Provincial/ministry-level award (demo)',
    honor3: 'Best paper nomination, intl. conference',
    footerCopy: 'AI4H³ Lab',
    shareLabel: 'Social & share',
    shareHint: 'Xiaohongshu · Douyin · more',
    langZh: '中',
    langEn: 'EN',
  },
}

function App() {
  const [lang, setLang] = useState('zh')

  useRevealOnScroll()

  const t = COPY[lang]
  const newsSlides = useMemo(() => t.newsSlides, [t])

  const scrollToId = useCallback((hash) => {
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const onNavClick = (e, hash) => {
    e.preventDefault()
    scrollToId(hash)
  }

  return (
    <div className="app-shell">
      <div className="app-bg-grid" aria-hidden />
      <div className="app-bg-glow app-bg-glow--a" aria-hidden />
      <div className="app-bg-glow app-bg-glow--b" aria-hidden />

      <header className="topbar">
        <a href="#home" className="brand" onClick={(e) => onNavClick(e, '#home')}>
          <span className="brand-mark">AI4H³</span>
          <span className="brand-sub">Lab</span>
        </a>
        <nav className="topnav" aria-label="Primary">
          {t.nav.map(([label, hash]) => (
            <a key={hash} href={hash} className="topnav-link" onClick={(e) => onNavClick(e, hash)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="lang-switch" role="group" aria-label="Language">
          <button type="button" className={lang === 'zh' ? 'is-on' : ''} onClick={() => setLang('zh')}>
            {t.langZh}
          </button>
          <button type="button" className={lang === 'en' ? 'is-on' : ''} onClick={() => setLang('en')}>
            {t.langEn}
          </button>
        </div>
      </header>

      <main>
        {/* 1 首页 */}
        <section id="home" className="section section--hero" data-reveal>
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow reveal-child">{t.heroEyebrow}</p>
              <h1 className="hero-title reveal-child">{t.heroTitle}</h1>
              <p className="hero-sub reveal-child">{t.heroSub}</p>
              <div className="hero-actions reveal-child">
                <a href="#news" className="btn btn-primary" onClick={(e) => onNavClick(e, '#news')}>
                  {t.heroCtaPrimary}
                </a>
                <a
                  href="#publications"
                  className="btn btn-ghost"
                  onClick={(e) => onNavClick(e, '#publications')}
                >
                  {t.heroCtaSecondary}
                </a>
              </div>
            </div>
            <div className="hero-visual" aria-hidden>
              <div className="orbit orbit--1" />
              <div className="orbit orbit--2" />
              <div className="orbit orbit--3" />
            </div>
          </div>
        </section>

        <section className="section section--intro" data-reveal>
          <div className="section-head">
            <h2 className="section-title">{t.homeIntroTitle}</h2>
            <p className="section-lead">{t.homeIntroLead}</p>
          </div>
          <div className="mosaic mosaic--home">
            <figure
              className="ph ph--tall ph--tilt-l scroll-reveal scroll-reveal--left"
              style={{ '--rv': '0.06s' }}
            >
              <figcaption>{t.homeCardGroup}</figcaption>
            </figure>
            <figure
              className="ph ph--wide ph--shift-up scroll-reveal scroll-reveal--soft"
              style={{ '--rv': '0.16s' }}
            >
              <figcaption>{t.homeCardLab}</figcaption>
            </figure>
            <figure
              className="ph ph--sq ph--tilt-r scroll-reveal scroll-reveal--right"
              style={{ '--rv': '0.26s' }}
            >
              <figcaption>{t.homeCardMeet}</figcaption>
            </figure>
          </div>
          <div className="intro-ambient" aria-hidden>
            <span className="ambient-dot ambient-dot--1" />
            <span className="ambient-dot ambient-dot--2" />
            <span className="ambient-dot ambient-dot--3" />
          </div>
          <div className="dynamic-strip">
            <h3 className="strip-title">{t.homeDynamicTitle}</h3>
            <div className="dynamic-cards">
              <article className="dyn-card scroll-reveal scroll-reveal--soft" style={{ '--rv': '0.12s' }}>
                <span className="dyn-glow" />
                <h4>{t.homeDynamic1}</h4>
                <p className="dyn-meta">Weekly · Slides · Notes</p>
              </article>
              <article className="dyn-card scroll-reveal scroll-reveal--soft" style={{ '--rv': '0.2s' }}>
                <span className="dyn-glow" />
                <h4>{t.homeDynamic2}</h4>
                <p className="dyn-meta">Onboarding · Culture</p>
              </article>
              <article className="dyn-card scroll-reveal scroll-reveal--soft" style={{ '--rv': '0.28s' }}>
                <span className="dyn-glow" />
                <h4>{t.homeDynamic3}</h4>
                <p className="dyn-meta">GitHub · Datasets</p>
              </article>
            </div>
          </div>
        </section>

        {/* 2 导师 */}
        <section id="faculty" className="section section--split" data-reveal>
          <div className="section-head section-head--inline">
            <h2 className="section-title">{t.facultyTitle}</h2>
            <p className="section-lead">{t.facultyLead}</p>
          </div>
          <div className="faculty-grid">
            <article className="faculty-card faculty-card--hero scroll-reveal scroll-reveal--left" style={{ '--rv': '0.08s' }}>
              <div className="faculty-ph" />
              <div className="faculty-body">
                <h3>{t.facultyPi}</h3>
                <p>
                  {lang === 'zh'
                    ? '研究方向、组会主持与课题规划。此处可替换为个人简介与主页链接。'
                    : 'Research vision, seminars, and program leadership—replace with bio & links.'}
                </p>
              </div>
            </article>
            <article className="faculty-card scroll-reveal scroll-reveal--right" style={{ '--rv': '0.18s' }}>
              <div className="faculty-ph faculty-ph--sm" />
              <div className="faculty-body">
                <h3>{t.facultyCo}</h3>
                <p>
                  {lang === 'zh'
                    ? '联合指导与交叉课题对接。'
                    : 'Co-advising and cross-topic collaboration.'}
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* 3 成员 */}
        <section id="members" className="section section--members" data-reveal>
          <div className="section-head">
            <h2 className="section-title">{t.membersTitle}</h2>
            <p className="section-lead">{t.membersLead}</p>
          </div>
          <div className="member-band scroll-reveal scroll-reveal--soft" style={{ '--rv': '0.06s' }}>
            <h3 className="member-tier">{t.memberPhd}</h3>
            <div className="avatar-row">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="avatar ph-avatar" style={{ '--rv': `${0.04 + i * 0.05}s` }} />
              ))}
            </div>
          </div>
          <div className="member-band scroll-reveal scroll-reveal--soft" style={{ '--rv': '0.12s' }}>
            <h3 className="member-tier">{t.memberMaster}</h3>
            <div className="avatar-row avatar-row--stagger">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="avatar ph-avatar" style={{ '--rv': `${0.08 + i * 0.05}s` }} />
              ))}
            </div>
          </div>
          <div className="member-duo scroll-reveal scroll-reveal--soft" style={{ '--rv': '0.18s' }}>
            <div>
              <h3 className="member-tier">{t.memberUnder}</h3>
              <div className="pill-row">
                <span className="pill">UR 01</span>
                <span className="pill">UR 02</span>
                <span className="pill">UR 03</span>
              </div>
            </div>
            <div>
              <h3 className="member-tier">{t.memberAlumni}</h3>
              <div className="pill-row">
                <span className="pill pill--soft">Alum A</span>
                <span className="pill pill--soft">Alum B</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4 论文 */}
        <section id="publications" className="section section--pubs" data-reveal>
          <div className="section-head section-head--sticky">
            <h2 className="section-title">{t.pubsTitle}</h2>
            <p className="section-lead">{t.pubsLead}</p>
          </div>
          <div className="pub-layout">
            <ul className="pub-list">
              {[2026, 2025, 2025].map((y, i) => (
                <li key={i} className="pub-item scroll-reveal" style={{ '--rv': `${0.06 + i * 0.1}s` }}>
                  <span className="pub-year">{y}</span>
                  <div>
                    <p className="pub-title">
                      {lang === 'zh'
                        ? '示例论文标题：多模态情感理解与人机协同框架'
                        : 'Sample title: multimodal affect understanding with human–AI teamwork'}
                    </p>
                    <span className="pub-tag">{t.pubTag}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="pub-art">
              <div className="pub-ph pub-ph--a" />
              <div className="pub-ph pub-ph--b" />
            </div>
          </div>
        </section>

        {/* 5 动态新闻 — 相册式慢速无限循环 */}
        <section id="news" className="section section--news" data-reveal>
          <div className="section-head">
            <h2 className="section-title">{t.newsTitle}</h2>
            <p className="section-lead">{t.newsLead}</p>
          </div>
          <p className="news-marquee-hint">
            {lang === 'zh' ? '自动慢速循环 · 鼠标悬停暂停' : 'Slow auto-loop · pause on hover'}
          </p>
          <div className="news-marquee" role="region" aria-label={t.newsTitle}>
            <div className="news-marquee-viewport">
              <div className="news-marquee-track">
                {newsSlides.map((slide, i) => (
                  <article key={`n1-${i}`} className={`news-slide news-slide--${slide.tone}`}>
                    <div className="news-slide-frame">
                      <div className="news-slide-ph" />
                      <div className="news-slide-body">
                        <time dateTime={slide.date}>{slide.date}</time>
                        <h3>{slide.title}</h3>
                        <p>{slide.body}</p>
                      </div>
                    </div>
                  </article>
                ))}
                {newsSlides.map((slide, i) => (
                  <article key={`n2-${i}`} className={`news-slide news-slide--${slide.tone}`} aria-hidden="true">
                    <div className="news-slide-frame">
                      <div className="news-slide-ph" />
                      <div className="news-slide-body">
                        <time dateTime={slide.date}>{slide.date}</time>
                        <h3>{slide.title}</h3>
                        <p>{slide.body}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6 研究方向 */}
        <section id="research" className="section section--research" data-reveal>
          <div className="section-head">
            <h2 className="section-title">{t.researchTitle}</h2>
            <p className="section-lead">{t.researchLead}</p>
          </div>
          <div className="research-bento">
            <div className="bento bento--span2 scroll-reveal scroll-reveal--left" style={{ '--rv': '0.06s' }}>
              <h3>{t.research1}</h3>
              <p>
                {lang === 'zh'
                  ? '生理与行为信号、语言与视觉线索的融合建模。'
                  : 'Fusing language, vision, and behavioral signals for wellbeing.'}
              </p>
            </div>
            <div className="bento-ph bento-ph--r scroll-reveal scroll-reveal--soft" style={{ '--rv': '0.12s' }} />
            <div className="bento-ph bento-ph--l scroll-reveal scroll-reveal--soft" style={{ '--rv': '0.18s' }} />
            <div className="bento scroll-reveal scroll-reveal--soft" style={{ '--rv': '0.14s' }}>
              <h3>{t.research2}</h3>
              <p>
                {lang === 'zh'
                  ? '交互式学习与人在回路的智能系统。'
                  : 'Interactive learning with human-in-the-loop intelligence.'}
              </p>
            </div>
            <div className="bento bento--accent scroll-reveal scroll-reveal--right" style={{ '--rv': '0.2s' }}>
              <h3>{t.research3}</h3>
              <p>
                {lang === 'zh'
                  ? '可验证的决策边界与透明可视化。'
                  : 'Verifiable boundaries and transparent visual analytics.'}
              </p>
            </div>
          </div>
        </section>

        {/* 7 联系 */}
        <section id="contact" className="section section--contact" data-reveal>
          <div className="contact-grid">
            <div className="scroll-reveal scroll-reveal--soft" style={{ '--rv': '0.06s' }}>
              <div className="section-head section-head--left">
                <h2 className="section-title">{t.contactTitle}</h2>
                <p className="section-lead">{t.contactLead}</p>
              </div>
              <dl className="contact-list">
                <div>
                  <dt>{t.contactAddrLabel}</dt>
                  <dd>{t.contactAddr}</dd>
                </div>
                <div>
                  <dt>{t.contactEmailLabel}</dt>
                  <dd>
                    <a href={`mailto:${t.contactEmail}`}>{t.contactEmail}</a>
                  </dd>
                </div>
                <div>
                  <dt>{t.contactWechatLabel}</dt>
                  <dd>{t.contactWechat}</dd>
                </div>
              </dl>
            </div>
            <div className="contact-map ph-map scroll-reveal scroll-reveal--soft" style={{ '--rv': '0.14s' }} aria-label="Map placeholder" />
          </div>
        </section>

        {/* 8 荣誉 */}
        <section id="honors" className="section section--honors" data-reveal>
          <div className="section-head">
            <h2 className="section-title">{t.honorsTitle}</h2>
            <p className="section-lead">{t.honorsLead}</p>
          </div>
          <div className="honor-show">
            <ul className="honor-list">
              <li className="scroll-reveal scroll-reveal--soft" style={{ '--rv': '0.06s' }}>
                {t.honor1}
              </li>
              <li className="scroll-reveal scroll-reveal--soft" style={{ '--rv': '0.12s' }}>
                {t.honor2}
              </li>
              <li className="scroll-reveal scroll-reveal--soft" style={{ '--rv': '0.18s' }}>
                {t.honor3}
              </li>
            </ul>
            <div className="honor-art scroll-reveal scroll-reveal--soft" style={{ '--rv': '0.1s' }}>
              <div className="honor-badge" />
              <div className="honor-ribbon" />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-core">
          <p className="footer-brand">{t.footerCopy}</p>
          <p className="footer-year">© {new Date().getFullYear()}</p>
        </div>
        <div className="footer-share" aria-label={t.shareLabel}>
          <span className="share-label">{t.shareLabel}</span>
          <span className="share-hint">{t.shareHint}</span>
          <div className="share-links">
            <a
              href="https://www.xiaohongshu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn share-btn--xhs"
              title="小红书"
            >
              小红书
            </a>
            <a
              href="https://www.douyin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn share-btn--dy"
              title="抖音"
            >
              抖音
            </a>
            <button type="button" className="share-btn share-btn--link" onClick={copyPageUrl}>
              {lang === 'zh' ? '复制链接' : 'Copy link'}
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

function useRevealOnScroll() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    )
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])
}

function copyPageUrl() {
  const url = typeof window !== 'undefined' ? window.location.href : ''
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(url).catch(() => {})
  }
}

export default App
