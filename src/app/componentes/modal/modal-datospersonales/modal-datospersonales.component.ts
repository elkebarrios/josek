import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-modal-datospersonales',
  templateUrl: './modal-datospersonales.component.html',
  styleUrls: ['./modal-datospersonales.component.css']
})
export class ModalDatospersonalesComponent implements OnInit {
  form: FormGroup;
  Personas: Persona[]=[];

    constructor(private formBuilder: FormBuilder, private PersonaS: PersonaService ) {
      this.form=this.formBuilder.group({
        id: [''],
        nombreperfil:['', [Validators.required]],
        tituloperfil:['',[Validators.required]],
        acercaDeMi:['',[Validators.required]],
        imagen:[''],
        banner:[''],
           }) 
     }

  ngOnInit(): void {
    this.cargarPersona();
  }
  //get Nombreperfil(){
  //  return this.form.get("nombreperfil");
  //}

  //get Tituloperfil(){
  //  return this.form.get("tituloperfil");
  //}
  //get AcercaDeMi(){
  //  return this.form.get("acercaDeMi");
  //}

  cargarPersona():void{
    this.PersonaS.verPersonas().subscribe(
      data => {
      this.Personas = data;
  }
  )
  }
  
    cargarDetalle(id:number){
      this.PersonaS.verPersona(id).subscribe(
        {
         next : (data) => {
            this.form.setValue(data);
          },
          error: (e) => {
            console.error(e)
            alert("error al modificar")
          },
          complete: () => console.info('complete')
        }
      )
  }

  //👇 esto es solo para hacer pruebas en local
  onImagenSeleccionada(e: any) {
    let nombreImagen = e.target.files[0].name
    let url = 'assets/img/' + nombreImagen;
    this.form.patchValue({ imagen: url });
    console.log(url);
  }

  guardar() {
    let per = this.form.value;

    if (per.id == '') {
      this.PersonaS.agregarPersona(per).subscribe(
        data => {
          alert("Persona añadida");
          this.cargarPersona();
          this.form.reset();
        }
      )
    } else {
      this.PersonaS.updatePersona(per).subscribe(
        data => {
          alert("Persona modificada");
          this.cargarPersona();
          this.form.reset();
        }
      )
    }
  }

  borrar(id: number) {
    this.PersonaS.eliminarPersona(id).subscribe(
      {
        next: data => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarPersona()
        },
        error: err => {
          console.error(err)
          alert("No se pudo eliminar")
        }
      }
    )
  }
}

  //get TituloObtenido(){
    //return this.form.get("tituloObtenido");
  //}


  /*get TituloObtenidoValid() {
    return this.TituloObtenido?.touched && !this.TituloObtenido?.valid;
  } */

