import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Red } from '../modelos/red';

@Injectable({
  providedIn: 'root'
})
export class RedService {
  url = 'https://portfolio-back-elke.onrender.com/red/';

  constructor(private http: HttpClient) { }

  public verRedes(): Observable<Red[]> {
    return this.http.get<Red[]>(this.url + 'ver');
  }

  public verRed(id: number): Observable<Red> {
    return this.http.get<Red>(this.url + `ver/${id}`);
  }

  public agregarRed(red: Red): Observable<any> {
    return this.http.post<any>(this.url + 'new', red);
  }

  public updateRed(red: Red): Observable<any> {
    return this.http.put<any>(this.url + 'update', red);
  }

  public eliminarRed(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
}
