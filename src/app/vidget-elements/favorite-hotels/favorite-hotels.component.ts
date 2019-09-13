import { Component } from '@angular/core';
import { HotelService } from 'src/app/shared/services/hotel.service';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.css']
})
export class FavoriteHotelsComponent {

  public constructor(private hotelService: HotelService) { }  
}
