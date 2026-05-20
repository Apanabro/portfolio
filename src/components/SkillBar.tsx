import { motion } from "framer-motion"

interface Props { name: string; level: number }
export default function SkillBar({ name, level }: Props) {
  return (
    <div className="skill-bar">
      <div className="skill-bar-label-row"><span className="skill-bar-name">{name}</span><span className="skill-bar-level">{level}%</span></div>
      <div className="skill-bar-track">
        <motion.div className="skill-bar-fill" initial={{ width:0 }} whileInView={{ width:`${level}%` }} viewport={{ once:true }}
          transition={{ duration:0.8, ease:"easeOut" }} />
      </div>
    </div>
  )
}
