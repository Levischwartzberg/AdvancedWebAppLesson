import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './services/user-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  profileMessage: string = "";
  userProfile: any;

  constructor(private userProfileService: UserProfileService) {}

  ngOnInit() {
    this.profileMessage = this.userProfileService.serviceMessage;
    // this.userProfileService.getUserProfile('levi.schwartzberg');
    this.userProfileService.getSessionProfile().subscribe(profile => {
      console.log(profile);
      this.userProfile = profile;
    })
  }
}
