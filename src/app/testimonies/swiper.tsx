'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

import Comment from '../components/comments'; 

const slides = [
  { name: 'Youssra Ghemari', image: '/yosra.webp', comment: 'POLYMAZE was a truly unforgettable experience. From the incredible guidance we received throughout the robot-building journey to the excitement and energy of the ddya, every moment was special. The POLYMAZE bot was the first robot I ever built. It wasn’t just a project; it was the beginning of a journey I’ll never forget..' },
  { name: 'Lyna Bouchama', image: '/bouchama.webp', comment: 'POLYMAZE was the best experience for 2024, that marked my year and all my years as student.It was an experience full of good memories meme si on a vécu des moments de stress.I would say gestion de stress as first thing XD especially when you don’t start working early and u have 0 experience . It was a good occasion too to link between what we learned at school comme des notions théoriques.' },
  { name: 'Mohamed Morsli', image: '/morsli.webp', comment: 'Hope is the key to survive in a Maze ! in simple words, POLYMAZE was unexpectedly a wonderful experiance.' },
  { name: 'Aymene Khaled', image: '/khaled.webp', comment: 'POLYMAZE was the first robotics competition I ever participated in, and it marked the beginning of my journey in this field. As a beginner, it was a challenging yet incredibly rewarding experience that sparked my passion for robotics. Since then, I’ve grown a lot, taken part in other competitions, and even achieved some wins. POLYMAZE was truly the foundation that set everything in motion.' },
  { name: 'Omar Bencheikh', image: '/omar.webp', comment: 'POLYMAZE was a great experience for me as a beginner passionate about robotics. It ignited my interest in the field and gave me my first hands-on exposure to hardware implementation. The combination of challenges and excitement especially during the D-Day competition made it an unforgettable experience.' },
];

export default function ImageSwiper() {
  return (
    <div className="w-full px-4 flex justify-start md:mr-50">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          480: { slidesPerView: 1.1 },
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3},
        }}
        className="w-[80%] ml-0 self-start"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Comment name={slide.name} image={slide.image} comment={slide.comment} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}