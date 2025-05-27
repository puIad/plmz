'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import BlurImageOverlay from '../components/images';

const slides = [
  { text: 'Young', imgPath: '/young.webp' },
  { text: 'Beginner', imgPath: '/beginner.webp' },
  { text: 'Expert', imgPath: '/expert.webp' },
  { text: 'Prepare', imgPath: '/prepare.webp' },
  { text: 'Your', imgPath: '/your.webp' },
  { text: 'Robot', imgPath: '/robot.webp' },
  { text: 'Participate', imgPath: '/participate.webp' },
];

export default function ImageSwiper() {
  return (
    <div className="w-full h-[300px] md:h-[400px] px-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000, // No delay between slides
          disableOnInteraction: false, // Keep autoplay running even after interaction
        }}
        loop={true}
        modules={[Pagination, Autoplay]} // Pass modules here
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <BlurImageOverlay text={slide.text} imgPath={slide.imgPath} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
