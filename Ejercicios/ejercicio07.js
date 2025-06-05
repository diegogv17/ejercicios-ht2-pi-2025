import readline from 'readline-sync'
const base = Number(readline.question("Ingrese la base: "))

const altura =Number(readline.question("Ingrese la Altura: "))

function calcularAreaTriangulo (base, altura){
return (base * altura) /2
}

console.log("área del triángulo es: ", calcularAreaTriangulo(base, altura))

const nombre = readline.question("Ingrese su nombre: ")

function mostrarSaludo (nombre) {
    console.log(`Hola, ${nombre}. Bienvenido al sistema de geometría"`)
}
mostrarSaludo(nombre)