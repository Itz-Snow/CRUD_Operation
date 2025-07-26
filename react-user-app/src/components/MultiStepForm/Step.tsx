"use client";
import type { StepType } from "../../types/UserTypes";

type StepProps = {
  step: StepType;
};

// Step component that displays the step number and title
export default function Step({ step }: StepProps) {
  const { number, title } = step;
  const currentStep = 1; // This should be replaced with the actual current step from your state management
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