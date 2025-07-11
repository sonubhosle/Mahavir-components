import React, { useState } from "react";
import { iconsArray } from "../Data";
import { FaRegCircle } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { LiaLifeRingSolid } from "react-icons/lia";
import Products from "../Products/Products";
import { IoFilter } from "react-icons/io5";

interface IconItem {
  name: string;
  svg: string;
}

const StepOne: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [isIconPanelOpen, setIsIconPanelOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Price (low to high)");

  const handleSelect = (option: string) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <section className="w-full relative">
      {/* Heading */}
      <div className="heading p-10 flex justify-center flex-col text-center">
        <h1 className="text-4xl text-black font-semibold pb-3">
          Engagement Rings
        </h1>
        <p className="text-[22px] text-gray-800">
          Discover our collection of made to order engagement rings and
          customize it to your preference
        </p>
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:flex justify-center gap-2 mt-6">
        {iconsArray.map((item: IconItem, index: number) => (
          <div
            key={index}
            className={`w-[100px] h-[110px] rounded-lg cursor-pointer flex flex-col items-center justify-center transition-all duration-300 hover:bg-gray-100 ${selectedIndex === index
              ? "border-2 border-black"
              : "border border-transparent"
              }`}
            onClick={() => setSelectedIndex(index)}
          >
            <div dangerouslySetInnerHTML={{ __html: item.svg }} />
            <p className="text-sm text-black font-medium text-center">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile: Button to open icon panel */}


      {/* Mobile Sliding Panel */}
      {isIconPanelOpen && (
        <div className="fixed inset-0 z-70 bg-[#00000041] bg-opacity-40 flex justify-center items-end md:hidden">
          <div
            className="bg-white w-full rounded-t-2xl p-4 max-h-[80vh] overflow-y-auto animate-slide-up"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setIsIconPanelOpen(false)}
                className="text-black text-2xl font-bold"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {iconsArray.map((item: IconItem, index: number) => (
                <div
                  key={index}
                  className={`w-[90px] h-[100px] rounded-lg cursor-pointer flex flex-col items-center justify-center transition-all duration-300 hover:bg-gray-100 ${selectedIndex === index
                    ? "border-2 border-black"
                    : "border border-transparent"
                    }`}
                  onClick={() => {
                    setSelectedIndex(index);
                    setIsIconPanelOpen(false);
                  }}
                >
                  <div dangerouslySetInnerHTML={{ __html: item.svg }} />
                  <p className="text-sm text-black font-medium text-center">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <hr className="border-0 h-[1px] bg-gray-100 mt-6" />

      {/* Filters + Sort */}
      <div className="flex justify-between items-center py-4  flex-wrap gap-4">
        <div className="text-xl font-semibold text-black flex flex-wrap gap-4">

          <div className="btn-one flex items-center bg-gray-100 px-3 py-1 rounded-md">
            <FaRegCircle color="gold" size={20} />
            <span className="ml-2">14k Yellow Gold</span>
            <IoCloseOutline size={20} className="ml-2 cursor-pointer" />
          </div>
          <div className="btn-two flex items-center bg-gray-100 px-3 py-1 rounded-md">
            <LiaLifeRingSolid size={24} />
            <span className="ml-2">Round</span>
            <IoCloseOutline size={20} className="ml-2 cursor-pointer" />
          </div>
        </div>

        {/* Sorting Dropdown */}
        <div className="relative flex gap-2">
          <button onClick={() => setIsIconPanelOpen(true)}
            className="bg-white flex gap-3  p-4 border cursor-pointer border-gray-300 px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-gray-50" >
            <IoFilter size={20} />  Filters
          </button>
          <div className="">
            <button
              onClick={() => setOpen(!open)}
              className="bg-white w-48 border cursor-pointer border-gray-300 px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-gray-50"
            >
              {selected}
            </button>
            {open && (
              <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white border border-gray-300 z-50">
                <button
                  onClick={() => handleSelect("Price (low to high)")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Price (low to high)
                </button>
                <button
                  onClick={() => handleSelect("Price (high to low)")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Price (high to low)
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Products />
    </section>
  );
};

export default StepOne;
