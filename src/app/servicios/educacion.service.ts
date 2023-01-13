import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../modelos/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  //agregar url para conectar con el backend
  url = 'https://portfolio-back-elke.onrender.com/educacion/';
  //vamos a inyectar constructor de service e importamos
  constructor(private http:HttpClient) { }
  //vamos a declarar los metodos

  //crear metodos, pueden ser get put etc
  public verEducaciones(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.url+'ver');
      }

  public verEducacion(id:number): Observable<Educacion> {
    return this.http.get<Educacion>(this.url+`ver/${id}`);
          } 

  public agregarEducacion(edu:Educacion): Observable<any> {
    return this.http.post<any>(this.url+'new', edu);
      }       
     
  public updateEducacion(edu:Educacion): Observable<any> {
    return this.http.put<any>(this.url+'update', edu);
    } 

  public eliminarEducacion(id:number): Observable<any> {
    return this.http.delete<any>(this.url+`delete/${id}`);
          } 
         




    }
