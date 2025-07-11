import React, { useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { CgRing } from "react-icons/cg";

const Accordion: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full divide-y divide-gray-200 mt-5">
      {/* Ring Details */}
      <section className={`${openId === 1 ? "border-none" : ""}`}>
        <button
          onClick={() => toggleItem(1)}
          className={`w-full flex items-center cursor-pointer justify-between py-4 pl-4 pr-4 rounded-xl text-sm font-medium text-gray-900 transition ${openId === 1 ? "bg-gray-100" : ""}`}
          aria-expanded={openId === 1}
          aria-controls="accordion-content-1"
        >
          <h1 className="flex items-center gap-2">
            <CgRing className="text-lg" /> Ring Details
          </h1>
          <BsChevronDown size={20} className={`transition-transform duration-300 ${openId === 1 ? "rotate-180" : ""}`} />
        </button>
        <div
          id="accordion-content-1"
          className={`overflow-hidden transition-all duration-300 text-sm text-gray-600 px-2 ${openId === 1 ? "max-h-[1000px] py-4" : "max-h-0 py-0"}`}
        >

          <div className="space-y-6 text-sm text-gray-800">
            <section>
              <h3 className="text-base font-semibold mb-2">Details</h3>
              <div className="grid grid-cols-2 gap-y-2">
                <p className="text-gray-500">SKU</p>
                <p className="font-medium">4Q-ER-R-WG-14</p>
                <p className="text-gray-500">Width</p>
                <p className="font-medium">1.3mm</p>
                <p className="text-gray-500">Center Stone Shape</p>
                <p className="font-medium">Round</p>
                <p className="text-gray-500">Material</p>
                <p className="font-medium">14k White Gold</p>
                <p className="text-gray-500">Style</p>
                <p className="font-medium">Polished</p>
                <p className="text-gray-500">Profile</p>
                <p className="font-medium">Medium</p>
              </div>
            </section>
            <section>
              <h3 className="text-base font-semibold mb-2">Side Stones</h3>
              <div className="grid grid-cols-2 gap-y-2">
                <p className="text-gray-500">Average Color</p>
                <p className="font-medium">D-F</p>
                <p className="text-gray-500">Average Clarity</p>
                <p className="font-medium">VVS</p>
                <p className="text-gray-500">Shape</p>
                <p className="font-medium">Round</p>
                <p className="text-gray-500">Origin</p>
                <p className="font-medium">Lab Diamonds</p>
                <p className="text-gray-500">Approx. Total Carat</p>
                <p className="font-medium">0.03ct</p>
              </div>
            </section>
          </div>

        </div>
      </section>

      {/* Shipping */}
      <section className={`${openId === 2 ? "border-none" : ""}`}>
        <button
          onClick={() => toggleItem(2)}
          className={`w-full flex items-center cursor-pointer justify-between py-4 pl-4 pr-4 rounded-xl text-sm font-medium text-gray-900 transition ${openId === 2 ? "bg-gray-100" : ""}`}
          aria-expanded={openId === 2}
          aria-controls="accordion-content-2"
        >
          <h1 className="flex items-center gap-2">
            <FaShippingFast className="text-lg" /> Shipping
          </h1>
          <BsChevronDown size={20} className={`transition-transform duration-300 ${openId === 2 ? "rotate-180" : ""}`} />
        </button>
        <div
          id="accordion-content-2"
          className={`overflow-hidden transition-all duration-300 text-sm text-gray-600 px-2 ${openId === 2 ? "max-h-[500px] py-4" : "max-h-0 py-0"}`}
        >
          <p>This item is made to order and takes 2-3 weeks to craft. We ship FedEx Priority Overnight, signature required and fully insured.</p>
        </div>
      </section>

      {/* Return Policy */}
      <section className={`${openId === 3 ? "border-none" : "border-b border-gray-200"}`}>
        <button
          onClick={() => toggleItem(3)}
          className={`w-full flex items-center cursor-pointer justify-between py-4 pl-4 pr-4 rounded-xl text-sm font-medium text-gray-900 transition ${openId === 3 ? "bg-gray-100" : ""}`}
          aria-expanded={openId === 3}
          aria-controls="accordion-content-3"
        >
          <h1 className="flex items-center gap-2">
            <HiArrowPathRoundedSquare className="text-lg" /> Return Policy
          </h1>
          <BsChevronDown size={20} className={`transition-transform duration-300 ${openId === 3 ? "rotate-180" : ""}`} />
        </button>
        <div
          id="accordion-content-3"
          className={`overflow-hidden transition-all duration-300 text-sm text-gray-600 px-2 ${openId === 3 ? "max-h-[500px] py-4" : "max-h-0 py-0"}`}
        >
          <p>Received an item you don't like? KEYZAR is proud to offer free returns within 30 days from receiving your item. Contact our support team to issue a return.</p>
        </div>
      </section>
    </section>
  );
};

export default Accordion;
