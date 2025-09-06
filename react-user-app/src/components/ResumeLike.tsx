import NavButtons from "./MultiStepForm/NavButtons";
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

const StepThreeResume: React.FC = () => {
  const {formData} = useSelector((state: RootState) => state.user);

  if (!formData) {
    return <p className="text-center text-gray-500">No data available</p>;
  }

  const { 
    profilePhoto, 
    firstName, 
    lastName, 
    dob, 
    occupation, 
    gender, 
    contact, 
    address, 
    academic 
  } = formData;


  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex items-center gap-6 border-b pb-4 mb-4">
        {profilePhoto && (
          <img
            src={
              profilePhoto instanceof File
                ? URL.createObjectURL(profilePhoto)
                : profilePhoto
            }
            alt="Profile"
            className="w-28 h-28 object-cover rounded-full border"
          />
        )}
        <div>
          <h1 className="text-2xl font-bold">{firstName} {lastName}</h1>
          <p className="text-gray-600">{occupation}</p>
          <p className="text-sm text-gray-500">{gender} • {dob}</p>
        </div>
      </div>

      {/* Contact */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold border-b pb-1 mb-2">Contact</h2>
        {contact && (
          <ul className="text-gray-700 space-y-1">
            <li>Email: {contact.email}</li>
            <li>Phone: {contact.phoneNumber}</li>
            {contact.fax && <li>Fax: {contact.fax}</li>}
            {contact.linkedInUrl && (
              <li>
                LinkedIn:{" "}
                <a
                  href={contact.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {contact.linkedInUrl}
                </a>
              </li>
            )}
          </ul>
        )}
      </section>

      {/* Address */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold border-b pb-1 mb-2">Address</h2>
        {address && (
          <p className="text-gray-700">
            {address.street}, {address.city}, {address.state}, {address.country} - {address.postalCode}
          </p>
        )}
      </section>

      {/* Academic Background */}
      <section>
        <h2 className="text-lg font-semibold border-b pb-1 mb-2">Academic Background</h2>
        <ul className="list-disc list-inside text-gray-700">
          {academic?.map((item: any, index: number) =>
            typeof item === "string" ? (
              <li key={index}>{item}</li>
            ) : (
              <li key={item.id}>{item.value}</li>
            )
          )}
        </ul>
      </section>
    {/* Navigation Buttons */}
    <NavButtons/>
    </div>
  );
};

export default StepThreeResume;
