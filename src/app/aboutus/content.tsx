'use client';

import CardStack from './cards';

export default function Content() {
  return (
    <div id='aboutus' className="min-h-screen w-full relative bg-[#0D0D0D]">
      <div className="flex flex-col px-4 sm:pl-20 w-full pt-24 pb-32 mx-auto sm:pr-[15%] md:mt-20">
        <div className="flex flex-row items-start pb-15">
          <div className="bg-white w-2 h-16 mr-4"></div>
          <div className="text-start">
            <h1 className="text-5xl text-white font-bold font">
              About Us
            </h1>
          </div>
        </div>
        <p className="text-white/70 text-lg sm:text-l md:text-xl mb-10">
          The <strong className='text-white'>Vision & Innovation Club</strong> is a scientific club supervised by the scientific association <strong className='text-white'>EL MAARIFA</strong>,
          which fosters an environment of future engineers within their esteemed school <strong className='text-white'>ECOLE NATIONALE POLYTECHNIQUE D&apos;ALGER</strong>.
          Our club aims to elevate students&apos; university experience through the exchange of various perspectives where everyone ignites their own idea.
          This assembly of ideas and efforts allows us to organize plenty of events which vary between enthusiastic competitions and charitable activities,
          such as: POLYMAZE, Ignite® Algiers, Engineers&apos; GALA, Charity, and so on.
        </p>
        <div className="relative z-10">
          <CardStack />
        </div>
      </div>

      {/* Custom scrollbar hiding */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </div>
  );
}
