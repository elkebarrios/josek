import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-loginpagina',
  templateUrl: './loginpagina.component.html',
  styleUrls: ['./loginpagina.component.css']
})

export class LoginpaginaComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authservice: AuthService, private router: Router) {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      }
    )

  }


  ngOnInit(): void {
  }
  login() {
    console.log(this.form.value);
    this.authservice.login(this.form.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['dashboard']);
      })
      .catch(error => console.error(error));
  }


}
