export class Proceso{
    constructor(
        public descripcion: string,
        public estado: boolean = false,
        public fechaCreacion: Date = new Date(),
        public fechaTerminado?: Date,
        public fechaEdicion?: Date
    ){}
}
