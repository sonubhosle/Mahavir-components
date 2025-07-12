import React from "react";
import { CgRing } from "react-icons/cg";

const ProductSettings: React.FC = () => {

    return (
        <section className="p-4  bg-gray-100 mt-6 rounded-xl shadow-sm space-y-4 ">
            {/* Header */}
            <h2 className="text-lg font-semibold flex items-center gap-2">
                <p className="text-gray-900 p-3 rounded-full bg-white"><CgRing /> </p> Know your setting
            </h2>

            {/* Settings Grid */}
            <section className="grid  grid-cols-1 sm:grid-cols-2 gap-4">

                <div className=" bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-500 mb-1 flex items-center gap-1">
                        <span className="text-yellow-500">♀</span> WIDTH
                    </p>
                    <p className="text-xl font-bold mt-2">1.3mm</p>
                    <p className="text-[14px] text-gray-500 mt-1">
                        Measured at the base of the ring
                    </p>
                </div>


                <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-500 flex items-center gap-1 mb-2">
                        <span className="text-yellow-400">⚖</span> APPROX. TCW
                    </p>
                    <p className="text-xl font-bold">0.03 ct</p>
                    <p className="text-[14px] text-gray-500 mt-1">
                        The setting’s average total carat weight
                    </p>
                </div>


                <section className="col-span-1 bg-white sm:col-span-2  rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-2">🪙 METAL</p>
                    <p className="text-xl font-bold">14k White Gold</p>

                    {/* Metal chart */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-2">
                        <picture>
                            <source srcSet="https://i.postimg.cc/hvfjhY0g/svgviewer-png-output-9.png" type="image/webp" />
  <img
    loading="lazy"
    className="w-20 h-20 block sm:mx-auto"
    src="https://i.postimg.cc/hvfjhY0g/svgviewer-png-output-9.png"
    alt="circle"
  />                        </picture>
                        <section className="text-xs text-gray-900 grid grid-cols-2 gap-y-2 gap-x-4">
                            <p className="flex items-center gap-2 text-[14px]">
                                <span className="w-[15px] h-[15px]  rounded-full bg-[#faef89]"></span>
                                58.5% Gold
                            </p>
                            <p className="flex items-center gap-2 text-[14px]">
                                <span className="w-[15px] h-[15px] rounded-full bg-[#B87333]"></span>
                                25.4% Copper
                            </p>
                            <p className="flex items-center gap-2 text-[14px]">
                                <span className="w-[15px] h-[15px] rounded-full bg-[#BAC4C8]"></span>
                                8.7% Zinc
                            </p>
                            <p className="flex items-center gap-2 text-[14px]">
                                <span className="w-[15px] h-[15px] rounded-full bg-[#BDBAAE]"></span>
                                7.3% Nickel
                            </p>
                        </section>

                    </div>
                    <p className="text-[14px] text-gray-500 mt-3">
                        The secret sauce that makes this piece.
                        <br />
                        <span >*All white gold pieces are Rhodium plated</span>
                    </p>
                </section>


                <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-500 pb-2">💎 ACCENT GEMS</p>
                    <p className="text-xl  flex items-center gap-3">
                        <div className="flex flex-col">
                            <strong>D-F</strong>
                            <p className="text-sm">Color</p>
                        </div> <div className="h-10 w-[1px] bg-gray-200"></div>
                        <div>
                            <strong>VVS</strong>
                            <p className="text-sm">Clarity</p>
                        </div>
                    </p>
                    <p className="text-[14px] text-gray-500 mt-2">
                        Side stones average color & clarity
                    </p>
                </div>


                <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-500 mb-2">💍 PROFILE</p>
                    <p className="text-xl font-bold">Medium</p>
                    <p className="text-[14px] text-gray-500 mt-2">
                        Only stacks with a chevron/curved band
                    </p>
                </div>
            </section>


            <div className="bg-white w-full h-10  rounded-md  pl-4 pr-4 text-sm flex justify-between items-center">
                <span className="flex items-center gap-1">⭐ EXTRAS</span>
                <button className="underline text-sm">Add Extra Features</button>
            </div>



        </section>
    );
};

export default ProductSettings;
