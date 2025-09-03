
import Steps from '../components/MultiStepForm/Steps'
import StepForm from '../components/MultiStepForm/StepForm';
import type { StepType} from '../types/UserTypes'
import  { useSelector } from 'react-redux';
import type { RootState } from '../app/store';

export default function CreateUser() {

    const currentUser = useSelector((store: RootState) => store.user.currentUser);
    const isEditMode = Boolean(currentUser);

    const steps:StepType[] = [
        { number : 1,title : "User Info"},
        { number : 2,title : "User Details"},
        { number : 3,title: isEditMode ? "Review & Update" : "Confirm and Submit"  },
]

    return (
            <div className="mx-auto w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-4 md:p-6 dark:bg-gray-800 dark:border-gray-700 grid grid-cols-12 gap-4 min-h-screen">
                {/* steps */}
                <Steps steps={steps} className="col-span-12 md:col-span-4" />
                {/* form */}
                <div className="rounded-[0.5rem] col-span-12 md:col-span-8">
                    <StepForm />
                </div>
            </div>
        
    )
}
