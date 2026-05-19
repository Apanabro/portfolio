import { motion } from "framer-motion"
import { styled } from "../styles/stitches.config"

const Card = styled(motion.div, {
  background:"$bgCard", borderRadius:"$lg", border:"1px solid $border", overflow:"hidden",
  transition:"all $smooth", cursor:"pointer",
  "&:hover": { borderColor:"$primary", transform:"translateY(-4px)", boxShadow:"$glow" },
})
const Content = styled("div", { padding:"$5" })
const Title = styled("h3", { fontSize:"$xl", marginBottom:"$2", fontFamily:"$heading" })
const Desc = styled("p", { fontSize:"$sm", color:"$textMuted", marginBottom:"$4", lineHeight:1.6 })
const Tags = styled("div", { display:"flex", flexWrap:"wrap", gap:"$2", marginBottom:"$4" })
const Tag = styled("span", { fontSize:"$xs", background:"$bgHover", color:"$primaryLight", padding:"2px 10px", borderRadius:"$full" })
const Links = styled("div", { display:"flex", gap:"$3" })
const LinkBtn = styled("a", {
  fontSize:"$sm", color:"$primary", fontWeight:"$medium", transition:"color $default",
  "&:hover":{ color:"$primaryLight" }
})

interface Props { title: string; description: string; tech: string[]; github: string; live: string }

export default function ProjectCard({ title, description, tech, github, live }: Props) {
  return (
    <Card whileHover={{ y:-6 }} initial={{ opacity:0, scale:0.9 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:0.3 }}>
      <Content>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
        <Tags>{tech.map(t => <Tag key={t}>{t}</Tag>)}</Tags>
        <Links>
          {github && <LinkBtn href={github} target="_blank" rel="noreferrer">GitHub →</LinkBtn>}
          {live && live !== "#" && <LinkBtn href={live} target="_blank" rel="noreferrer">Live Demo →</LinkBtn>}
        </Links>
      </Content>
    </Card>
  )
}