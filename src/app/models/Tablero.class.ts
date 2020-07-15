import { Seccion } from './Seccion.class';
export class Tablero{
    constructor(
        public nombre: string,
        public fechaCreacion = Date(),
        public secciones: Seccion[] = []
    ){
        this.secciones.push(new Seccion('Planeación'));
        this.secciones.push(new Seccion('Desarrollo'));
    }
}
