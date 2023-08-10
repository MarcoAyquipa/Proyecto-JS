//traigo section de HTML
const misProductos = document.getElementById("misProductos")


let carrito = JSON.parse(localStorage.getItem('carrito')) || []

const getProducts = async() => {
    const response = await fetch('/data/productos.json')
    const data = await response.json()

    //creando nuevo elemento
data.forEach((product)=>{
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
        Swal.fire({
            title: 'Agregado al carrito',
            icon: 'success',
            iconColor: '#2f962db8',
            color: '#2f962db8',
            showConfirmButton: false,
            timer: 1000
        })
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id)
    if(repeat){
        carrito.map((prod) => {
            if(prod.id === product.id){
                prod.cantidad++
            }
        })
    }else{
        carrito.push({
            id: product.id,
            imagen: product.imagen,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        })
        
        }
        saveLocal()
    })
})
}
getProducts()

//guardando en el localStorage
const saveLocal = () => {
localStorage.setItem('carrito', JSON.stringify(carrito))
}
