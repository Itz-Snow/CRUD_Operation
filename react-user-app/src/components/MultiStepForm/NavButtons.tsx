import { ChevronLeft, ChevronRight } from "lucide-react"; 
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCurrentStep, createUser, updateUser, resetForm } from "../../features/user/userSlice";
import toast from "react-hot-toast";
import { transformFormDataForBackend } from "../../utils/transform";

export default function NavButtons() {
  const { currentStep, formData, currentUser } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  function handlePrevious() {
    dispatch(setCurrentStep(currentStep - 1));
  }
  
  // Final submission handler
  async function handleFinalSubmit() {
    console.log("final submission", formData);

    // Transform before sending
    const transformedData = transformFormDataForBackend(formData);

    try {
      if (currentUser?.id) {
        // UPDATE mode
        await dispatch(updateUser({ id: (currentUser.id), userData: transformedData })).unwrap();
        toast.success("User updated successfully!");
      } else {
        // CREATE mode
        await dispatch(createUser(transformedData)).unwrap();
        toast.success("User created successfully!");
      }

      // Delay reset for smooth UX
      setTimeout(() => {
        dispatch(resetForm());
      }, 1500);
    } catch (error) {
      toast.error("Submission failed. Please try again.");
      console.error("Submission failed:", error);
    }
  }

  return (
    <div className="flex justify-between items-center">
      {currentStep > 1 && (
        <button
          onClick={handlePrevious}
          type="button"
          className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          <span>Previous</span>
        </button>
      )}

      {currentStep === 3 ? (
        <button
          type="button"
          onClick={handleFinalSubmit}
          className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <span>{currentUser?.id ? "Update User" : "Confirm and Submit"}</span>
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      ) : (
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      )}
    </div>
  );
}
