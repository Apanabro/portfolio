import { styled } from "../styles/stitches.config"
import AnimatedSection from "../components/AnimatedSection"
import ContactForm from "../components/ContactForm"

const Title = styled("h1", { fontSize:"$4xl", textAlign:"center", marginBottom:"$2", paddingTop:"$16" })
const Subtitle = styled("p", { fontSize:"$sm", color:"$textMuted", textAlign:"center", marginBottom:"$10" })
const Info = styled("div", { textAlign:"center", marginBottom:"$8", color:"$textMuted", fontSize:"$sm", lineHeight:2 })

export default function Contact() {
  return (
    <AnimatedSection className="container" >
      <Title>Get In Touch</Title>
      <Subtitle>Have a project in mind? Let's build something together</Subtitle>
      <Info>
        <p>📧 jitendra@example.com</p>
        <p>📍 India</p>
      </Info>
      <ContactForm />
    </AnimatedSection>
  )
}