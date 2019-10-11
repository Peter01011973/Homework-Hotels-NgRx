import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactUsComponent } from '../Nav-elements/contact-us/contact-us.component';
import { DeactivateEditService } from '../shared/services/deactivate-edit.service';

@Injectable({
  providedIn: 'root'
})
export class DeactivateEditGuard implements CanDeactivate<ContactUsComponent> {
  public constructor(private deactivateEditService: DeactivateEditService) { }

  canDeactivate(
    component: ContactUsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.deactivateEditService.editModeMethod();
  }
}
