import { cargarDB, guardarCambiosDB, hacerBackupDB } from './db';
import { registrarLog } from './logger';

export function listar(nombreTabla: string): any[] {
    const db = cargarDB();
    if (!db[nombreTabla]) {
        return [];
    }
    return db[nombreTabla];
}

export function insertar(nombreTabla: string, campoId: string, data: any): any {
    const db = cargarDB();
    if (!db[nombreTabla]) {
        db[nombreTabla] = [];
    }
    let nuevoId = 1;
    if (db[nombreTabla].length > 0) {
        nuevoId = db[nombreTabla][db[nombreTabla].length - 1][campoId] + 1;
    }
    const nuevo = { ...data };
    nuevo[campoId] = nuevoId;
    db[nombreTabla].push(nuevo);
    guardarCambiosDB(db);
    registrarLog('Insertado en ' + nombreTabla + ': ' + JSON.stringify(nuevo));
    return nuevo;
}

export function eliminar(nombreTabla: string, campoId: string, valor: any): boolean {
    const db = cargarDB();
    if (!db[nombreTabla]) {
        return false;
    }
    const index = db[nombreTabla].findIndex((item: any) => item[campoId] === valor);
    if (index === -1) {
        return false;
    }
    const eliminado = db[nombreTabla][index];
    db[nombreTabla].splice(index, 1);
    guardarCambiosDB(db);
    registrarLog('Eliminado de ' + nombreTabla + ': ' + JSON.stringify(eliminado));
    return true;
}

export function crearBackUp(): void {
    hacerBackupDB();
    registrarLog('Backup realizado');
}
