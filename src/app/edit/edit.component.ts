import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserProfile } from '../interfaces/user-profile';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  profile: UserProfile;

  constructor(private router: Router, private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.profile = this.serviceService.getUserProfile();
  }

  editProfile(form: NgForm): void {
    let newProfile = {
      name: form.value.name,
      contact: form.value.contact,
      bio: form.value.bio,
    };
    this.profile = newProfile;
    this.serviceService.setUserProfile(this.profile);
    this.router.navigate(["profile"])
  }

}





