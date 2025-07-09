import React, { useState } from 'react';
import HeroSection from './HeroSection';
import { FaCirclePlus } from "react-icons/fa6";
import StoneGrid from './StoneGrid';
import { centerStone } from '../../Components/Data';
const data = [
    'Box 1', 'Box 2', 'Box 3', 'Box 4', 'Box 5',
    'Box 6', 'Box 7', 'Box 8', 'Box 9', 'Box 10'
];

const Product_Details: React.FC = () => {


    return (
        <div className="flex flex-col md:flex-row gap-10 p-10">
            <div className="w-full md:w-[60%] bg-gray-100 space-y-4 rounded-3xl border border-gray-100 overflow-hidden ">
                <HeroSection />
            </div>
            <div className="w-full md:w-[40%] ">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-1">
                        <div className="text-3xl  text-gray-900">The Twig</div>
                        <div className="text-3xl mt-1 text-gray-900">$1,000</div>
                        <div className="flex items-center gap-2 text-white pr-1 pl-2 p-1 mt-2 rounded-full bg-[linear-gradient(to_right,_#d89571,_#d89571)]  w-fit text-sm font-semibold cursor-pointer">
                            <span className='text-[17px] font-bold'>Extras</span>
                            < FaCirclePlus size={20} />
                        </div>
                    </div>

                    <div className="flex gap-10 ">
                        <div className="flex flex-col items-center text-center cursor-pointer ">
                            <img className="w-8 h-8 mb-1" src="https://cdn.tangiblee.com/integration/3.1/managed/keyzarjewelry.com/revision_3/variation_original/img/icon.png" alt="Try On" />
                            <p className="text-sm font-medium text-gray-700">Try On</p>
                        </div>
                        <div className="flex flex-col items-center text-center cursor-pointer ">
                            <img className="w-8 h-8 mb-1" src="https://i.postimg.cc/xdsYmMr7/Envlop.png" alt="Drop a hint" />
                            <p className="text-sm font-medium text-gray-700">Drop a Hint</p>
                        </div>
                    </div>

                </div>
                <p className="text-gray-500 mt-10 mb-10">
                    Introducing The Twig, Keyzar's flagship engagement ring, inspired by the idea of adding new branches to your family tree. This exquisite piece features a dainty, twig-like band that gently caresses the wearer's ring finger, symbolizing growth and connection. The soft accents add a subtle sparkle, while the delicate band beautifully emphasizes the size and brilliance of the center stone. The Twig is a perfect blend of nature's elegance and modern sophistication, making it a timeless choice for celebrating your love and commitment.
                </p>
                <h1 className='font-bold text-black text-lg'>Center Stone Shape: <span className='text-gray-500 font-normal'>Value</span> </h1>

                <StoneGrid stones={centerStone} />
                <h1 className='font-bold text-black text-lg'>Material: <span className='text-gray-500 font-normal'>Value</span> </h1>
                <StoneGrid stones={centerStone} />
            </div>
        </div>
    );
};

export default Product_Details;



