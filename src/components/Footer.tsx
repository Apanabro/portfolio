import { styled } from "../styles/stitches.config"
import { portfolio } from "../data/portfolio"

const Foot = styled("footer", { background:"$bgCard", borderTop:"1px solid $border", padding:"$8 0 $4", marginTop:"$16" })
const Container = styled("div", { maxWidth:"1200px", margin:"0 auto", padding:"0 $6", textAlign:"center" })
const Social = styled("div", { display:"flex", justifyContent:"center", gap:"$4", marginBottom:"$4" })
const IconLink = styled("a", { color:"$textMuted", transition:"color $default", "&:hover":{ color:"$primary" }, fontSize:"$lg" })
const Copy = styled("p", { color:"$textDim", fontSize:"$sm" })
const TopBtn = styled("button", {
  position:"fixed", bottom:"24px", right:"24px", width:"40px", height:"40px", borderRadius:"$full",
  background:"$primary", color:"white", display:"flex", alignItems:"center", justifyContent:"center",
  fontSize:"$xl", cursor:"pointer", boxShadow:"$glow", transition:"opacity $default", border:"none",
  opacity:0.8, "&:hover":{ opacity:1 },
})

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top:0, behavior:"smooth" })
  return (
    <>
      <Foot>
        <Container>
          <Social>
            <IconLink href={portfolio.social.github} target="_blank" rel="noreferrer">GitHub</IconLink>
            <IconLink href={portfolio.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</IconLink>
            <IconLink href={portfolio.social.twitter} target="_blank" rel="noreferrer">Twitter</IconLink>
          </Social>
          <Copy>&copy; {new Date().getFullYear()} {portfolio.name}. Built with React + Stitches</Copy>
        </Container>
      </Foot>
      <TopBtn onClick={scrollTop}>↑</TopBtn>
    </>
  )
}