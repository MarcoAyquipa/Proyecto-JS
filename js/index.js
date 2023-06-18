//algoritmo con condicional 
let nombre = prompt('Ingrese su nombre')
let apellido = prompt('Ingrese su apellido')
let edad = prompt('Ingrese su edad en numeros')
if ((nombre !== '') && (apellido !== '') && (edad !== '') ){
console.log('Nombre, Apellido y Edad: ' + nombre + ' ' + apellido + ', ' + edad + ' años')
}else{
    console.log('Error: Datos no validos')
}

//algoritmo utilizando un ciclo do-while
let cuadras = parseInt(prompt('Ingrese numero: '))
for (let i = 1; i <= 6; i++){
    let resultado = cuadras + i
    alert(cuadras + '+' + i + '=' + resultado )
}


//simulador interactivo - carrito de compra
alert('Seleccione el producto deseado, ingrese 0 para salir')
let elegirProductos = Number(prompt('1-manzana $800 el kg 2-frutilla $1200 el kg 3-naranja $300 el kg'))
let elegirCantidad;
let total = 0

const cantidad = (cant, precio) =>{
    return cant * precio
}

while(elegirProductos !== 0){
    switch (elegirProductos) {
        case 1:
            elegirCantidad = Number(prompt('El producto seleccionado es manzana,  indique la cantidad de kg'))
            total += cantidad(elegirCantidad, 800)
            break;
            
        case 2:
            elegirCantidad = Number(prompt('El producto seleccionado es frutilla,  indique la cantidad de kg'))
            total += cantidad(elegirCantidad, 1200)
            break;

        case 3:
            elegirCantidad = Number(prompt('El producto seleccionado es naranja,  indique la cantidad de kg'))
            total += cantidad(elegirCantidad, 300)
        break;

        default:
            alert('opcion incorrecta')
            break;
    }
    elegirProductos = Number(prompt('1-manzana $800 el kg 2-frutilla $1200 el kg 3-naranja $300 el kg'))
}
alert('El total de la compra es: ' + total)