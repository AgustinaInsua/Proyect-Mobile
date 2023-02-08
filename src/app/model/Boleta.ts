export class Boleta{
    constructor(
        public periodo?: string,
        public secuencia?: number,
        public fechaEmision?: string,
        public cantEmpleados?: number,
        public estado?: string
    ){}
}