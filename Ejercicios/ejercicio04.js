import readline from 'readline-sync'

// Paso 1: Solicitar número de día
const numeroDiaTexto = readline.question("ingrese un numero del 1 al 7: ")
const numeroDia = Number(numeroDiaTexto)

// Paso 2: switch para días de la semana
switch (numeroDia) {
     case 1:
         console.log("Lunes")
         break
     case 2:
         console.log("Martes")
         break
         case 3:
         console.log("Miércoles")
         break
         case 4:
         console.log("Jueves")
         break
         case 5:
         console.log("Viernes")
         break
         case 6:
         console.log("Sábado")
         break
        case 7:
         console.log("Domingo")
         break
     default:
         console.log("Día inválido")
 }

// Paso 3: Solicitar color del semáforo
const color = readline.question("elija un color del semáforo (verde, amarillo, rojo): ")

// Paso 4: switch para interpretar semáforo
switch (color) {
     case 'verde':
         console.log( "Puede avanzar")
         break
         case 'amarillo':
         console.log( "Pase con precaución")
         break
         case 'rojo':
         console.log( "Deténgase")
         break
     default:
         console.log("Color no válido")
 }