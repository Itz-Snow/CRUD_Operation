import { useFormContext } from "react-hook-form";
import type { StepTwoFormValues } from "./StepTwo";

export default function UserAddress() {
  const {
    register,
    formState: { errors },
  } = useFormContext<StepTwoFormValues>();

  const inputClass =
    "block w-full text-sm text-gray-800 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 px-3 py-2";

  return (
    <>
      {/* Street Address */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Street Address *
      </label>
      <input
        type="text"
        {...register("address.street", {
          required: "Street address is required",
        })}
        className={inputClass}
        placeholder="e.g 123 Main St"
      />
      {errors.address?.street && (
        <p className="text-red-500 text-xs">{errors.address.street.message}</p>
      )}

      {/* City */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        City
      </label>
      <input
        type="text"
        {...register("address.city", { required: "City is required" })}
        className={inputClass}
        placeholder="City"
      />
      {errors.address?.city && (
        <p className="text-red-500 text-xs">{errors.address.city.message}</p>
      )}

      {/* State */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        State *
      </label>
      <input
        type="text"
        {...register("address.state", { required: "State is required" })}
        className={inputClass}
        placeholder="State"
      />
      {errors.address?.state && (
        <p className="text-red-500 text-xs">{errors.address.state.message}</p>
      )}

      {/* Country */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Country *
      </label>
      <input
        type="text"
        {...register("address.country", { required: "Country is required" })}
        className={inputClass}
        placeholder="Country"
      />
      {errors.address?.country && (
        <p className="text-red-500 text-xs">{errors.address.country.message}</p>
      )}

      {/* Postal Code */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Postal Code *
      </label>
      <input
        type="text"
        {...register("address.zipCode", {
          required: "Postal code is required",
        })}
        className={inputClass}
        placeholder="e.g 100001"
      />
      {errors.address?.zipCode && (
        <p className="text-red-500 text-xs">{errors.address.zipCode.message}</p>
      )}
    </>
  );
}
