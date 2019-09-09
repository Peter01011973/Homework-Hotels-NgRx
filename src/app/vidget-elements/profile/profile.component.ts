import { Component } from '@angular/core';
import { HotelService } from 'src/app/shared/services/hotel.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  public constructor(private hotelService: HotelService) { }
}
