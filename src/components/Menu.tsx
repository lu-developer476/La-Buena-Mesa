const items = [
  "bife-parrilla.jpg",
  "milanesa-napolitana.jpg",
  "pasta-casera.jpg",
  "risotto-hongos.jpg",
  "ensalada-cesar.jpg",
  "pollo-limon.jpg",
  "hamburguesa-gourmet.jpg",
  "tacos-carne.jpg",
  "pizza-artesanal.jpg",
  "salmon-grillado.jpg",
  "vino-tinto.jpg",
  "vino-blanco.jpg",
  "cerveza-artesanal.jpg",
  "limonada.jpg",
  "agua-saborizada.jpg",
  "flan-caramelo.jpg",
  "tiramisu.jpg",
  "cheesecake-frutos.jpg",
  "helado-artesanal.jpg",
  "brownie-chocolate.jpg",
]

const prettyName = (fileName: string) =>
  fileName
    .replace(".jpg", "")
    .split("-")
    .join(" ")
    .replace(/\b\w/g, (char) => char.toUpperCase())

export default function Menu() {
  return (
    <div className="menu-grid">
      {items.map((img) => (
        <article className="menu-card" key={img}>
          <img src={`/assets/${img}`} alt={prettyName(img)} loading="lazy" />
          <p>{prettyName(img)}</p>
        </article>
      ))}
    </div>
  )
}
