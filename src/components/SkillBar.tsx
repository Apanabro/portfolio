import { motion } from "framer-motion"
import { styled } from "../styles/stitches.config"

const Wrap = styled("div", { marginBottom:"$4" })
const LabelRow = styled("div", { display:"flex", justifyContent:"space-between", marginBottom:"$2" })
const Name = styled("span", { fontSize:"$sm", fontWeight:"$medium" })
const Level = styled("span", { fontSize:"$xs", color:"$textMuted" })
const Track = styled("div", { height:"8px", background:"$bgHover", borderRadius:"$full", overflow:"hidden" })
const Fill = styled(motion.div, { height:"100%", borderRadius:"$full", background:"linear-gradient(90deg,$primary,$accent)" })

interface Props { name: string; level: number }
export default function SkillBar({ name, level }: Props) {
  return (
    <Wrap>
      <LabelRow><Name>{name}</Name><Level>{level}%</Level></LabelRow>
      <Track>
        <Fill initial={{ width:0 }} whileInView={{ width:`${level}%` }} viewport={{ once:true }}
          transition={{ duration:0.8, ease:"easeOut" }} />
      </Track>
    </Wrap>
  )
}