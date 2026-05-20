import { useState } from "react"
import { portfolio } from "../data/portfolio"
import AnimatedSection from "../components/AnimatedSection"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  const allTech = ["All", ...new Set(portfolio.projects.flatMap(p => p.tech))]
  const [filter, setFilter] = useState("All")
  const filtered = filter === "All" ? portfolio.projects : portfolio.projects.filter(p => p.tech.includes(filter))

  return (
    <AnimatedSection id="projects" className="container">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Things I've built and contributed to</p>
      <div className="projects-filters">
        {allTech.map(t => <button key={t} className={`projects-filter ${filter===t?"active":""}`} onClick={()=>setFilter(t)}>{t}</button>)}
      </div>
      <div className="projects-grid">
        {filtered.map((p,i) => <ProjectCard key={i} {...p} />)}
      </div>
    </AnimatedSection>
  )
}
