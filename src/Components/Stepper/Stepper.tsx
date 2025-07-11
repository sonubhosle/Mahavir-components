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

const Stepper: React.FC<StepperProps> = ({
  activeStep,
  stoneSelected,
  onStepClick,
}) => {
  return (
    <section className="w-full grid grid-cols-3 relative">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = activeStep === step.id;
        const isDisabled =
          step.id === 3 && (!stoneSelected || activeStep < 2);

        return (
          <div
            key={step.id}
            role="button"
            data-testid={`step-${step.id}`}
            aria-label={`Step ${step.id}: ${step.subtitle}`}
            aria-current={isActive ? "step" : undefined}
            aria-disabled={isDisabled}
            aria-pressed={isActive}
            tabIndex={0}
            onClick={() => {
              if (isDisabled) return;
              onStepClick(step.id);
            }}
            onKeyDown={(e) => {
              if ((e.key === "Enter" || e.key === " ") && !isDisabled) {
                onStepClick(step.id);
              }
            }}
            className={`relative flex items-center cursor-pointer p-2 lg:p-4 border-2 transition-all duration-300
              ${isActive ? "border-black bg-white" : "border-gray-300 bg-gray-50"}
              ${index === 0 ? "rounded-l-lg z-20" : ""}
              ${index === steps.length - 1 ? "rounded-r-lg" : ""}
              ${isDisabled ? "pointer-events-none opacity-50" : ""}`}
          >
            <div
              className={`lg:justify-between md:gap-5 flex w-full ${
                step.id === 1 ? "pl-2 lg:pl-3" : "pl-6 lg:pl-10"
              }`}
            >
              {/* Step Number + Text */}
              <div className="left flex gap-2 lg:gap-4 max-w-full">
                <div className="text-lg lg:text-3xl font-semibold">
                  {step.id}
                </div>
                <div className="flex flex-col max-w-[120px] sm:max-w-[150px] overflow-hidden">
                  <div className="text-[10px] lg:text-xs text-gray-500 truncate">
                    {step.title}
                  </div>
                  <div className="uppercase font-semibold text-xs lg:text-sm text-black truncate">
                    {step.subtitle}
                  </div>
                </div>
              </div>

              {/* Icon */}
              <div className="text-xl lg:text-2xl z-20 flex items-center justify-center">
                <Icon size={20} className="lg:hidden" />
                <Icon size={35} className="hidden lg:block" />
              </div>
            </div>

            {/* Arrow Connector */}
            <div
              className={`absolute inset-y-0 
                ${
                  index === steps.length - 1
                    ? "right-[-28px] md:right-[-32px] lg:right-[-21px]"
                    : "right-[-34px] md:right-[-29px] lg:right-[-24px]"
                } 
                w-[50px] pointer-events-none z-10`}
            >
              <div className="absolute top-0 bottom-0 pointer-events-none z-10">
                <div
                  className={`absolute top-1/2 -translate-y-1/2 rotate-45
                    ${
                      isActive
                        ? "bg-white border-t-2 border-r-2 border-black"
                        : "bg-gray-50 border-t-2 border-r-2 border-gray-300"
                    }
                    w-[36px] h-[36px] md:w-[37px] md:h-[37px] lg:w-[50px] lg:h-[50px]`}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Stepper;
