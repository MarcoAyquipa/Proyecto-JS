export const agregarCarrito = () => {
const productosLocal = JSON.parse(localStorage.getItem('carrito'))
    if (productosLocal) {
    }else{
    localStorage.setItem('carrito', JSON.stringify([productos]))
    }
}