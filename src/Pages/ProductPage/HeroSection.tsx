import React from "react";
import ImageSlider from "../../Components/Sliders/ImageSlider";
import VideoSlider from "../../Components/Sliders/VideoSlider";
import ZoomImageEffect from "./ZoomImageEffect";
import Rotate360Viewer from "./Rotate360Viewer";
import DiamondRingPreview from "./DiamondRingPreview";

interface ProductType {
    id: string;
    name: string;
    price: string;
    intrest: string;
    description: string;
    slidesVideos: { id: number; gif: string }[];
    slideImages: string[];
    rotateImages: { ring: string }[];
    images: {
        silver: { img: string; color: string }[];
        gold: { img: string; color: string }[];
        red: { img: string; color: string }[];
    };
    zoomRingOne: { img: string }[];
    zoomRingTwo: { img: string; tag: string }[];
    zoomRingThree: { img: string; tag: string }[];
    zoomRingFour: { img: string; tag: string }[];
};


const HeroSection: React.FC<{ product: ProductType }> = ({ product }) => {
    return (
        <>
            {/* Section 1: Zoom + Image Swiper */}
            <div className="flex gap-3">
                <div className="w-1/2 overflow-hidden">
                    {product.zoomRingOne.map((item, index) => (
                        <ZoomImageEffect
                            key={index}
                            src={item.img}
                            alt={`Zoomed Image ${index + 1}`}
                            height="400px"
                        />
                    ))}
                </div>

                <div className="w-1/2 overflow-hidden relative">
                    <ImageSlider images={product.slideImages} />
                </div>

            </div>

            {/* Section 2: Video + 360 Viewer */}
            <div className="flex gap-3">
                <div className="w-1/2 overflow-hidden relative">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#F3F3F3] bg-opacity-60 text-black px-3 py-1 rounded-md text-sm z-10">
                        Show with 2 ct
                    </div>
                    <VideoSlider videos={product.slidesVideos} />
                </div>

                <div className="w-1/2 overflow-hidden">
                    <Rotate360Viewer
                        images={product.rotateImages.map((img) => img.ring)}
                        className="w-full h-[400px] object-cover"
                    />
                </div>
            </div>

            {/* Section 3: Zoom Ring Two + Hand Image */}
            <div className="flex gap-3">
                <div className="w-1/2 relative overflow-hidden">
                    {product.zoomRingTwo.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#F3F3F3] bg-opacity-60 text-black px-3 py-1 rounded-md text-sm z-10">
                                {item.tag}
                            </div>
                            <ZoomImageEffect
                                src={item.img}
                                alt={`Zoomed Image Two ${index + 1}`}
                                height="400px"
                            />
                        </React.Fragment>
                    ))}
                </div>

                <div className="w-1/2 overflow-hidden">
                    <DiamondRingPreview />
                </div>
            </div>

            {/* Section 4: Zoom Ring Three + Zoom Ring Four */}
            <div className="flex gap-3">
                <div className="w-1/2 relative overflow-hidden">
                    {product.zoomRingThree.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#F3F3F3] bg-opacity-60 text-black px-3 py-1 rounded-md text-sm z-10">
                                {item.tag}
                            </div>
                            <ZoomImageEffect
                                src={item.img}
                                alt={`Zoomed Image Three ${index + 1}`}
                                height="400px"
                            />
                        </React.Fragment>
                    ))}
                </div>

                <div className="w-1/2 relative overflow-hidden bg-white">
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
        </>
    );
};

export default HeroSection;
