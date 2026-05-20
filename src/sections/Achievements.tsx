import { motion } from "framer-motion"
import { portfolio } from "../data/portfolio"
import AnimatedSection from "../components/AnimatedSection"

export default function Achievements() {
  return (
    <AnimatedSection id="achievements" className="container">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-grid">
        {portfolio.achievements.map((a,i) => (
          <motion.div key={i} className="achievement-card" initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.1 }} whileHover={{ y:-4 }}>
            <div className="achievement-icon">{a.icon}</div>
            <h3 className="achievement-title">{a.title}</h3>
            <p className="achievement-desc">{a.description}</p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  )
}
