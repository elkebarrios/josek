//import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { DatosService } from 'src/app/servicios/datos.service';
//import { Educacion } from 'src/app/modelos/educacion';
//import { EducacionService } from 'src/app/servicios/educacion.service';

//@Component({
  //selector: 'app-modal-estudios',
  //templateUrl: './modal-estudios.component.html',
  //styleUrls: ['./modal-estudios.component.css']
//})
//export class ModalEstudiosComponent implements OnInit {
 // form: FormGroup;
 // educaciones: Educacion[]=[];
  
  //constructor(private datos: DatosService, private formBuilder: FormBuilder, private EducacionS: EducacionService) {
    //Creamos el grupo de controles para el formulario 
   // this.form=this.formBuilder.group({
    //  nombreInstitucion:['',[Validators.required]],
    //  logoInstitucion:[''],
     // tituloObtenido:['',[Validators.required]],
     // fechaFin:[''],
     //    }) 
   //}

 // ngOnInit(): void {
  //  this.cargarEducacion();
  //}
  //get NombreInstitucion(){
  //  return this.form.get("nombreInstitucion");
  //}

  //get TituloObtenido(){
  ///  return this.form.get("tituloObtenido");
  //}

  //cargarEducacion():void{
  //  this.EducacionS.verEducaciones().subscribe(
   //   data => {
   //   this.educaciones = data;
  //}
  //)
  //}
  
   // cargarDetalle(id?:number){
   //   this.EducacionS.verEducacion(id).subscribe(
   //     {
   //      next : (data) => {
  //          this.form.setValue(data);
 //         },
  //        error: (e) => {
   //         console.error(e)
   //         alert("error al modificar")
  //        },
      //    complete: () => console.info('complete')
    //    }
    //  )
 // }

  //👇 esto es solo para hacer pruebas en local
  //onImagenSeleccionada(e: any) {
  //  let nombreImagen = e.target.files[0].name
  //  let url = 'assets/img/' + nombreImagen;
  //  this.form.patchValue({ logoInstitucion: url });
   // console.log(url);
  //}
  //guardar() {
    //let est = this.form.value;

   // if (est.id == '') {
   //   this.EducacionS.agregarEducacion(est).subscribe(
   //     data => {
   //       alert("Educación añadida");
    //      this.cargarEducacion();
    //      this.form.reset();
    //    }
    //  )
    //} else {
     // this.EducacionS.updateEducacion(est).subscribe(
     //   data => {
      //    alert("Educación modificada");
      //    this.cargarEducacion();
      //    this.form.reset();
       // }
      //)
    //}
  //}

  //borrar(id?: number) {
  //  this.EducacionS.eliminarEducacion(id).subscribe(
   //   {
   //     next: data => {
    //      alert("se pudo eliminar satisfactoriamente");
    //      this.cargarEducacion()
    //    },
     //   error: err => {
     //     console.error(err)
     //     alert("No se pudo eliminar")
     //   }
     // }
  //  )
  //}
//}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-modal-estudios',
  templateUrl: './modal-estudios.component.html',
  styleUrls: ['./modal-estudios.component.css']
})
export class ModalEstudiosComponent implements OnInit {
  form: FormGroup;
  educaciones: Educacion[] = [];


  constructor(private formBuilder: FormBuilder, private EducacionS: EducacionService) {
    //Creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      id: [''],
      nombreInstitucion: ['', [Validators.required]],
      logoInstitucion: ['', [Validators.required]],
      tituloObtenido: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.cargarEducacion();
  }

  cargarEducacion(): void {
    this.EducacionS.verEducaciones().subscribe(
      data => {
        this.educaciones = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.EducacionS.verEducacion(id).subscribe(
      {
        next: (data) => {
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
    this.form.patchValue({ logoInstitucion: url });
    console.log(url);
  }

  guardar() {
    let est = this.form.value;

    if (est.id == '') {
      this.EducacionS.agregarEducacion(est).subscribe(
        data => {
          alert("Educación añadida");
          this.cargarEducacion();
          this.form.reset();
        }
      )
    } else {
      this.EducacionS.updateEducacion(est).subscribe(
        data => {
          alert("Educación modificada");
          this.cargarEducacion();
          this.form.reset();
        }
      )
    }
  }

  borrar(id: number) {
    this.EducacionS.eliminarEducacion(id).subscribe(
      {
        next: data => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarEducacion()
        },
        error: err => {
          console.error(err)
          alert("No se pudo eliminar")
        }
      }
    )
  }
}
