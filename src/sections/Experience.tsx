import { portfolio } from "../data/portfolio"
import AnimatedSection from "../components/AnimatedSection"
import TimelineItem from "../components/TimelineItem"

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="container">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">My professional journey so far</p>
      <div className="experience-timeline">
        {portfolio.experience.map((e,i) => (
          <TimelineItem key={i} {...e} />
        ))}
      </div>
    </AnimatedSection>
  )
}
