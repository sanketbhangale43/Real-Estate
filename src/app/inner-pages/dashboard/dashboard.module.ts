import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { NavbarsModule } from 'src/app/navbars/navbars.module';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { DashboardRootComponent } from './dashboard-root/dashboard-root.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    DashboardRootComponent,
    DashboardContentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NavbarsModule,
    HttpClientModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
