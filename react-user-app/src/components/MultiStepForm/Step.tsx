"use client";
import { useSelector } from "react-redux";
import type { StepType } from "../../types/UserTypes";
import type { RootState } from "../../app/store";

type StepProps = {
  step: StepType;
};

// Step component that displays the step number and title
export default function Step({ step }: StepProps) {

  const { number, title } = step
  const currentStep = useSelector((store : RootState) => store.user.currentStep)
  
  return (
    <div className="flex flex-col md:flex-row items-center gap-[0.75rem] ">
      <div
        className={`w-[2rem]  h-[2rem] text-[#f8fafc] border border-[#f8fafc] rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
          number === currentStep ? "bg-[#93c5fd] border-0" : ""
        }`}
      >
        {number}
      </div>
      <div className="flex-col flex  justify-center">
        <h4 className="text-slate-200 text-sm uppercase ">Step {number}</h4>
        <h3 className="uppercase text-sm text-white font-bold">{title}</h3>
      </div>
    </div>
  );
}