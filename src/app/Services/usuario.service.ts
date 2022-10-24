import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Usuario} from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario!: Usuario
  private readonly url = 'https://crudcrud.com/api/7eefce7654c145e1b2fafc64431473e8/usuarios'; 
  constructor(private readonly http:HttpClient) { }

  create(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url,usuario)
  }

  list():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url)
  }
  
  listOne(id:String):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/${id}`)
  }

  update(usuario:Usuario):Observable<void>{
    return this.http.put<void>(`${this.url}/${usuario.id}`,usuario)
  }

  deleteUser(id:String):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }
}
