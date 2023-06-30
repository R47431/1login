import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AposLoginComponent } from './pages/apos-login/apos-login.component';
import { CadastraComponent } from './pages/cadastra/cadastra.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'aposLogin', component: AposLoginComponent},
  {path: 'cadastra', component: CadastraComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
