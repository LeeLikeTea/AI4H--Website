import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <div className="bg-particles" style={{ transform: `translateY(${scrollY * 0.2}px)` }}></div>

      {/* 导航栏 */}
      <nav className="navbar">
        <div className="logo">AI4H³ Lab</div>
        <div className="navItems">
          <a href="#home">首页</a>
          <a href="#professor">导师介绍</a>
          <a href="#about">课题组</a>
          <a href="#research">研究方向</a>
          <a href="#achievements">研究成果</a>
          <a href="#contact">联系我们</a>
        </div>
      </nav>

      {/* 首页大屏 */}
      <section id="home" className="hero">
        <div className="heroText" style={{ opacity: 1 - scrollY / 300 }}>
          <h1>AI4H³ Laboratory</h1>
          <h2>Artificial Intelligence for Health, Happiness, and Humanity</h2>
          <p>人工智能赋能健康、幸福与人性</p>
          <button className="btn">探索课题组</button>
        </div>
      </section>

      {/* 导师介绍 */}
      <section id="professor" className="section">
        <h2 className="sectionTitle">导师介绍</h2>
        <div className="card professor-card">
          <h3>牟伦田 | Mou Luntian</h3>
          <p className="motto">Dare To Dream. Dreams Do Come True. ——Yanni</p>
          <p className="title">博士，副教授，硕士生导师</p>
          <div className="info-list">
            <p>📚 中国科学院大学博士（导师：陈熙霖研究员、黄铁军教授）</p>
            <p>📚 北京大学博士后（合作导师：高文院士）</p>
            <p>📚 加州大学欧文分校（UCI）访问学者（合作导师：Ramesh Jain 教授）</p>
          </div>

          <div className="tags">
            <span>人工智能</span>
            <span>机器学习</span>
            <span>多媒体计算</span>
            <span>情感计算</span>
            <span>智能艺术</span>
            <span>类脑计算</span>
          </div>
        </div>
      </section>

      {/* 课题组介绍 */}
      <section id="about" className="section bgDark">
        <h2 className="sectionTitle">AI4H³ 课题组</h2>
        <div className="card">
          <p>AI4H³ = Artificial Intelligence for Health, Happiness, and Humanity</p>
          <p>本课题组致力于以人工智能为核心，面向健康、幸福与人性，开展前沿学术研究与技术创新。</p>
          <p>研究方向覆盖情感计算、智能艺术、类脑计算等前沿领域，注重理论创新与实际应用落地。</p>
        </div>
      </section>

      {/* 研究方向 */}
      <section id="research" className="section">
        <h2 className="sectionTitle">研究方向</h2>
        <div className="grid">
          <div className="card">
            <h3>🧠 情感计算</h3>
            <p>驾驶员压力、疲劳、情绪、分心检测</p>
            <p>普通人抑郁等精神健康检测</p>
            <p>个性化心理健康导航</p>
          </div>
          <div className="card">
            <h3>🎨 智能艺术</h3>
            <p>基于情感与回忆的个性化音乐推荐</p>
            <p>个性化音乐生成 MemoMusic</p>
            <p>人机协同自适应艺术表达</p>
          </div>
          <div className="card">
            <h3>🔬 类脑计算</h3>
            <p>生物数据驱动的小鼠视觉皮层模型</p>
            <p>类脑感知与认知机制研究</p>
          </div>
          <div className="card">
            <h3>🤖 人工智能基础理论</h3>
            <p>深度学习、多媒体计算、模式识别</p>
            <p>机器学习算法与应用</p>
          </div>
        </div>
      </section>

      {/* 研究成果 */}
      <section id="achievements" className="section bgDark">
        <h2 className="sectionTitle">研究成果 & 荣誉</h2>
        <div className="card">
          <li>发表领域顶刊 TAFFC、TMM、ESWA、TOMM 及国际会议论文 40+ 篇</li>
          <li>出版智能艺术领域国际首本技术专著</li>
          <li>授权专利 7 项（中国 3、美欧日韩 4）</li>
          <li>牵头制定标准 7 项（国家标准 4、国际标准 3）</li>
          <li>主持国家自然科学基金面上项目 2 项</li>
          <li>中国公路学会技术发明一等奖</li>
          <li>北京市科技进步二等奖</li>
          <li>AVS 十五周年个人突出贡献奖、IEEE 标准制定突出贡献奖</li>
          <li>北京工业大学“立德树人榜样”我最喜爱的老师</li>
        </div>
      </section>

      {/* 学术兼职 */}
      <section id="academic" className="section">
        <h2 className="sectionTitle">学术兼职</h2>
        <div className="card">
          <li>IEEE / CCF / CSIG 高级会员</li>
          <li>CAAI 艺术与人工智能专委委员</li>
          <li>北京美术家协会实验艺术与科技艺术委员会委员</li>
          <li>AVS 系统组联合组长、MPEG 中国代表团专家</li>
          <li>全国信标委多媒体分委会委员（1/33）</li>
          <li>IEEE AIART 国际研讨会 创始主席</li>
          <li>IEEE/ACM Trans. 编委 20+，TAI AE，MIR 客座编辑</li>
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="section bgDark">
        <h2 className="sectionTitle">联系方式</h2>
        <div className="card contact-card">
          <p>📩 邮箱：ltmou@pku.edu.cn</p>
          <p>💬 微信：BeiDaLaoMou（北大老牟）</p>
          <p>🏛️ 单位：AI4H³ 课题组</p>
        </div>
      </section>

      <footer>
        <p>© 2025 AI4H³ Lab. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
