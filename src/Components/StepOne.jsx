import React, { useState } from 'react';
import { iconsArray } from './Data';
import { FaRegCircle } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { LiaLifeRingSolid } from "react-icons/lia";
import Products from './Products';

const StepOne = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Price (low to high)");

    const handleSelect = (option) => {
        setSelected(option);
        setOpen(false);
    };
    return (
        <div className="w-full relative">
            {/* Heading */}
            <div className="heading p-10 flex justify-center flex-col text-center">
                <h1 className="text-4xl text-black font-semibold pb-3">Engagement Rings</h1>
                <p className="text-[22px] text-gray-800">
                    Discover our collection of made to order engagement rings and customize it to your preference
                </p>
            </div>

            {/* Icons Grid */}
            <div className="flex justify-center gap-4 p-6">
                {iconsArray.map((item, index) => (
                    <div
                        key={index}
                        className={`w-[100px] h-[110px] rounded-lg cursor-pointer flex flex-col items-center justify-center transition-all duration-300 hover:bg-gray-100 
              ${selectedIndex === index ? 'border-2 border-black' : 'border border-transparent'}`}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <div dangerouslySetInnerHTML={{ __html: item.svg }} />
                        <p className=" text-sm text-black font-medium text-center">{item.name}</p>
                    </div>
                ))}
            </div>
            <hr className="border-0 h-[1px] bg-gray-100 " />
            <div className="flex justify-between items-center py-4">
                <h2 className="text-xl font-semibold text-black flex gap-6">
                    <div className="btn-one flex items-center  bg-gray-100"><div className="text  flex items-center gap-2"><FaRegCircle color="gold" size={20} className='flex items-center ' /> 14k Yellow Gold</div>  <p><IoCloseOutline className='flex items-center ' size={23}/></p></div>
                    <div className="btn-two flex items-center bg-gray-100 "><div className="text  flex items-center gap-2"><LiaLifeRingSolid size={27} className='flex items-center ' /> Round</div> <p><IoCloseOutline size={23} className='flex items-center '/></p></div>
                </h2>
                <div className="relative">
                    <button  onClick={() => setOpen(!open)}
                        className="bg-white w-48 border cursor-pointer border-gray-300 px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-gray-50"
                    >
                        {selected}
                    </button>
                    {open && (
                        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white border border-gray-300  z-50">
                            <div className="">
                                <button onClick={() => handleSelect("Price (low to high)")}
                                    className="block cursor-pointer w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Price (low to high)
                                </button>
                                <button
                                    onClick={() => handleSelect("Price (high to low)")}
                                    className="block cursor-pointer w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Price (high to low)
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
              <Products />
        </div>
    );
};

export default StepOne;
