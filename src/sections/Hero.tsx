import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { styled, keyframes } from "../styles/stitches.config"
import { portfolio } from "../data/portfolio"

const float = keyframes({ "0%,100%":{ transform:"translateY(0)" },"50%":{ transform:"translateY(-20px)" } })
const pulse = keyframes({ "0%,100%":{ opacity:0.4 },"50%":{ opacity:0.8 } })

const Section = styled("section", { minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden", padding:"$16 $6" })
const BgOrb = styled("div", { position:"absolute", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.15),transparent 70%)", top:"-100px", right:"-100px", animation:`${float} 6s ease-in-out infinite` })
const BgOrb2 = styled("div", { position:"absolute", width:"300px", height:"300px", borderRadius:"50%", background:"radial-gradient(circle,rgba(6,182,212,0.1),transparent 70%)", bottom:"-50px", left:"-100px", animation:`${float} 8s ease-in-out infinite`, animationDelay:"-3s" })
const Content = styled("div", { textAlign:"center", position:"relative", zIndex:1, maxWidth:"800px" })
const Greeting = styled(motion.p, { fontSize:"$lg", color:"$primaryLight", marginBottom:"$2" })
const Name = styled(motion.h1, { fontSize:"$5xl", marginBottom:"$4", "@media(max-width:768px)":{ fontSize:"$4xl" } })
const Highlight = styled("span", { background:"linear-gradient(135deg,$primary,$accent)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" })
const Tagline = styled(motion.p, { fontSize:"$lg", color:"$textMuted", marginBottom:"$8", maxWidth:"600px", margin:"0 auto $8" })
const CtaRow = styled(motion.div, { display:"flex", gap:"$4", justifyContent:"center", flexWrap:"wrap" })
const Cta = styled("a", { padding:"$3 $8", borderRadius:"$full", fontWeight:"$semibold", fontSize:"$sm", transition:"all $smooth", cursor:"pointer" })
const CtaPrimary = styled(Cta, { background:"$primary", color:"white", "&:hover":{ background:"$primaryDark", transform:"translateY(-2px)", boxShadow:"$glow" } })
const CtaOutline = styled(Cta, { border:"1px solid $borderLight", color:"$text", "&:hover":{ borderColor:"$primary", color:"$primary" } })
const Typewriter = styled("span", { "&::after":{ content:"|", animation:`${pulse} 1s infinite` } })

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full-Stack Developer"

  useEffect(() => {
    let i = 0; const id = setInterval(() => { setText(fullText.slice(0,i+1)); i++; if (i>=fullText.length) clearInterval(id) }, 80)
    return () => clearInterval(id)
  }, [])

  return (
    <Section id="hero">
      <BgOrb /><BgOrb2 />
      <Content>
        <Greeting initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }}>
          Hello, I'm
        </Greeting>
        <Name initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.4 }}>
          <Highlight>{portfolio.name}</Highlight>
        </Name>
        <Tagline initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.6 }}>
          <Typewriter>{text}</Typewriter> & Computer Engineering Student
        </Tagline>
        <CtaRow initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.8 }}>
          <CtaPrimary href="#projects">View My Work</CtaPrimary>
          <CtaOutline href={portfolio.resumeUrl}>Download Resume</CtaOutline>
        </CtaRow>
      </Content>
    </Section>
  )
}