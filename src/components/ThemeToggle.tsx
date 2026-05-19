import { styled } from "../styles/stitches.config"
import { useTheme } from "../hooks/useTheme"

const Toggle = styled("button", {
  width:"36px", height:"36px", borderRadius:"$full", display:"flex", alignItems:"center", justifyContent:"center",
  background:"$bgHover", color:"$text", fontSize:"$lg", cursor:"pointer", border:"1px solid $border",
  transition:"all $default", "&:hover":{ borderColor:"$primary" }
})

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return <Toggle onClick={toggle} title="Toggle theme">{theme === "dark" ? "☀️" : "🌙"}</Toggle>
}