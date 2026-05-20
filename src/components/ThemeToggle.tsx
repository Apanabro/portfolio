import { useTheme } from "../hooks/useTheme"

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button onClick={toggle} title="Toggle theme" className="theme-toggle">
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  )
}
