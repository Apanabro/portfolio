import AnimatedSection from "../components/AnimatedSection"
import ContactForm from "../components/ContactForm"

export default function Contact() {
  return (
    <AnimatedSection className="container" style={{ minHeight:"100vh", paddingBottom:"var(--space-16)" }}>
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-subtitle">Have a project in mind? Let's build something together</p>
      <div className="contact-info">
        <p>📧 jy306648@gmail.com</p>
        <p>📍 India</p>
      </div>
      <ContactForm />
    </AnimatedSection>
  )
}
