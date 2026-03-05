
export default function Menu(){
const items=[
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
return(
<section>
<h2>Menú</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"20px"}}>
{items.map((img,i)=>(
<div key={i}>
<img src={`/assets/${img}`} style={{width:"100%"}}/>
<p>{img.replace(".jpg","").replace("_"," ")}</p>
</div>
))}
</div>
</section>
)
}
