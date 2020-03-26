import {Injectable} from '@angular/core';
import {Auction} from './auction';
import {AUCTION_DATA} from './auction-data';
import {Observable} from 'rxjs';
import { of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuctionDataService {

  private auctions: Auction[] = AUCTION_DATA;

  constructor(private httpClient: HttpClient) {
  }

  public getAuctions() {
    return this.auctions;
  }

  public getObservableAuctions(): Observable<Auction[]> {
    return of(this.auctions);
  }

  public getHttpAuctions(): Observable<Array<Auction>> {
    return this.httpClient.get<Array<Auction>>('http://localhost:4730/auctions');
  }
}
