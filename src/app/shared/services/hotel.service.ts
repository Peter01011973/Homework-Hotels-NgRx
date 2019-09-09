import { Injectable } from '@angular/core';
import { hotels } from 'src/app/mock-data/hotels-list';
import { Hotel } from '../interfaces/hotel-interface';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  public listHotels: Hotel[] = hotels;
  public selectedHotel: Hotel = hotels[0];

  public constructor(private dialog: MatDialog) { }

  public changeHotel(selHotel: Hotel) {
    this.selectedHotel = selHotel;
  }

  public deleteHotelFromList(id: number): void {
    this.dialog.open(DeleteDialogComponent).afterClosed().subscribe(result => 
      { if (result) { this.listHotels=this.listHotels.filter(cur => cur.id != id);}});
  }
}
