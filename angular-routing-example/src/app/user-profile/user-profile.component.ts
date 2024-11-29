import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  isEditMode: boolean = false;  // Toggle between edit and view mode
  profile = {
    fullName: 'John Doe M.',
    mailingAddress: 'House #123, Example St., Barangay ABC, City XYZ, Province/Region PQR',
    email: 'johndoe@example.com',
    mobileNumber: '(123) 456-7890'
  };

  // Toggle edit mode on button click
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  // Save the profile (currently just a placeholder)
  saveProfile() {
    console.log('Profile saved', this.profile);
    this.isEditMode = false;
  }
}
