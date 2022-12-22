import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-modal-datospersonales',
  templateUrl: './modal-datospersonales.component.html',
  styleUrls: ['./modal-datospersonales.component.css']
})
export class ModalDatospersonalesComponent implements OnInit {
  form: FormGroup;
  modales:any;
  imagen: string ='';
    nombreperfil: string ='';
    tituloperfil: string ='';
    acercaDeMi: string ='';
    constructor(private datos: DatosService, private formBuilder: FormBuilder ) {
      this.form=this.formBuilder.group({
        nombreperfil:['',],
        tituloperfil:['',],
        acercaDeMi:['',[Validators.required]],
        imagen:[''],
           }) 
     }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(info => {
      this.modales = info.modales;
      }
    )
  }
  get AcercaDeMi(){
    return this.form.get("acercaDeMi");
  }

  //get TituloObtenido(){
    //return this.form.get("tituloObtenido");
  //}
 

  get AcercaDeMiValid(){
    return this.AcercaDeMi?.touched && !this.AcercaDeMi?.valid;
  }

  /*get TituloObtenidoValid() {
    return this.TituloObtenido?.touched && !this.TituloObtenido?.valid;
  } */
}
