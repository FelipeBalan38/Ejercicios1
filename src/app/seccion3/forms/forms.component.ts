import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Usuario } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private readonly usuarioService:UsuarioService) { }
  
  ngOnInit(): void {
    this.usuarioService.list().subscribe(usuarios=>{
      this.usuarios = [...usuarios];
    });
  }

  onSubmit(values:Usuario):void{
    this.addUsuario(values);
  }

  addUsuario(usuario:Usuario){
    this.usuarioService.create(usuario).subscribe(res=>{
        this.usuarios.push(usuario);
      });
  }

  deleteUsuario(id:String){
    //console.log("id de usuario ->"+id);
    if(confirm('¿Desea eliminar al usuario?')){
      this.usuarioService.deleteUser(id).subscribe(() => {
        const tempArr = this.usuarios.filter(usuario => usuario._id !== id);
        this.usuarios = [...tempArr];
      });
    }
  }

  updateUsuario(usuario:Usuario){
    //console.log("id de usuario ->"+usuario._id)
    this.usuarioService.updateUser(usuario).subscribe(res =>{
      //const tempArr = this.usuarios.filter(values => values._id !== usuario._id);
      //this.usuarios = [...tempArr,usuario];
      console.log("Entro");
    })
  }

  editUsuario(id:String, change:Usuario):void{
    console.log(id);
    console.log(change);
    change._id = id;
    this.updateUsuario(change)
  }

}
