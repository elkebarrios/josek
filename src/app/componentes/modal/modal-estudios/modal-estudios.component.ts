import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/servicios/datos.service';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-modal-estudios',
  templateUrl: './modal-estudios.component.html',
  styleUrls: ['./modal-estudios.component.css']
})
export class ModalEstudiosComponent implements OnInit {
  form: FormGroup;
  educaciones: Educacion[]=[];
  tipoeducacion:string="";
  edu:Educacion|any=null;
  logoInstitucion: string="";
  nombreInstitucion: string="";
  tituloObtenido: string="";
  fechaFin: string="";
  constructor(private datos: DatosService, private formBuilder: FormBuilder, private EducacionS: EducacionService) {
    //Creamos el grupo de controles para el formulario 
    this.form=this.formBuilder.group({
      nombreInstitucion:['',[Validators.required]],
      logoInstitucion:[''],
      tituloObtenido:['',[Validators.required]],
      fechaFin:[''],
         }) 
   }

  ngOnInit(): void {
    this.cargarEducacion();
  }
  get NombreInstitucion(){
    return this.form.get("nombre_institucion");
  }

  get TituloObtenido(){
    return this.form.get("titulo_obtenido");
  }
  cargarEducacion():void{
    this.EducacionS.verEducaciones().subscribe(info => {
      this.educaciones = info;
  }
  )
  }
  capturar() {
    this.tipoeducacion=this.form.get('tipoeducacion').value;
     
    }
    cargarDetalle(id?:number){
      if(id != undefined){
      this.EducacionS.verEducacion(id).subscribe(data=>{
        this.edu=data;
      },err=>{
        alert("error al modificar");
      })
    }
  }
  OnCreate():void{
    
     const expe= new Educacion(this.nombreInstitucion,this.logoInstitucion,this.tituloObtenido,this.fechaFin)
     this.EducacionS.agregarEducacion(expe).subscribe(data=>{
       alert("Educación añadida");
       this.cargarEducacion();
     },err=>{
       alert("Fallo");
     })
     
   }
   borrar(id?:number){
    if(id != undefined){
      this.EducacionS.eliminarEducacion(id).subscribe(data =>{
        this.cargarEducacion();
        alert("se pudo eliminar satisfactoriamente");
      },err =>{
        alert("No se pudo eliminar");
      })
    }
  }
}
