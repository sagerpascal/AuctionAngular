import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AngularDateHttpInterceptor} from './shared/angular-date-http-interceptor.component';
import {routing} from './app.routing';
import {HelperService} from './shared/helper.service';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [AppComponent, NavBarComponent, HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AngularDateHttpInterceptor,
      multi: true
    },
    HelperService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
