export class Educacion {
    id: number;
    logoInstitucion: string;
    nombreInstitucion: string;
    tituloObtenido: string;
    fechaFin: string;


    constructor(logoInstitucion: string,
        nombreInstitucion: string,
        tituloObtenido: string,
        fechaFin: string) {
        
        this.logoInstitucion = logoInstitucion;
        this.nombreInstitucion = nombreInstitucion;
        this.tituloObtenido = tituloObtenido;
        this.fechaFin = fechaFin;
    }


}
