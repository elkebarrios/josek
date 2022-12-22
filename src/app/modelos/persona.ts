export class Persona {

    id: number;
    imagen: string;
    banner: string;
    nombreperfil: string;
    tituloperfil: string;
    acercaDeMi: string;

    constructor(imagen: string,
        banner: string,
        nombreperfil: string,
        tituloperfil: string,
        acercaDeMi: string) {

        this.imagen = imagen;
        this.banner = banner;
        this.nombreperfil = nombreperfil;
        this.tituloperfil = tituloperfil;
        this.acercaDeMi = acercaDeMi;
    }
}
