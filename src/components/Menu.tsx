import { useMemo, useState } from "react"

type Category = "Todos" | "Principales" | "Bebidas" | "Postres"

const items: { image: string; category: Exclude<Category, "Todos"> }[] = [
  { image: "bife-parrilla.jpg", category: "Principales" },
  { image: "milanesa-napolitana.jpg", category: "Principales" },
  { image: "pasta-casera.jpg", category: "Principales" },
  { image: "risotto-hongos.jpg", category: "Principales" },
  { image: "ensalada-cesar.jpg", category: "Principales" },
  { image: "pollo-limon.jpg", category: "Principales" },
  { image: "hamburguesa-gourmet.jpg", category: "Principales" },
  { image: "tacos-carne.jpg", category: "Principales" },
  { image: "pizza-artesanal.jpg", category: "Principales" },
  { image: "salmon-grillado.jpg", category: "Principales" },
  { image: "vino-tinto.jpg", category: "Bebidas" },
  { image: "vino-blanco.jpg", category: "Bebidas" },
  { image: "cerveza-artesanal.jpg", category: "Bebidas" },
  { image: "limonada.jpg", category: "Bebidas" },
  { image: "agua-saborizada.jpg", category: "Bebidas" },
  { image: "flan-caramelo.jpg", category: "Postres" },
  { image: "tiramisu.jpg", category: "Postres" },
  { image: "cheesecake-frutos.jpg", category: "Postres" },
  { image: "helado-artesanal.jpg", category: "Postres" },
  { image: "brownie-chocolate.jpg", category: "Postres" },
]

const categories: Category[] = ["Todos", "Principales", "Bebidas", "Postres"]

const prettyName = (fileName: string) =>
  fileName
    .replace(".jpg", "")
    .split("-")
    .join(" ")
    .replace(/\b\w/g, (char) => char.toUpperCase())

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos")
  const filteredItems = useMemo(
    () => selectedCategory === "Todos"
      ? items
      : items.filter((item) => item.category === selectedCategory),
    [selectedCategory],
  )

  return (
    <div className="menu-content">
      <div className="menu-filters" role="group" aria-label="Filtrar menú por categoría">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
            aria-pressed={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="menu-result-count" aria-live="polite">
        {filteredItems.length} {filteredItems.length === 1 ? "producto" : "productos"}
      </p>
      <div className="menu-grid">
        {filteredItems.map(({ image, category }) => (
          <article className="menu-card" key={image}>
            <img src={`/assets/${image}`} alt={prettyName(image)} loading="lazy" />
            <p>{prettyName(image)}</p>
            <span className="menu-category">{category}</span>
          </article>
        ))}
      </div>
    </div>
  )
}
