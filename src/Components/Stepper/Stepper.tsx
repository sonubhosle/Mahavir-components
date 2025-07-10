import React from "react";
import { CgRing } from "react-icons/cg";
import { GiCutDiamond, GiBigDiamondRing } from "react-icons/gi";

type Step = {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ElementType;
};

interface StepperProps {
  activeStep: number;
  stoneSelected: string;
  onStepClick: (id: number) => void;
}

const steps: Step[] = [
  { id: 1, title: "Select your", subtitle: "SETTING", icon: CgRing },
  { id: 2, title: "Select your", subtitle: "STONE", icon: GiCutDiamond },
  { id: 3, title: "Complete your", subtitle: "RING", icon: GiBigDiamondRing },
];

const Stepper: React.FC<StepperProps> = ({ activeStep, stoneSelected, onStepClick }) => {
  return (
    <div className="w-full grid grid-cols-3 relative ">
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <div
            key={step.id}
            className={`relative flex items-center cursor-pointer -ml-1.5 p-4 border-2 transition-all duration-300 
              ${activeStep === step.id ? "border-black bg-white" : "border-gray-300 bg-gray-50"} 
              ${index === 0 ? "rounded-l-lg z-20" : ""} 
              ${index === steps.length - 1 ? "rounded-r-lg" : ""}
              ${step.id === 3 && (!stoneSelected || activeStep < 2) ? "pointer-events-none opacity-50" : ""}`}
            onClick={() => onStepClick(step.id)}
          >
            <div className={`justify-between flex w-full ${step.id === 1 ? "pl-3" : "pl-15"}`}>
              <div className="left flex gap-4">
                <div className="text-3xl font-semibold">{step.id}</div>
                <div className="overflow-hidden whitespace-nowrap">
                  <div className="text-xs text-gray-500">{step.title}</div>
                  <div className="uppercase font-semibold text-sm text-black">
                    {step.subtitle}
                  </div>
                </div>
              </div>
              <div className="text-2xl z-20 flex items-center justify-center">
                <Icon size={35} />
              </div>
            </div>

            {/* Arrow */}
            <div className="absolute top-0 bottom-0 right-[-2px] w-[30px] pointer-events-none z-10">
              <div
                className="absolute top-0 bottom-0 pointer-events-none z-10"
                style={{
                  right:
                    step.id === 1 ? "25px" :
                    step.id === 2 ? "30px" :
                    step.id === 3 ? "31px" : "0px",
                }}
              >
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-[50px] h-[50px] rotate-45 ${
                    activeStep === step.id
                      ? "bg-white border-t-2 border-r-2 border-black"
                      : "bg-gray-50 border-t-2 border-r-2 border-gray-300"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
