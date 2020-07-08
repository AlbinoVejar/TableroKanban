import { Tarea } from './Tarea.class';
export class Seccion{
    constructor(
        public nombre: string,
        public fechaCreacion: Date = new Date(),
        public descripcion?: string,
        public tareas?: Tarea[],
        public fechaTerminacion?: Date,
        public numeroTareas?: number
    ){}
}
