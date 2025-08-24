import { useEffect } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import type { StepTwoFormValues } from "./StepTwo";

export default function UserAcademic() {
  const { control, register, formState: { errors } } = useFormContext<StepTwoFormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "academic",
  });

  // Ensure at least one field exists
  useEffect(() => {
    if (fields.length === 0) {
      append(""); // Add one empty string
    }
  }, [fields, append]);

  return (
    <div className="space-y-4">
      <h3 className="text-base font-medium text-gray-900 dark:text-white">
        Academic Background *
      </h3>

      {fields.map((field, index) => (
        <div key={field.id} className="flex items-start gap-2">
          <div className="flex-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              School {index + 1}
            </label>
            <input
              type="text"
              {...register(`academic.${index}` as const, {
                required: "School name is required",
              })}
              className="block w-full text-sm text-[#1f2937] bg-[#f9f9f9] 
                         rounded-[0.5rem] border border-[#d1d5db] px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         dark:text-[#9ca3af] dark:bg-[#374151] dark:border-[#4b5563]
                         dark:placeholder-[#9ca3af]"
              placeholder="e.g. Harvard University"
            />
            {errors.academic?.[index] && (
              <p className="text-red-500 text-xs mt-1">
                {errors.academic[index]?.message as string}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => remove(index)}
            disabled={fields.length === 1} // 🚫 Prevent removing last field
            className="text-red-600 text-sm font-medium mt-8 hover:underline disabled:opacity-50"
            aria-label={`Remove school ${index + 1}`}
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append("")}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
      >
        Add School
      </button>
    </div>
  );
}
