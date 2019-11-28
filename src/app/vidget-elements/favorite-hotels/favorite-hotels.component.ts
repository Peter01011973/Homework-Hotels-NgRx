import { Component, OnInit, OnDestroy } from '@angular/core';
import { HotelService } from 'src/app/shared/services/hotel.service';
import { Hotel, FavoriteHotels } from 'src/app/shared/interfaces/hotel-interface';
import { Observable, Subscription, Subject } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { ChangeSelectedFavHotel } from 'src/app/redux/hotels.actions';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.css']
})
export class FavoriteHotelsComponent implements OnInit, OnDestroy{
  public pageParams: Partial<PageEvent> = {
    pageIndex: 1,
    pageSize: 10
  }
  public lengthFanHotels$$ = new Subject<number>();
  public favoriteHotels$: Observable<Hotel[]>;
  public favoriteHotelsNgRx$: Observable<FavoriteHotels>;
  public subscription: Subscription;

  public constructor(
    public hotelService: HotelService, 
    private store: Store<AppState>
  ) {}  

  public ngOnInit() {
    this.refreshFavHotel();
    this.favoriteHotelsNgRx$ = this.store.select('hotelspage');
    this.subscription = this.hotelService.addFavoriteHotelEvent$$.subscribe((hotel:Hotel)=> this.addHotelToFavorite(hotel)); 
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public deleteFavoriteHotel(hotel: Hotel): void {
    this.hotelService.deleteFavorite(hotel).subscribe();
    this.refreshFavHotel();    
  }

  public selectFavHotel(selHotel: Hotel): void {
    this.store.dispatch(ChangeSelectedFavHotel(selHotel));
  }

  public refreshFavHotel(): void {
    this.hotelService.getFavHotels(this.pageParams);
    this.lengthFanHotels$$ = this.hotelService.lengthFan$$;
  }

  public changePage(event: PageEvent): void {
    this.pageParams={...event,pageIndex: event.pageIndex+1};
    console.log('the pagination has been changed!');
    this.refreshFavHotel();
  }

  public addHotelToFavorite(hotel: Hotel): void {
    this.hotelService.addToFavorite(hotel);
    this.refreshFavHotel();
  }
}
