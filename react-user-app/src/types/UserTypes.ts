export interface Contact {
  id: number;
  email: string;
  phoneNumber: string;
  fax?: string;
  linkedInUrl?: string;
  userId: number;
}

export interface Address {
  id: number;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  userId: number;
}

export interface Academics {
  id: number;
  schools: string[];
  userId: number;
}

export interface User {
  id: number;
  profilePhoto: string; // stored as URL string
  firstName: string;
  lastName: string;
  dob: string;
  occupation: string;
  gender: string;
  contact: Contact;
  address: Address;
  academics: Academics;
}

export interface UserRequest {
  profilePhoto: string;
  firstName: string;
  lastName: string;
  dob: string;
  occupation: string;
  gender: string;
  contact: Omit<Contact, "id" | "userId">;  // request body doesn't need DB ids
  address: Omit<Address, "id" | "userId">;
  academics: Omit<Academics, "id" | "userId">;
}

export interface UserState {
  users: User[];
  currentUser: User | null;
  loading: boolean;
  error: string | null;
  formData: Partial<UserRequest>; // holds stepwise form data
  currentStep: number; // tracks form wizard step
}


export type StepType = {
  number: number;
  title: string;
}

export type StepProps = {
  step: StepType;
};
