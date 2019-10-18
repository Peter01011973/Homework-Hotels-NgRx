import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotWeatherVidgetComponent } from './vidget-elements/hot-weather-vidget/hot-weather-vidget.component';
import { AboutProjectComponent } from './Nav-elements/about-project/about-project.component';
import { HotelDetailComponent } from './vidget-elements/list-of-hotel/hotel-detail/hotel-detail.component';
import { CommentsComponent } from './vidget-elements/list-of-hotel/hotel-detail/comments/comments.component';
import { ContactsComponent } from './vidget-elements/list-of-hotel/hotel-detail/contacts/contacts.component';
import { PageNotFoundComponent } from './Nav-elements/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/hotels', pathMatch: 'full'},
  {path: 'hotels', component: HotWeatherVidgetComponent},
  {path: 'about', component: AboutProjectComponent},
  {path: 'hotels/:id', component: HotelDetailComponent, children: [
    {path: 'comments', component: CommentsComponent},
    {path: 'contacts', component: ContactsComponent},
  ]},
  {path: 'contact', loadChildren: () => import('./Nav-elements/contact-us/contact.module').then(mod => mod.ContactModule)},
  {path: 'users', loadChildren: './Nav-elements/users/users.module#UsersModule'},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
