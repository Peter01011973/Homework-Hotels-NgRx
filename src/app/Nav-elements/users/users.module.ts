import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {path: '', component: UsersComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
