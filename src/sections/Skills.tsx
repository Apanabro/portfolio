import { useState } from "react"
import { portfolio } from "../data/portfolio"
import AnimatedSection from "../components/AnimatedSection"
import SkillBar from "../components/SkillBar"

const categories = ["All","Frontend","Backend","Database","Tools"]

export default function Skills() {
  const [active, setActive] = useState("All")
  const filtered = active === "All" ? portfolio.skills : portfolio.skills.filter(s => s.category === active)

  return (
    <AnimatedSection id="skills" className="container skills-section">
      <h2 className="section-title">Skills & Technologies</h2>
      <p className="section-subtitle">Technologies I work with on a daily basis</p>
      <div className="skills-filters">
        {categories.map(c => <button key={c} className={`skills-filter ${active===c?"active":""}`} onClick={()=>setActive(c)}>{c}</button>)}
      </div>
      <div className="skills-grid">
        {filtered.map(s => <SkillBar key={s.name} name={s.name} level={s.level} />)}
      </div>
    </AnimatedSection>
  )
}
