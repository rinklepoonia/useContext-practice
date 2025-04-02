import React, { useState } from "react";
import { NUMBER_DATA_LIST } from "../../utils/helper";
import First from "../First";
import Second from "../Second";
import Third from "../Third";
import Fourth from "../Fourth";
import Button from "./Button";

const Options = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState([1]);
    const handleClick = (step) => {
        setActiveStep(step);
        if (step > completedSteps[completedSteps.length - 1]) {
            setCompletedSteps([...completedSteps, step]); // Add the step to completed list if it's a forward step
        } else {
            // If going backward, only include steps up to the current active step
            setCompletedSteps(completedSteps.filter((s) => s <= step));
        }
    };
    const handleNext = () => {
        if (activeStep < 4) {
            const nextStep = activeStep + 1;
            setActiveStep(nextStep);
            if (!completedSteps.includes(nextStep)) {
                setCompletedSteps([...completedSteps, nextStep]);
            }
        }
    };

    const handlePrev = () => {
        if (activeStep > 1) {
            const prevStep = activeStep - 1;
            setActiveStep(prevStep);
            setCompletedSteps(completedSteps.filter((s) => s <= prevStep));
        }
    };
    return (
        <div className="max-w-[1100px] mx-auto">
            <div className="flex gap-[130px] max-w-[800px] mx-auto relative">
                {NUMBER_DATA_LIST.map((obj, i) => (
                    <div key={i} className="relative flex items-center">
                        <button
                            onClick={() => handleClick(obj)}
                            className={`cursor-pointer w-[50px] h-[50px] flex justify-center items-center font-semibold text-xl border border-solid rounded-full transition-all duration-300
                            ${completedSteps.includes(obj) ? "bg-[#5E0612] text-white" : "bg-transparent text-gray-800"}`}
                        >
                            {obj}
                        </button>
                        {i !== NUMBER_DATA_LIST.length - 1 && (
                            <div
                                className={`absolute top-1/2 left-[54px] w-[106px] h-1 transition-all duration-300
                               ${activeStep > obj ? "bg-[#5E0612]" : "bg-gray-400"}`}
                            ></div>
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-5">
                {activeStep === 1 && <First />}
                {activeStep === 2 && <Second />}
                {activeStep === 3 && <Third />}
                {activeStep === 4 && <Fourth />}
            </div>
            <div className="flex items-center gap-3 mt-5">
                <Button onClick={handlePrev}>Previous</Button>
                <Button onClick={handleNext}>Next</Button>
            </div>
        </div>
    );
};

export default Options;
