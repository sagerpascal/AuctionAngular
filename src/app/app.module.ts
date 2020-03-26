import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuctionListComponent } from './auction-list/auction-list.component';
import { MouseEventDisplayComponent } from './mouse-event-display/mouse-event-display.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuctionDataService} from './shared/auction-data.service';
import { AuctionListDetailComponent } from './auction-list-detail/auction-list-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AuctionListComponent,
    MouseEventDisplayComponent,
    AuctionListDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuctionDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
