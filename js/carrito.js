import { productos } from "./productos.js"
import { agregarCarrito } from "./pruebas.js"

const verCarrito = document.getElementById('verCarrito')
const modalContainer = document.getElementById('modalContainer')

let carrito = JSON.parse(localStorage.getItem('carrito')) || []

verCarrito.addEventListener('click', () => {
    const modalHeader = document.createElement('div')
    modalHeader.innerHTML = `
    <h1>Carrito</h1>
    `
    modalContainer.appendChild(modalHeader)
    
    carrito.forEach((product) => {
        let carritoContent = document.createElement('div')
        carritoContent.className = "card"
        carritoContent.innerHTML = `
        <img src="${product.imagen}"></img>
        <h3>${product.nombre}</h3>
        <p>$ ${product.precio}</p>
        `
        modalContainer.appendChild(carritoContent)
    })

})