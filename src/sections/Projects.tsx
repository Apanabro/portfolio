import { useState } from "react"
import { styled } from "../styles/stitches.config"
import { portfolio } from "../data/portfolio"
import AnimatedSection from "../components/AnimatedSection"
import ProjectCard from "../components/ProjectCard"

const Title = styled("h2", { fontSize:"$3xl", textAlign:"center", marginBottom:"$2" })
const Subtitle = styled("p", { fontSize:"$sm", color:"$textMuted", textAlign:"center", marginBottom:"$8" })
const Filters = styled("div", { display:"flex", justifyContent:"center", gap:"$3", marginBottom:"$8", flexWrap:"wrap" })
const Filter = styled("button", { padding:"$2 $5", borderRadius:"$full", fontSize:"$sm", background:"$bgCard", color:"$textMuted", border:"1px solid $border", cursor:"pointer", transition:"all $default", "&:hover":{ borderColor:"$primary" }, variants:{ active:{ true:{ background:"$primary", color:"white", borderColor:"$primary" } } } })
const Grid = styled("div", { display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"$6", "@media(max-width:900px)":{ gridTemplateColumns:"repeat(2,1fr)" }, "@media(max-width:550px)":{ gridTemplateColumns:"1fr" } })

export default function Projects() {
  const allTech = ["All", ...new Set(portfolio.projects.flatMap(p => p.tech))]
  const [filter, setFilter] = useState("All")
  const filtered = filter === "All" ? portfolio.projects : portfolio.projects.filter(p => p.tech.includes(filter))

  return (
    <AnimatedSection id="projects" className="container" >
      <Title>Projects</Title>
      <Subtitle>Things I've built and contributed to</Subtitle>
      <Filters>
        {allTech.map(t => <Filter key={t} active={filter===t} onClick={()=>setFilter(t)}>{t}</Filter>)}
      </Filters>
      <Grid>
        {filtered.map((p,i) => <ProjectCard key={i} {...p} />)}
      </Grid>
    </AnimatedSection>
  )
}