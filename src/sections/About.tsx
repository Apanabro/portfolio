import { motion } from "framer-motion"
import { styled } from "../styles/stitches.config"
import { portfolio } from "../data/portfolio"
import AnimatedSection from "../components/AnimatedSection"

const Grid = styled("div", { display:"grid", gridTemplateColumns:"1fr 1fr", gap:"$10", alignItems:"center", "@media(max-width:768px)":{ gridTemplateColumns:"1fr" } })
const AvatarWrap = styled(motion.div, { width:"280px", height:"280px", borderRadius:"$xl", overflow:"hidden", border:"2px solid $border", margin:"0 auto", background:"$bgCard", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"$6xl", fontWeight:"$bold", color:"$primary" })
const Bio = styled("div", {})
const Name = styled("h2", { fontSize:"$3xl", marginBottom:"$2" })
const Txt = styled("p", { fontSize:"$sm", color:"$textMuted", lineHeight:1.8, marginBottom:"$6" })
const Stats = styled("div", { display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"$4", "@media(max-width:480px)":{ gridTemplateColumns:"repeat(2,1fr)" } })
const StatItem = styled(motion.div, { textAlign:"center", padding:"$4", background:"$bgCard", borderRadius:"$md", border:"1px solid $border" })
const StatVal = styled("div", { fontSize:"$2xl", fontWeight:"$bold", color:"$primary" })
const StatLabel = styled("div", { fontSize:"$xs", color:"$textDim", marginTop:"$1" })

export default function About() {
  return (
    <AnimatedSection id="about" className="container">
      <Grid>
        <AvatarWrap initial={{ scale:0 }} whileInView={{ scale:1 }} viewport={{ once:true }} transition={{ type:"spring", stiffness:200 }}>
          JY
        </AvatarWrap>
        <Bio>
          <Name>About Me</Name>
          <Txt>{portfolio.description}</Txt>
          <Stats>
            {portfolio.stats.map((s,i) => (
              <StatItem key={s.label} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}>
                <StatVal>{s.value}</StatVal>
                <StatLabel>{s.label}</StatLabel>
              </StatItem>
            ))}
          </Stats>
        </Bio>
      </Grid>
    </AnimatedSection>
  )
}