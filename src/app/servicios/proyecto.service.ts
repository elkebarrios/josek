import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../modelos/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url = 'https://portfolio-back-elke.onrender.com/proyecto/';

  constructor(private http:HttpClient) { }

  public verProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.url+'ver');
      }

  public verProyecto(id:number): Observable<Proyecto> {
    return this.http.get<Proyecto>(this.url+`ver/${id}`);
          } 

  public agregarProyecto(pro:Proyecto): Observable<any> {
    return this.http.post<any>(this.url+'new', pro);
      }       
     
  public updateProyecto(pro:Proyecto): Observable<any> {
    return this.http.put<any>(this.url+'update', pro);
    } 

  public eliminarProyecto(id:number): Observable<any> {
    return this.http.delete<any>(this.url+`delete/${id}`);
          } 

}
