'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const cardData = [
  {
    id: 1,
    title: 'Algerian Engineering Competition',
    text: 'A national event that brings together engineering students, recent graduates, and industry experts to solve real-world problems through innovation and teamwork.',
    logo: '/aec.webp',
    image: '/aecimage.webp',
  },
  {
    id: 2,
    title: 'Ignite® Algiers',
    text: 'Ignite® Algiers is a cultural public speaking event, based on an international concept and organized for the first time in Algeria by VIC. Speakers have 5 minutes to present a topic, with slides that automatically advance every 15 seconds.',
    logo: '/ignite.webp',
    image: '/galaimage.webp',
  },
  {
    id: 3,
    title: "Engineers's GALA",
    text: "Engineers' GALA is an event that brings together young Algerian engineers in a friendly yet professional setting...",
    logo: '/gala.webp',
    image: '/galaa.webp',
  },
  {
    id: 4,
    title: 'GameCraft',
    text: 'Game Craft is a local game jam hosted by VIC ENP each year inspired by Game Jam...',
    logo: '/gamecraft.webp',
    image: '/gc.webp',
  },

  {
    id: 6,
    title: 'Spelling Bee',
    text: 'Spelling Bee is an international competition in which participants must spell a wide selection of words...',
    logo: '/spellingbee.webp',
    image: '/spelling.webp',
  },
];

export default function CardStack() {
  const [cards, setCards] = useState(cardData);

  const handleTap = () => {
    const [first, ...rest] = cards;
    setCards([...rest, first]);
  };

  return (
    <div
      className="relative w-80 h-[500px] mx-auto mt-5 cursor-pointer overflow-visible"
      onClick={handleTap}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          layout
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute w-full h-full bg-black rounded-2xl shadow-xl border border-[#797979] overflow-hidden"
          style={{
            zIndex: cards.length - index,
            left: `${index * -16}px`,
            top: `${index * 16}px`,
            transform: `scale(${1 - index * 0.03})`,
          }}
        >
          <div className="p-4 flex flex-col h-full text-white">
            {/* Logo */}
            <div className="flex items-center mb-4">
              <Image
                src={card.logo}
                alt="Logo"
                width={40}
                height={40}
                className={`object-contain ${card.title === "Engineers's GALA" ? 'scale-160 ml-3' : ''}`}
              />
            </div>

            {/* Title and text */}
            <h2 className="text-lg font-semibold mb-2 sm:text-l md:text-xl">{card.title}</h2>
            <p className="text-lg text-gray-300 mb-4 flex-1 sm:text-l md:text-xl">{card.text}</p>

            {/* Bottom image */}
            <div className="mt-auto">
              <Image
                src={card.image}
                alt="Card Visual"
                width={320}
                height={160}
                className="w-full h-40 object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
