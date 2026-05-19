import { motion } from "framer-motion"
import { styled } from "../styles/stitches.config"

const Item = styled(motion.div, { position:"relative", paddingLeft:"$8", paddingBottom:"$8", borderLeft:"2px solid $borderLight", "&:last-child": { borderLeft:"2px solid transparent" } })
const Dot = styled("div", { position:"absolute", left:"-5px", top:"4px", width:"8px", height:"8px", borderRadius:"$full", background:"$primary", boxShadow:"$glow" })
const Role = styled("h3", { fontSize:"$lg", fontWeight:"$semibold" })
const Company = styled("p", { fontSize:"$sm", color:"$primaryLight", marginBottom:"$1" })
const Period = styled("span", { fontSize:"$xs", color:"$textDim" })
const Desc = styled("p", { fontSize:"$sm", color:"$textMuted", marginTop:"$2", lineHeight:1.6 })
const Highlight = styled("li", { fontSize:"$sm", color:"$textMuted", marginTop:"$1", "&::before": { content:"▸ ", color:"$primary" } })

interface Props { role: string; company: string; period: string; description: string; highlights: string[] }

export default function TimelineItem({ role, company, period, description, highlights }: Props) {
  return (
    <Item initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.4 }}>
      <Dot />
      <Role>{role}</Role>
      <Company>{company} · <Period>{period}</Period></Company>
      <Desc>{description}</Desc>
      {highlights.length > 0 && <ul style={{ marginTop:"$2" }}>{highlights.map((h,i) => <Highlight key={i}>{h}</Highlight>)}</ul>}
    </Item>
  )
}