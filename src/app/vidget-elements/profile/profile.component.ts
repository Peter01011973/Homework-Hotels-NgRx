import { Component, OnInit } from '@angular/core';
import { Hotels } from 'src/app/shared/interfaces/hotel-interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit{
  public hotelsNgRx$: Observable<Hotels>;

  public constructor(private store: Store<AppState>) { 
  }

  public ngOnInit(): void {
    this.hotelsNgRx$ = this.store.select('hotelspage');
  }

}
