
import {useState} from "react"

export default function CateringForm(){
const[sent,setSent]=useState(false)

function submit(e:any){
e.preventDefault()
setSent(true)
}

return sent ? <p>Solicitud enviada.</p> : (
<form onSubmit={submit}>
<input placeholder="Nombre" required/>
<input type="email" placeholder="Email" required/>
<input type="number" placeholder="Personas" required/>
<textarea placeholder="Detalles"/>
<button>Enviar</button>
</form>
)
}
