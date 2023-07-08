import { Component } from '@angular/core';
import { Usuario } from 'src/app/modelo/Usuario';
import { HttpsService } from 'src/app/service/https.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-apos-login',
  templateUrl: './apos-login.component.html',
  styleUrls: ['./apos-login.component.css']
})
export class AposLoginComponent {
  usuarios:Usuario[] = [];
  usuario = new Usuario;

  constructor(private usuarioAposLogin: HttpsService,
    private storage: StorageService
    ){ }

  ngOnInit(): void{
    this.lista();
  } 

  lista(): void {
    this.usuarioAposLogin.listaUsuario()
    .subscribe(data => {
      if(this.storage.get('cadastrado') === "true"){
        this.usuarios = data;
      }else{
        alert('usuario nao cadastrado');
      }
      
    });
  }
  
}
