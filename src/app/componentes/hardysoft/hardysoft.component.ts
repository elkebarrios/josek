import { Component, OnInit } from '@angular/core';
import { Hard } from 'src/app/modelos/hard';
import { HardService } from 'src/app/servicios/hard.service';


@Component({
  selector: 'app-hardysoft',
  templateUrl: './hardysoft.component.html',
  styleUrls: ['./hardysoft.component.css']
})
export class HardysoftComponent implements OnInit {
  hardSkills: Hard[] = [];
  constructor(private datos: HardService) { }

  ngOnInit(): void {
    this.datos.verHards().subscribe(info => {
      this.hardSkills = info;
    }
    )
  }
}
