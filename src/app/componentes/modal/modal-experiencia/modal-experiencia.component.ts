import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {
  form: FormGroup;
  experiencias: Experiencia[] = [];
    constructor(private formBuilder: FormBuilder, private ExperienciaS: ExperienciaService) {
      //Creamos el grupo de controles para el formulario
      this.form = this.formBuilder.group({
        id: [''],
        cargo:['',[Validators.required]],
        nombreEmpresa:['',[Validators.required]],
        descripcionCargo:['',[Validators.required]],
        empleoActual:[''],
        fechaInicio:[''],
        fechaFin:[''],
        aptitud:[''],
      })
    }
  
    ngOnInit(): void {
      this.cargarEducacion();
    }
  
    cargarEducacion(): void {
      this.ExperienciaS.verExperiencias().subscribe(
        data => {
          this.experiencias = data;
        }
      )
    }
  
    cargarDetalle(id?: number) {
      this.ExperienciaS.verExperiencia(id).subscribe(
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
        this.ExperienciaS.agregarExperiencia(est).subscribe(
          data => {
            alert("Experiencia añadida");
            this.cargarEducacion();
            this.form.reset();
          }
        )
      } else {
        this.ExperienciaS.updateExperiencia(est).subscribe(
          data => {
            alert("Experiencia modificada");
            this.cargarEducacion();
            this.form.reset();
          }
        )
      }
    }
  
    borrar(id?: number) {
      this.ExperienciaS.eliminarExperiencia(id).subscribe(
        {
          next: data => {
            alert("se pudo eliminar satisfactoriamente");
            this.cargarExperiencia()
          },
          error: err => {
            console.error(err)
            alert("No se pudo eliminar")
          }
        }
      )
    }
  }
