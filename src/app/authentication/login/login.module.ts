import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { NavbarsModule } from 'src/app/navbars/navbars.module';
import { LoginCardComponent } from './login-card/login-card.component';
import { LoginRootComponent } from './login-root/login-root.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    LoginRootComponent,
    LoginCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NavbarsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
