import { useState } from "react"
import Menu from "./components/Menu"
import CateringForm from "./components/CateringForm"
import SuggestionForm from "./components/SuggestionForm"

type SectionId = "menu" | "quienes-somos" | "contacto" | "ubicacion"

const navItems: { id: SectionId; label: string }[] = [
  { id: "menu", label: "Menú" },
  { id: "quienes-somos", label: "Quiénes somos" },
  { id: "contacto", label: "Contacto" },
  { id: "ubicacion", label: "Visitanos" },
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
          <div className="brand-copy">
            <h1>La Buena Mesa</h1>
            <p className="tagline">Sabores caseros, cocina honesta y momentos para compartir</p>
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
            <p className="intro-copy">
              En este espacio vas a encontrar platos caseros preparados con gran dedicación, bebidas
              finamente seleccionadas y una experiencia pensada para que tu visita sea inolvidable.
            </p>
            <p className="hero-slogan">Tu mesa de todos los días, con sabores destacados.</p>

            <div className="section-heading">
              <span className="eyebrow">Nuestra carta</span>
              <h2>Menú</h2>
              <p>
                Elegí entre principales, bebidas y postres preparados para disfrutar sin apuro.
              </p>
            </div>
            <Menu />
          </section>
        )}

        {activeSection === "quienes-somos" && (
          <section id="quienes-somos" className="panel section-quienes">
            <h2>Quiénes somos</h2>
            <p className="intro-copy">
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

        {activeSection === "ubicacion" && (
          <section id="ubicacion" className="panel section-ubicacion">
            <span className="eyebrow">Te esperamos</span>
            <h2>Horarios y ubicación</h2>
            <p className="intro-copy">
              Vení a disfrutar de nuestros platos en un ambiente cálido. Estamos en Palermo, Ciudad Autónoma de Buenos Aires.
            </p>
            <div className="visit-grid">
              <article className="visit-card">
                <h3>🕒 Horarios de atención</h3>
                <ul className="hours-list">
                  <li><span>Lunes a jueves</span><strong>12:00–15:00 · 19:00–23:00</strong></li>
                  <li><span>Viernes y sábado</span><strong>12:00–16:00 · 19:00–00:00</strong></li>
                  <li><span>Domingos</span><strong>12:00–16:00 · 19:00–22:30</strong></li>
                </ul>
                <p className="hours-note">Horarios referenciales para esta demo; se pueden ajustar según el servicio.</p>
              </article>
              <article className="visit-card">
                <h3>📍 Encontranos</h3>
                <p>Palermo, Buenos Aires, Argentina</p>
                <div className="map-frame">
                  <iframe
                    title="Mapa de ubicación de La Buena Mesa en Palermo, Buenos Aires"
                    src="https://maps.google.com/maps?q=Palermo%2C%20Buenos%20Aires%2C%20Argentina&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a className="map-link" href="https://www.google.com/maps/search/?api=1&query=Palermo%2C%20Buenos%20Aires%2C%20Argentina" target="_blank" rel="noreferrer">
                  Abrir en Google Maps ↗
                </a>
              </article>
            </div>
          </section>
        )}

        {activeSection === "contacto" && (
          <section id="contacto" className="panel section-contacto">
            <h2>Contacto</h2>
            <p className="intro-copy">
              Queremos escucharte. Ponete en contacto con nosotros para consultar nuestros servicios o dejarnos tus sugerencias.
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
