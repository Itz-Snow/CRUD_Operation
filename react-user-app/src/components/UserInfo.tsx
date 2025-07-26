import { useForm } from "react-hook-form"
import NavButtons from "./MultiStepForm/NavButtons"


export default function UserInfo() {
    const {register, handleSubmit, formState:{errors}} = useForm()
    return (
        <form className="px-12 py-4">
            <> 
            {/* Profile Photo */}
            <label className="block  text-[0.875rem] font-medium text-[#1f2937] dark:text-[#ffffff]">
                Profile Photo
            </label>
            <input 
                type="file"
                className=" px-1.5 py-1 block w-full text-sm text-[#1f2937] bg-[#f9f9f9] rounded-[0.5rem] border-[1px] border-[#d1d5db] cursor-pointer focus:outline-none dark:text-[#9ca3af] dark:bg-[#374151] dark:border-[#4b5563] dark:placeholder-[#9ca3af] mb-[0.5rem] h-[30px]"
                accept="image/*" 
            />
            {/* First Name */}
            <label className="block  text-[0.875rem] font-medium text-[#1f2937] dark:text-[#ffffff]">
                First Name
            </label>
            <input 
                type="text" 
                className=" px-1.5 py-1 block w-full text-sm text-[#1f2937] bg-[#f9f9f9] rounded-[0.5rem] border-[1px] border-[#d1d5db] cursor-pointer focus:outline-none dark:text-[#9ca3af] dark:bg-[#374151] dark:border-[#4b5563] dark:placeholder-[#9ca3af] mb-[0.5rem] h-[30px]"
                placeholder="First Name"
                required
            />
            {/* Last Name */}
            <label className="px-1.5 py-1 block  text-[0.875rem] font-medium text-[#1f2937] dark:text-[#ffffff]">
                Last Name
            </label>
            <input
                type="text" 
                className="px-1.5 py-1 block w-full text-sm text-[#1f2937] bg-[#f9f9f9] rounded-[0.5rem] border-[1px] border-[#d1d5db] cursor-pointer focus:outline-none dark:text-[#9ca3af] dark:bg-[#374151] dark:border-[#4b5563] dark:placeholder-[#9ca3af] mb-[0.5rem] h-[30px]"
                placeholder="Last Name"
                required
            />
            {/* Date of Birth */}
            <label className="block text-[0.875rem] font-medium text-[#1f2937] dark:text-[#ffffff]">
                DOB
            </label>
            <input 
                type="date" 
                className="px-1.5 py-1 block w-full text-sm text-[#1f2937] bg-[#f9f9f9] rounded-[0.5rem] border-[1px] border-[#d1d5db] cursor-pointer focus:outline-none dark:text-[#9ca3af] dark:bg-[#374151] dark:border-[#4b5563] dark:placeholder-[#9ca3af] mb-[0.5rem] h-[30px]"
                required
            />
            {/* Ocupation */}
            <label className="block text-[0.875rem] font-medium text-[#1f2937] dark:text-[#ffffff]">
                Occupation
            </label>
            <input
                type="text" 
                className="px-1.5 py-1 block w-full text-sm text-[#1f2937] bg-[#f9f9f9] rounded-[0.5rem] border-[1px] border-[#d1d5db] cursor-pointer focus:outline-none dark:text-[#9ca3af] dark:bg-[#374151] dark:border-[#4b5563] dark:placeholder-[#9ca3af] mb-[1rem] h-[30px]"
                placeholder="Occupation"
                required    
            />
            {/* Gender */}
            <label className="block text-[0.875rem] font-medium text-[#1f2937] dark:text-[#ffffff]">
                Gender 
            </label>
            <select
            className=" px-1.5 py-1 block w-full text-sm text-[#1f2937] bg-[#f9f9f9] rounded-[0.5rem] border-[1px] border-[#d1d5db] cursor-pointer focus:outline-none dark:text-[#9ca3af] dark:bg-[#374151] dark:border-[#4b5563] dark:placeholder-[#9ca3af] mb-[0.5rem] h-[30px]"
                required
            >

                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            </>
            <NavButtons/>
        </form>
        
    )

}