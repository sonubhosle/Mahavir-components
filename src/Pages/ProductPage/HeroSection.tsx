import React, { useState } from "react";
import ImageSlider from "../../Components/Sliders/ImageSlider";
import VideoSlider from "../../Components/Sliders/VideoSlider";
import ZoomImageEffect from "./ZoomImageEffect";
import Rotate360Viewer from "./Rotate360Viewer";
import DiamondRingPreview from "./DiamondRingPreview";
import { TbView360Number } from "react-icons/tb";
import { FaImages, FaVideo } from "react-icons/fa";

export interface ProductType {
  id: string;
  name: string;
  price: string;
  intrest: string;
  description: string;
  slidesVideos: { id: number; gif: string; tag?: string }[];
  slideImages: { img: string; tag: string }[];
  rotateImages: { ring: string }[];
  images: {
    silver: { img: string; color: string }[];
    gold: { img: string; color: string }[];
    red: { img: string; color: string }[];
  };
  zoomRingOne: { img: string; tag: string }[];
  zoomRingTwo: { img: string; tag: string }[];
  zoomRingThree: { img: string; tag: string }[];
  zoomRingFour: { img: string; tag: string }[];
  centerStone?: { id: number; icon: string; name: string }[];
  materialStone?: { id: number; icon: string; name: string }[];
  styleStone?: { id: number; icon: string; name: string }[];
}

const TABS = [
  { tab: "360", label: "360°", icon: <TbView360Number size={16} /> },
  { tab: "images", label: "Images", icon: <FaImages size={16} /> },
  { tab: "video", label: "Video", icon: <FaVideo size={16} /> },
];

const HeroSection: React.FC<{ product: ProductType }> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<"360" | "images" | "video">("360");
  const activeIndex = TABS.findIndex((t) => t.tab === activeTab);

  return (
    <>
      {/* Mobile View */}
      <section className="block md:block lg:hidden relative">
        <div className="flex custom-responsive">
          <div className="w-full custome-col-width overflow-hidden">
            {activeTab === "360" && (
              <Rotate360Viewer images={product.rotateImages.map((img) => img.ring)} className="w-full h-full object-cover" />
            )}
            {activeTab === "images" && <ImageSlider images={product.slideImages} />}
            {activeTab === "video" && (
              <>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#F3F3F3] bg-opacity-60 text-black px-3 py-1 rounded-md text-sm z-10">
                  Show with 2 ct
                </div>
                <VideoSlider videos={product.slidesVideos} />
              </>
            )}
          </div>
        </div>

        {/* Bottom Tab Switcher */}
        <div className="relative flex w-full bg-white border-t border-gray-200 h-[60px]">
          {TABS.map(({ tab, label, icon }, index) => (
            <button
              key={tab}
              className="w-1/3 flex flex-col items-center justify-center text-xs font-medium text-gray-600 gap-1"
              onClick={() => setActiveTab(tab as any)}
            >
              <div className={`flex items-center gap-1 ${activeTab === tab ? "text-black" : "text-gray-600"}`}>
                {icon}
                {label}
              </div>
            </button>
          ))}
          <div
            className="absolute bottom-0 left-0 h-1 bg-black transition-all duration-300"
            style={{ width: "33.3333%", transform: `translateX(${activeIndex * 100}%)` }}
          />
        </div>
      </section>

      {/* Desktop View */}
      <section className="hidden lg:block space-y-3">
        {/* Section 1: Zoom Ring One + Image Slider */}
        <div className="flex gap-3 custom-responsive">
          <div className="w-full custome-col-width overflow-hidden">
            {product.zoomRingOne.map((item, index) => (
              <ZoomImageEffect key={index} src={item.img} alt={`Zoomed Image ${index + 1}`} />
            ))}
          </div>
          <div className="w-full custome-col-width overflow-hidden relative">
            <ImageSlider images={product.slideImages} />
          </div>
        </div>

        {/* Section 2: Video + 360 */}
        <div className="flex gap-3 custom-responsive">
          <div className="w-full custome-col-width overflow-hidden relative">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#F3F3F3] bg-opacity-60 text-black px-3 py-1 rounded-md text-sm z-10">
              Show with 2 ct
            </div>
            <VideoSlider videos={product.slidesVideos} />
          </div>
          <div className="w-full custome-col-width overflow-hidden">
            <Rotate360Viewer images={product.rotateImages.map((img) => img.ring)} />
          </div>
        </div>

        {/* Section 3: Zoom Ring Two + Hand Preview */}
        <div className="flex gap-3 custom-responsive">
          <div className="w-full custome-col-width overflow-hidden relative">
            {product.zoomRingTwo.map((item, index) => (
              <React.Fragment key={index}>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#F3F3F3] bg-opacity-60 text-black px-3 py-1 rounded-md text-sm z-10">
                  {item.tag}
                </div>
                <ZoomImageEffect src={item.img} alt={`Zoomed Image Two ${index + 1}`} />
              </React.Fragment>
            ))}
          </div>
          <div className="w-full custome-col-width overflow-hidden">
            <DiamondRingPreview />
          </div>
        </div>

        {/* Section 4: Zoom Ring Three + Four */}
        <div className="flex gap-3 custom-responsive">
          <div className="w-full custome-col-width overflow-hidden relative">
            {product.zoomRingThree.map((item, index) => (
              <React.Fragment key={index}>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#F3F3F3] bg-opacity-60 text-black px-3 py-1 rounded-md text-sm z-10">
                  {item.tag}
                </div>
                <ZoomImageEffect src={item.img} alt={`Zoomed Image Three ${index + 1}`} />
              </React.Fragment>
            ))}
          </div>
          <div className="w-full custome-col-width overflow-hidden relative bg-white">
            {product.zoomRingFour.map((item, index) => (
              <React.Fragment key={index}>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#F3F3F3] bg-opacity-60 text-black px-3 py-1 rounded-md text-sm z-10">
                  {item.tag}
                </div>
                <ZoomImageEffect
                  src={item.img}
                  alt={`Zoomed Image Four ${index + 1}`}
                  height="400px"
                  className="translate-y-[40%] scale-[1.6] object-cover"
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
