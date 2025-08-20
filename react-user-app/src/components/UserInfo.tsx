import { useForm } from "react-hook-form";
import NavButtons from "./MultistepForm/NavButtons";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../app/store";
import { setCurrentStep, updateFormData } from "../features/user/userSlice";
import { useState } from "react";

interface  stepOneformValues {
  profilePhoto:  FileList;
  firstName: string;
  lastName: string;
  dob: string;
  occupation: string;
  gender: string;
};

export default function UserInfo() {

  const dispatch = useDispatch()
  const { currentStep, formData } = useSelector((store: RootState) => store.user)
  const [uploading, setUploading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<stepOneformValues>({
    defaultValues: {
      ...formData
    }
  });

  // Cloudinary upload function
  const uploadToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'profile_photos');
    
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dtbychols/image/upload`, 
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      throw error;
    }
  };

  async function processFormData(data: stepOneformValues) {
    // Handle form submission logic here
    const { profilePhoto, ...restData } = data;
    
    setUploading(true);
    
    try {
      let profilePhotoUrl = null;
      
      // Upload to Cloudinary if file exists
      if (data.profilePhoto?.length > 0) {
        const file = data.profilePhoto[0];
        console.log("Uploading to Cloudinary...");
        profilePhotoUrl = await uploadToCloudinary(file);
        console.log("Upload successful:", profilePhotoUrl);
      }

      // Update state in the global state
      dispatch(
        updateFormData({
          ...restData,
          profilePhoto: profilePhotoUrl, // Now it's the Cloudinary URL (serializable)
        })
      )
      console.log(data)

      // update the current step
      dispatch(setCurrentStep(currentStep+1))
      console.log(currentStep)
      
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Photo upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <form className="px-12 py-4" onSubmit={handleSubmit(processFormData)}>
      {/* Profile Photo */}
      <label className="block text-sm font-medium text-gray-800 dark:text-white">
        Profile Photo
      </label>
      <input
        type="file"
        accept="image/*"
        {...register("profilePhoto", { 
          required: "Photo is required",
          validate: {
            fileType: (files) => {
              if (!files || files.length === 0) return true;
              const file = files[0];
              return file.type.startsWith('image/') || "Please select an image file";
            },
            fileSize: (files) => {
              if (!files || files.length === 0) return true;
              const file = files[0];
              return file.size <= 5 * 1024 * 1024 || "File must be less than 5MB";
            }
          }
        })}
        className="block w-full text-sm text-gray-800 bg-gray-100 rounded-lg border border-gray-300 cursor-pointer focus:outline-none dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 mb-2 h-[30px] px-2 py-1"
        disabled={uploading}
      />
      {errors.profilePhoto && <p className="text-red-500 text-xs">{errors.profilePhoto.message}</p>}
      {uploading && <p className="text-blue-500 text-xs">Uploading photo...</p>}

      {/* First Name */}
      <label className="block text-sm font-medium text-gray-800 dark:text-white">
        First Name
      </label>
      <input
        type="text"
        placeholder="First Name"
        {...register("firstName", { required: true })}
        className="block w-full text-sm text-gray-800 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 mb-2 h-[30px] px-2 py-1"
        disabled={uploading}
      />
      {errors.firstName && <p className="text-red-500 text-xs">First name is required</p>}

      {/* Last Name */}
      <label className="block text-sm font-medium text-gray-800 dark:text-white">
        Last Name
      </label>
      <input
        type="text"
        placeholder="Last Name"
        {...register("lastName", { required: true })}
        className="block w-full text-sm text-gray-800 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 mb-2 h-[30px] px-2 py-1"
        disabled={uploading}
      />
      {errors.lastName && <p className="text-red-500 text-xs">Last name is required</p>}

      {/* Date of Birth */}
      <label className="block text-sm font-medium text-gray-800 dark:text-white">
        Date of Birth
      </label>
      <input
        type="date"
        {...register("dob", { required: true })}
        className="block w-full text-sm text-gray-800 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 mb-2 h-[30px] px-2 py-1"
        disabled={uploading}
      />
      {errors.dob && <p className="text-red-500 text-xs">Date of birth is required</p>}

      {/* Occupation */}
      <label className="block text-sm font-medium text-gray-800 dark:text-white">
        Occupation
      </label>
      <input
        type="text"
        placeholder="Occupation"
        {...register("occupation", { required: true })}
        className="block w-full text-sm text-gray-800 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 mb-4 h-[30px] px-2 py-1"
        disabled={uploading}
      />
      {errors.occupation && <p className="text-red-500 text-xs">Occupation is required</p>}

      {/* Gender */}
      <label className="block text-sm font-medium text-gray-800 dark:text-white">
        Gender
      </label>
      <select
        {...register("gender", { required: true })}
        className="block w-full text-sm text-gray-800 bg-gray-100 rounded-lg border border-gray-300 cursor-pointer focus:outline-none dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 mb-2 h-[30px] px-2 py-1"
        disabled={uploading}
      >
        
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      {errors.gender && <p className="text-red-500 text-xs">Gender is required</p>}

      {/* Navigation Buttons */}
      <NavButtons />
    </form>
  );
}