import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './services/user-profile.service';

export class UserProfile {
  id: string = "";
  username: string = "";
  role: string = "";
  landing: string = "";
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //DEV MODE
  devProfile = true;

  profileMessage: string = "";
  userProfile: any;
  menteeView = false;
  mentorView = false;

  constructor(private userProfileService: UserProfileService) {}

  ngOnInit() {
    // this.profileMessage = this.userProfileService.serviceMessage;
    // this.userProfileService.getUserProfile('levi.schwartzberg');
    if(this.devProfile) {
      this.mentorView = true;
    }
    else {
      this.userProfileService.getSessionProfile().subscribe(profile => {
        console.log(profile);
        this.userProfile = profile;
        
        if(this.userProfile.role === "MENTOR") {
          this.mentorView = true;
        }
        else if (this.userProfile.role === "MENTEE") {
          this.menteeView = true;
        }
      }) 
    }
  }
}
