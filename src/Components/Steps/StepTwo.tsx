import React, { useState } from "react";
import { modelArray } from "../Data"; 

interface StoneItem {
  id: number;
  name: string;
  svg: string;
}

interface StepTwoProps {
  selectedStone: string;
  onStoneSelect: (stone: string) => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ selectedStone, onStoneSelect }) => {
  const [activeId, setActiveId] = useState<number>(modelArray[0].id);

  const activeIndex = modelArray.findIndex((item) => item.id === activeId);

  const handleSelect = (id: number, name: string) => {
    setActiveId(id);
    onStoneSelect(name); 
  };

  return (
    <div className="mt-1 p-2">
      <div className="heading p-10 flex justify-center flex-col text-center">
        <h1 className="text-4xl text-black font-semibold pb-3">
          Select your Stone Shape and Quality
        </h1>
        <p className="text-[22px] text-gray-800">
          Use the filters below to design your perfect engagement ring
        </p>
        <p className="text-md text-gray-500 mt-4 italic">
          Selected Stone: <span className="font-semibold">{selectedStone}</span>
        </p>
      </div>

      <div className="flex justify-center">
        <div className="slider-container flex gap-4 relative">
          <div
            className="slider-background absolute bg-gray-300 h-full top-0 transition-all duration-300"
            style={{
              left: `${activeIndex * (100 / modelArray.length)}%`,
              width: `${100 / modelArray.length}%`,
            }}
          />

          {modelArray.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id, item.name)}
              className={`slider-button px-4 py-2 rounded ${
                activeId === item.id ? "selected" : ""
              }`}
              aria-label={item.name} 
            >
              <span
                className="custom-svg"
                dangerouslySetInnerHTML={{ __html: item.svg }}
              />
              <div>{item.name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
