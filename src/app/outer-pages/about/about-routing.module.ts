import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutRootComponent } from './about-root/about-root.component';

const routes: Routes = [
  {
    path: '',
    component: AboutRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
