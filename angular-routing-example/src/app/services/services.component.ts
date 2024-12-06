import { Component } from '@angular/core';
import { Service } from '../service'; // Import the service interface

@Component({
  selector: 'app-services', 
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  services: Service[] = [
    { id: 1, name: 'Exterior Wash', category: 'Exterior', price: 100 },
    { id: 2, name: 'Interior Wash', category: 'Interior', price: 150 },
    { id: 3, name: 'Full Service', category: 'Full', price: 200 },
    { id: 4, name: 'Wax & Wash', category: 'Exterior', price: 120 },
    { id: 5, name: 'Engine Bay Cleaning', category: 'Specialty', price: 300 },
  ];

  selectedService: Service | null = null;

    // View service
  viewServiceDetails(service: Service): void {
    this.selectedService = service;
  }

  // Edit service
  editService(updatedService: Service): void {
    const index = this.services.findIndex(service => service.id === updatedService.id);
    if (index !== -1) {
      this.services[index] = updatedService;
      this.selectedService = null;
    }
  }

  // Delete service
  deleteService(serviceId: number): void {
    this.services = this.services.filter(service => service.id !== serviceId);
    if (this.selectedService?.id === serviceId) {
      this.selectedService = null;
    }
  }
}
