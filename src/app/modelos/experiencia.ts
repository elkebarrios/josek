export class Experiencia {

    id: number;
    logoEmpresa: string;
    cargo: string;
    empleoActual: string;
    fechaInicio: string;
    fechaFin: string;
    nombreEmpresa: string;
    descripcionCargo: string;
    aptitud: string;


    constructor(logoEmpresa: string,
        cargo: string,
        empleoActual: string,
        fechaInicio: string,
        fechaFin: string,
        nombreEmpresa: string,
        descripcionCargo: string,
        aptitud: string) {
        
            this.logoEmpresa = logoEmpresa;
            this.cargo = cargo;
            this.empleoActual = empleoActual;
            this.fechaInicio = fechaInicio;
            this.fechaFin = fechaFin;
            this.nombreEmpresa = nombreEmpresa;
            this.descripcionCargo = descripcionCargo;
            this.aptitud = aptitud;
}
}