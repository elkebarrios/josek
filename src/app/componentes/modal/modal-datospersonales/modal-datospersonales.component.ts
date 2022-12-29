import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/modelos/persona';
import { DatosService } from 'src/app/servicios/datos.service';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-modal-datospersonales',
  templateUrl: './modal-datospersonales.component.html',
  styleUrls: ['./modal-datospersonales.component.css']
})
export class ModalDatospersonalesComponent implements OnInit {
  form: FormGroup;
  Personas: Persona[]=[];

    constructor(private datos: DatosService, private formBuilder: FormBuilder, private PersonaS: PersonaService ) {
      this.form=this.formBuilder.group({
        nombreperfil:['', [Validators.required]],
        tituloperfil:['',[Validators.required]],
        acercaDeMi:['',[Validators.required]],
        imagen:[''],
           }) 
     }

  ngOnInit(): void {
    this.cargarPersona();
  }
  get Nombreperfil(){
    return this.form.get("nombreperfil");
  }

  get Tituloperfil(){
    return this.form.get("tituloperfil");
  }
  get AcercaDeMi(){
    return this.form.get("acercaDeMi");
  }

  cargarPersona():void{
    this.PersonaS.verPersonas().subscribe(
      data => {
      this.Personas = data;
  }
  )
  }
  
    cargarDetalle(id?:number){
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
  guardar() {
    let est = this.form.value;

    if (est.id == '') {
      this.PersonaS.agregarPersona(est).subscribe(
        data => {
          alert("Educación añadida");
          this.cargarPersona();
          this.form.reset();
        }
      )
    } else {
      this.PersonaS.updatePersona(est).subscribe(
        data => {
          alert("Persona modificada");
          this.cargarPersona();
          this.form.reset();
        }
      )
    }
  }

  borrar(id?: number) {
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

