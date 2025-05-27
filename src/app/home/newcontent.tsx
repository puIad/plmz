"use client";

import Image from "next/image";
import Link from "next/link";
import ModelViewer from "./3d"; // Assuming 3d.js is in the same directory
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row h-screen w-full overflow-visible -ml-6 mt-25 md:-ml-10 md:mt-0 bg-[#0D0D0D]"
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-[60%] text-white flex flex-col justify-center px-6 sm:px-10 md:px-20 relative z-10 sm:mr-[15%]"
      >
        <Image
          src="/logo.webp"
          alt="POLYMAZE Logo"
          width={500}
          height={100}
          className="mb-10 w-auto h-auto max-w-[300px] md:max-w-[400px]"
        />

        {/* Mobile Model Viewer (below logo) */}
        <div className="block md:hidden w-full mb-8">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full flex justify-center items-center"
          >
            <div className="relative w-[70%] max-w-[300px] h-[200px] sm:h-[250px]">
              <ModelViewer />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-row items-start ml-4 sm:ml-10">
          <div className="bg-white w-2 h-auto self-stretch mr-3 sm:mr-4"></div>
          <div className="flex flex-col items-start">
            <p className="uppercase text-white text-3xl sm:text-5xl font-bold font">
              POLYMAZE is here!
            </p>
            <p className="text-white/80 text-xl sm:text-2xl mt-2">
              To throw down the gauntlet for robotics enthusiasts.
            </p>
          </div>
        </div>

        <div className="mb-4 ml-4 sm:ml-10"></div>

        <p className="text-white/70 max-w-md mb-8 ml-4 sm:ml-10 text-lg sm:text-xl">
          Test your skills in mechanics, electronics, robotics and automatics to
          design and build a robot that can take on a challenging maze competed
          with intricate pathways and unexpected turns.
        </p>

        <Link href="/register">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
            className="font-semibold bg-black text-white py-3 px-8 sm:py-4 sm:px-10 border border-white text-base sm:text-lg md:text-xl transition-all duration-300 hover:bg-white hover:text-black ml-4 sm:ml-10"
          >
            Register Now
          </motion.button>
        </Link>
      </motion.div>

      {/* Right Section */}
      <div className="hidden md:block md:w-[40%] relative mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="
            absolute
            rounded-2xl
            z-10
            pointer-events-auto
            h-[50vh]
            w-[80%]
            max-w-[600px]
            top-[20vh]
            left-0
            -translate-x-1/2
          "
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full relative"
          >
            <ModelViewer />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
