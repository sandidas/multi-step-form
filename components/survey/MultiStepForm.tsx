"use client";
import React, { useState } from "react";
import questionnaireData from '../../public/data.json'; // Import your data

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

console.log('questionnaireData', questionnaireData)

  return <div>


  </div>;
};

export default MultiStepForm;
