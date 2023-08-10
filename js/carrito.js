const verCarrito = document.getElementById('verCarrito')
const modalContainer = document.getElementById('modalContainer')

let carrito = JSON.parse(localStorage.getItem('carrito')) || []

const pintarCarrito = () =>{
    const modalHeader = document.createElement('div')
    modalContainer.appendChild(modalHeader)

    modalContainer.innerHTML = ""

    carrito.forEach((product) => {
        let carritoContent = document.createElement('div')
        carritoContent.className = "carritoContent"
        carritoContent.innerHTML = `
        <img src="${product.imagen}" class="img"></img>
        <p>${product.nombre}</p>
        <p>$ ${product.precio}</p>
        <button class='botonRestar' id='restar'>-</button> 
        <p> ${product.cantidad}</p>
        <button class='botonSumar' id='sumar'>+</button> 
        <p> ${product.cantidad * product.precio}</p>
        <button class='botonEliminar' id='eliminarProducto'>eliminar</button> 
        `
        modalContainer.appendChild(carritoContent)
        
        //restar producto
        let restar = carritoContent.querySelector('#restar')
        restar.addEventListener('click', () => {
            if(product.cantidad !== 1){
            product.cantidad--
            }
            saveLocal()
            pintarCarrito()
        })
        
        //sumar producto
        let sumar = carritoContent.querySelector('#sumar')
        sumar.addEventListener('click', () => {
            product.cantidad++
            saveLocal()
            pintarCarrito()
        })

        //eliminar producto
        let eliminar = carritoContent.querySelector('#eliminarProducto')
        eliminar.addEventListener('click', () => {
            eliminarProducto(product.id)
        })
    })
    //total carrito
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
    const totalCompra = document.createElement('div')
    totalCompra.className = 'total'
    totalCompra.innerHTML = `Total a pagar:$ ${total}`
    modalContainer.appendChild(totalCompra)
    
}
    verCarrito.addEventListener('click', pintarCarrito)
   //eliminar carrito
    const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id)

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId
    })
    saveLocal()
    pintarCarrito()
}
const saveLocal = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
    }
    