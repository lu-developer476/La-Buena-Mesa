import { useState } from "react"
import Menu from "./components/Menu"
import CateringForm from "./components/CateringForm"
import SuggestionForm from "./components/SuggestionForm"

const navItems = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Menú", href: "#menu" },
  { label: "Contacto", href: "#contacto" },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app-shell">
      <header className="main-header">
        <div className="brand-row">
          <img src="/logo.png" height="64" width="64" alt="Logo de La Buena Mesa" />
          <div>
            <h1>La Buena Mesa</h1>
            <p className="tagline">Nuestros sabores destacados, tu experiencia premium</p>
          </div>
        </div>

        <div className="menu-wrap">
          <button
            type="button"
            className="hamburger-btn"
            aria-label="Abrir menú de navegación"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
          </button>

          <nav className={`site-nav ${menuOpen ? "open" : ""}`} aria-label="Navegación principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero panel" id="inicio">
          <h2>Bienvenidos</h2>
          <p>
            En este espacio vas a encontrar platos caseros preparados con dedicación, bebidas
            cuidadosamente seleccionadas y una experiencia pensada para que cada visita se disfrute de verdad.
          </p>
          <p className="hero-slogan">Tu mesa de todos los días, con sabor inolvidable.</p>
        </section>

        <section id="quienes-somos" className="panel">
          <h2>Quiénes somos</h2>
          <p>
            La Buena Mesa nació con una idea clara y sincera: crear un lugar donde la comida vuelva a ser lo que siempre debió ser… abundante, auténtica y hecha con dedicación.
            Inspirados en las recetas tradicionales que pasan de generación en generación, empezamos este camino con la convicción de que los mejores momentos siempre ocurren alrededor de una mesa bien servida. Por eso, desde nuestros primeros días elegimos trabajar con ingredientes frescos, respetar los sabores de siempre y preparar cada plato con el mismo cuidado que tendría una cocina familiar.
            Con el tiempo, La Buena Mesa fue creciendo, pero sin perder su esencia. Nuestra filosofía sigue siendo la misma: ofrecer una atención cercana, cuidar cada detalle en la preparación de nuestros platos y mejorar constantemente para que cada visita sea una experiencia cálida, auténtica y memorable.
            Porque para nosotros, una buena comida no es sólo lo que hay en el plato, sino también el momento que se comparte alrededor de él.
          </p>
          <p>
            Con el paso del tiempo, La Buena Mesa fue consolidando su lugar en el mercado local y, sobre todo, en la mesa de quienes nos visitan. Lo que comenzó como un proyecto con pasión por la cocina se transformó en un punto de encuentro para muchas personas que nos eligen para almuerzos familiares, cenas especiales, celebraciones y también encuentros corporativos donde la buena comida marca la diferencia.
            A lo largo de este camino fuimos construyendo algo más valioso que una clientela: una comunidad de personas que vuelve porque reconoce en cada plato el mismo cuidado, sabor y dedicación de siempre. Detrás de cada servicio hay un equipo comprometido formado por cocineros, pasteleros y especialistas en hospitalidad que trabajan día a día para mantener un estándar constante de calidad, combinando la esencia de la cocina casera con una presentación moderna y cuidada.
            Hoy seguimos creciendo con la misma convicción que nos impulsó desde el primer día: que cada visita a La Buena Mesa sea más que una comida, y se convierta en un momento memorable para quienes se sientan a disfrutarla.
          </p>
        </section>

        <section id="menu" className="panel">
          <h2>Menú</h2>
          <p>
          Nuestros mejores platos y bebidas listos para que elijas lo que más te guste. Cortesía de la casa.
          </p>
          <Menu />
        </section>

        <section id="contacto" className="panel">
          <h2>Contacto</h2>
          <p>
            Queremos escucharte.
            Ponte en contacto con nosotros para consultar nuestros servicios o dejarnos tus sugerencias.
          </p>
          <div className="contact-grid">
            <article className="contact-card">
              <h3>Catering</h3>
              <p>Contanos tu idea y te armamos esa propuesta soñada y a tu medida</p>
              <CateringForm />
            </article>

            <article className="contact-card">
              <h3>Sugerencias</h3>
              <p>Tu opinión nos ayuda a mejorar cada día.</p>
              <SuggestionForm />
            </article>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-copy">
          <span className="text-cyber-gold">©</span> {new Date().getFullYear()} Todos los derechos reservados • Built with JavaScript, React.js & TypeScript • UX/UI Interface • Deployed on Vercel ®
        </div>
      </footer>
    </div>
  )
}
