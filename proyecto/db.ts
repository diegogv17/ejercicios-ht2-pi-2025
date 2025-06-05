import * as fs from 'fs';

export function cargarDB(): any {
    if (!fs.existsSync('db.json')) {
        fs.writeFileSync('db.json', '{}');
    }
    const data = fs.readFileSync('db.json', 'utf-8');
    return JSON.parse(data);
}

export function guardarCambiosDB(data: any): void {
    fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
}

export function hacerBackupDB(): void {
    if (!fs.existsSync('backups')) {
        fs.mkdirSync('backups');
    }
    const fecha = new Date();
    const nombre = 'db_' + fecha.getFullYear() + '-' + (fecha.getMonth()+1).toString().padStart(2, '0') + '-' + fecha.getDate().toString().padStart(2, '0') + '-' + fecha.getHours().toString().padStart(2, '0') + '-' + fecha.getMinutes().toString().padStart(2, '0') + '-' + fecha.getSeconds().toString().padStart(2, '0') + '.json';
    fs.copyFileSync('db.json', 'backups/' + nombre);
}
