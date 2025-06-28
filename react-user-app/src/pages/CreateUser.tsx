import { useMultistepForm } from "../hooks/useMultistepFom"

export default function CreateUser() {
    const {steps,currentStepIndex,step, next, back} = useMultistepForm([
    <div>Step 1</div>, 
    <div>Step 2</div>, 
    <div>Step 3</div>])  

    return (
            <div className="max-w-3xl mx-auto p-[2rem] m-[1rem] rounded-[0.5rem] relative border border-black ">
            <h2 className="">Create User </h2>
            <form >
                <div className="absolute top-[0.5rem] right-[0.5rem]">
                    {currentStepIndex + 1  } / {steps.length}
                </div>
                <div className="mt-[2rem]">
                {step}
                </div>
                <div className="mt-[2rem] flex justify-between">
                    <button 
                        type="button" 
                        onClick={() => back()} 
                        disabled={currentStepIndex === 0}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Back
                    </button>
                    <button 
                        type="button" 
                        onClick={() => next()} 
                        disabled={currentStepIndex === steps.length - 1}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Next
                    </button>
                </div>
            </form >
            
        </div>
    )
}