import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Usuario} from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario!: Usuario
  private readonly url = 'https://crudcrud.com/api/8345ffa2f6d34f209fc9899d2b2760da/usuarios'; 
  constructor(private readonly http:HttpClient) { }

  list():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url)
  }
  create(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url,usuario)
  }

}
