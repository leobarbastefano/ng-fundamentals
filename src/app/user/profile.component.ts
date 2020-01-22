import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
profileForm: FormGroup

ngOnInit() {
  let firstName = new FormControl();
  let LastName = new FormControl();
  this.profileForm = new FormGroup({
    firstName: firstName,
    LastName: LastName
  });
}

}
