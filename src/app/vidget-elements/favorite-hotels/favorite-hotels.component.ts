import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Hotel } from 'src/app/shared/interfaces/hotels-list-interface';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.css']
})
export class FavoriteHotelsComponent {
  @Input() public favoriteHotels: Hotel[];
  @Output() public deleteFavHotel: EventEmitter<number> = new EventEmitter();
  public selectedFavHotel: Hotel;

  deleteFavorite(id: number) {
    this.deleteFavHotel.emit(id);
  }

  select(selHotel: Hotel) {
    this.selectedFavHotel = selHotel;
  }
}
