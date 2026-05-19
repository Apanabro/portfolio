import { createStitches } from "@stitches/react"

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme } = createStitches({
  theme: {
    colors: {
      bg: "#0a0a0f", bgCard: "#12121a", bgHover: "#1a1a2e",
      text: "#e2e2e8", textMuted: "#8888a0", textDim: "#555570",
      primary: "#00d9ff", primaryLight: "#33e3ff", primaryDark: "#00b3d4",
      accent: "#00d9ff", accentLight: "#33e3ff",
      border: "#1e1e30", borderLight: "#2a2a40",
      success: "#10b981", warning: "#f59e0b", error: "#ef4444",
      glass: "rgba(10,10,15,0.8)", glassBorder: "rgba(0,217,255,0.15)",
    },
    space: { 1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",7:"28px",8:"32px",9:"40px",10:"48px",12:"64px",16:"96px" },
    fontSizes: { xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.5rem","5xl":"3.5rem","6xl":"4.5rem" },
    fonts: { heading: "'Poppins',sans-serif", body: "'Inter',sans-serif" },
    fontWeights: { normal:400,medium:500,semibold:600,bold:700,extrabold:800 },
    radii: { sm:"6px",md:"10px",lg:"16px",xl:"24px",full:"9999px" },
    shadows: { sm:"0 1px 3px rgba(0,0,0,0.3)",md:"0 4px 12px rgba(0,0,0,0.4)",lg:"0 8px 30px rgba(0,0,0,0.5)",glow:"0 0 20px rgba(0,217,255,0.15)" },
    transitions: { default:"200ms ease",smooth:"300ms cubic-bezier(0.4,0,0.2,1)" },
  },
})

export const lightTheme = createTheme({
  colors: {
    bg: "#f8f8fc", bgCard: "#ffffff", bgHover: "#f0f0f5",
    text: "#1a1a2e", textMuted: "#555570", textDim: "#8888a0",
    border: "#e2e2e8", borderLight: "#d0d0da",
    glass: "rgba(248,248,252,0.85)", glassBorder: "rgba(0,217,255,0.1)",
  },
})