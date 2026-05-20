import { useState, FormEvent } from "react"

export default function ContactForm() {
  const [status, setStatus] = useState<{ type:"success"|"error"; text:string } | null>(null)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); setSending(true)
    await new Promise(r => setTimeout(r, 1500))
    setStatus({ type:"success", text:"Message sent! I'll get back to you soon." })
    setSending(false)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" className="contact-form-input" placeholder="Your Name" required />
      <input type="email" className="contact-form-input" placeholder="Your Email" required />
      <input type="text" className="contact-form-input" placeholder="Subject" />
      <textarea className="contact-form-textarea" placeholder="Your Message" required />
      <button type="submit" className="contact-form-submit" disabled={sending}>{sending ? "Sending..." : "Send Message"}</button>
      {status && <div className={`contact-form-message ${status.type}`}>{status.text}</div>}
    </form>
  )
}
