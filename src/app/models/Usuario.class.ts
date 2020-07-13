import { Tablero } from './Tablero.class';
export class Usuario{
    constructor(
        public nombre: string,
        public clave: string,
        public fechaCreacion = new Date(),
        public tableros: Tablero[] = []
    ){
        this.tableros.push(new Tablero('mi Tablero'));
    }
}
