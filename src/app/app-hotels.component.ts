import { Component } from '@angular/core';
import { hotels } from 'src/hotels-list';
import { Hotel } from 'src/hotels-list-interface';
import { MatDialog} from '@angular/material/dialog';
import { WarningNotAddComponent } from './shared/dialogs/warning-not-add/warning-not-add.component';


@Component({
  selector: 'app-root',
  templateUrl: './app-hotels.component.html',
  styleUrls: ['./app-hotels.component.css']
})
export class AppComponent {
  public hotels: Hotel[] = hotels;
  public hotel: Hotel = this.hotels[0];
  public favoriteHotels: Hotel[] = [];

  constructor(public dialog: MatDialog) {}

  changeHotel(id: number) {
    this.hotel = this.hotels[this.hotels.findIndex(item => item.id === id)];
  }

  deleteHotelFromList(id: number) {
    let newArr: Hotel[] = [];
    let i = 0;
    let deletedItemPos = 0;
    for (const item of this.hotels) {
      (item.id === id) ? deletedItemPos = i : newArr = [...newArr, item];
      i++;
    }
    this.hotels = newArr;

    if ( deletedItemPos ) { deletedItemPos --; }
    if ( this.hotels.length === 0 ) {
     } else {
      this.hotel = this.hotels[deletedItemPos];
    }
  }

  addToFavorite(id: number) {
    (this.favoriteHotels.indexOf(this.hotels[id]) == -1) ? 
    this.favoriteHotels = [...this.favoriteHotels,this.hotels[id]]
    : this.dialog.open(WarningNotAddComponent).afterClosed().subscribe();
  }

  deleteFavoriteHotel(id: number) {
    this.favoriteHotels=this.favoriteHotels.filter(cur => cur.id != id);
  }
}
