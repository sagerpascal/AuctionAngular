import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css']
})
export class AuctionListComponent implements OnInit {
  @Input() headerTitle: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}


