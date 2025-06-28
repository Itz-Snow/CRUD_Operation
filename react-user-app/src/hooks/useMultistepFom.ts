import { useState } from "react";
import type { ReactElement } from 'react';


export function  useMultistepForm(steps: ReactElement[]){

    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    function next(){
        setCurrentStepIndex((prevIndex) => {
            if (prevIndex >= steps.length - 1) {
                return prevIndex; // Prevent going beyond the last step
            }
            return prevIndex + 1
        })

    }

    function back(){
        setCurrentStepIndex((prevIndex) => {
            if (prevIndex <= 0) {
                return prevIndex; // Prevent going before the first step
            }
            return prevIndex - 1
        })
    }
    
    function goto(index: number){
        setCurrentStepIndex(index)
    }
    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        goto,
        next,
        back,
    }    
    
}