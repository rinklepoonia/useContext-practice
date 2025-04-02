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
    const [formData, setFormData] = useState({
        address: "",
        price: "",
        houseNumber: "",
        email: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = () => {
        let newErrors = {};

        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.price.trim()) newErrors.price = "Starting price is required";
        if (!formData.houseNumber.trim()) newErrors.houseNumber = "House number is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

            // Find the first empty field and navigate to its step
            if (!formData.address.trim()) setActiveStep(1);
            else if (!formData.price.trim()) setActiveStep(2);
            else if (!formData.houseNumber.trim()) setActiveStep(3);
            else if (!formData.email.trim()) setActiveStep(4);

            return;
        }

        // If all fields are filled, show success message and reset the form
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 2000);
        setFormData({ address: "", price: "", houseNumber: "", email: "" });
    };
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
                {activeStep === 1 && <First formData={formData} errors={errors} onChange={handleChange} />}
                {activeStep === 2 && <Second formData={formData} errors={errors} onChange={handleChange} />}
                {activeStep === 3 && <Third formData={formData} errors={errors} onChange={handleChange} />}
                {activeStep === 4 && <Fourth formData={formData} errors={errors} onChange={handleChange} />}
            </div>
            <div className="flex items-center gap-3 mt-5">
                <Button onClick={handlePrev}>Previous</Button>
                <Button onClick={handleNext}>Next</Button>
            </div>
            <button onClick={handleSubmit} type='submit' className="text-base font-normal bg-blue-400 text-white rounded-lg px-6 py-2 shadow-lg mt-10">Submit</button>
            {isSubmitted && (
                <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg">
                    Form submitted successfully!
                </div>
            )}
        </div>
    );
};

export default Options;
