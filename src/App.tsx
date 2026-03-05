
import Menu from "./components/Menu"
import CateringForm from "./components/CateringForm"
import SuggestionForm from "./components/SuggestionForm"

export default function App(){
return(
<div>
<header>
<img src="/assets/logo.png" height="60"/>
<h1>La Buena Mesa</h1>
</header>

<Menu/>

<section>
<h2>Catering</h2>
<CateringForm/>
</section>

<section>
<h2>Sugerencias</h2>
<SuggestionForm/>
</section>

<footer>© La Buena Mesa</footer>
</div>
)
}
