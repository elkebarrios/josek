import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/servicios/datos.service';


@Component({
  selector: 'app-modal-redes',
  templateUrl: './modal-redes.component.html',
  styleUrls: ['./modal-redes.component.css']
})
export class ModalRedesComponent implements OnInit {
  form: FormGroup;
  constructor(private datos: DatosService, private formBuilder: FormBuilder) { 
    this.form=this.formBuilder.group({
      link:['',[Validators.required]],
      icono:['',[Validators.required]],
         })  
  }

  ngOnInit(): void {
  }
  get Link(){
    
    return this.form.get("link");
  }

  get Icono(){
    return this.form.get("icono");
  }
 
}
