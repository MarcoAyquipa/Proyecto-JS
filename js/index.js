import { productos} from "./productos.js"
import { agregarCarrito } from "./pruebas.js"


//traigo section de HTML
const misProductos = document.getElementById("misProductos")



let carrito = JSON.parse(localStorage.getItem('carrito')) || []

//creando nuevo elemento
productos.forEach((product)=>{
    let contenedor = document.createElement('div')
    contenedor.className = "card"
    contenedor.innerHTML = `
    <img src="${product.imagen}">
    <h3>${product.nombre}</h3>
    <p>$ ${product.precio}</p>
    `
    misProductos.appendChild(contenedor)
    let comprar = document.createElement('button')
    comprar.innerText = 'añadir al carrito'

    contenedor.appendChild(comprar)

    comprar.addEventListener('click', ()=> {
    carrito.push({
        id: product.id,
        imagen: product.imagen,
        nombre: product.nombre,
        precio: product.precio,
    })
    console.log(carrito)
    alert('añadido al carrito')
    saveLocal()
})
})



//guardando en el localStorage
const saveLocal = () => {
localStorage.setItem('carrito', JSON.stringify(carrito))
}
