import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { InnerNavbarComponent } from './inner-navbar/inner-navbar.component';
import { OuterNavbarComponent } from './outer-navbar/outer-navbar.component';



@NgModule({
  declarations: [
    InnerNavbarComponent,
    OuterNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    InnerNavbarComponent,
    OuterNavbarComponent
  ]
})
export class NavbarsModule { }
