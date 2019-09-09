import { Component, Input } from '@angular/core';
import { Profile } from 'src/app/shared/interfaces/profile-interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  @Input() public profileInfo: Profile;
}
