import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class UserProfileService {

  public serviceMessage = 'Service Injected Succesfully';

  constructor(private http: HttpClient) {
  }

  getUserProfile(name: string) {
    this.http.get("/api/profile/" + name)
      .subscribe(profile => {
        console.log(profile);
      })
  }

  getSessionProfile() {
    return this.http.get("/api/profile/");
  }

}
