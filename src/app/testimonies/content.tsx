"use client";

import ImageSwiper from "./swiper";
import { motion } from "framer-motion";

export default function Content() {
  return (
    <div id="testimonies">
      <div className="content-container flex flex-col px-4 lg:w-11/12 sm:pl-20">
        <div className="flex flex-row items-start mb-10">
          <div className="bg-white w-2 h-16 mr-4"></div>
          <div className="text-start">
            <h1 className="text-3xl md:text-5xl text-white font-bold font">
              Testimonies
            </h1>
          </div>
        </div>
        <div className="relative z-10 lg:-ml-35">
          <ImageSwiper />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Contenu existant */}
      </motion.div>
    </div>
  );
}
