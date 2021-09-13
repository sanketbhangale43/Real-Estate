import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { NavbarsModule } from 'src/app/navbars/navbars.module';
import { SignupCardComponent } from './signup-card/signup-card.component';
import { SignupRootComponent } from './signup-root/signup-root.component';
import { SignupRoutingModule } from './signup-routing.module';



@NgModule({
  declarations: [
    SignupRootComponent,
    SignupCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NavbarsModule,
    SignupRoutingModule
  ]
})
export class SignupModule { }
