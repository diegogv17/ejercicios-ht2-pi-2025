enum Prioridad {
    ALTA, 
    MEDIA, 
    BAJA
}

enum EstadoTarea {
    PENDIENTE, 
    EN_PROGRESO,
    FINALIZADA

}

interface Tarea {
id: number
titulo: string
completada: boolean
prioridad: Prioridad
estado: EstadoTarea
}


class GestorTareas {
    private tareas: Tarea[] = []

    agregarTarea(titulo: string, prioridad: Prioridad) {
        const nuevatarea: Tarea = {
            id: Date.now(),
            titulo: titulo,
            completada: false,
            prioridad: prioridad,
            estado: EstadoTarea.PENDIENTE
        };
        this.tareas.push(nuevatarea)
    }
   
     listarTareas() : void {
        console.log('Lista de tareas:')
        this.tareas.forEach(tarea => {
            console.log(`ID: ${tarea.id}, Título: ${tarea.titulo}, Prioridad: ${Prioridad[tarea.prioridad]}, Estado: ${EstadoTarea[tarea.estado]}`)
        })
    }
}


//Paso 5: Uso del gestor
 const gestor = new GestorTareas()
 console.log(gestor.agregarTarea('Estudiar para el parcial', Prioridad.ALTA))
 console.log(gestor.agregarTarea('Revisar correo', Prioridad.MEDIA))
 console.log(gestor.agregarTarea('Comprar snacks', Prioridad.BAJA))

 console.log(gestor.listarTareas())