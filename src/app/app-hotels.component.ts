import { Component } from '@angular/core';
import { hotels } from "src/hotels-list";
import { Hotel } from "src/hotels-list-interface";


@Component({
  selector: 'app-root',
  templateUrl: './app-hotels.component.html',
  styleUrls: ['./app-hotels.component.css']
})
export class AppComponent {
  hotels: Hotel[] = hotels;
  
}
