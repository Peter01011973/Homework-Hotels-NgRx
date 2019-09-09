import { Component } from '@angular/core';
import { HotelService } from 'src/app/shared/services/hotel.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent {
  public constructor(private hotelService: HotelService) { }
}
