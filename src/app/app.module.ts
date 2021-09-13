import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddTokenInterceptor } from './add-token.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavbarsModule } from './navbars/navbars.module';
import { OuterPagesRoutingModule } from './outer-pages/outer-pages-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    /* --------------------------- App routing modules -------------------------- */
    // Outer pages
    OuterPagesRoutingModule
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
    NavbarsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
