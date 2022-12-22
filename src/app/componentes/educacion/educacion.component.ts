import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educaciones:Educacion[]=[];
  constructor(private datos: EducacionService) { }

  ngOnInit(): void {
    this.datos.verEducaciones().subscribe(info => {
      this.educaciones = info;
  }
  )
}
}
