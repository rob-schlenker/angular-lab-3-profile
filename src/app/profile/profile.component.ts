import { Component, OnInit, Input, } from '@angular/core';
import { UserProfile } from '../interfaces/user-profile';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // @Input() profile: UserProfile;
  profile: UserProfile;

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.profile = this.serviceService.getUserProfile()
  }


}
