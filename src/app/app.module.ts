import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfHotelComponent } from './vidget-elements/list-of-hotel/list-of-hotel.component';
import { WeatherComponent } from './vidget-elements/weather/weather.component';
import { ProfileComponent } from './vidget-elements/profile/profile.component';
import { FooterComponent } from './vidget-elements/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { DeleteDialogComponent } from './shared/dialogs/delete-dialog/delete-dialog.component';
import { FavoriteHotelsComponent } from './vidget-elements/favorite-hotels/favorite-hotels.component';
import { WarningNotAddComponent } from './shared/dialogs/warning-not-add/warning-not-add.component';


@NgModule({
  declarations: [
    AppComponent,
    ListOfHotelComponent,
    WeatherComponent,
    ProfileComponent,
    FooterComponent,
    DeleteDialogComponent,
    FavoriteHotelsComponent,
    WarningNotAddComponent
    
  ],
  entryComponents: [DeleteDialogComponent, WarningNotAddComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [DeleteDialogComponent, WarningNotAddComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
