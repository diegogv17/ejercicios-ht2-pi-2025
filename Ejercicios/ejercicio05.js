import readline from 'readline-sync'

const temporizadorTextual = readline.question("De cuantos segundos quiere su temporizador: ")
const temporizador = Number(temporizadorTextual)
let contador = temporizador
while (contador >= 0) {
 if (contador === 0) {
        console.log(`El tiempo finalizó`)
    } else {
        console.log(`Faltan ${contador} segundos.`)
    }
    contador--
}

let Opciones 

do {
    Opciones = readline.question(`elije una de las opciones disponible
        1. Saludar
        2. Mostrar hora actual
        3. Salir
        >`)
        switch (Opciones) {
            case "1":
                const nombre = readline.question("Ingrese su nombre: ")
                console.log(`Bienvenido ${nombre}`)
                break;
                case "2":
               const hora = new Date().getHours()
                console.log(`La hora actual es: ${hora} horas`) /*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours*/
                break
                case "3":
                console.log("Cerrando el programa...")
                break
        
            default:
                console.log(`este numero no esta disponible`)
                break;
        } 
} while (Opciones !== "3");