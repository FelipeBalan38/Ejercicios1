import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Usuario} from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario!: Usuario
  url = 'http://localhost:4000/Usuarios'; 
  constructor(http:HttpClient) { }
}
