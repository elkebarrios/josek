import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Red } from 'src/app/modelos/red';
import { RedService } from 'src/app/servicios/red.service';


@Component({
  selector: 'app-modal-redes',
  templateUrl: './modal-redes.component.html',
  styleUrls: ['./modal-redes.component.css']
})
export class ModalRedesComponent implements OnInit {
  form: FormGroup;
  Redes: Red[] = [];

  constructor(private formBuilder: FormBuilder, private RedS: RedService) { 
    this.form=this.formBuilder.group({
      id: [''],
      link:['',[Validators.required]],
      icono:['',[Validators.required]],
         })  
  }

  ngOnInit(): void {
    this.cargarRed();
  }

  cargarRed(): void {
    this.RedS.verRedes().subscribe(
      data => {
        this.Redes = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.RedS.verRed(id).subscribe(
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
    let red = this.form.value;

    if (red.id == '') {
      this.RedS.agregarRed(red).subscribe(
        data => {
          alert("Red añadida");
          this.cargarRed();
          this.form.reset();
        }
      )
    } else {
      this.RedS.updateRed(red).subscribe(
        data => {
          alert("Red modificada");
          this.cargarRed();
          this.form.reset();
        }
      )
    }
  }

  borrar(id: number) {
    this.RedS.eliminarRed(id).subscribe(
      {
        next: data => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarRed()
        },
        error: err => {
          console.error(err)
          alert("No se pudo eliminar")
        }
      }
    )
  }
}


  //get Link(){
    
   // return this.form.get("link");
  //}

  //get Icono(){
   // return this.form.get("icono");
  //}
 

