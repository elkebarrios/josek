import { Component, OnInit } from '@angular/core';
import { Red } from 'src/app/modelos/red';
import { RedService } from 'src/app/servicios/red.service';


@Component({
  selector: 'app-navar',
  templateUrl: './navar.component.html',
  styleUrls: ['./navar.component.css']
})
export class NavarComponent implements OnInit {
  redes:Red[]=[];
  usuarioAuth: boolean = false;
  constructor(private datos: RedService) { }

  ngOnInit(): void {
    this.datos.verRedes().subscribe(info => {
    this.redes = info;
    }
    )
  }

}
