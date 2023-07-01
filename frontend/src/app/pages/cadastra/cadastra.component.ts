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
    this.httpsSevice.cadastraUsuario(this.usuario).subscribe((data) => {
      this.usuarios.push(data);
      this.limpaFormulario;
      alert("cadastrado");
      this.mostraAlerta = true;
      setTimeout(() => {
        this.mostraAlerta = false;
      }, 2000);
    });
  }

  limpaFormulario(): void {
    this.usuario = new Usuario();
  }
}
