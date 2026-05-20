import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { portfolio } from "../data/portfolio"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full-Stack Developer"

  useEffect(() => {
    let i = 0; const id = setInterval(() => { setText(fullText.slice(0,i+1)); i++; if (i>=fullText.length) clearInterval(id) }, 80)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero-section" id="hero">
      <div className="hero-orb" /><div className="hero-orb-2" />
      <div className="hero-content">
        <motion.p className="hero-greeting" initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }}>
          Hello, I'm
        </motion.p>
        <motion.h1 className="hero-name" initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.4 }}>
          <span className="hero-highlight">{portfolio.name}</span>
        </motion.h1>
        <motion.p className="hero-tagline" initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.6 }}>
          <span className="hero-typewriter">{text}</span> & Computer Engineering Student
        </motion.p>
        <motion.div className="hero-cta-row" initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.8 }}>
          <a href="#projects" className="hero-cta hero-cta-primary">View My Work</a>
          <a href={portfolio.resumeUrl} className="hero-cta hero-cta-outline">Download Resume</a>
        </motion.div>
      </div>
    </section>
  )
}
