import { productos } from "./productos.js"
import { agregarCarrito } from "./pruebas.js"

let carrito = JSON.parse(localStorage.getItem('carrito')) || []
productos.forEach((product)=>{
let div = document.createElement('div')
div.className = "card"
const listado = document.getElementById('productosCarrito')
div.className = 'card'
div.innerHTML = `
    <div>
    <img src="${product.imagen}">
    </div>
    <div>
    <h3>${product.nombre}</h3>
    <p>$ ${product.precio}</p>
    </div>

`
listado.appendChild(div)
})
