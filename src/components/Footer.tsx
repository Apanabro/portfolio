import { portfolio } from "../data/portfolio"

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top:0, behavior:"smooth" })
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-social">
            <a href={portfolio.social.github} target="_blank" rel="noreferrer" className="footer-icon-link">GitHub</a>
            <a href={portfolio.social.linkedin} target="_blank" rel="noreferrer" className="footer-icon-link">LinkedIn</a>
            <a href={portfolio.social.twitter} target="_blank" rel="noreferrer" className="footer-icon-link">Twitter</a>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} {portfolio.name}. Built with React</p>
        </div>
      </footer>
      <button className="footer-top-btn" onClick={scrollTop}>↑</button>
    </>
  )
}
