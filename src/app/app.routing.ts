import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'auctions',
    loadChildren: './auction/auction.module#AuctionModule'
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];
export const routing = RouterModule.forRoot(routes);
