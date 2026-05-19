import { styled } from "../styles/stitches.config"
import { portfolio } from "../data/portfolio"
import AnimatedSection from "../components/AnimatedSection"

const Title = styled("h2", { fontSize:"$3xl", textAlign:"center", marginBottom:"$8" })
const Grid = styled("div", { display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"$6", "@media(max-width:600px)":{ gridTemplateColumns:"1fr" } })
const Card = styled("div", { background:"$bgCard", borderRadius:"$lg", border:"1px solid $border", padding:"$6", transition:"all $smooth", "&:hover":{ borderColor:"$primary", transform:"translateY(-2px)" } })
const Degree = styled("h3", { fontSize:"$lg", marginBottom:"$1" })
const Inst = styled("p", { fontSize:"$sm", color:"$primaryLight", marginBottom:"$1" })
const Period = styled("p", { fontSize:"$xs", color:"$textDim", marginBottom:"$3" })
const Desc = styled("p", { fontSize:"$sm", color:"$textMuted", lineHeight:1.6, marginBottom:"$3" })
const HL = styled("li", { fontSize:"$sm", color:"$textMuted", "&::before":{ content:"✓ ", color:"$success" } })

export default function Education() {
  return (
    <AnimatedSection id="education" className="container" style={{ padding:"$16 0" }}>
      <Title>Education</Title>
      <Grid>
        {portfolio.education.map((e,i) => (
          <Card key={i}>
            <Degree>{e.degree}</Degree>
            <Inst>{e.institution}</Inst>
            <Period>{e.period}</Period>
            <Desc>{e.description}</Desc>
            <ul>{e.highlights.map((h,j) => <HL key={j}>{h}</HL>)}</ul>
          </Card>
        ))}
      </Grid>
    </AnimatedSection>
  )
}