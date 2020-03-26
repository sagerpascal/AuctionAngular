import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AuctionListComponent} from './auction-list/auction-list.component';
import {MouseEventDisplayComponent} from './mouse-event-display/mouse-event-display.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuctionDataService} from './shared/auction-data.service';
import {AuctionListDetailComponent} from './auction-list-detail/auction-list-detail.component';
import {AngularDateHttpInterceptor} from './shared/angular-date-http-interceptor.component';
import {routing} from './app.routing';

@NgModule({
  imports: [
    routing
  ]
})

@NgModule({
  declarations: [
    AppComponent,
    AuctionListComponent,
    MouseEventDisplayComponent,
    AuctionListDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AngularDateHttpInterceptor,
      multi: true
    }, AuctionDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
