const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
    { nombre: 'Pantalón', precio: 120 },
    { nombre: 'Corbata', precio: 50 },
]


function ivaAplicado(productos) {
    return productos.map(producto => ({
        ...producto,
        precio: producto.precio * 1.21
    }));
}

const  productosConIVA = ivaAplicado(productos)

const filtrado = productos.filter ((productos) => productos.precio >= 100)

const ordenados = productos.sort((a,b)=> a.precio  - b.precio)

console.log("Con IVA:", productosConIVA);
console.log("Filtrado (>=100):", filtrado);
console.log("Ordenados por precio:", ordenados);
