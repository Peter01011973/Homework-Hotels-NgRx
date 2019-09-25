import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HotelStars } from 'src/app/shared/interfaces/stars-interface';
import { hotelsStars } from 'src/app/mock-data/hotelStars';
import { HotelService } from 'src/app/shared/services/hotel.service';
import { Observable, of, from } from 'rxjs';
import { Hotel } from 'src/app/shared/interfaces/hotel-interface';
import { tap } from 'rxjs/operators';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-list-of-hotel',
  templateUrl: './list-of-hotel.component.html',
  styleUrls: ['./list-of-hotel.component.css']
})

export class ListOfHotelComponent implements OnInit {
  public navORsearch: boolean = true;
  public hotelsStars: HotelStars[] = hotelsStars;
  public byName: string = '';
  public byDescription: string = '';
  public byStars: number = 0;
  public hotels$: Observable<Hotel[]>;
  
  public constructor(private hotelService: HotelService) { }

  public ngOnInit() {
    this.hotels$=this.hotelService.getHotels(this.byStars).pipe(tap(hotels => this.hotelService.selectedHotel=hotels[0]))

  }

  public searchingByName(value: string): void {
    this.byName = value;
  }
  public searchingByDescription(value: string): void {
    this.byDescription = value;
  }
  public switchSearchOnOff(): void {
    this.navORsearch = !this.navORsearch;
  }
  
  public changeHotel(selHotel: Hotel) {
    this.hotelService.selectedHotel = selHotel;
  }

  public deleteHotelFromList(id: number): void {
    this.hotelService.deleteHotelFromList(id).subscribe(()=>console.log('Deleted!'));
    this.hotels$ = this.hotelService.getHotels(this.byStars);
  }

  public addHotelToFavorite(hotel: Hotel):void {
    this.hotelService.addToFavorite(hotel).subscribe((data: Hotel) => {
          console.log('success created', data);
        });
  }

  public changeStars() {
    this.hotels$ = this.hotelService.getHotels(this.byStars);
  }
}
