import { Component } from '@angular/core';
import { HotelStars } from 'src/app/shared/interfaces/stars-interface';
import { hotelsStars } from 'src/app/mock-data/hotelStars';
import { HotelService } from 'src/app/shared/services/hotel.service';

@Component({
  selector: 'app-list-of-hotel',
  templateUrl: './list-of-hotel.component.html',
  styleUrls: ['./list-of-hotel.component.css']
})

export class ListOfHotelComponent {
  public navORsearch: boolean = true;
  public hotelsStars: HotelStars[] = hotelsStars;
  public byName: string = '';
  public byDescription: string = '';
  
   public constructor(private hotelService: HotelService) { }

  public searchingByName(value: string): void {
    this.byName = value;
  }
  public searchingByDescription(value: string): void {
    this.byDescription = value;
  }
  public switchSearchOnOff(): void {
    this.navORsearch = !this.navORsearch;
  }
}
