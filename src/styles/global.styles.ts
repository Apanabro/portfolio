import { globalCss, getCssText as getStitchesCssText } from "./stitches.config"

export const globalStyles = globalCss({
  "*": { margin:0, padding:0, boxSizing:"border-box" },
  html: { scrollBehavior:"smooth" },
  body: { fontFamily:"$body", backgroundColor:"$bg", color:"$text", lineHeight:1.6, overflowX:"hidden" },
  "h1,h2,h3,h4,h5,h6": { fontFamily:"$heading", fontWeight:"$bold", lineHeight:1.2 },
  a: { color:"inherit", textDecoration:"none" },
  button: { border:"none", outline:"none", cursor:"pointer", fontFamily:"$body" },
  img: { maxWidth:"100%", display:"block" },
  "ul,ol": { listStyle:"none" },
  "input,textarea": { fontFamily:"$body", outline:"none", border:"none" },
  "::selection": { backgroundColor:"$primary", color:"white" },
  ".container": { maxWidth:"1200px", margin:"0 auto", padding:"0 $6" },
})

export const getCssText = getStitchesCssText
