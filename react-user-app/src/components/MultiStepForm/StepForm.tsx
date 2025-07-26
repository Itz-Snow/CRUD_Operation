import StepOne from "../StepOne";
import StepTwo from "../StepTwo";
import ResumeLike from "../ResumeLike";


 // Renders the a form based on the current step in a multistep form.
export default function StepForm() {

  const currentStep = 1

  function renderFormByStep(step: number) {
    if (step === 1) {
      return <StepOne />
    } else if (step === 2) {
      return <StepTwo />
    } else if (step === 3) {
      return <ResumeLike />
    } 
  }

  return (
    <> {renderFormByStep(currentStep)} </>
  )
}

