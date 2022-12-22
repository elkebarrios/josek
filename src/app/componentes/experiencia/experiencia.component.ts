import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
experiencias:Experiencia[]=[];
  constructor(private datos: ExperienciaService) { }

  ngOnInit(): void {
    this.datos.verExperiencias().subscribe(info => {
    this.experiencias = info;
    }
    )
  }
}
