"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import ModelViewer from "./3d";

export default function Homepage() {
  return (
    <div className="absolute inset-0 w-full h-screen">
      {/* Background image with subtle animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bgmaze.webp"
          alt="Background Maze"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Centered content - Added mt-24 for top spacing */}
      <div className="content-container absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-4 text-center">
        {/* Enhanced hero section with larger text and better animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          className="bg-black bg-opacity-70 text-white p-10 py-16 px-24 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-md max-w-4xl w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-2 tracking-wider">
              POLYMAZE
            </h1>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 1.5 }}
              className="h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-4"
            />
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="text-3xl md:text-6xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white"
            >
              is here!
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* Description text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-6 max-w-3xl"
        >
          <p className="text-white text-xl md:text-2xl mb-4">
            Design and build a robot using your skills in mechanics,
            electronics, robotics, and automation to conquer a complex maze
            filled with tricky paths and surprise turns.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0.7, 1],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              delay: 2.2,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="text-white text-xl md:text-3xl font-semibold"
          >
            The Maze is a Beast!
          </motion.p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="flex justify-center gap-6 mt-2 flex-wrap relative z-50"
        >
          <Link href="/register">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black py-5 px-12 rounded-xl text-xl md:text-2xl font-medium transition-all duration-300 hover:bg-gray-200"
            >
              Register Now
            </motion.button>
          </Link>
          <Link href="/polymaze">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent text-white py-5 px-12 rounded-xl border-2 border-white text-xl md:text-2xl font-medium transition-all duration-300 hover:border-gray-300 hover:text-gray-300"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
        <ModelViewer />
      </div>

      {/* Bottom section with logo */}
      
    </div>
  );
}
