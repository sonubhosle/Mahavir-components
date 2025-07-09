import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GoDash } from "react-icons/go";

interface StoneItem {
    id: number;
    icon: string;
    name: string;
}


interface StoneGridProps {
    stones: StoneItem[];
}

const StoneGrid: React.FC<StoneGridProps> = ({ stones }) => {
    const [showMore, setShowMore] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const firstFive = stones.slice(0, 5);
    const nextFive = stones.slice(5, 10);

    return (
        <div className="pt-5">
            {/* First row */}
            <div className="grid grid-cols-5 ">
                {firstFive.slice(0, 4).map((item, idx) => (
                    <div key={idx} onClick={() => setActiveIndex(idx)} className={`w-[80px] flex flex-col h-[90px] border-2 rounded-xl flex items-center justify-center text-gray-900 font-bold cursor-pointer
                 ${activeIndex === idx ? 'border-gray-800 ' : 'border-gray-300 '} hover:bg-gray-100 hover:text-gray-800 transition`} >
                        <img src={item.icon} alt={item.name} className="w-80 h-80"  />
                        <p>{item.name}</p>
                    </div>
                ))}

                {/* 5th box: toggle button */}
                <div onClick={() => setShowMore(!showMore)} className={`group w-[80px] h-[90px] cursor-pointer border-2 border-gray-300 rounded-xl flex items-center justify-center
                 transition-colors duration-300  ${showMore ? 'hover:bg-gray-100' : ' hover:bg-gray-100'}`}>
                    <button className={`flex items-center cursor-pointer justify-center w-10 h-10 font-bold rounded-full  text-gary-100 
                     transition-colors duration-300 ${showMore ? 'bg-gray-100' : 'bg-gray-100'}  group-hover:bg-white`}
                        title={showMore ? 'Hide' : 'Show More'} >
                        {showMore ? <GoDash /> : <FaPlus />}
                    </button>
                </div>


            </div>

            {/* Second row (hidden or shown) */}
            <div className={`grid grid-cols-5  mt-4 transition-all duration-500 ${showMore ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"}`} >
                {nextFive.map((item, idx) => (
                    <div key={idx} onClick={() => setActiveIndex(idx + 5)} className={`w-[80px] h-[90px] border-2 rounded-xl flex items-center justify-center text-gray-900 font-bold cursor-pointer
                        ${activeIndex === idx + 5 ? 'border-gray-800 ' : 'border-gray-300 '}  hover:bg-gray-100 hover:text-gray-800 transition`}  >
                        <img src={item.icon} alt={item.name}  />
                         <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StoneGrid;
