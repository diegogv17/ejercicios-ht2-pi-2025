import { insertar, listar, eliminar, crearBackUp } from './operaciones';

const cliente = insertar('clientes', 'id', { nombre: 'Juan Pérez', saldo: 1000 });
console.log('Cliente insertado:', cliente);

const clientes = listar('clientes');
console.log('Lista de clientes:', clientes);

if (cliente && cliente.id) {
    const eliminado = eliminar('clientes', 'id', cliente.id);
    console.log('Cliente eliminado:', eliminado);
}

crearBackUp();
console.log('Backup hecho');
