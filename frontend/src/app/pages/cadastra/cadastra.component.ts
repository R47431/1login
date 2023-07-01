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
  cadastrar(): void {
    this.httpsSevice.cadastraUsuario(this.usuario).subscribe(
      (data) => {
        this.usuarios.push(data);
        this.limpaFormulario();
        alert('Usuário cadastrado com sucesso!');
      },
      (error) => {
        if (error.status === 400 && error.error === 'Nome de usuário em uso') {
          alert('Nome de usuário já está em uso. Por favor, escolha outro nome.');
        } else {
          alert('Erro ao cadastrar usuário. Por favor, tente novamente.');
        }
      }
    );
  }

  limpaFormulario(): void {
    this.usuario = new Usuario();
  }
}
