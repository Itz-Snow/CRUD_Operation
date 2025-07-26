

export type FormData = {
  //  User Info
  profilePhoto: File | null;
  firstName: string;
  lastName: string;
  dob: string;
  occupation: string;
  gender: string;

  //  Contact
  email: string;
  phoneNumber: string;
  fax?: string;
  linkedInUrl?: string;

  // 🏡 Step 2b - Address
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;

  //  Academic Background
  academics: string[]; // list of past schools
}

export type StepType = {
  number: number;
  title: string;
}

export type StepProps = {
  step: StepType;
};
