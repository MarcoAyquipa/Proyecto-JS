import { productos } from "./productos.js"

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