import { Component } from '@angular/core';
import { Usuario } from 'src/app/modelo/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = new Usuario();

  campoInvalido ={
    nome:false,
    senha:false,
    boolean:false
  }

  constructor() {}
  
  ngOnInit(): void {
    
  }

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

  validaCampo(campo: string): boolean {
    if(campo === 'nome'){
        this.campoInvalido.nome = this.usuario.nome ==='';
        return !this.campoInvalido.nome;
    }else if (campo === 'senha') {
        this.campoInvalido.senha = this.usuario.senha === null;
        return !this.campoInvalido.senha;
    }else if (campo === 'acesso'){

      return !this.campoInvalido.boolean;
    }else{
        alert('campo invalidos');
        return false
    }

  }
}
