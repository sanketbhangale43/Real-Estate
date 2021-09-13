import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { NavbarsModule } from 'src/app/navbars/navbars.module';
import { ContactContentComponent } from './contact-content/contact-content.component';
import { ContactRootComponent } from './contact-root/contact-root.component';
import { ContactRoutingModule } from './contact-routing.module';



@NgModule({
  declarations: [
    ContactRootComponent,
    ContactContentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NavbarsModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
