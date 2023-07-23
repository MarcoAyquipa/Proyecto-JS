import { productos } from "./productos.js"

// let carrito = JSON.parse(localStorage.getItem('carrito')) || []
// productos.forEach((product)=>{
// let div = document.createElement('div')
// div.className = "card"
// const listado = document.getElementById('productosCarrito')
// div.className = 'card'
// div.innerHTML = `
//     <div>
//     <img src="${product.imagen}">
//     </div>
//     <div>
//     <h3>${product.nombre}</h3>
//     <p>$ ${product.precio}</p>
//     </div>

// `
// listado.appendChild(div)
// })

export const agregarCarrito = () => {
const productosLocal = JSON.parse(localStorage.getItem('carrito'))
    if (productosLocal) {
        toastify({
        text: 'Producto agregado al carrito',
        duration: 3000,
        destination: 'mi-carrito.html'
    }).showToast()
    }else{
    localStorage.setItem('carrito', JSON.stringify([productos]))
    }
}