import { Proceso } from './Proceso.class';
export class Tarea{
    constructor(
        public nombre: string,
        public descripcion: string,
        public procesos: Proceso[] = [],
        public fechaCreacion?: Date,
        public fechaTerminada?: Date
    ){}
}