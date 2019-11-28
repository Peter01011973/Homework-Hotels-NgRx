import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Hotel } from '../shared/interfaces/hotel-interface';
import { HotelsReducer } from '../redux/hotels.reducer';

export interface AppState {
    hotelspage: {
        hotels: Hotel[],
        selectedHotel: Hotel,
        favoriteHotels: Hotel[],
        selectedFavHotel: Hotel
    }
}

export const reducers: ActionReducerMap<AppState> = {
  hotelspage: HotelsReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
