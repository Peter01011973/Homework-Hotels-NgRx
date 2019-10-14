import { Component, OnInit } from '@angular/core';
import { HotelStars } from 'src/app/shared/interfaces/stars-interface';
import { hotelsStars } from 'src/app/mock-data/hotelStars';
import { HotelService } from 'src/app/shared/services/hotel.service';
import { Observable } from 'rxjs';
import { Hotel, Hotels } from 'src/app/shared/interfaces/hotel-interface';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.state';
import { ChangeSelectedHotel } from 'src/app/redux/hotels.actions';

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
  public hotelsNgRx$: Observable<Hotels>;
      
  public constructor(private hotelService: HotelService, public _router: Router, private store: Store<AppState>) { }
  
  public ngOnInit() {
    this.hotelService.getHotels(this.byStars);
    this.hotelsNgRx$ = this.store.select('hotelspage');
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

  public hotelDetail(selHotel: Hotel):void {
    this._router.navigate(['hotels',selHotel.id]);
  }
  
  public changeHotel(selHotel: Hotel): void {
    this.store.dispatch(ChangeSelectedHotel(selHotel));
  }

  public deleteHotelFromList(hotel: Hotel): void {
    this.hotelService.deleteHotelFromList(hotel).subscribe(()=>console.log('Deleted!'));
  }

  public addHotelToFav(hotel: Hotel):void {
    
    this.hotelService.addFavoriteHotelEvent$$.next(hotel);;
  }

  public changeStars() {
    this.hotelService.getHotels(this.byStars);
  }
}
