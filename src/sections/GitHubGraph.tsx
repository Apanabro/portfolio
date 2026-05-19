import { styled } from "../styles/stitches.config"
import { portfolio } from "../data/portfolio"
import AnimatedSection from "../components/AnimatedSection"
import ContributionGraph from "../components/ContributionGraph"

const Title = styled("h2", { fontSize:"$3xl", textAlign:"center", marginBottom:"$2" })
const Subtitle = styled("p", { fontSize:"$sm", color:"$textMuted", textAlign:"center", marginBottom:"$8" })
const Wrap = styled("div", { display:"flex", justifyContent:"center" })

export default function GitHubGraph() {
  return (
    <AnimatedSection id="" className="container" >
      <Title>Contribution Activity</Title>
      <Subtitle>My daily coding activity over the past year</Subtitle>
      <Wrap><ContributionGraph username={portfolio.githubUsername} /></Wrap>
    </AnimatedSection>
  )
}