import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from './HeroSection';
import { FaCirclePlus } from "react-icons/fa6";
import StoneGrid from '../../Components/Grids/StoneGrid';
import { products } from '../../Components/Data';
import QuickCheckout from './QuickCheckout';

const Product_Details: React.FC = () => {
    const { id } = useParams();
    const product = products.find(prod => String(prod.id) === id);

    if (!product) return <div className="p-10 text-center">Product not found.</div>;

    // Define configs for each stone section
    const stoneConfigs = [
        { label: "Center Stone Shape", data: product.centerStone },
        { label: "Material", data: product.materialStone },
        { label: "Style", data: product.styleStone },
    ];

    const [activeIndexes, setActiveIndexes] = useState([0, 0, 0]);

    const handleStoneSelect = (sectionIndex: number, stoneIndex: number) => {
        const updated = [...activeIndexes];
        updated[sectionIndex] = stoneIndex;
        setActiveIndexes(updated);
    };

    return (
        <div className="flex flex-col md:flex-row gap-10 p-10">
            {/* Left Image/Viewer Section */}
            <div className="w-full md:w-[60%] bg-gray-100 space-y-4 rounded-3xl border border-gray-100 overflow-hidden">
                <HeroSection product={product} />
            </div>

            {/* Right Info Section */}
            <div className="w-full md:w-[40%]">
                {/* Top Info */}
                <div className="flex justify-between">
                    <div className="flex flex-col gap-1">
                        <div className="text-3xl text-gray-900">{product.name}</div>
                        <div className="text-3xl mt-1 text-gray-900">{product.price}</div>

                        <div className="flex items-center gap-2 text-white pr-1 pl-2 p-1 mt-2 rounded-full bg-[linear-gradient(to_right,_#d89571,_#d89571)] w-fit text-sm font-semibold cursor-pointer">
                            <span className="text-[17px] font-bold">Extras</span>
                            <FaCirclePlus size={20} />
                        </div>
                    </div>

                    <div className="flex gap-10">
                        <div className="flex flex-col items-center text-center cursor-pointer">
                            <img className="w-8 h-8 mb-1" src="https://cdn.tangiblee.com/integration/3.1/managed/keyzarjewelry.com/revision_3/variation_original/img/icon.png" alt="Try On" />
                            <p className="text-sm font-medium text-gray-700">Try On</p>
                        </div>
                        <div className="flex flex-col items-center text-center cursor-pointer">
                            <img className="w-8 h-8 mb-1" src="https://i.postimg.cc/xdsYmMr7/Envlop.png" alt="Drop a hint" />
                            <p className="text-sm font-medium text-gray-700">Drop a Hint</p>
                        </div>
                    </div>
                </div>
                {/* Description */}
                <p className="text-gray-500 mt-10 mb-10">{product.description}</p>
                {/* Stones Selection */}
                <div>
                    
                {/* Dynamic Stone Sections */}
                {stoneConfigs.map((config, idx) => (
                    <div key={idx} className={idx > 0 ? "mt-6" : ""}>
                        <h1 className="font-bold text-black text-lg">
                            {config.label}:
                            <span className="text-gray-500 font-normal px-2">
                                {config.data?.[activeIndexes[idx]]?.name ?? "Select"}
                            </span>
                        </h1>
                        <StoneGrid
                            stones={config.data}
                            activeIndex={activeIndexes[idx]}
                            onSelectIndex={(stoneIdx) => handleStoneSelect(idx, stoneIdx)}
                        />
                    </div>
                ))}
                </div>
                {/* Quick Chekout */}
                <QuickCheckout />
            </div>
        </div>
    );
};

export default Product_Details;
