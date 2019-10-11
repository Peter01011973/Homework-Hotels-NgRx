import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/shared/services/hotel.service';
import { Hotel } from 'src/app/shared/interfaces/hotel-interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  public hotel$: Observable<Hotel>;

  constructor(private hotelService: HotelService, private route: ActivatedRoute) { }

  ngOnInit() {
    // let id:number;
    // this.route.params.subscribe(params => id = params.id);
    // this.hotel$ = this.hotelService.getHotel(id);
    this.hotel$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.hotelService.getHotel(+params.get('id')))
      );
    // const id: number = +this.route.snapshot.paramMap.get('id');
    // this.hotel$ = this.hotelService.getHotel(id);
  }

}
