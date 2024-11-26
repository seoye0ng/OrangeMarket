import { useState } from 'react';

export default function useSteps(initialStep = 1, maxStep = 2) {
  const [step, setStep] = useState(initialStep);

  const goToNextStep = () =>
    setStep((currentStep) => Math.min(currentStep + 1, maxStep));

  const goToPreviousStep = () =>
    setStep((currentStep) => Math.max(currentStep - 1, 1));

  return {
    step,
    goToNextStep,
    goToPreviousStep,
  };
}
