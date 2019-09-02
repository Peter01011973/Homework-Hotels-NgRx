import { Component } from '@angular/core';
import { hotels } from 'src/hotels-list';
import { Hotel } from 'src/hotels-list-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app-hotels.component.html',
  styleUrls: ['./app-hotels.component.css']
})
export class AppComponent {
  public hotels: Hotel[] = hotels;
  public hotel: Hotel = this.hotels[0];
  public favoriteHotels: Hotel[] = [];

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
    // this.hotels=this.hotels.filter(cur => cur.id != id);
    this.hotels = newArr;

    if ( deletedItemPos ) { deletedItemPos --; }
    if ( this.hotels.length === 0 ) {
     } else {
      this.hotel = this.hotels[deletedItemPos];
    }
  }

  addToFavorite(id: number) {
    this.favoriteHotels = [...this.favoriteHotels,this.hotels[id]];
  }
}
