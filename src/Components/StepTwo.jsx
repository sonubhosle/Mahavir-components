import { useState } from "react";
import { toggleArray } from "./Data";

const StepTwo = () => {
  const [activeId, setActiveId] = useState(toggleArray[0].id);

  return (
    <div className="mt-1 p-2 ">
      <div className="heading p-10 flex justify-center flex-col text-center">
        <h1 className="text-4xl text-black font-semibold pb-3">Select your Stone Shape and Quality</h1>
        <p className="text-[22px] text-gray-800">
          Use the filters below to design your perfect engagement ring
        </p>
      </div>
      <div className="flex justify-center">
      <div className="slider-container">
        {/* Sliding background */}
        <div
          className="slider-background"
          style={{ left: `${toggleArray.findIndex(item => item.id === activeId) * (100 / toggleArray.length)}%`, width: `${100 / toggleArray.length}%` }}
        />

        {/* Render Buttons */}
        {toggleArray.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`slider-button flex items-center justify-center ${activeId === item.id ? "active" : ""}`}
          >
            <span className="custom-svg"
              dangerouslySetInnerHTML={{ __html: item.svg }}
            />
            <div>{item.name}</div>
          </button>
        ))}
      </div>
    </div>
    </div>
  );
}

export default StepTwo;