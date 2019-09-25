import { Injectable } from '@angular/core';
// import { hotelsDb } from 'src/app/mock-data/hotels-list';
// import { saveAs } from 'file-saver';
import { Hotel } from '../interfaces/hotel-interface';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of, Unsubscribable } from 'rxjs';
import { map, tap, catchError, isEmpty } from 'rxjs/operators';
import { WarningNotAddComponent } from '../dialogs/warning-not-add/warning-not-add.component';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';

@Injectable(
  // {
  // providedIn: 'root'
  // }
)
export class HotelService {
  public selectedFavHotel: Hotel;
  public selectedHotel: Hotel;
 

  public constructor(private dialog: MatDialog, private http: HttpClient, private _snackBar: MatSnackBar)  {
  }

  public getHotels(stars:number): Observable<Hotel[]> {
    const param:string = (stars)?`?stars=${stars}`:``;
    return this.http.get<Hotel[]>(`${environment.api}/hotels/${param}`)
    .pipe(
      catchError(() => {
        this._snackBar.open('Server is unvalible now');
        console.log('error');
        return of([]);
      })
    );
  }

  public getFavHotels(params: Partial<PageEvent>): Observable<Hotel[]> {
    const httpParams: HttpParams = new HttpParams({
      fromObject: {
        _page: String(params.pageIndex),
        _limit: String(params.pageSize)
      }
    });

    return this.http.get<Hotel[]>(`${environment.api}/favoriteHotels/`,{params: httpParams})
    .pipe(
      catchError(() => {
        this._snackBar.open('Server is unvalible now');
        console.log('error');
        return of([]);
      })
    );
  }

  public deleteHotelFromList(id: number):Observable<Hotel> {
    return this.http.delete<Hotel>(`${environment.api}/hotels/${id}`)
  }

  public addToFavorite(favHot: Hotel) {
    // this.http.get(`${environment.api}/favoriteHotels/?title=${favHot.title}`).subscribe();
    return this.http.post(`${environment.api}/favoriteHotels`,favHot);
    
  }

  public deleteFavorite(id: number):Observable<Hotel> {
    const token:string  = localStorage.getItem('token');
    // 'Authorization=Be'
    const headers: HttpHeaders = new HttpHeaders( {
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<Hotel>(`${environment.api}/favoriteHotels/${id}`,{headers});
  }

  public selectFavHotel(selHotel: Hotel) {
    this.selectedFavHotel = selHotel;
  }
}
