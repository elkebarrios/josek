import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hard } from '../modelos/hard';

@Injectable({
  providedIn: 'root'
})
export class HardService {

  url = 'http://localhost:8080/hard/';
  constructor(private http:HttpClient) { }

  public verHards(): Observable<Hard[]> {
    return this.http.get<Hard[]>(this.url+'ver');
      }

  public verHard(id:number): Observable<Hard> {
    return this.http.get<Hard>(this.url+`ver/${id}`);
          } 

  public agregarHard(hard:Hard): Observable<any> {
    return this.http.post<any>(this.url+'new', hard);
      }       
     
  public updateHard(hard:Hard): Observable<any> {
    return this.http.put<any>(this.url+'update', hard);
    } 

  public eliminarHard(id:number): Observable<any> {
    return this.http.delete<any>(this.url+`delete/${id}`);
          } 

}
