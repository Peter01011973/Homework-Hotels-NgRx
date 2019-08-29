import { Component } from '@angular/core';
import { hotels } from 'src/hotels-list';
import { Hotel } from 'src/hotels-list-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app-hotels.component.html',
  styleUrls: ['./app-hotels.component.css']
})
export class AppComponent {
  hotels: Hotel[] = hotels;
  weather = this.hotels[0].weather;
  profile = this.hotels[0].profile;
  picture = this.hotels[0].picture;
  selected = 0;

  changeHotel(id: number) {
    let i = 0;
    for (const item of this.hotels) {
      if (item.id === id) { this.selected = i; }
      i++;
    }
    this.weather = this.hotels[this.selected].weather;
    this.profile = this.hotels[this.selected].profile;
    this.picture = this.hotels[this.selected].picture;
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
      this.weather.temperature = 0;
      this.weather.wind = 0;
      this.profile.followers = 0;
      this.profile.following = 0;
    } else {
      this.weather = this.hotels[deletedItemPos].weather;
      this.profile = this.hotels[deletedItemPos].profile;
    }
  }
}
