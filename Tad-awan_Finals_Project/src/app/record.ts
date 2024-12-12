export interface Record {
    id: number;
    name: string;
    type: string;
    age?: number;  // New field for student's age
    grade?: string; // New field for student's grade
    address?: string; // New field for student's address
  }