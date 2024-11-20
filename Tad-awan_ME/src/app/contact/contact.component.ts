import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  // Modal display flag
  showModal: boolean = false;

  // Handle form submission
  onSubmit() {
    if (this.name && this.email && this.message) {
      // Trigger modal to show
      this.showModal = true;
    } else {
      // Handle form validation errors
      alert('Please fill in all fields');
    }
  }

  // Close the modal
  closeModal() {
    this.showModal = false;
  }
}
