import { useState } from "react"
import { styled } from "../styles/stitches.config"
import { portfolio } from "../data/portfolio"
import AnimatedSection from "../components/AnimatedSection"
import SkillBar from "../components/SkillBar"

const Section = styled(AnimatedSection, { padding:"$16 0" })
const Title = styled("h2", { fontSize:"$3xl", textAlign:"center", marginBottom:"$2" })
const Subtitle = styled("p", { fontSize:"$sm", color:"$textMuted", textAlign:"center", marginBottom:"$8" })
const Filters = styled("div", { display:"flex", justifyContent:"center", gap:"$3", marginBottom:"$8", flexWrap:"wrap" })
const Filter = styled("button", { padding:"$2 $5", borderRadius:"$full", fontSize:"$sm", background:"$bgCard", color:"$textMuted", border:"1px solid $border", cursor:"pointer", transition:"all $default", "&:hover":{ borderColor:"$primary" }, variants:{ active:{ true:{ background:"$primary", color:"white", borderColor:"$primary" } } } })
const Grid = styled("div", { maxWidth:"600px", margin:"0 auto" })

const categories = ["All","Frontend","Backend","Database","Tools"]

export default function Skills() {
  const [active, setActive] = useState("All")
  const filtered = active === "All" ? portfolio.skills : portfolio.skills.filter(s => s.category === active)

  return (
    <Section id="skills" className="container" style={{ padding:"$16 0" }}>
      <Title>Skills & Technologies</Title>
      <Subtitle>Technologies I work with on a daily basis</Subtitle>
      <Filters>
        {categories.map(c => <Filter key={c} active={active===c} onClick={()=>setActive(c)}>{c}</Filter>)}
      </Filters>
      <Grid>
        {filtered.map(s => <SkillBar key={s.name} name={s.name} level={s.level} />)}
      </Grid>
    </Section>
  )
}