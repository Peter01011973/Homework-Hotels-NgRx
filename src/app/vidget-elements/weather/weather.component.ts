import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotels } from 'src/app/shared/interfaces/hotel-interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.state';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit{
  public hotelsNgRx$: Observable<Hotels>;

  public constructor(private store: Store<AppState>) { 
  }

  public ngOnInit(): void {
    this.hotelsNgRx$ = this.store.select('hotelspage');
  }

}

