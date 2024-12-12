import { Component } from '@angular/core';
import { Record } from '../record';

@Component({
  selector: 'app-class-record',
  templateUrl: './class-record.component.html',
  styleUrls: ['./class-record.component.css'],
  standalone: false
})
export class ClassRecordComponent {
  records: Record[] = [
    { id: 20225050, name: 'Zchiavoni Tad-awan', type: 'Homework', age: 20, grade: '78', address: 'Baguio' },
    { id: 20225051, name: 'John Doe', type: 'Assignment', age: 21, grade: '90', address: 'Baguio' },
    { id: 20225052, name: 'Juan Usa', type: 'Assignment', age: 22, grade: '84', address: 'Baguio' },
    { id: 20225052, name: 'Juan Deer', type: 'Assignment', age: 24, grade: '80', address: 'Baguio' },
    { id: 20225052, name: 'Juan John Jon Jan Jerry Joe', type: 'Assignment', age: 22, grade: '74', address: 'Baguio' },
  ];

  selectedRecord: Record | null = null;
  isEditing: boolean = false;
  editableRecord: Record = { id: 0, name: '', type: '', age: 0, grade: '', address: '' }; // Initialize as an empty object

  // Method to select and view a record's details
  viewRecordDetails(record: Record): void {
    this.selectedRecord = record;
    this.isEditing = false;  // Set editing to false when viewing details
  }

  // Method to start editing a selected record
  editRecord(record: Record): void {
    this.editableRecord = { ...record };  // Create a copy of the record to edit
    this.isEditing = true;  // Enable editing mode
  }

  // Method to save the edited record
  saveRecord(): void {
    if (this.editableRecord) {
      const index = this.records.findIndex(record => record.id === this.editableRecord.id);
      if (index !== -1) {
        this.records[index] = { ...this.editableRecord }; // Save changes to the records array
        this.selectedRecord = this.editableRecord; // Update the selected record
        this.isEditing = false;  // Disable editing mode
        this.editableRecord = { id: 0, name: '', type: '', age: 0, grade: '', address: '' }; // Reset the editable record
      }
    }
  }

  // Method to cancel the edit
  cancelEdit(): void {
    this.isEditing = false;
    this.editableRecord = { id: 0, name: '', type: '', age: 0, grade: '', address: '' }; // Reset the editable record
  }
}
