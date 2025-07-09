import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../Styles/ImageSlider.css';

interface ImageSliderProps {
    images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const swiperRef = useRef<any>(null);

    const handleSlideChange = (swiper: any) => {
        setCurrentIndex(swiper.realIndex);
    };

    const goToSlide = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };

    // Dynamic pagination logic
    const getVisibleDots = () => {
        const total = images.length;
        const maxDots = 5;

        if (total <= maxDots) {
            return Array.from({ length: total }, (_, i) => i);
        }

        let start = Math.max(currentIndex - 2, 0);
        let end = start + maxDots;

        if (end > total) {
            end = total;
            start = end - maxDots;
        }

        return Array.from({ length: end - start }, (_, i) => start + i);
    };

    return (
        <div className="relative">
            <Swiper
                modules={[Navigation]}
                navigation
                loop={false}
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={img}
                            alt={`slide-${i}`}
                            className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-150 cursor-pointer"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Dynamic Dot Pagination */}
            <div className="absolute bottom-4 left-1/2 flex items-center -translate-x-1/2 flex space-x-2 z-10">
                {getVisibleDots().map((index) => {
                    const diff = Math.abs(currentIndex - index);
                    let sizeClass = '';

                    if (diff === 0) sizeClass = 'w-3.5 h-3.5 bg-gray-900'; // center
                    else if (diff === 1) sizeClass = 'w-2.5 h-2.5 bg-gray-200';
                    else sizeClass = 'w-2 h-2 bg-gray-200';

                    return (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`rounded-full transition-all duration-300 ${sizeClass}`}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ImageSlider;
