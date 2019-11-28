import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfHotelComponent } from './vidget-elements/list-of-hotel/list-of-hotel.component';
import { WeatherComponent } from './vidget-elements/weather/weather.component';
import { ProfileComponent } from './vidget-elements/profile/profile.component';
import { SharedModule } from './shared/shared.module';
import { DeleteDialogComponent } from './shared/dialogs/delete-dialog/delete-dialog.component';
import { FavoriteHotelsComponent } from './vidget-elements/favorite-hotels/favorite-hotels.component';
import { WarningNotAddComponent } from './shared/dialogs/warning-not-add/warning-not-add.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationService } from './shared/services/authorization.service';
import { HotelService } from './shared/services/hotel.service';
import { HeaderComponent } from './Nav-elements/header/header.component';
import { HotWeatherVidgetComponent } from './vidget-elements/hot-weather-vidget/hot-weather-vidget.component';
import { AboutProjectComponent } from './Nav-elements/about-project/about-project.component';
import { HotelDetailComponent } from './vidget-elements/list-of-hotel/hotel-detail/hotel-detail.component';
import { CommentsComponent } from './vidget-elements/list-of-hotel/hotel-detail/comments/comments.component';
import { ContactsComponent } from './vidget-elements/list-of-hotel/hotel-detail/contacts/contacts.component';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './Nav-elements/page-not-found/page-not-found.component';
import { DeactivateEditGuard } from './guards/deactivate-edit.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { HotelsReducer } from './redux/hotels.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EditComponent } from './shared/dialogs/edit-control/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfHotelComponent,
    WeatherComponent,
    ProfileComponent,
    DeleteDialogComponent,
    FavoriteHotelsComponent,
    WarningNotAddComponent,
    HeaderComponent,
    HotWeatherVidgetComponent,
    AboutProjectComponent,
    HotelDetailComponent,
    CommentsComponent,
    ContactsComponent,
    PageNotFoundComponent  
  ],
  entryComponents: [DeleteDialogComponent, WarningNotAddComponent, EditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // StoreModule.forRoot({hotelspage: HotelsReducer}),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument()
  ],
  
  providers: [
    HotelService,
    BrowserAnimationsModule,
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationService, multi: true },
    AuthGuard,
    DeactivateEditGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
