console.log('hola');
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
let cuadras = 0
do{
    cuadras = prompt('Ingrese numero de cuadras: ')
    console.log(cuadras)
}while(cuadras <= 5)

//simulador interactivo - cantidad total de productos
let producto1 = parseInt(prompt('ingresar cantidad de producto 1: '))
let producto2 = parseInt(prompt('ingresar cantidad de producto 2: '))
let producto3 = parseInt(prompt('ingresar cantidad de producto 3: '))
let resultado = producto1 + producto2 + producto3
alert('La cantidad total de productos es: ' + resultado)