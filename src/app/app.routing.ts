import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'auctions',
    loadChildren : () => import('./auction/auction.module').then(m => m.AuctionModule),
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];

export const routing = RouterModule.forRoot(routes);
