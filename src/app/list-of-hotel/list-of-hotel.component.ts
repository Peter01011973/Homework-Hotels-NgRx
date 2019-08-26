import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-of-hotel',
  templateUrl: './list-of-hotel.component.html',
  styleUrls: ['./list-of-hotel.component.css']
})
export class ListOfHotelComponent implements OnInit {
  @Input() listOfHotels;
  
  constructor() { }

  ngOnInit() {
  }

}
