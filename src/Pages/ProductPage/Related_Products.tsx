import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { relatedproducts } from "../../Components/Data";
import ProductPageCard from "./ProductPageCard";

interface ProductImage {
    img: string;
    color: string;
}

interface ProductData {
    id: string;
    name: string;
    price: string;
    intrest: string;
    images: {
        [key: string]: ProductImage[];
    };
}

const Related_Products: React.FC = () => {
    return (
        <section className="relative ">
            <Swiper
                spaceBetween={16}
                slidesPerView={3}
                breakpoints={{

                    640: { slidesPerView: 4 },
                    1024: { slidesPerView: 3 },

                }}
            >
                {relatedproducts.map((prod: ProductData, index: number) => (
                    <SwiperSlide key={prod.id || index}>
                        <ProductPageCard data={prod} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Related_Products;
