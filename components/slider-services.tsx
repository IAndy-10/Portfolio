"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import { serviceData } from '@/data';

const SliderServices = () => {
    return (
        <div className="relative">
            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination'  // Specify custom class for pagination
                }}
                modules={[Pagination]}
                className="h-auto md:h-[400px] w-full -mx-auto max-w-screen-xl"
            >
                {serviceData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link href={item.href}>
                            <div
                                className="relative flex items-end justify-center px-4 py-6 h-[250px] md:h-[350px] rounded-lg cursor-pointer bg-cover bg-center group transition-transform duration-300 transform hover:translate-y-1 hover:shadow-[0_5px_10px_0_rgba(0,0,0,0.75)]"
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-lg"></div>
                                <h3 className="relative mb-4 text-lg text-white z-10">{item.title}</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination absolute bottom-0 left-0 right-0 mb-4 text-black"></div>
        </div>
    );
}

export default SliderServices;
