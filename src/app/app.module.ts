import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTokenInterceptor } from './add-token.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationRoutingModule } from './authentication/authentication-routing.module';
import { InnerPagesRoutingModule } from './inner-pages/inner-pages-routing.module';
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
    BrowserAnimationsModule,

    /* --------------------------- App routing modules -------------------------- */
    // Outer pages
    OuterPagesRoutingModule,

    // Inner pages
    InnerPagesRoutingModule,

    // Authentication
    AuthenticationRoutingModule
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
