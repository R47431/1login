import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/Usuario';

@Injectable({
  providedIn: 'root',
})
export class HttpsService {
  private url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  listaUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}`);
  }

 login(usuario: Usuario): Observable<any> {
 
    return this.http.post<Usuario>(`${this.url}/login`,usuario);
  } 

  cadastraUsuario(usuario:Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}`, usuario);
  }

  /*
  alteraUsuario(id:number): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.url}/${id}`,Usuario);
  }
  

  deletaUsuario(id:number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`)
  }
  */
}
