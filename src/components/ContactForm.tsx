import { useState, FormEvent } from "react"
import { styled } from "../styles/stitches.config"

const Form = styled("form", { maxWidth:"500px", margin:"0 auto", display:"flex", flexDirection:"column", gap:"$4" })
const Input = styled("input", { padding:"$3 $4", background:"$bgCard", border:"1px solid $border", borderRadius:"$md", color:"$text", fontSize:"$sm", transition:"border $default", "&:focus":{ borderColor:"$primary" }, "&::placeholder":{ color:"$textDim" } })
const TextArea = styled("textarea", { padding:"$3 $4", background:"$bgCard", border:"1px solid $border", borderRadius:"$md", color:"$text", fontSize:"$sm", minHeight:"120px", resize:"vertical", transition:"border $default", "&:focus":{ borderColor:"$primary" }, "&::placeholder":{ color:"$textDim" } })
const Submit = styled("button", { padding:"$3 $6", background:"$primary", color:"white", borderRadius:"$md", fontWeight:"$semibold", fontSize:"$sm", transition:"background $default", "&:hover":{ background:"$primaryDark" }, "&:disabled":{ opacity:0.6, cursor:"not-allowed" } })
const Message = styled("div", { padding:"$3", borderRadius:"$md", fontSize:"$sm", textAlign:"center", variants:{ type:{ success:{ background:"rgba(16,185,129,0.1)", color:"$success", border:"1px solid $success" }, error:{ background:"rgba(239,68,68,0.1)", color:"$error", border:"1px solid $error" } } } })

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
    <Form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Your Name" required />
      <Input type="email" placeholder="Your Email" required />
      <Input type="text" placeholder="Subject" />
      <TextArea placeholder="Your Message" required />
      <Submit disabled={sending}>{sending ? "Sending..." : "Send Message"}</Submit>
      {status && <Message type={status.type}>{status.text}</Message>}
    </Form>
  )
}