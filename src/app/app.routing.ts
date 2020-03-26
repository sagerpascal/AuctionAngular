import {Routes, RouterModule} from '@angular/router';
import {AuctionListComponent} from './auction-list/auction-list.component';

export const routes: Routes = [{
  path: 'auctions',
  component: AuctionListComponent
}];

export const routing = RouterModule.forRoot(routes);
