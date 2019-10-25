import { createAction, Action } from '@ngrx/store';
import { Hotel } from '../shared/interfaces/hotel-interface';

export const LoadHotels = createAction('LOAD_HOTELS',(payload: Hotel[]) => ({payload}));
export const ChangeSelectedHotel = createAction('CHANGE_SELECTED_HOTEL',(payload: Hotel) => ({payload}));
export const DeleteHotel = createAction('DELETE_HOTEL',(payload: Hotel) => ({payload}));
export const DeleteFavHotel = createAction('DELETE_FAV_HOTEL',(payload: Hotel) => ({payload}));
export const LoadFavHotels = createAction('LOAD_FAV_HOTELS',(payload: Hotel[]) => ({payload}));
export const AddFavHotel = createAction('ADD_FAV_HOTEL',(payload: Hotel) => ({payload}));
export const ChangeSelectedFavHotel = createAction('CHANGE_SELECTED_FAV_HOTEL',(payload: Hotel) => ({payload}));
