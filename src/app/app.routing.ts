import {Routes, RouterModule} from '@angular/router';
import {AuctionListComponent} from './auction-list/auction-list.component';

export const routes: Routes =
  [
    {
      path: 'auctions',
      component: AuctionListComponent
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: '/auctions'
    }
  ];

export const routing = RouterModule.forRoot(routes);
