import { Seccion } from './Seccion.class';
export class Tablero{
    constructor(
        public nombre: string,
        public fechaCreacion = Date(),
        public secciones: Seccion[] = []
    ){}
}
