import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  //vamos a crear un metodo para que el servicio tome datos//
  getDatos(): Observable<any> {
    return this.http.get('./assets/db/basededatos.json');

  }
  //"../assets/img/fondoPaisaje.jpg"

}
