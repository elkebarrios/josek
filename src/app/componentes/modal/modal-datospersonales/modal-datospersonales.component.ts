import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-modal-datospersonales',
  templateUrl: './modal-datospersonales.component.html',
  styleUrls: ['./modal-datospersonales.component.css']
})
export class ModalDatospersonalesComponent implements OnInit {
  modales:any;
  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(info => {
      this.modales = info.modales;
      }
    )
  }

}
