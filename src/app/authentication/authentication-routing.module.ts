import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    data: { preload: true },
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },

  {
    path: 'signup',
    pathMatch: 'full',
    data: { preload: true },
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
