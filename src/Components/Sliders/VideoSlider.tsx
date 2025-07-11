import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../Styles/ImageSlider.css';

interface VideoSliderProps {
  videos: { id: number; gif: string }[];
}

const VideoSlider: React.FC<VideoSliderProps> = ({ videos }) => {
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

  const getVisibleDots = () => {
    const total = videos.length;
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
    <section className="relative">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={false}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className='h-full w-full'
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
          <video
  data-testid="video-element"
  src={video.gif}
  muted
  autoPlay
  loop
  playsInline
  className="w-full h-full object-cover cursor-pointer"
/>


          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dynamic Dot Pagination */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {getVisibleDots().map((index) => {
          const diff = Math.abs(currentIndex - index);
          let sizeClass = '';

          if (diff === 0) sizeClass = 'w-3.5 h-3.5 bg-gray-900';
          else if (diff === 1) sizeClass = 'w-2.5 h-2.5 bg-gray-300';
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
    </section>
  );
};

export default VideoSlider;
