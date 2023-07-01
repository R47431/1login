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
    this.httpsSevice.login(this.usuario).subscribe(
      (data) => {
        let nome = this.usuario.nome;
        let senha = this.usuario.senha;

        if (nome && senha) {
          window.location.href = '/aposLogin';
        } else {
          alert('Por favor, preencha o nome e a senha corretamente.');
        }
      },
      (error) => {
        if (error.status === 400) {
          alert('Nome ou Senha Incorretos');
        } else {
          alert('Erro ao usuário. Por favor, tente novamente.');
        }
      }
    );
  }
}
