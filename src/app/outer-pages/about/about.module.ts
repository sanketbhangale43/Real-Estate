import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { NavbarsModule } from 'src/app/navbars/navbars.module';
import { AboutContentComponent } from './about-content/about-content.component';
import { AboutRootComponent } from './about-root/about-root.component';
import { AboutRoutingModule } from './about-routing.module';



@NgModule({
  declarations: [
    AboutRootComponent,
    AboutContentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NavbarsModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
