import { portfolio } from "../data/portfolio"
import AnimatedSection from "../components/AnimatedSection"
import ContributionGraph from "../components/ContributionGraph"

export default function GitHubGraph() {
  return (
    <AnimatedSection id="" className="container">
      <h2 className="section-title">Contribution Activity</h2>
      <p className="section-subtitle">My daily coding activity over the past year</p>
      <div className="github-graph-wrap"><ContributionGraph username={portfolio.githubUsername} /></div>
    </AnimatedSection>
  )
}
