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

  public getHotels(): Hotel[] {
    return this.listHotels;
  }

  public changeHotel(id: number) {
    this.selectedHotel = this.listHotels[this.listHotels.findIndex(item => item.id === id)];
    return this.selectedHotel;
  }

  public deleteHotelFromList(id: number): Hotel[] {
    this.dialog.open(DeleteDialogComponent).afterClosed().subscribe(result => 
      { if (result) { this.listHotels=this.listHotels.filter(cur => cur.id != id);}});
      (this.listHotels) ? this.selectedHotel = this.listHotels[this.listHotels.findIndex(item => item.id === id)-1]:this.selectedHotel = undefined;
    return this.listHotels;
  }
}
