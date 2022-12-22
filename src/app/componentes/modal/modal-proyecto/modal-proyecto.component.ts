import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-modal-proyecto',
  templateUrl: './modal-proyecto.component.html',
  styleUrls: ['./modal-proyecto.component.css']
})
export class ModalProyectoComponent implements OnInit {
  form: FormGroup;
  
    constructor(private datos: DatosService, private formBuilder: FormBuilder ){
      this.form=this.formBuilder.group({
        nombre:['',[Validators.required]],
        imagenes:[''],
        descripcion:['',[Validators.required]],
        link:['',[Validators.required]],
           }) 
    }

  ngOnInit(): void {
    
  }
  get Nombre(){
    return this.form.get("nombre");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }
 
  get Link(){
    return this.form.get("link");
  }

  
}
