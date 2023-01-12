import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-modal-proyecto',
  templateUrl: './modal-proyecto.component.html',
  styleUrls: ['./modal-proyecto.component.css']
})
export class ModalProyectoComponent implements OnInit {
  form: FormGroup;
  proyectos: Proyecto[] = [];
  
    constructor(private formBuilder: FormBuilder, private ProyectoS: ProyectoService ){
      this.form=this.formBuilder.group({
        id: [''],
        nombre:['',[Validators.required]],
        imagenes:['', [Validators.required]],
        descripcion:['',[Validators.required]],
        link:['',[Validators.required]],
           }) 
    }

  ngOnInit(): void {
    this.cargarProyecto();
  }

  cargarProyecto(): void {
    this.ProyectoS.verProyectos().subscribe(
      data => {
        this.proyectos = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.ProyectoS.verProyecto(id).subscribe(
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
    this.form.patchValue({ imagenes: url });
    console.log(url);
  }

  guardar() {
    let pro = this.form.value;

    if (pro.id == '') {
      this.ProyectoS.agregarProyecto(pro).subscribe(
        data => {
          alert("Proyecto añadido");
          this.cargarProyecto();
          this.form.reset();
        }
      )
    } else {
      this.ProyectoS.updateProyecto(pro).subscribe(
        data => {
          alert("Proyecto modificada");
          this.cargarProyecto();
          this.form.reset();
        }
      )
    }
  }

  borrar(id: number) {
    this.ProyectoS.eliminarProyecto(id).subscribe(
      {
        next: data => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarProyecto()
        },
        error: err => {
          console.error(err)
          alert("No se pudo eliminar")
        }
      }
    )
  }
  //get Nombre(){
  //  return this.form.get("nombre");
  //}

  //get Descripcion(){
  //  return this.form.get("descripcion");
  //}
 
  //get Link(){
   // return this.form.get("link");
  //}

  
}
