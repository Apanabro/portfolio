import { motion } from "framer-motion"
import { portfolio } from "../data/portfolio"
import AnimatedSection from "../components/AnimatedSection"

export default function About() {
  return (
    <AnimatedSection id="about" className="container">
      <div className="about-grid">
        <motion.div className="about-avatar" initial={{ scale:0 }} whileInView={{ scale:1 }} viewport={{ once:true }} transition={{ type:"spring", stiffness:200 }}>
          <img src="/avatar.png" alt="Jitendra Yadav" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
        </motion.div>
        <div className="about-bio">
          <h2 className="about-name">About Me</h2>
          <p className="about-text">{portfolio.description}</p>
          <div className="about-stats">
            {portfolio.stats.map((s,i) => (
              <motion.div key={s.label} className="about-stat-item" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}>
                <div className="about-stat-value">{s.value}</div>
                <div className="about-stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
