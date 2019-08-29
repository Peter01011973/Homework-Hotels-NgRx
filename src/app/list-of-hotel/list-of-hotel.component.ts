import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from 'src/hotels-list-interface';
import { MatDialog } from '@angular/material';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-list-of-hotel',
  templateUrl: './list-of-hotel.component.html',
  styleUrls: ['./list-of-hotel.component.css']
})
export class ListOfHotelComponent implements OnInit {
  @Input() listOfHotels: Hotel;
  @Output() selectHotel: EventEmitter<number> = new EventEmitter();
  @Output() deleteHotel: EventEmitter<number> = new EventEmitter();
  deleteMarker = false;
  avatarUrl = 'url("/assets/images/res.jpg")';
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  select(id: number) {
    this.selectHotel.emit(id);
  }

  delete(id: number) {
    const refDialog = this.dialog.open(DeleteDialogComponent);
    refDialog.afterClosed().subscribe(result => {if ( result ) { this.deleteHotel.emit(id); }});
  }
}
