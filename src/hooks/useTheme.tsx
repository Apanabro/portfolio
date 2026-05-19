import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { lightTheme } from "../styles/stitches.config"

type Theme = "dark" | "light"
interface ThemeCtx { theme: Theme; toggle: () => void }
const ThemeContext = createContext<ThemeCtx>({ theme: "dark", toggle: () => {} })
export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const toggle = () => setTheme(t => (t === "dark" ? "light" : "dark"))

  useEffect(() => {
    const root = document.documentElement
    if (theme === "light") { root.classList.add(lightTheme.className) }
    else { root.classList.remove(lightTheme.className) }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}