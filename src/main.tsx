import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { globalStyles, getCssText } from "./styles/global.styles"

globalStyles()

const style = document.createElement("style")
style.id = "stitches"
style.textContent = getCssText()
document.head.appendChild(style)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode><BrowserRouter><App /></BrowserRouter></React.StrictMode>
)
