import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css']
})
export class AuctionListComponent implements OnInit {
  @Input() headerTitle: string;

  @Output() titleClicked = new EventEmitter<string>();

  onTitleClicked(event: MouseEvent): void {
    this.titleClicked.emit('Title clicked');
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}


