import Hero from "../sections/Hero"
import About from "../sections/About"
import Skills from "../sections/Skills"
import Experience from "../sections/Experience"
import Projects from "../sections/Projects"
import Education from "../sections/Education"
import Achievements from "../sections/Achievements"
import GitHubGraph from "../sections/GitHubGraph"

export default function Home() {
  return (
    <>
      <Hero />
      <div style={{ height:"1px", background:"linear-gradient(90deg,transparent,var(--border-light),transparent)", margin:"0 auto", maxWidth:"600px" }} />
      <About />
      <div style={{ height:"1px", background:"linear-gradient(90deg,transparent,var(--border-light),transparent)", margin:"0 auto", maxWidth:"600px" }} />
      <Skills />
      <div style={{ height:"1px", background:"linear-gradient(90deg,transparent,var(--border-light),transparent)", margin:"0 auto", maxWidth:"600px" }} />
      <Experience />
      <div style={{ height:"1px", background:"linear-gradient(90deg,transparent,var(--border-light),transparent)", margin:"0 auto", maxWidth:"600px" }} />
      <Projects />
      <div style={{ height:"1px", background:"linear-gradient(90deg,transparent,var(--border-light),transparent)", margin:"0 auto", maxWidth:"600px" }} />
      <Education />
      <div style={{ height:"1px", background:"linear-gradient(90deg,transparent,var(--border-light),transparent)", margin:"0 auto", maxWidth:"600px" }} />
      <Achievements />
      <div style={{ height:"1px", background:"linear-gradient(90deg,transparent,var(--border-light),transparent)", margin:"0 auto", maxWidth:"600px" }} />
      <GitHubGraph />
    </>
  )
}
