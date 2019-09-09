import { Component } from '@angular/core';
import { FavoritHotelsService } from 'src/app/shared/services/favorit-hotels.service';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.css']
})
export class FavoriteHotelsComponent {

  public constructor(private favoriteHotelsService: FavoritHotelsService) { }  
}
