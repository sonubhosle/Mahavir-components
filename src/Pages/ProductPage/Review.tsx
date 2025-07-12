import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoStar } from "react-icons/io5";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";

// Dummy product/review data
const reviews = [
  {
    id: 1,
    comment: "Love it",
    review: "I purchased this ring on April 12 2023, The Penelope set with 2.37",
    date: "Aug 8",
    name: "Angelica King"
  },
  {
    id: 2,
    comment: "10/10",
    review: "I was nervous about getting an engagement ring online at first.",
    date: "Aug 6",
    name: "Joshua F"
  },
  {
    id: 3,
    comment: "Platinum Shine",
    review: "Looks luxurious and classy. Highly recommend.",
    date: "Jul 30",
    name: "Clara Wells"
  },
  {
    id: 4,
    comment: "Absolutely stunning",
    review: "The craftsmanship is unbelievable. Everyone asks where I got it!",
    date: "Jul 25",
    name: "Maya Lopez"
  },
  {
    id: 5,
    comment: "Perfect Fit",
    review: "It fits perfectly and sparkles just like the pictures.",
    date: "Jul 21",
    name: "Noah Jensen"
  },
  {
    id: 6,
    comment: "Fast delivery",
    review: "Got it delivered in 3 days. Excellent packaging too.",
    date: "Jul 18",
    name: "Sophia L"
  },
  {
    id: 7,
    comment: "Highly Recommend",
    review: "Amazing quality and service. Worth every penny.",
    date: "Jul 15",
    name: "Liam Park"
  },
  {
    id: 8,
    comment: "Exceptional Craft",
    review: "Every detail is precise. My fiancée can’t stop staring at it.",
    date: "Jul 10",
    name: "Emma R"
  },
  {
    id: 9,
    comment: "Great Customer Service",
    review: "They helped me choose the right size and design. Very helpful.",
    date: "Jul 7",
    name: "Ethan Brooks"
  },
  {
    id: 10,
    comment: "Dream Ring",
    review: "This is exactly what I envisioned. Beautiful and elegant.",
    date: "Jul 2",
    name: "Olivia Chen"
  }
];

const Review: React.FC = () => {
  return (
    <section className="w-full mt-12 mb-12 flex">
      {/* Don't shrink this box below 400px */}
      <div className="w-full sm:w-[300px] shrink-0 relative flex flex-col justify-center items-center text-center ">
        <h1 className="text-3xl font-semibold mb-3">Excellent</h1>

        {/* Stars Row */}
        <div className="flex gap-1 justify-center items-center">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="bg-[#00B67A] text-white text-2xl p-1 "  >
              <IoStar />
            </span>
          ))}
        </div>

        {/* Reviews text */}
        <div className="flex flex-wrap justify-center items-center mt-2 text-sm">
          <span className="mr-1">Based on</span>
          <span className="underline cursor-pointer">1,047 reviews</span>
        </div>

        {/* Trustpilot Row */}
        <h3 className="flex items-center gap-1 mt-2  text-2xl ">
          <p className="text-[35px] text-[#00B67A] flex items-center ">★</p>
          Trustpilot
        </h3>
      </div>


      {/* ✅ Swiper hidden below 768px */}
      <div className="hidden sm:block w-[80%] shrink-0">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-full  p-2 rounded shadow-sm bg-white space-y-2 text-sm">
                {/* Stars & Verified */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="bg-[#00B67A] flex items-center justify-center text-white text-2xl w-7 h-7"
                    >
                      <IoStar />
                    </span>
                  ))}
                  <FaCheckCircle size={20} className="text-gray-500 ml-2 cursor-pointer" />
                  <span className="text-1xl text-gray-500 cursor-pointer">Verified</span>
                </div>
                <h3 className="font-bold text-black">{item.comment}</h3>
                <p>{item.review}</p>
                <h1 className="flex"><p className="font-semibold text-gray-600"> {item.name}</p>, {item.date}</h1>
          
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="font-semibold text-gray-600 mt-3">Showing our favorite reviews</p>
      </div>
    </section>



  );
};

export default Review;
