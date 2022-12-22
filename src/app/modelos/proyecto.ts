export class Proyecto {

    id: number;
    nombre: string;
    imagenes: string;
    descripcion: string;
    link: string;

    constructor(nombre: string,
        imagenes: string,
        descripcion: string,
        link: string){

            this.nombre = nombre;
        this.imagenes = imagenes;
        this.descripcion = descripcion;
        this.link = link;
    }
}
