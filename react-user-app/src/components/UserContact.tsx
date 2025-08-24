import { useFormContext } from "react-hook-form";
import type { StepTwoFormValues } from "./StepTwo";

export default function UserContact() {
  const {
    register,
    formState: { errors },
  } = useFormContext<StepTwoFormValues>();

  // ✅ Standardized input styles
  const inputClasses =
    "block w-full text-sm text-gray-800 bg-gray-100 rounded-lg border border-gray-300 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent " +
    "dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 px-3 py-2";

  return (
    <>
      {/* Email */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Email *
      </label>
      <input
        type="email"
        {...register("contact.email", { required: "Email is required" })}
        className={inputClasses}
        placeholder="Example123@gmail.com"
      />
      {errors.contact?.email && (
        <p className="text-red-500 text-xs">{errors.contact.email.message}</p>
      )}

      {/* Phone Number */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Phone Number *
      </label>
      <input
        type="tel"
        {...register("contact.phoneNumber", {
          required: "Phone number is required",
        })}
        className={inputClasses}
        placeholder="Phone Number"
      />
      {errors.contact?.phoneNumber && (
        <p className="text-red-500 text-xs">
          {errors.contact.phoneNumber.message}
        </p>
      )}

      {/* Fax (optional) */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Fax
      </label>
      <input
        type="text"
        {...register("contact.fax")}
        className={inputClasses}
        placeholder="Fax Number (optional)"
      />

      {/* LinkedIn URL (optional) */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        LinkedIn URL
      </label>
      <input
        type="url"
        {...register("contact.linkedInUrl")}
        className={inputClasses}
        placeholder="e.g linkedin.com/in/yourprofile (optional)"
      />
    </>
  );
}
