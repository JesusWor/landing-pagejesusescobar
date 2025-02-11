"use client";

import { serviceData } from "@/data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderServices = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 15 },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-auto w-[270px] md:w-[550px]" // Se cambia `h-[280px]` a `h-auto`
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col px-6 py-8 h-auto rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
            <div className="mb-4 text-4xl text-secondary">{item.icon}</div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm line-clamp-3">{item.description}</p> 
              {/* Agregamos `line-clamp-3` para limitar la cantidad de líneas */}
              <p className="mt-2 text-sm font-bold text-secondary">{item.price}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderServices;