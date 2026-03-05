import { FormEvent, useState } from "react"

export default function CateringForm() {
  const [sent, setSent] = useState(false)

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return <p className="form-message">✅ Solicitud enviada. Te contactaremos pronto.</p>
  }

  return (
    <form className="site-form" onSubmit={submit}>
      <input placeholder="Nombre" required />
      <input type="email" placeholder="Email" required />
      <input type="number" placeholder="Personas" min={1} required />
      <textarea placeholder="Detalles" rows={4} />
      <button type="submit">Enviar</button>
    </form>
  )
}
