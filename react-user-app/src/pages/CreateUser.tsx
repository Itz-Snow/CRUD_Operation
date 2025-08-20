
import Steps from '../components/MultistepForm/Steps'
import StepForm from '../components/MultistepForm/StepForm';
import type { StepType} from '../types/UserTypes'


export default function CreateUser() {
    const steps:StepType[] = [
        {
            number : 1,
            title : "User Info"
        },
        {
            number : 2,
            title : "User Details"
        },
        {
            number : 3,
            title : "Confirm and Submit"
        },
]

    return (
            <div className="mx-auto w-[100%] max-w-[64rem] p-[1rem] bg-[#ffffff] border border-[#e5e7eb] rounded-[0.5rem] shadow-custom-md sm:p-[1rem] md:p-[1.5rem] dark:bg-[#1f2937] dark:border-[#374151] grid grid-cols-12 gap-4 min-h-screen">
                {/* steps */}
                <Steps steps ={steps}/>
                {/* form */}
                <div className="rounded-[0.5rem] col-span-[100%] md:col-span-8">
                    <StepForm />
                </div>
            </div>
        
    )
}