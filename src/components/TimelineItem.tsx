import { motion } from "framer-motion"

interface Props { role: string; company: string; period: string; description: string; highlights: string[] }

export default function TimelineItem({ role, company, period, description, highlights }: Props) {
  return (
    <motion.div className="timeline-item" initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.4 }}>
      <div className="timeline-dot" />
      <h3 className="timeline-role">{role}</h3>
      <p className="timeline-company">{company} · <span className="timeline-period">{period}</span></p>
      <p className="timeline-desc">{description}</p>
      {highlights.length > 0 && <ul style={{ marginTop:"var(--space-2)" }}>{highlights.map((h,i) => <li key={i} className="timeline-highlight">{h}</li>)}</ul>}
    </motion.div>
  )
}
