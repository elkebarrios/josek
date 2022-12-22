import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-modal-banner',
  templateUrl: './modal-banner.component.html',
  styleUrls: ['./modal-banner.component.css']
})
export class ModalBannerComponent implements OnInit {

  modalesbanner:any;
  
  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(info => {
      this.modalesbanner = info.modalesbanner;
      }
    )
  }

}
