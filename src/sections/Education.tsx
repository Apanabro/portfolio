import { portfolio } from "../data/portfolio"
import AnimatedSection from "../components/AnimatedSection"

export default function Education() {
  return (
    <AnimatedSection id="education" className="container">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {portfolio.education.map((e,i) => (
          <div key={i} className="education-card">
            <h3 className="education-degree">{e.degree}</h3>
            <p className="education-institution">{e.institution}</p>
            <p className="education-period">{e.period}</p>
            <p className="education-desc">{e.description}</p>
            <ul>{e.highlights.map((h,j) => <li key={j} className="education-highlight">{h}</li>)}</ul>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
