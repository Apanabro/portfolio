import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./hooks/useTheme"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </ThemeProvider>
  )
}