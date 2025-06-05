import readline from 'readline-sync'

// Paso 1: Solicitar fecha de nacimiento
/*const fechaNacimientoTexto = readline.question("ingrese su fecha de nacimiento (MM-DD): ")
const fechaNacimiento = Number(fechaNacimientoTexto)*/
const anioNacimiento = Number(readline.question("ingrese su anio de nacimiento (YYYY): "))
const anioActual = 2025
const edad = anioActual - anioNacimiento

// Paso 2: Evaluar grupo etario
if (edad === 12) {
  console.log(`Tienes ${edad} años. Eres un niño.`)
 } else if (edad >= 12 && edad <= 17) {
   console.log(`Tienes ${edad} años. Eres un adolescente.`)
 } else if (edad >= 18 && edad === 65) {
   console.log(`Tienes ${edad} años. Eres un adulto.`)
} else {
  console.log(`Tienes ${edad} años. Eres un adulto mayor.`)
}

//Paso 3: Solicitar nota del examen
const notaTexto = readline.question("Ingrese su nota: ")
const nota = Number(notaTexto)

// Paso 4: Evaluar calificación con else if
if (nota >= 90) {
    console.log("Su nota es: A")
} else if (nota <= 89 && nota >= 80) {
    console.log("Su nota es: B")
}else if (nota <= 79 && nota >= 70) {
    console.log("Su nota es: C")
}else if (nota <= 69 && nota >= 60) {
    console.log("Su nota es: D")
}else if (nota < 60) {
    console.log("Su nota es: F")
}