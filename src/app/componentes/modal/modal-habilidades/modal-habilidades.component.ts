import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hard } from 'src/app/modelos/hard';
import { HardService } from 'src/app/servicios/hard.service';


@Component({
  selector: 'app-modal-habilidades',
  templateUrl: './modal-habilidades.component.html',
  styleUrls: ['./modal-habilidades.component.css']
})
export class ModalHabilidadesComponent implements OnInit {
  form: FormGroup;
  hards: Hard[] = [];

  constructor(private formBuilder: FormBuilder, private HardS: HardService) {
    this.form = this.formBuilder.group({
      id: [''],
      habilidad: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.cargarHard();
  }

  cargarHard(): void {
    this.HardS.verHards().subscribe(
      data => {
        this.hards = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.HardS.verHard(id).subscribe(
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


  guardar() {
    let hard = this.form.value;

    if (hard.id == '') {
      this.HardS.agregarHard(hard).subscribe(
        data => {
          alert("Habilidad añadida");
          this.cargarHard();
          this.form.reset();
        }
      )
    } else {
      this.HardS.updateHard(hard).subscribe(
        data => {
          alert("Habilidad modificada");
          this.cargarHard();
          this.form.reset();
        }
      )
    }
  }

  borrar(id: number) {
    this.HardS.eliminarHard(id).subscribe(
      {
        next: data => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarHard()
        },
        error: err => {
          console.error(err)
          alert("No se pudo eliminar")
        }
      }
    )
  }
}
