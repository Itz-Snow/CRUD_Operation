// utils/transform.ts
export function transformToBackendPayload(formData: any) {
  return {
    profilePhoto: formData.profilePhoto, // already a URL

    firstName: formData.firstName,
    lastName: formData.lastName,
    dob: formData.dob,
    occupation: formData.occupation,
    gender: formData.gender,

    contact: {
      create: {
        email: formData.contact?.email || "",
        phoneNumber: formData.contact?.phoneNumber || "",
        fax: formData.contact?.fax || "",
        linkedInUrl: formData.contact?.linkedInUrl || "",
      }
    },
    address: {
      create: {
        address: formData.address?.street || "",
        city: formData.address?.city || "",
        state: formData.address?.state || "",
        country: formData.address?.country || "",
        zipCode: formData.address?.postalCode || "",
      }
    },
    academics: {
      create: {
        schools: formData.academic || [],
      }
    }
  };
}
