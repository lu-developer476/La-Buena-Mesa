import { FormEvent, useState } from "react"

export default function SuggestionForm() {
  const [sent, setSent] = useState(false)

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return <p className="form-message">💚 Gracias por tu sugerencia.</p>
  }

  return (
    <form className="site-form" onSubmit={submit}>
      <input placeholder="Nombre" />
      <textarea placeholder="Sugerencia" rows={4} />
      <button type="submit">Enviar</button>
    </form>
  )
}
