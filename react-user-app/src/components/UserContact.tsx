import { useFormContext } from "react-hook-form";
import type { StepTwoFormValues } from "./StepTwo";

export default function UserContact() {
  const { register, formState: { errors } } = useFormContext<StepTwoFormValues>();

  return (
    <>
      {/* Email */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Email
      </label>
      <input
        type="email"
        {...register("contact.email", { required: "Email is required" })}
        className="block w-full text-sm text-[#1f2937] bg-[#f9f9f9] rounded-[0.5rem] border-[1px] border-[#d1d5db] cursor-pointer focus:outline-none dark:text-[#9ca3af] dark:bg-[#374151] dark:border-[#4b5563] dark:placeholder-[#9ca3af] mb-[0.5rem] h-[30px]"
        placeholder="Example123@gmail.com"
      />
      {errors.contact?.email && (
        <p className="text-red-500 text-xs">{errors.contact.email.message}</p>
      )}

      {/* Phone Number */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Phone Number
      </label>
      <input
        type="tel"
        {...register("contact.phoneNumber", { required: "Phone number is required" })}
        className="block w-full text-sm text-[#1f2937] bg-[#f9f9f9] rounded-[0.5rem] border-[1px] border-[#d1d5db] cursor-pointer focus:outline-none dark:text-[#9ca3af] dark:bg-[#374151] dark:border-[#4b5563] dark:placeholder-[#9ca3af] mb-[0.5rem] h-[30px]"
        placeholder="Phone Number"
      />
      {errors.contact?.phoneNumber && (
        <p className="text-red-500 text-xs">{errors.contact.phoneNumber.message}</p>
      )}

      {/* Fax (optional) */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Fax
      </label>
      <input
        type="text"
        {...register("contact.fax")}
        className="block w-full text-sm text-[#1f2937] bg-[#f9f9f9] rounded-[0.5rem] border-[1px] border-[#d1d5db] cursor-pointer focus:outline-none dark:text-[#9ca3af] dark:bg-[#374151] dark:border-[#4b5563] dark:placeholder-[#9ca3af] mb-[0.5rem] h-[30px]"
        placeholder="Fax Number (optional)"
      />

      {/* LinkedIn URL (optional) */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        LinkedIn URL
      </label>
      <input
        type="url"
        {...register("contact.linkedInUrl")}
        className="block w-full text-sm text-[#1f2937] bg-[#f9f9f9] rounded-[0.5rem] border-[1px] border-[#d1d5db] cursor-pointer focus:outline-none dark:text-[#9ca3af] dark:bg-[#374151] dark:border-[#4b5563] dark:placeholder-[#9ca3af] mb-[0.5rem] h-[30px]"
        placeholder="e.g linkedin.com/in/yourprofile (optional)"
      />
    </>
  );
}
