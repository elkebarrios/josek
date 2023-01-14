import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  persona: Persona;
  constructor(private datos: PersonaService) { }

  ngOnInit(): void {
    this.datos.verPersona(1).subscribe(info => {
      this.persona = info;
    }
    )
  }
}
