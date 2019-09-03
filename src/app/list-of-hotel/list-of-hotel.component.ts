import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from 'src/hotels-list-interface';
import { MatDialog} from '@angular/material/dialog';
import { DeleteDialogComponent } from '../shared/dialogs/delete-dialog/delete-dialog.component';

export interface HotelStars {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-list-of-hotel',
  templateUrl: './list-of-hotel.component.html',
  styleUrls: ['./list-of-hotel.component.css']
})
export class ListOfHotelComponent {

  @Input() public listOfHotels: Hotel[];
  @Input() public picture: string;

  @Output() public selectHotel: EventEmitter<number> = new EventEmitter();
  @Output() public deleteHotel: EventEmitter<number> = new EventEmitter();
  @Output() public addToFavorite: EventEmitter<number> = new EventEmitter();

  public navORsearch: boolean = true;

  avatarUrl = 'url("/assets/images/res.jpg")';

  hotelsStars: HotelStars[] = [
    { value: 0, viewValue: 'all hotels' },
    { value: 3, viewValue: '***' },
    { value: 4, viewValue: '****' },
    { value: 5, viewValue: '*****' }
  ];

  public byName: string = "";
  public byDescription: string = "";
  public byStars: number = 0;

  constructor(public dialog: MatDialog) { }

  select(id: number) {
    this.selectHotel.emit(id);
  }

  delete(id: number) {
    const refDialog = this.dialog.open(DeleteDialogComponent);
    refDialog.afterClosed().subscribe(result => { if (result) { this.deleteHotel.emit(id); } });
  }

  SearchingClose() {
    this.navORsearch = !this.navORsearch;
  }

  SearchingByName(value: string) {
    this.byName = value;
  }

  SearchingByDescription(value: string) {
    this.byDescription = value;
  }

  switchSearchOn() {
    this.navORsearch = !this.navORsearch;
  }

  chooseFavorite(id: number) {
    this.addToFavorite.emit(id);
  }
}
