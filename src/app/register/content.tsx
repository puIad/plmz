"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Content() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full bg-black/50 backdrop-blur-md border border-white/10 rounded-lg p-8 flex flex-col items-center"
      >
        <Image
          src="/logo.webp"
          alt="POLYMAZE Logo"
          width={150}
          height={150}
          className="mb-6"
        />

        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Registration Closed
        </h1>

        <div className="w-20 h-1 bg-white mb-6"></div>

        <p className="text-lg md:text-xl text-center mb-8">
          <i>Thank you</i> for your interest in <b>POLYMAZE</b>. Registrations for this event
          have closed. Please check back later or follow our social
          media channels for updates on future events.
        </p>

        <Link
          href="/"
          className="flex items-center gap-2 text-white border border-white px-6 py-3 rounded-md hover:bg-white/10 transition-all"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </motion.div>

      <div className="mt-8 flex flex-col items-center">
        <p className="text-sm text-white/70 mb-4">Follow us for updates</p>
        <div className="flex gap-4">
          <a
            href="#"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <Image
              src="/instagram.webp"
              alt="Instagram"
              width={30}
              height={30}
            />
          </a>
          <a
            href="#"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <Image src="/facebook.webp" alt="Facebook" width={30} height={30} />
          </a>
          <a
            href="#"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <Image src="/linkedin.webp" alt="LinkedIn" width={30} height={30} />
          </a>
        </div>
      </div>
    </div>
  );
}