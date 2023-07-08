import { Component } from '@angular/core';
import { Usuario } from 'src/app/modelo/Usuario';
import { HttpsService } from 'src/app/service/https.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario = new Usuario();
  usuarios: Usuario[] = [];
  

  constructor(
    private httpsSevice: HttpsService,
    private storage: StorageService
    ) {}

  ngOnInit(): void {
    this.storag();
  }

  login(): void {
    this.httpsSevice.login(this.usuario).subscribe({
      next: (data) => {
        let nome = this.usuario.nome;
        let senha = this.usuario.senha;
      
        if (nome && senha) {
          window.location.href = '/aposLogin';
        } else {
          alert('Por favor, preencha o nome e a senha corretamente.');
        }

      },
      error: (error) => {
        if (error.status === 400) {
          alert('Nome ou Senha Incorretos');
        }else  if(this.storage.get('cadastrado') === "false"){
          alert('usuario nao cadastrado');
        }else{
          alert('Erro ao usuário. Por favor, tente novamente.');
        }
      },
    });
  }

  storag():void {
    if(this.storage.get('cadastrado') === 'true') {
      window.location.href = '/aposLogin';
    }
  }
}
