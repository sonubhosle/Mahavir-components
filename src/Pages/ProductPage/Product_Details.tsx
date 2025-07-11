import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import HeroSection, { ProductType } from './HeroSection';
import { FaCirclePlus } from "react-icons/fa6";
import StoneGrid from '../../Components/Grids/StoneGrid';
import { products } from '../../Components/Data';
import QuickCheckout from './QuickCheckout';
import DiamondRingPreview from './DiamondRingPreview';

const Product_Details: React.FC = () => {
    const { id } = useParams();

    const product = products.find(prod => String(prod.id) === id) as ProductType | undefined;

    if (!product) return <div className="p-10 text-center">Product not found.</div>;

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
        <div className="w-full flex lg:flex-row flex-col mt-10 gap-10">
            {/* Left Image/Viewer Section */}
            <div className="w-full lg:w-[40%] xl:w-[60%] relative  bg-transparent lg:bg-gray-100  lg:rounded-3xl border border-gray-100 overflow-hidden">
                {product && <HeroSection product={product}/>}
            </div>

            {/* Right Info Section */}
            <div className="w-full lg:w-[60%] xl:w-[40%]  pb-10">
                {/* Top Info */}
                <div className="flex  justify-between gap-6">
                    <div className="flex flex-col gap-2">
                        <div className="text-xl sm:text-2xl md:text-3xl text-gray-900 font-semibold">
                            {product.name}
                        </div>

                        <div className="text-xl sm:text-2xl md:text-3xl text-gray-900 font-semibold">
                            {product.price}
                        </div>

                        <div className="flex  gap-2 text-white pr-2 pl-3 py-1 rounded-full bg-[linear-gradient(to_right,_#d89571,_#d89571)] w-fit text-sm sm:text-base font-semibold cursor-pointer">
                            <span className="text-[14px] sm:text-[16px] font-bold">Extras</span>
                            <FaCirclePlus size={18} className="sm:size-5" />
                        </div>
                    </div>

                    <div className="flex gap-6 sm:gap-10 lg:mt-0">
                        <div className="flex flex-col items-center text-center cursor-pointer">
                            <img className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 mb-1" src="https://cdn.tangiblee.com/integration/3.1/managed/keyzarjewelry.com/revision_3/variation_original/img/icon.png" alt="Try On" />
                            <p className="text-xs sm:text-sm font-medium text-gray-700">Try On</p>
                        </div>

                        <div className="flex flex-col items-center text-center cursor-pointer">
                            <img className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 mb-1" src="https://i.postimg.cc/xdsYmMr7/Envlop.png" alt="Drop a hint" />
                            <p className="text-xs sm:text-sm font-medium text-gray-700">Drop a Hint</p>
                        </div>
                    </div>
                </div>
                <p className="text-sm sm:text-base text-gray-500 mt-6 sm:mt-10 mb-6 sm:mb-10 leading-relaxed">
                    {product.description}
                </p>

                {/* Stones Selection */}
                <React.Fragment>

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
                                stones={config.data ?? []} 
                                activeIndex={activeIndexes[idx]}
                                onSelectIndex={(stoneIdx) => handleStoneSelect(idx, stoneIdx)}
                            />
                        </div>
                    ))}
                </React.Fragment>
                {/* Quick Chekout */}
                <QuickCheckout />
                {/* Dimond Card Size guide */}
                <div className="w-full lg:hidden bg-gray-100 mt-10  rounded-2xl p-2">
                    <h3 className="font-bold pb-1 text-1.5lg leading-tight flex items-center gap-2 mb-2 lg:mb-0 lg:justify-center"><svg className="w-8 h-8 p-1.5 rounded-full bg-white lg:hidden" aria-hidden="true" focusable="false"><svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.74686 10.5891H8.46882C8.46882 12.0823 7.24007 13.3111 5.74686 13.3111C4.25364 13.3111 3.0249 12.0823 3.0249 10.5891H5.74686Z" stroke="black" stroke-width="0.75" stroke-linejoin="round"></path><path d="M5.74719 5.29395L3.17188 10.5893H8.32252L5.74719 5.29395Z" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.2532 10.5891H18.9752C18.9752 12.0823 17.7464 13.3111 16.2532 13.3111C14.76 13.3111 13.5312 12.0823 13.5312 10.5891H16.2532V10.5891Z" stroke="black" stroke-width="0.75" stroke-linejoin="round"></path><path d="M16.2526 5.29395L13.6772 10.5893H18.8279L16.2526 5.29395Z" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.74707 5.29395H16.2529" stroke="black" stroke-width="0.75" stroke-linejoin="round"></path><path d="M10.9995 4.14795V14.5069" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.9995 14.5068L6.21094 17.8979H15.788L10.9995 14.5068Z" stroke="black" stroke-width="0.75" stroke-linejoin="round"></path></svg></svg>Diamond Carat Size Guide</h3>
                    <DiamondRingPreview className="rounded-xl " />
                </div>
            </div>
        </div>
    );
};

export default Product_Details;
