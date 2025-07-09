import React from "react";
import { rotateImages, slideImages, slidesVideos } from "../../Components/Data";
import ImageSlider from "../../Components/Sliders/ImageSlider";
import VideoSlider from "../../Components/Sliders/VideoSlider";
import ZoomImageEffect from "./ZoomImageEffect";
import Rotate360Viewer from "./Rotate360Viewer";

const HeroSection: React.FC = () => {


    return (
        
        <>
            <div className="flex gap-3">
                <div className="w-full md:w-1/2 overflow-hidden">
                    <ZoomImageEffect
                        src="https://cdn.shopify.com/s/files/1/0039/6994/1568/files/4Q-ER-R-WG_0_7602367f-d27e-4a13-8c9e-9f48dd0a3bf9_3x_jpg.webp"
                        alt="Static Product"
                        height="400px"
                        className="w-full md:w-1/2"
                    />
                </div>

                <div className="w-1/2  overflow-hidden relative">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#F3F3F3] bg-opacity-60 text-black px-3 py-1 rounded-md text-sm z-10">
                        Show with 2 ct
                    </div>
                    <ImageSlider images={slideImages} />
                </div>
            </div>
            <div className="flex gap-3">
                <div className="w-1/2  overflow-hidden relative">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#F3F3F3] bg-opacity-60 text-black px-3 py-1 rounded-md text-sm z-10">
                        Show with 2 ct
                    </div>
                    <VideoSlider videos={slidesVideos} />
                </div>

                <div className="w-1/2 overflow-hidden">
                    <Rotate360Viewer images={rotateImages.map(img => img.ring)} className="w-full h-[400px] object-cover" />
                </div>
            </div>
            <div className="flex gap-3">
                <div className="w-1/2 relative  overflow-hidden">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#F3F3F3] bg-opacity-60 text-black px-3 py-1 rounded-md text-sm z-10">
                        Show with 2 ct
                    </div>
                    <ZoomImageEffect
                        src="https://cdn.shopify.com/s/files/1/0039/6994/1568/files/2ced3ef3543626ee37cee5234efe24f3.jpg"
                        alt="Static Product"
                        height="400px"
                        className="w-full object-cover md:w-1/2"
                    />
                </div>

                <div className="w-1/2 overflow-hidden">
                    <img src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/2027646/build/_assets/hand-with-setting-23F6JYZ6.png" alt="Static Product" className="w-full h-[400px] object-cover" />
                </div>
            </div>
            <div className="flex gap-3">
                <div className="w-1/2  overflow-hidden relative">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#F3F3F3] bg-opacity-60 text-black px-3 py-1 rounded-md text-sm z-10">
                        Show with 2 ct
                    </div>

                    <ZoomImageEffect
                        src="https://cdn.shopify.com/s/files/1/0039/6994/1568/files/4Q-ER-R-WG_attcgDsDDgtBw40Kl_ec24ca21-eae1-4cfc-8261-5b50c68b9e77.jpg"
                        alt="Static Product"
                        height="400px"
                        className="w-full md:w-1/2"
                    />
                </div>

                <div className="w-1/2 overflow-hidden relative">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#F3F3F3] bg-opacity-60 text-black px-3 py-1 rounded-md text-sm z-10">
                        Show with 2 ct
                    </div>
                    <ZoomImageEffect
                        src="https://cdn.shopify.com/s/files/1/0039/6994/1568/files/2ced3ef3543626ee37cee5234efe24f3.jpg"
                        alt="Static Product"
                        height="400px"
                        className="w-full md:w-1/2  "      
                    />
                </div>
            </div>
        </>

    )
}

export default HeroSection