import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  profile: UserProfile = {
    name: "Rob",
    contact: "Rob email.com",
    bio: "Hi I'm Rob",
  };

  constructor() { }

  getUserProfile(): UserProfile {
    return this.profile;
  }

  setUserProfile(profile: UserProfile) {
    this.profile = profile;
  }

}
