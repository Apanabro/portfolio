import { motion } from "framer-motion"

interface Props { title: string; description: string; tech: string[]; github: string; live: string }

export default function ProjectCard({ title, description, tech, github, live }: Props) {
  return (
    <motion.div className="project-card" whileHover={{ y:-6 }} initial={{ opacity:0, scale:0.9 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:0.3 }}>
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-desc">{description}</p>
        <div className="project-card-tags">{tech.map(t => <span key={t} className="project-card-tag">{t}</span>)}</div>
        <div className="project-card-links">
          {github && <a href={github} target="_blank" rel="noreferrer" className="project-card-link">GitHub →</a>}
          {live && live !== "#" && <a href={live} target="_blank" rel="noreferrer" className="project-card-link">Live Demo →</a>}
        </div>
      </div>
    </motion.div>
  )
}
