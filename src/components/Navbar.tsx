import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { styled } from "../styles/stitches.config"
import { useScrollSpy } from "../hooks/useScrollSpy"

const Nav = styled("nav", {
  position:"fixed", top:0, left:0, right:0, zIndex:100,
  background:"$glass", backdropFilter:"blur(12px)", borderBottom:"1px solid $glassBorder",
  transition:"all $smooth",
})
const Container = styled("div", { maxWidth:"1200px", margin:"0 auto", padding:"0 $6", display:"flex", alignItems:"center", justifyContent:"space-between", height:"64px" })
const Logo = styled(Link, { fontFamily:"$heading", fontWeight:"$bold", fontSize:"$xl", color:"$primary", textDecoration:"none" })
const NavLinks = styled("div", { display:"flex", gap:"$6", alignItems:"center", "@media (max-width:768px)": { display:"none" } })
const NavLink = styled("a", {
  fontSize:"$sm", fontWeight:"$medium", color:"$textMuted", cursor:"pointer", transition:"color $default",
  "&:hover": { color:"$text" }, variants: { active: { true: { color:"$primary" } } }
})
const MobileBtn = styled("button", {
  display:"none", background:"transparent", color:"$text", fontSize:"$2xl", cursor:"pointer",
  "@media (max-width:768px)": { display:"flex" }
})
const MobileMenu = styled("div", {
  display:"none", position:"absolute", top:"64px", left:0, right:0, background:"$bgCard",
  borderBottom:"1px solid $border", padding:"$4 $6", flexDirection:"column", gap:"$4",
  variants: { open: { true: { display:"flex" } } }
})

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
    <Nav>
      <Container>
        <Logo to="/">JY</Logo>
        <NavLinks>
          {isHome ? sections.map((s,i) => (
            <NavLink key={s} active={activeId===s} onClick={()=>scrollTo(s)}>{sectionLabels[i]}</NavLink>
          )) : <NavLink as={Link} to="/">Home</NavLink>}
          <NavLink as={Link} to="/blog" active={location.pathname==="/blog"}>Blog</NavLink>
          <NavLink as={Link} to="/contact" active={location.pathname==="/contact"}>Contact</NavLink>
        </NavLinks>
        <MobileBtn onClick={()=>setOpen(!open)}>{open ? "✕" : "☰"}</MobileBtn>
      </Container>
      <MobileMenu open={open}>
        {isHome ? sections.map((s,i) => (
          <NavLink key={s} onClick={()=>scrollTo(s)}>{sectionLabels[i]}</NavLink>
        )) : <NavLink as={Link} to="/" onClick={()=>setOpen(false)}>Home</NavLink>}
        <NavLink as={Link} to="/blog" onClick={()=>setOpen(false)}>Blog</NavLink>
        <NavLink as={Link} to="/contact" onClick={()=>setOpen(false)}>Contact</NavLink>
      </MobileMenu>
    </Nav>
  )
}