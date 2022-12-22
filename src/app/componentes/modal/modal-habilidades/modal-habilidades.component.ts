import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-modal-habilidades',
  templateUrl: './modal-habilidades.component.html',
  styleUrls: ['./modal-habilidades.component.css']
})
export class ModalHabilidadesComponent implements OnInit {
  form: FormGroup;
  
    constructor(private datos: DatosService, private formBuilder: FormBuilder ) { 
      this.form=this.formBuilder.group({
        habilidad:['',[Validators.required]],
        porcentaje:['',[Validators.required]],
           })  
    }

  ngOnInit(): void {
    
  }
  get Habilidad(){
    
    return this.form.get("habilidad");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }
 

}
