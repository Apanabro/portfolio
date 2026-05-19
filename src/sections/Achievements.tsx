import { motion } from "framer-motion"
import { styled } from "../styles/stitches.config"
import { portfolio } from "../data/portfolio"
import AnimatedSection from "../components/AnimatedSection"

const Title = styled("h2", { fontSize:"$3xl", textAlign:"center", marginBottom:"$8" })
const Grid = styled("div", { display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"$6", "@media(max-width:768px)":{ gridTemplateColumns:"repeat(2,1fr)" }, "@media(max-width:400px)":{ gridTemplateColumns:"1fr" } })
const Card = styled(motion.div, { background:"$bgCard", borderRadius:"$lg", border:"1px solid $border", padding:"$6", textAlign:"center", transition:"all $smooth", "&:hover":{ borderColor:"$primary" } })
const Icon = styled("div", { fontSize:"$4xl", marginBottom:"$3" })
const AchTitle = styled("h3", { fontSize:"$base", fontWeight:"$semibold", marginBottom:"$1" })
const AchDesc = styled("p", { fontSize:"$xs", color:"$textMuted" })

export default function Achievements() {
  return (
    <AnimatedSection id="achievements" className="container" >
      <Title>Achievements</Title>
      <Grid>
        {portfolio.achievements.map((a,i) => (
          <Card key={i} initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.1 }} whileHover={{ y:-4 }}>
            <Icon>{a.icon}</Icon>
            <AchTitle>{a.title}</AchTitle>
            <AchDesc>{a.description}</AchDesc>
          </Card>
        ))}
      </Grid>
    </AnimatedSection>
  )
}