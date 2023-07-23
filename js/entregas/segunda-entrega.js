//Segunda pre-entrega
const productos = [
    {id: 1 , nombre: 'Naranja', precio: 300},
    {id: 2 , nombre: 'Mandarina', precio: 450},
    {id: 3 , nombre: 'Durazno', precio: 800 },
    {id: 4 , nombre: 'Pera', precio: 480}
];
let miCarrito = []

alert('Bienvenidos a tienda vitual')
let compra = prompt('Desea continuar con la compra (si/no)')
while (compra != 'si' && compra !='no') {
    alert('Ingrese si o no')
    compra = prompt('Desea continuar con la compra (si/no)')
}
if(compra == 'si'){
    alert('A continuacion le aparecera la lista de los productos en stock con sus respectivos precios por kg')
    let todosProductos = productos.map((producto)=>producto.id+ '.' + producto.nombre + '$' + producto.precio)
    alert(todosProductos.join('  '))
}else if(compra == 'no'){
    alert('Gracias por visitarnos, esperamos vuelva pronto')
}

while (compra != 'no') {
    let productoSeleccionado = prompt('Ingrese nombre del producto: ') 
    let precio = 0

    if( productoSeleccionado == 'Naranja'|| productoSeleccionado == 'Mandarina' || productoSeleccionado == 'Durazno' || productoSeleccionado == 'Pera'){
        switch (productoSeleccionado) {
            case 'Naranja':
                precio = 300;
                break;

            case 'Mandarina':
                precio = 450;
                break;
        
            case 'Durazno':
                precio = 800;
                break;

            case 'Pera':
                precio = 480;
                break;
            
            default:
                break;
        }
    let cantidad = parseInt(prompt('Elegir cantidad del producto a llevar'))

    miCarrito.push({productoSeleccionado, cantidad, precio})
    console.log(miCarrito);
    }else{
        alert('Produto no disponible')
    }

    compra = prompt('Desea continuar con la compra?')

    if (compra == 'no') {

        alert('Gracias por su compra')

        miCarrito.forEach((totalCarrito) => {

            console.log(`Producto: ${totalCarrito.productoSeleccionado}, Precio:$ ${totalCarrito.precio}, Cantidad: ${totalCarrito.cantidad}kg, Total a pagar por producto:$ ${totalCarrito.cantidad * totalCarrito.precio}`)

            alert(`Producto: ${totalCarrito.productoSeleccionado}, Precio:$ ${totalCarrito.precio}, Cantidad: ${totalCarrito.cantidad}kg, Total a pagar por producto:$ ${totalCarrito.cantidad * totalCarrito.precio}`)

        })

    }
}

const total = miCarrito.reduce((acc,el)=> acc + el.precio * el.cantidad, 0)
alert(`Precio final de la compra:$ ${total}`)
console.log(`Precio final de la compra:$ ${total}`)