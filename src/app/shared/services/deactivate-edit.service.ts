import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../dialogs/edit-control/edit.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateEditService {
  public editMode: boolean = false;

  constructor(public dialog: MatDialog) { }

  public editModeMethod(): boolean {
    if (!this.editMode) {this.dialog.open(EditComponent).afterClosed().subscribe();}
    return this.editMode;
  }
}
