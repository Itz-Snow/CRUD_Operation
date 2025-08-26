import Step from "./Step";
import type { StepType } from "../../types/UserTypes";

type StepsProps = {
  steps: StepType[],
  className?: string
}

// Displays list of steps horizontally on small screens,vertically on medium+ screens.
// Takes a prop 'steps' which is an array of objects
export default function Steps({ steps, className  }: StepsProps) {
  return (
    <div className={`rounded-[0.5rem] bg-[#2563eb] p-[2.5rem] flex flex-row justify-between md:flex-col md:justify-start gap-[1.5rem] flex-wrap ${className ?? ""}`}>
      {steps.map((step, i) => {
        return <Step key={i} step={step} />;
      })}
    </div>
  );
}
