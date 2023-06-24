import { Injectable } from '@angular/core';
import { Usuario } from '../modelo/Usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AposLoginService {

  private url:string = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  listaUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}`);
  }

  validaNomeDoUsuario():  Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/acesso`)
  }
}
