import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = 'https://portfolio-back-elke.onrender.com/persona/';
  constructor(private http:HttpClient) { }

  public verPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url+'ver');
      }

  public verPersona(id:number): Observable<Persona> {
    return this.http.get<Persona>(this.url+`ver/${id}`);
          } 

  public agregarPersona(per:Persona): Observable<any> {
    return this.http.post<any>(this.url+'new', per);
      }       
     
  public updatePersona(per:Persona): Observable<any> {
    return this.http.put<any>(this.url+'update', per);
    } 

  public eliminarPersona(id:number): Observable<any> {
    return this.http.delete<any>(this.url+`delete/${id}`);
          } 

}
