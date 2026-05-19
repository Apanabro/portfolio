import { motion } from "framer-motion"
import { ReactNode } from "react"

interface Props { children: ReactNode; id?: string; className?: string }
const variants = { hidden: { opacity:0, y:40 }, visible: { opacity:1, y:0 } }

export default function AnimatedSection({ children, id, className }: Props) {
  return (
    <motion.section
      id={id} className={className}
      initial="hidden" whileInView="visible" viewport={{ once:true, margin:"-60px" }}
      variants={variants} transition={{ duration:0.5, ease:"easeOut" }}
    >
      {children}
    </motion.section>
  )
}