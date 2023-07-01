import { Component } from '@angular/core';
import { Usuario } from 'src/app/modelo/Usuario';
import { HttpsService } from 'src/app/service/https.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario = new Usuario();
  usuarios: Usuario[] = [];

  mostraAlerta: boolean = false;

  constructor(private httpsSevice: HttpsService) {}

  ngOnInit(): void {}

 


  login(): void {
    this.httpsSevice.login(this.usuario)
      .subscribe(data => {
        let nome = this.usuario.nome;
        let senha = this.usuario.senha;
        if (nome && senha) {
          window.location.href = '/aposLogin';
        } else {
          alert('Por favor, preencha o nome e a senha corretamente.');
        }
      });
  }

  

  /*
  login(): void {
    let validaNome = this.validaCampo('nome');
    let validaSenha = this.validaCampo('senha');
    let validaAcesso = this.validaCampo('acesso'); 
    

    if (validaNome && validaSenha && validaAcesso === true) {
      window.location.href = '/aposLogin';
    } else {
      alert('Por favor, preencha o nome e o senha corretamente.');
    }
  }
*/

}
