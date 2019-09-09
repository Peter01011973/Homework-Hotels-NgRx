import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from 'src/app/shared/interfaces/hotels-list-interface';
import { MatDialog} from '@angular/material/dialog';
import { DeleteDialogComponent } from '../../shared/dialogs/delete-dialog/delete-dialog.component';
import { HotelStars } from 'src/app/shared/interfaces/stars-interface';
import { hotelsStars } from 'src/app/mock-data/hotelStars';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-of-hotel',
  templateUrl: './list-of-hotel.component.html',
  styleUrls: ['./list-of-hotel.component.css']
})

export class ListOfHotelComponent {

  @Input() public listOfHotels: Hotel[];
  @Input() public picture: string;
  @Input() public selHotel: Hotel;


  @Output() public selectHotel: EventEmitter<number> = new EventEmitter();
  @Output() public deleteHotel: EventEmitter<number> = new EventEmitter();
  @Output() public addToFavorite: EventEmitter<number> = new EventEmitter();

  public navORsearch: boolean = true;

  public hotelsStars: HotelStars[] = hotelsStars;

  public byName: string = '';
  public byDescription: string = '';
  public byStars: number = 0;

  public constructor(public dialog: MatDialog) { }

  public select(id: number): void {
    this.selectHotel.emit(id);
  }

  public delete(id: number): void {
    this.dialog.open(DeleteDialogComponent).afterClosed().subscribe(result => { if (result) { this.deleteHotel.emit(id); } });
  }

  public searchingClose(): void {
    this.navORsearch = !this.navORsearch;
  }

  public searchingByName(value: string): void {
    this.byName = value;
  }

  public searchingByDescription(value: string): void {
    this.byDescription = value;
  }

  public switchSearchOn(): void {
    this.navORsearch = !this.navORsearch;
  }

  public chooseFavorite(id: number): void {
    this.addToFavorite.emit(id);
  }
}
