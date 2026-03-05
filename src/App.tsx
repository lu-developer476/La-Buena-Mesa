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
            <p className="tagline">Sabores caseros, experiencia premium</p>
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
          ➖
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
          <h2>Bienvenidos a La Buena Mesa</h2>
          <p>
            Nos alegra recibirte. Acá vas a descubrir platos caseros, bebidas seleccionadas y una experiencia pensada
            para que disfrutes cada visita.
          </p>
          <p className="hero-slogan">Tu mesa de todos los días, con sabor inolvidable.</p>
        </section>

        <section id="quienes-somos" className="panel">
          <h2>Quiénes somos</h2>
          <p>
            La Buena Mesa nació con una misión muy simple: ofrecer comida abundante, auténtica y de calidad,
            preparada con ingredientes frescos y recetas que respetan los sabores tradicionales. Desde nuestros
            primeros pasos trabajamos con una filosofía enfocada en la atención cercana, el detalle en cada plato y
            la mejora continua de la experiencia gastronómica.
          </p>
          <p>
            Con una permanencia sólida en el mercado local, fuimos construyendo una comunidad de clientes que nos
            elige para almuerzos familiares, cenas especiales, eventos corporativos y celebraciones. Nuestro equipo,
            compuesto por cocineros, pasteleros y especialistas en hospitalidad, mantiene un estándar constante que
            combina cocina casera con presentación moderna. Hoy seguimos creciendo con el mismo compromiso que al
            inicio: que cada visita a La Buena Mesa se convierta en un momento memorable.
          </p>
        </section>

        <section id="menu" className="panel">
          <h2>Menú</h2>
          <p>
            Todos nuestros productos y bebidas se encuentran centralizados en esta sección para facilitar la navegación
            y evitar saturar el sitio web.
          </p>
          <Menu />
        </section>

        <section id="contacto" className="panel">
          <h2>Contacto</h2>
          <p>
            En esta sección reunimos Catering y Sugerencias para una visualización más clara y ordenada del sitio.
          </p>
          <div className="contact-grid">
            <article className="contact-card">
              <h3>Catering</h3>
              <p>Contanos tu evento y te armamos una propuesta personalizada.</p>
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
