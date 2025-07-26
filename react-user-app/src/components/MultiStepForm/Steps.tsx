
import Step from "./Step";
import type { StepType } from "../../types/UserTypes";

type StepsProps = {
  steps: StepType[];
}

// Displays list of steps horizontally on small screens,vertically on medium+ screens.
// Takes a prop 'steps' which is an array of objects
export default function Steps({ steps }: StepsProps) {
  return (
    <div className="rounded-[0.5rem] col-span-[100%] md:col-span-4 bg-[#2563eb] p-[2.5rem] flex flex-row justify-between md:flex-col md:justify-start gap-[1.5rem] flex-wrap ">
      {steps.map((step, i) => {
        return <Step key={i} step={step} />;
      })}
    </div>
  );
}
