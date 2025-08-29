import { useForm, FormProvider } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentStep, updateFormData } from "../features/user/userSlice";
import { type RootState } from "../app/store";
import UserContact from "./UserContact";
import UserAddress from "./UserAddress";
import UserAcademic from "./UserAcademic";
import NavButtons from "./MultiStepForm/NavButtons";

// Define types for your form data
export interface StepTwoFormValues {
  contact: {
    email: string;
    phoneNumber: string;
    fax?: string;
    linkedInUrl?: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  academic: Array<{ id: string; value: string }> | string[]; // list of all past schools
}


export default function StepTwo() {

    
    const dispatch = useDispatch()
    const { currentStep, formData } = useSelector((store: RootState) => store.user)

    // Create a form context using useForm
    // This allows you to pass methods down to child components
    const methods = useForm<StepTwoFormValues>({
        defaultValues: {
            ...formData, // Use existing form data if available
        }
    })


    // Handle form submission
    const onSubmit = (data: StepTwoFormValues) => {
        // Dispatch the form data to the global state
        dispatch(updateFormData(data));
        // Move to the next step
        dispatch(setCurrentStep(currentStep + 1));
        console.log("Form Data", data);
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} >
                <UserContact />
                <UserAddress />
                <UserAcademic />
                {/* Navigation Buttons */}
                <NavButtons />
            </form>    
        </FormProvider>
    )
}
