import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useScrollSpy } from "../hooks/useScrollSpy"

const sections = ["hero","about","skills","experience","projects","education","achievements"]
const sectionLabels = ["Home","About","Skills","Experience","Projects","Education","Achievements"]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === "/"
  const activeId = useScrollSpy(isHome ? sections : [])

  const scrollTo = (id: string) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior:"smooth" })
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">JY</Link>
        <div className="navbar-links">
          {isHome ? sections.map((s,i) => (
            <span key={s} className={`navbar-link ${activeId===s?"active":""}`} onClick={()=>scrollTo(s)}>{sectionLabels[i]}</span>
          )) : <Link to="/" className="navbar-link">Home</Link>}
          <Link to="/blog" className={`navbar-link ${location.pathname==="/blog"?"active":""}`}>Blog</Link>
          <Link to="/contact" className={`navbar-link ${location.pathname==="/contact"?"active":""}`}>Contact</Link>
        </div>
        <button className="navbar-mobile-btn" onClick={()=>setOpen(!open)}>{open ? "✕" : "☰"}</button>
      </div>
      <div className={`navbar-mobile-menu ${open?"open":""}`}>
        {isHome ? sections.map((s,i) => (
          <span key={s} className="navbar-link" onClick={()=>scrollTo(s)}>{sectionLabels[i]}</span>
        )) : <Link to="/" className="navbar-link" onClick={()=>setOpen(false)}>Home</Link>}
        <Link to="/blog" className="navbar-link" onClick={()=>setOpen(false)}>Blog</Link>
        <Link to="/contact" className="navbar-link" onClick={()=>setOpen(false)}>Contact</Link>
      </div>
    </nav>
  )
}
