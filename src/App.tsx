import { useState } from "react"
import Menu from "./components/Menu"
import CateringForm from "./components/CateringForm"
import SuggestionForm from "./components/SuggestionForm"

type SectionId = "menu" | "quienes-somos" | "contacto"

const navItems: { id: SectionId; label: string }[] = [
  { id: "menu", label: "Menú" },
  { id: "quienes-somos", label: "Quiénes somos" },
  { id: "contacto", label: "Contacto" },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId>("menu")

  const closeMenu = () => setMenuOpen(false)

  const handleSectionChange = (section: SectionId) => {
    setActiveSection(section)
    closeMenu()
  }

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
            ☰
          </button>

          <nav className={`site-nav ${menuOpen ? "open" : ""}`} aria-label="Navegación principal">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`site-nav-link ${activeSection === item.id ? "active" : ""}`}
                onClick={() => handleSectionChange(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {activeSection === "menu" && (
          <section id="menu" className="panel section-menu">
            <h2>Bienvenidos</h2>
            <p>
              En este espacio vas a encontrar platos caseros preparados con dedicación, bebidas
              cuidadosamente seleccionadas y una experiencia pensada para que cada visita se disfrute de verdad.
            </p>
            <p className="hero-slogan">Tu mesa de todos los días, con sabor inolvidable.</p>

            <h2>Menú</h2>
            <p>
              Nuestros mejores platos y bebidas listos para que elijas lo que más te guste. Cortesía de la casa.
            </p>
            <Menu />
          </section>
        )}

        {activeSection === "quienes-somos" && (
          <section id="quienes-somos" className="panel section-quienes">
            <h2>Quiénes somos</h2>
            <p>
              La Buena Mesa nació con una idea clara y sincera: crear un lugar donde la comida vuelva a ser lo que siempre debió ser, abundante, auténtica y hecha con dedicación.
            </p>
            <p>
              Inspirados en recetas tradicionales que pasan de generación en generación, empezamos este camino con la convicción de que los mejores momentos siempre ocurren alrededor de una mesa bien servida.
            </p>
            <p>
              Desde nuestros primeros días elegimos trabajar con ingredientes frescos, respetar los sabores de siempre y preparar cada plato con el mismo cuidado que tendría una cocina familiar.
            </p>
            <p>
              Con el paso del tiempo, La Buena Mesa fue consolidando su lugar en el mercado local y en la mesa de quienes nos visitan para almuerzos familiares, cenas especiales, celebraciones y encuentros corporativos.
            </p>
            <p>
              Hoy seguimos creciendo con la misma convicción que nos impulsó desde el primer día: que cada visita a La Buena Mesa sea más que una comida y se convierta en un momento memorable.
            </p>
          </section>
        )}

        {activeSection === "contacto" && (
          <section id="contacto" className="panel section-contacto">
            <h2>Contacto</h2>
            <p>
              Queremos escucharte.
              Ponte en contacto con nosotros para consultar nuestros servicios o dejarnos tus sugerencias.
            </p>
            <div className="contact-grid">
              <article className="contact-card">
                <h3>Catering</h3>
                <p>Contanos tu idea, te armamos esa propuesta soñada y a tu medida.</p>
                <CateringForm />
              </article>

              <article className="contact-card">
                <h3>Sugerencias</h3>
                <p>Tu opinión nos ayuda a mejorar cada día.</p>
                <SuggestionForm />
              </article>
            </div>
          </section>
        )}
      </main>

      <footer>
        <div className="footer-copy">
          <span className="text-cyber-gold">©</span> {new Date().getFullYear()} Todos los derechos reservados • Built with React.js & TypeScript • UX/UI Interface • Deployed on Vercel ®
        </div>
      </footer>
    </div>
  )
}
