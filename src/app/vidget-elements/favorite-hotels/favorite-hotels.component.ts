import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/shared/services/hotel.service';
import { Hotel } from 'src/app/shared/interfaces/hotel-interface';
import { Observable, of } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.css']
})
export class FavoriteHotelsComponent implements OnInit{
  public pageParams: Partial<PageEvent> = {
    pageIndex: 1,
    pageSize: 3
  }
  public favoriteHotels$: Observable<Hotel[]>;
  public constructor(private hotelService: HotelService) {}  

  public ngOnInit() {
    // .pipe(tap(hotels => this.hotelService.selectedHotel=hotels[0]))
    this.favoriteHotels$=this.hotelService.getFavHotels(this.pageParams);    
  }

  public deleteFavoriteHotel(id: number):void {
    this.hotelService.deleteFavorite(id).subscribe();;
    this.refreshFavHotel();    
  }

  public refreshFavHotel():void {
    this.favoriteHotels$= this.hotelService.getFavHotels(this.pageParams);
  }

  public changePage(event: PageEvent):void {
    this.pageParams={...event,pageIndex: event.pageIndex+1};
    this.refreshFavHotel();
  }
}
