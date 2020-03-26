import {Routes, RouterModule} from '@angular/router';
import {AuctionListComponent} from './auction-list/auction-list.component';
import {AuctionDetailComponent} from './auction-detail/auction-detail.component';

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
    },
    {
      path: 'auctions/:id',
      component: AuctionDetailComponent
    }
  ];

export const routing = RouterModule.forRoot(routes);
