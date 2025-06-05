const estudiantes = ['Carlos', 'Ana', 'Luis', 'María', 'José']

for (let i = 0; i < estudiantes.length; i++) {
    const element = estudiantes[i];
    console.log("Bienvenido "+element)
    
}

const notas = [70, 85, 55, 90, 60]
let suma = 0

for (let i = 0; i < notas.length; i++) {
    const element = notas[i];
    suma += element;
    suma / notas
}
let promedio = suma  / notas.length
console.log("El promedio del grupo es:", promedio)