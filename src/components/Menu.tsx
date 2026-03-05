const items = [
  "bife_parrilla.jpg",
  "milanesa_napolitana.jpg",
  "pasta_casera.jpg",
  "risotto_hongos.jpg",
  "ensalada_cesar.jpg",
  "pollo_limon.jpg",
  "hamburguesa_gourmet.jpg",
  "tacos_carne.jpg",
  "pizza_artesanal.jpg",
  "salmon_grillado.jpg",
  "vino_tinto.jpg",
  "vino_blanco.jpg",
  "cerveza_artesanal.jpg",
  "limonada.jpg",
  "agua_saborizada.jpg",
  "flan_caramelo.jpg",
  "tiramisu.jpg",
  "cheesecake_frutos.jpg",
  "helado_artesanal.jpg",
  "brownie_chocolate.jpg",
]

const prettyName = (fileName: string) =>
  fileName
    .replace(".jpg", "")
    .split("_")
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
