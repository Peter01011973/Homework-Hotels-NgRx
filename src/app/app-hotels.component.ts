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

  changeHotel(id: number) {
       this.weather = this.hotels[id].weather;
        this.profile = this.hotels[id].profile;
  }

  changeListOfHotel(id: number) {
    this.hotels = this.hotels.filter((cur) => cur.id !== id);
  }
}
