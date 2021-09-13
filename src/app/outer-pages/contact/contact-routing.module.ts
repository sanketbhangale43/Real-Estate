import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactRootComponent } from './contact-root/contact-root.component';

const routes: Routes = [
  {
    path: '',
    component: ContactRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
