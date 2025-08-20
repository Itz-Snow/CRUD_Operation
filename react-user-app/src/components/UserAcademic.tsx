
import { useFormContext, useFieldArray } from "react-hook-form";
import type { StepTwoFormValues } from "./StepTwo";

//
export default function UserAcademic() {

  const { control, register, formState: { errors } } = useFormContext<StepTwoFormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "academic" // Matches string[] in StepTwoFormValues
  });

  return (
    <div className="space-y-4">
      <h3 className="text-base font-medium text-gray-900 dark:text-white">
        Academic Background
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
              className=" px-2 py-1 block w-full text-sm text-[#1f2937] bg-[#f9f9f9]
                         rounded-[0.5rem] border-[1px] border-[#d1d5db]
                         focus:outline-none dark:text-[#9ca3af] dark:bg-[#374151]
                         dark:border-[#4b5563] dark:placeholder-[#9ca3af] h-[30px]"
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
            className="text-red-500 text-sm mt-8"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append("")} // Add empty school name
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Add School
      </button>
    </div>
  );
}
