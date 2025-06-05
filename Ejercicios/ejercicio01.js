/*Ejercicio 1 - Tipos de Datos y Variables */

import readline from 'readline-sync'

// 👉 Paso 1: Solicitar entrada de datos
const nombre = readline.question("Ingrese su nombre: ") 
const edadTexto = readline.question("Ingrese su edad: ")
const activoTexto = readline.question("Ingrese su Activo: ")

// 👉 Paso 2: Declarar y convertir datos
const edad = Number(edadTexto)
const activo = activoTexto.toLowerCase() === "si";

// 👉 Paso 3: Imprimir mensaje personalizado
console.log(`Hola, me llamo ${nombre}, tengo ${edad} años y estoy activa: ${activo} `)

// 👉 Paso 4: Imprimir tipos de datos usando typeof
console.log(`Tipo de nombre: `+ typeof(nombre))
console.log(`Tipo de edad: `+ typeof(edad))
console.log(`Tipo de activo: `+ typeof (activo))

// 👉 Paso 5: Declarar variables especiales y mostrar su tipo
let valorNulo = null
let valorNoAsignado
console.log(`Tipo de valorNulo: `+ typeof(valorNulo))
console.log(`Tipo de valorNoAsignado: ` + typeof(valorNoAsignado))