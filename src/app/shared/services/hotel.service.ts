import { Injectable, OnDestroy } from '@angular/core';
import { Hotel } from '../interfaces/hotel-interface';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of, Unsubscribable, Subject, EMPTY, Subscription } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { WarningNotAddComponent } from '../dialogs/warning-not-add/warning-not-add.component';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.state';
import { LoadHotels, DeleteHotel, LoadFavHotels, DeleteFavHotel, AddFavHotel } from 'src/app/redux/hotels.actions';
import { IComment } from '../interfaces/comment';

@Injectable()
export class HotelService implements OnDestroy{
  public addFavoriteHotelEvent$$ = new Subject<Hotel>(); 
  public lengthFan$$ = new Subject<number>();
  public subGetFavHotels: Subscription;
  public subscriptionGetFavHotels: Subscription;
  public subscriptionAddToFavorite: Subscription;

  public constructor(
    private http: HttpClient, 
    private _snackBar: MatSnackBar,
    private store: Store<AppState>,
    public dialog: MatDialog
  )  {}

  public getHotel(id:number): Observable<Hotel> {
    return this.http.get<Hotel>(`${environment.api}/hotels/${id}`)
  }

  public getHotels(stars:number): void {
    const param:string = (stars)?`?stars=${stars}`:``;
    this.subscriptionGetFavHotels = this.http.get<Hotel[]>(`${environment.api}/hotels/${param}`)
    .pipe(
      catchError(() => {
        this._snackBar.open('Server is unvalible now');
        console.log('error');
        return of([]);
      })
    ).subscribe(hotels => this.store.dispatch(LoadHotels(hotels)));
  }

  public getFavHotels(params: Partial<PageEvent>): void {
    let subscription: Subscription;

    const httpParams: HttpParams = new HttpParams({
      fromObject: {
        _page: String(params.pageIndex),
        _limit: String(params.pageSize)
      }
    });
    this.subGetFavHotels = this.http.get<Hotel[]>(`${environment.api}/favoriteHotels`).subscribe(hots => {this.lengthFan$$.next(hots.length)});

    this.http.get<Hotel[]>(`${environment.api}/favoriteHotels/`,{params: httpParams})
    .pipe(
      catchError(() => {
        this._snackBar.open('Server is unvalible now');
        console.log('error');
        return of([]);
      })
    ).subscribe(FavHotels => {console.log('Fan length: ',FavHotels.length);
      this.store.dispatch(LoadFavHotels(FavHotels));
    });   
  }

  public deleteHotelFromList(hotel: Hotel): Observable<Hotel> {
    
    return this.http.delete<Hotel>(`${environment.api}/hotels/${hotel.id}`)
    .pipe(
      catchError(() => {
        this._snackBar.open("Can't added");
        console.log('error');
        return of<Hotel>(null);
      }),
      tap(() => this.store.dispatch(DeleteHotel(hotel)))
    );
  }

  public addToFavorite(favHot: Hotel): void {
    let add: boolean = true;
    this.subscriptionAddToFavorite = this.http.post(`${environment.api}/favoriteHotels`,favHot)
    .pipe(

      catchError(() => {
        this.dialog.open(WarningNotAddComponent).afterClosed().subscribe();
        console.log('error');
        add= false;
        return of([]);
      }),
      
    ).subscribe(()=> {if (add) {
      this.store.dispatch(AddFavHotel(favHot))}
    });
    
  }

  public deleteFavorite(hotel: Hotel):Observable<Hotel> {
    const token:string  = localStorage.getItem('token');
    // 'Authorization=Be'
    const headers: HttpHeaders = new HttpHeaders( {
      'Authorization': `Bearer ${token}`
    });
    this.store.dispatch(DeleteFavHotel(hotel));
    return this.http.delete<Hotel>(`${environment.api}/favoriteHotels/${hotel.id}`,{headers});
  }

  public getCommentById(hotelId: number): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${environment.api}/hotels/${hotelId}/comments`);
  }

  public addComment(addObject: IComment) {
    console.log(addObject);
    this.http.post(`${environment.api}/comments`,addObject)    
    .pipe(
      catchError(() => {
        console.log('error');
        return of(null);
      }),
      
    ).subscribe((data)=> console.log(data));
  }

  public ngOnDestroy(): void {
    this.subGetFavHotels.unsubscribe();
    this.subscriptionGetFavHotels.unsubscribe();
    this.subscriptionAddToFavorite.unsubscribe();
  }
}
