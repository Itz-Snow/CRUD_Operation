import { useForm } from "react-hook-form";
import NavButtons from "./MultistepForm/NavButtons";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../app/store";
import { setCurrentStep, updateFormData } from "../features/user/userSlice";
import { useState } from "react";

interface StepOneFormValues {
  profilePhoto: FileList;
  firstName: string;
  lastName: string;
  dob: string;
  occupation: string;
  gender: string;
}

export default function UserInfo() {
  const dispatch = useDispatch();
  const { currentStep, formData } = useSelector((store: RootState) => store.user);
  const [uploading, setUploading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StepOneFormValues>({
    defaultValues: {
      ...formData,
    },
  });

  // Shared Tailwind input styles
  const inputClasses =
    "block w-full text-sm text-gray-800 bg-gray-100 rounded-lg border border-gray-300 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
    "dark:text-gray-200 dark:bg-gray-700 dark:border-gray-600 " +
    "mb-2 h-[40px] px-3 py-2 transition disabled:opacity-50";

  // Cloudinary upload function
  const uploadToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "profile_photos");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dtbychols/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Upload failed");
    }

    const data = await response.json();
    return data.secure_url;
  };

  async function processFormData(data: StepOneFormValues) {
    const { profilePhoto, ...restData } = data;
    setUploading(true);

    try {
      let profilePhotoUrl = null;

      if (profilePhoto?.length > 0) {
        const file = profilePhoto[0];
        profilePhotoUrl = await uploadToCloudinary(file);
      }

      dispatch(
        updateFormData({
          ...restData,
          profilePhoto: profilePhotoUrl,
        })
      );

      dispatch(setCurrentStep(currentStep + 1));
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
        Profile Photo *
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
              return (
                file.type.startsWith("image/") || "Please select an image file"
              );
            },
            fileSize: (files) => {
              if (!files || files.length === 0) return true;
              const file = files[0];
              return (
                file.size <= 5 * 1024 * 1024 || "File must be less than 5MB"
              );
            },
          },
        })}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-100 rounded-lg border border-gray-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 px-3 py-2"
        disabled={uploading}
      />
      {errors.profilePhoto && (
        <p className="text-red-500 text-xs">{errors.profilePhoto.message}</p>
      )}
      {uploading && (
        <p className="text-blue-500 text-xs">Uploading photo...</p>
      )}

      {/* First Name */}
      <label className="pt-1.5 block text-sm font-medium text-gray-800 dark:text-white">
        First Name *
      </label>
      <input
        type="text"
        placeholder="First Name"
        {...register("firstName", { required: true })}
        className={inputClasses}
        disabled={uploading}
      />
      {errors.firstName && (
        <p className="text-red-500 text-xs">First name is required</p>
      )}

      {/* Last Name */}
      <label className="block text-sm font-medium text-gray-800 dark:text-white">
        Last Name *
      </label>
      <input
        type="text"
        placeholder="Last Name"
        {...register("lastName", { required: true })}
        className={inputClasses}
        disabled={uploading}
      />
      {errors.lastName && (
        <p className="text-red-500 text-xs">Last name is required</p>
      )}

      {/* Date of Birth */}
      <label className="block text-sm font-medium text-gray-800 dark:text-white">
        Date of Birth *
      </label>
      <input
        type="date"
        {...register("dob", { required: true })}
        className={inputClasses}
        disabled={uploading}
      />
      {errors.dob && (
        <p className="text-red-500 text-xs">Date of birth is required</p>
      )}

      {/* Occupation */}
      <label className="block text-sm font-medium text-gray-800 dark:text-white">
        Occupation *
      </label>
      <input
        type="text"
        placeholder="Occupation"
        {...register("occupation", { required: true })}
        className={inputClasses}
        disabled={uploading}
      />
      {errors.occupation && (
        <p className="text-red-500 text-xs">Occupation is required</p>
      )}

      {/* Gender */}
      <label className="block text-sm font-medium text-gray-800 dark:text-white">
        Gender *
      </label>
      <select
        {...register("gender", { required: true })}
        className={inputClasses}
        disabled={uploading}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      {errors.gender && (
        <p className="text-red-500 text-xs">Gender is required</p>
      )}

      {/* Navigation Buttons */}
      <NavButtons />
    </form>
  );
}
