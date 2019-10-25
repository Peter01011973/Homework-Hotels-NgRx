import { Component, OnInit } from '@angular/core';
import { DeactivateEditService } from 'src/app/shared/services/deactivate-edit.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit{
  // public editMode = false;
  public constructor(private deactivateEditService: DeactivateEditService) {}

  public ngOnInit(): void {
    this.deactivateEditService.editMode = false;
  }

  public editComplited():void {
    this.deactivateEditService.editMode = true;
  }

}
