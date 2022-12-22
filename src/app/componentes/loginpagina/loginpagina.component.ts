import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-loginpagina',
  templateUrl: './loginpagina.component.html',
  styleUrls: ['./loginpagina.component.css']
})
export class LoginpaginaComponent implements OnInit {
form:FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

}
