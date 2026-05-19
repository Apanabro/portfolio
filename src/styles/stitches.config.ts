import { createStitches } from "@stitches/react"

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme } = createStitches({
  theme: {
    colors: {
      bg: "#ffffff", bgCard: "#f5f5f7", bgHover: "#e8e8ed",
      text: "#1d1d1f", textMuted: "#86868b", textDim: "#6e6e73",
      primary: "#0066cc", primaryLight: "#0071e3", primaryDark: "#004080",
      accent: "#00d9ff", accentLight: "#33e3ff",
      border: "#d2d2d7", borderLight: "#f5f5f7",
      glass: "rgba(255,255,255,0.8)", glassBorder: "rgba(0,0,0,0.05)",
    },
    space: { 1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",7:"28px",8:"32px",9:"40px",10:"48px",12:"64px",16:"96px" },
    fontSizes: { xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.5rem","5xl":"3.5rem","6xl":"4.5rem" },
    fonts: { heading: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", body: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" },
    fontWeights: { normal:400,medium:500,semibold:600,bold:700,extrabold:800 },
    radii: { sm:"8px",md:"12px",lg:"16px",xl:"24px",full:"9999px" },
    shadows: { sm:"none",md:"0 4px 12px rgba(0,0,0,0.05)",lg:"0 8px 30px rgba(0,0,0,0.1)",glow:"none" },
    transitions: { default:"200ms ease",smooth:"300ms cubic-bezier(0.4,0,0.2,1)" },
  },
})