
import Steps from '../components/MultiStepForm/Steps'
import StepForm from '../components/MultiStepForm/StepForm';
import type { StepType} from '../types/UserTypes'
import NavButtons from '../components/MultiStepForm/NavButtons';

// export type FormData = {
//   //  User Info
//   profilePhoto: File | null;
//   firstName: string;
//   lastName: string;
//   dob: string;
//   occupation: string;
//   gender: string;

//   //  Contact
//   email: string;
//   phoneNumber: string;
//   fax?: string;
//   linkedInUrl?: string;

//   // 🏡 Step 2b - Address
//   address: string;
//   city: string;
//   state: string;
//   country: string;
//   zipCode: string;

//   //  Academic Background
//   academics: string[] // list of past schools
// }

// const INITIAL_DATA : FormData = {

//     profilePhoto: null,   
//     firstName: '',
//     lastName: '',
//     dob: '',
//     occupation: '',
//     gender: '',
//     email: '',
//     phoneNumber: '',
//     fax: '',
//     linkedInUrl: '',
//     address: '',
//     city: '',   
//     state: '',
//     country: '',
//     zipCode: '',
//     academics: []
// }



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