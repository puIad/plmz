'use client';
import Image from 'next/image';

interface LogosProps {
  image: string;
}

export default function Logos({ image }: LogosProps) {
  return (
    <div className="flex justify-center items-center h-full">
      <Image
  src={image}
  alt="Logo"
  width={240}
  height={100}
  className="object-contain max-w-full"
 />

    </div>
  );
}
