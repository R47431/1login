import { Component } from '@angular/core';
import { Usuario } from 'src/app/modelo/Usuario';
import { HttpsService } from 'src/app/service/https.service';

@Component({
  selector: 'app-cadastra',
  templateUrl: './cadastra.component.html',
  styleUrls: ['./cadastra.component.css']
})
export class CadastraComponent {
  usuario = new Usuario();
  usuarios: Usuario[]=[];

  mostraAlerta: boolean = false;

  constructor(private httpsSevice:HttpsService){}

  ngOnInit(){
    this.lista();
  }

  lista(): void {
    this.httpsSevice.listaUsuario()
    .subscribe(data => {
      this.usuarios = data;
      
    });
      
      
  }
  cadastra(): void {
    this.httpsSevice.cadastraUsuario(this.usuario).subscribe({
      next:(data) => {
        this.usuarios.push(data);
        alert('Usuário cadastrado com sucesso!');
      },
      error:(error) => {
        let senha = this.usuario.senha;
        
        if (senha === "") {
          alert('Por favor, preencha o campo de senha.');
        } else if (!/^[0-9]+$/.test(senha)) {
          alert('A senha não pode ser alfabética.');
        } else if (error.status === 400) {
          alert('Nome de usuário já está em uso');
        } else {
          alert('Erro ao cadastrar usuário. Por favor, tente novamente.');
        }
      },
      complete: () => {
        window.location.href='login';
      }
    });
  }

  limpaFormulario(): void {
    this.usuario = new Usuario();
  }
}
