import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Dummy product/review data
const reviews = [
  {
    id: 1,
    name: "Classic Diamond Ring",
    image: "https://via.placeholder.com/150",
    review: "Absolutely stunning craftsmanship. I love it!",
  },
  {
    id: 2,
    name: "Elegant Rose Gold",
    image: "https://via.placeholder.com/150",
    review: "Beautiful ring. Fits perfectly and shines bright.",
  },
  {
    id: 3,
    name: "Platinum Shine",
    image: "https://via.placeholder.com/150",
    review: "Looks luxurious and classy. Highly recommend.",
  },
  {
    id: 4,
    name: "Vintage Sparkle",
    image: "https://via.placeholder.com/150",
    review: "Perfect vintage look with modern comfort.",
  },
  {
    id: 5,
    name: "Modern Twist",
    image: "https://via.placeholder.com/150",
    review: "Modern and stylish—exactly what I wanted.",
  },
  {
    id: 6,
    name: "Art Deco Beauty",
    image: "https://via.placeholder.com/150",
    review: "A beautiful nod to vintage design. Love it!",
  },
  {
    id: 7,
    name: "Golden Classic",
    image: "https://via.placeholder.com/150",
    review: "Looks premium and fits like a dream.",
  },
];

const Review: React.FC = () => {
  return (
    <section className="w-full mt-7 mb-12 flex">
      {/* Don't shrink this box below 400px */}
      <div className="w-full sm:w-[300px] bg-gray-100 shrink-0">Hii</div>


      {/* ✅ Swiper hidden below 768px */}
      <div className="hidden sm:block w-[80%] shrink-0">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-xl p-4 h-full flex flex-col justify-between">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>



  );
};

export default Review;
