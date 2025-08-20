import { useFormContext } from "react-hook-form";
import type { StepTwoFormValues } from "./StepTwo";

export default function UserAddress() {
  const { register, formState: { errors } } = useFormContext<StepTwoFormValues>();

  return (
    <>
      {/* Street Address */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Street Address
      </label>
      <input
        type="text"
        {...register("address.street", { required: "Street address is required" })}
        className="block w-full text-sm text-[#1f2937] bg-[#f9f9f9] rounded-[0.5rem] border border-[#d1d5db] focus:outline-none dark:text-[#9ca3af] dark:bg-[#374151] dark:border-[#4b5563] dark:placeholder-[#9ca3af] mb-2 h-[30px]"
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
        className="block w-full text-sm text-[#1f2937] bg-[#f9f9f9] rounded-[0.5rem] border border-[#d1d5db] focus:outline-none dark:text-[#9ca3af] dark:bg-[#374151] dark:border-[#4b5563] dark:placeholder-[#9ca3af] mb-2 h-[30px]"
        placeholder="City"
      />
      {errors.address?.city && (
        <p className="text-red-500 text-xs">{errors.address.city.message}</p>
      )}

      {/* State */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        State
      </label>
      <input
        type="text"
        {...register("address.state", { required: "State is required" })}
        className="block w-full text-sm text-[#1f2937] bg-[#f9f9f9] rounded-[0.5rem] border border-[#d1d5db] focus:outline-none dark:text-[#9ca3af] dark:bg-[#374151] dark:border-[#4b5563] dark:placeholder-[#9ca3af] mb-2 h-[30px]"
        placeholder="State"
      />
      {errors.address?.state && (
        <p className="text-red-500 text-xs">{errors.address.state.message}</p>
      )}

      {/* Country */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Country
      </label>
      <input
        type="text"
        {...register("address.country", { required: "Country is required" })}
        className="block w-full text-sm text-[#1f2937] bg-[#f9f9f9] rounded-[0.5rem] border border-[#d1d5db] focus:outline-none dark:text-[#9ca3af] dark:bg-[#374151] dark:border-[#4b5563] dark:placeholder-[#9ca3af] mb-2 h-[30px]"
        placeholder="Country"
      />
      {errors.address?.country && (
        <p className="text-red-500 text-xs">{errors.address.country.message}</p>
      )}

      {/* Postal Code */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Postal Code
      </label>
      <input
        type="text"
        {...register("address.postalCode", { required: "Postal code is required" })}
        className="block w-full text-sm text-[#1f2937] bg-[#f9f9f9] rounded-[0.5rem] border border-[#d1d5db] focus:outline-none dark:text-[#9ca3af] dark:bg-[#374151] dark:border-[#4b5563] dark:placeholder-[#9ca3af] mb-2 h-[30px]"
        placeholder="e.g 100001"
      />
      {errors.address?.postalCode && (
        <p className="text-red-500 text-xs">{errors.address.postalCode.message}</p>
      )}
    </>
  );
}
