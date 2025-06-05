import * as fs from 'fs';

export function registrarLog(mensaje: string): void {
    const fecha = new Date();
    const logMsg = '[' + fecha.toISOString() + '] ' + mensaje + '\n'
    fs.appendFileSync('log.txt', logMsg)
}
