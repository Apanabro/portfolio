import { styled } from "../styles/stitches.config"
import { portfolio } from "../data/portfolio"
import AnimatedSection from "../components/AnimatedSection"
import TimelineItem from "../components/TimelineItem"

const Title = styled("h2", { fontSize:"$3xl", textAlign:"center", marginBottom:"$2" })
const Subtitle = styled("p", { fontSize:"$sm", color:"$textMuted", textAlign:"center", marginBottom:"$8" })
const Timeline = styled("div", { maxWidth:"600px", margin:"0 auto" })

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="container" style={{ padding:"$16 0" }}>
      <Title>Experience</Title>
      <Subtitle>My professional journey so far</Subtitle>
      <Timeline>
        {portfolio.experience.map((e,i) => (
          <TimelineItem key={i} {...e} />
        ))}
      </Timeline>
    </AnimatedSection>
  )
}