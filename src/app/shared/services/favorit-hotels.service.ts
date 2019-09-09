import { Injectable } from '@angular/core';
import { Hotel } from '../interfaces/hotel-interface';
import { HotelService } from './hotel.service';
import { MatDialog } from '@angular/material/dialog';
import { WarningNotAddComponent } from '../dialogs/warning-not-add/warning-not-add.component';

@Injectable({
  providedIn: 'root'
})
export class FavoritHotelsService {
  public selectedFavHotel: Hotel;
  public favoriteHotels: Hotel[] = [];

  constructor(private hotelService: HotelService, public dialog: MatDialog) { }

  public addToFavorite(id: number) {
    (this.favoriteHotels.indexOf(this.hotelService.listHotels[id]) == -1) ? 
    this.favoriteHotels = [...this.favoriteHotels,this.hotelService.listHotels[id]]
    : this.dialog.open(WarningNotAddComponent).afterClosed().subscribe();
  }

  public deleteFavoriteHotel(id: number) {
    this.favoriteHotels=this.favoriteHotels.filter(cur => cur.id != id);
  }

  public selectFavHotel(selHotel: Hotel) {
    this.selectedFavHotel = selHotel;
  }
}
