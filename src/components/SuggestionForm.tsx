
import {useState} from "react"

export default function SuggestionForm(){
const[sent,setSent]=useState(false)

function submit(e:any){
e.preventDefault()
setSent(true)
}

return sent ? <p>Gracias por tu sugerencia.</p> : (
<form onSubmit={submit}>
<input placeholder="Nombre"/>
<textarea placeholder="Sugerencia"/>
<button>Enviar</button>
</form>
)
}
