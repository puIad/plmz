'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

import Logos from '../components/logos'; // Capitalized component name

const slides = [
  { image: '/ignite.webp' },
  { image: '/gala.webp' },
  { image: '/gamecraft.webp' },
  { image: '/masterclass.webp' },
  { image: '/spellingbee.webp' },
  { image: '/aec.webp' },
];

export default function ImageSwiper() {
  return (
    <div className="w-full h-screen px-4 flex items-center justify-center">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 800,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full  "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Logos image={slide.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
