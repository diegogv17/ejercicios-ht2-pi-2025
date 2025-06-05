import readline from 'readline-sync'

// Paso 1: Solicitar precio y descuento
const precioTexto = readline.question("Ingrese el precio del producto: ")
const descuentoTexto = readline.question("Ingrese el descuento del producto: ")

// Paso 2: Convertir a número y calcular precio final
const precio = Number(precioTexto)
const descuento = Number(descuentoTexto)
const total = precio - (precio * descuento/100)

// Paso 3: Imprimir resultado del cálculo
console.log(`el precio total del producto con el descuento aplicado es de: ${total}`)

// Paso 4: Solicitar estatura
const estaturaTexto = readline.question("Ingrese su estatura (centimetros):")
const estatura = Number(estaturaTexto)

// Paso 5: Verificar si puede subirse al juego
if (estatura >= 120 || estatura <= 200) {
    console.log("Estatura valida, puede ingresar a los juegos")
} else {
    console.log("estatura invalida, NO puede ingresar a los jeugos")
}

// Paso 6: Imprimir resultado de la evaluación
