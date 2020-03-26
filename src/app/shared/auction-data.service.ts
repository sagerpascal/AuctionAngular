import { Injectable } from '@angular/core';
import {Auction} from './auction';
import {AUCTION_DATA} from './auction-data';
import {Observable, of} from 'rxjs';

@Injectable()
export class AuctionDataService {

  private auctions: Auction[] = AUCTION_DATA;

  constructor() { }

  public getAuctions() {
    return this.auctions;
  }

  getObservableAuctions(): Observable<Auction[]> {
    return of(this.auctions);
  }
}
