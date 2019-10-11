import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';
import { DeactivateEditGuard } from 'src/app/guards/deactivate-edit.guard';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  {path: '', component: ContactUsComponent, canDeactivate: [DeactivateEditGuard]}
]

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatButtonModule,
    SharedModule
  ],
  providers: []
})
export class ContactModule { }
