'use client';

import Image from 'next/image';

interface BlurImageOverlayProps {
  text: string;
  imgPath: string;
}

export default function BlurImageOverlay({ text, imgPath }: BlurImageOverlayProps) {
  return (
    <div className="relative w-full h-full overflow-hidden group rounded-2xl shadow-lg">
      {/* Background image */}
      <Image
        src={imgPath}
        alt="Background"
        fill
        className="object-cover transition-all duration-1000 group-hover:filter-none filter"
        style={{ zIndex: 0 }}
        priority
      />

      {/* Semi-transparent grey overlay */}
      <div className="absolute inset-0 bg-gray-950/40 transition-opacity duration-1000 group-hover:bg-gray-950/0 z-10"></div>

      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-3xl font-bold transition-opacity duration-1000 group-hover:opacity-0 text-center px-2 z-20">
        {text}
      </div>
    </div>
  );
}
