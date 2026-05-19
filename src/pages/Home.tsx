import { styled } from "../styles/stitches.config"
import Hero from "../sections/Hero"
import About from "../sections/About"
import Skills from "../sections/Skills"
import Experience from "../sections/Experience"
import Projects from "../sections/Projects"
import Education from "../sections/Education"
import Achievements from "../sections/Achievements"
import GitHubGraph from "../sections/GitHubGraph"

const Divider = styled("div", { height:"1px", background:"linear-gradient(90deg,transparent,$borderLight,transparent)", margin:"0 auto", maxWidth:"600px" })

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Education />
      <Divider />
      <Achievements />
      <Divider />
      <GitHubGraph />
    </>
  )
}