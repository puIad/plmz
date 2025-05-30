'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CommentProps {
  name: string;
  image: string;
  comment: string;
}

export default function Comment({ name, image, comment }: CommentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-black border border-white rounded-lg p-6 h-[600px] w-full max-w-[500px] flex flex-col shadow-lg"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image
            src={image}
            alt={`${name}'s profile`}
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
        <h2 className="text-white text-xl font-semibold">{name}</h2>
      </div>

      <div className="flex-grow overflow-y-auto">
        <p className="text-white text-lg whitespace-pre-wrap break-words">
          {comment}
        </p>
      </div>
    </motion.div>
  );
}
