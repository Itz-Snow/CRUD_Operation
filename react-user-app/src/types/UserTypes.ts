
export interface Contact {
  email: string;
  phoneNumber: string;
  fax?: string;
  linkedInUrl?: string;
}

export interface Address {
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface Academics {
  schools: string[];
}

export interface User {
  id: string;
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
  contact: Contact;
  address: Address;
  academics: Academics;
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
