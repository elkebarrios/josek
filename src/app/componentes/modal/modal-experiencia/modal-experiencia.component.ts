import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {
  form: FormGroup;
  
    constructor(private datos: DatosService, private formBuilder: FormBuilder ) { 
    this.form=this.formBuilder.group({
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
    
  }
  get Cargo(){
    return this.form.get("cargo");
  }

  get NombreEmpresa(){
    return this.form.get("nombreEmpresa");
  }
 
  get DescripcionCargo(){
    return this.form.get("descripcionCargo");
  }

  
}
