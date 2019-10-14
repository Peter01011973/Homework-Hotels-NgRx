import { createReducer, on } from '@ngrx/store';
import { LoadHotels, ChangeSelectedHotel, DeleteHotel, LoadFavHotels, DeleteFavHotel, AddFavHotel, ChangeSelectedFavHotel } from './hotels.actions';

const initialState = {hotels: [], favoriteHotels: [], isPressedAddFavHotel: false}

export const HotelsReducer = createReducer(initialState,
    on(AddFavHotel, (state, action) => ({
        ...state, 
        favoriteHotels: [...state.favoriteHotels,action.payload], 
        lengthFavHotels: state.favoriteHotels.length
    })),
    on(LoadHotels, (state, action) => ({
        ...state, 
        hotels: action.payload, 
        selectedHotel: action.payload[0]
    })),
    on(LoadFavHotels, (state, action) => ({...state, favoriteHotels: action.payload, selectedFavHotel: action.payload[0]})),
    on(ChangeSelectedHotel, (state, action) => ({...state, selectedHotel: action.payload})),
    on(DeleteHotel, (state, action) => ({...state, hotels: state.hotels.filter(hotel => hotel !== action.payload), selectedHotel: state.hotels[0] })),
    on(DeleteFavHotel, (state, action) => ({
        ...state, 
        favoriteHotels: state.favoriteHotels.filter(hotel => hotel !== action.payload), 
        selectedFavHotel: state.favoriteHotels[0]
    })),
    on(ChangeSelectedFavHotel, (state, action) => ({...state, selectedFavHotel: action.payload}))
);
