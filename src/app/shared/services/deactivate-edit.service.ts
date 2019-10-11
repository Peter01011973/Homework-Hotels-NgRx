import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeactivateEditService {
  public editMode: boolean = false;

  constructor() { }

  public editModeMethod(): boolean {
    return this.editMode;
  }
}
