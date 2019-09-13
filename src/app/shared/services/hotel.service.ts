import { Injectable } from '@angular/core';
import { hotels } from 'src/app/mock-data/hotels-list';
import { Hotel } from '../interfaces/hotel-interface';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of, Unsubscribable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WarningNotAddComponent } from '../dialogs/warning-not-add/warning-not-add.component';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  public selectedFavHotel: Hotel;
  public favoriteHotels$: Observable<Hotel[]> = of([]);
  public listHotels$: Observable<Hotel[]> = of(hotels);
  public selectedHotel: Hotel;

  public constructor(private dialog: MatDialog) {
    this.listHotels$.subscribe((hots: Hotel[]) => this.selectedHotel = hots[0]);
  }

  public changeHotel(selHotel: Hotel) {
    this.selectedHotel = selHotel;
  }

  public deleteHotelFromList(id: number): void {
    let list: Hotel[];
    let unsub: Unsubscribable;
    this.dialog.open(DeleteDialogComponent).afterClosed().subscribe(result => {
      if (result) {
        unsub = this.listHotels$
          .pipe(map((hots: Hotel[]) => hots.filter((cur: Hotel) => cur.id != id)))
          .subscribe((hots: Hotel[])=>list = hots);
        unsub.unsubscribe();
        this.listHotels$ = of(list);
      }
    });
  }
  
  public addToFavorite(favHot: Hotel) {
    let favHots: Hotel[]=[];
    this.favoriteHotels$.subscribe(hots => favHots = hots);
    (favHots.indexOf(favHot) == -1) ? this.favoriteHotels$ = of([...favHots,favHot]) : this.dialog.open(WarningNotAddComponent).afterClosed().subscribe(); 
  }

  public deleteFavoriteHotel(id: number) {
    let favHots: Hotel[] = [];
    this.favoriteHotels$.
      pipe(map((fHots: Hotel[]) => fHots.filter((cur: Hotel) => cur.id != id)))
      .subscribe((hots: Hotel[]) => favHots = hots);
    this.favoriteHotels$ = of(favHots);
  }

  public selectFavHotel(selHotel: Hotel) {
    this.selectedFavHotel = selHotel;
  }
}
