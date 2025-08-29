
 // Function to transform your form data to backend format
export const transformFormDataForBackend = (formData: any) => {
  return {
    profilePhoto: formData.profilePhoto,
    firstName: formData.firstName,
    lastName: formData.lastName,
    dob: new Date(formData.dob).toISOString(), // Convert to ISO string
    occupation: formData.occupation,
    gender: formData.gender,
    contact: {
      create: {
        email: formData.contact.email,
        phoneNumber: formData.contact.phoneNumber,
        fax: formData.contact.fax,
        linkedInUrl: formData.contact.linkedInUrl
      }
    },
    address: {
      create: {
        address: formData.address.street, // Map 'street' to 'address'
        city: formData.address.city,
        state: formData.address.state,
        country: formData.address.country,
        zipCode: formData.address.zipCode // Map 'postalCode' to 'zipCode'
      }
    },
    academics: {
      create: {
        schools: formData.academic 
      }
    }
  };
};
