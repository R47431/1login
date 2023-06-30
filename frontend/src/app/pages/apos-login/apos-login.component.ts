import { Component } from '@angular/core';
import { Usuario } from 'src/app/modelo/Usuario';
import { HttpsService } from 'src/app/service/https.service';

@Component({
  selector: 'app-apos-login',
  templateUrl: './apos-login.component.html',
  styleUrls: ['./apos-login.component.css']
})
export class AposLoginComponent {
  usuarios:Usuario[] = [];
  usuario = new Usuario;

  constructor(private usuarioAposLogin: HttpsService){ }

  ngOnInit(): void{
    this.lista();
  } 

  lista(): void {
    this.usuarioAposLogin.listaUsuario()
    .subscribe(data => {
      this.valida();
      this.usuarios = data;
      
    });
      
      
  }

  valida(): void {
    if(this.usuario.logado === false){
      this.usuarios = this.usuarios.filter(usuario => !usuario.logado);
    }
  }
}
