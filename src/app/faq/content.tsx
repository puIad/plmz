"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Content() {
  const questions = [
    {
      question: "Am I allowed to participate alone?",
      answer:
        "Absolutely, the choice is yours! If you want to have complete freedom in designing and building your robot based on your own vision, POLYMAZE offers participation options for both soloists and teams.",
    },
    {
      question: "What is the maximum number of participants allowed in a team?",
      answer:
        "A team can have a maximum of 4 people. This size helps the team communicate and collaborate better in order to build and design a proper robot.",
    },
    {
      question: "Do all team members need to fill the form?",
      answer:
        "Yes, each member must fill out the form. Only one creates the team; others join by entering the exact Team Code.",
    },
    {
      question: "Are there any pre-competition workshops scheduled?",
      answer:
        "We are pleased to confirm that we offer workshops for POLYMAZE participants, and it is going to be led by skilled trainers.",
    },
    {
      question:
        "How can I find out if I've been accepted to compete in POLYMAZE?",
      answer:
        "All POLYMAZE applicants are going to receive an email about their acceptance status after the registration form closes.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full "
    >
      {/* Centered content */}
      <div
        id="faq"
        className="absolute-content min-h-screen z-10 flex flex-col items-start justify-start gap-6 px-4 sm:pl-20 lg:w-11/12 sm:pr-[10%] bg-[#0D0D0D] overflow-x-hidden "
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold text-white mb-6"
>
          <div className="flex flex-row items-start pb-5">
            <div className="bg-white w-2 h-16 mr-4 md:mt-30 "></div>
            <div className="text-start">
              <h1 className="text-3xl md:text-5xl md:mt-32 text-white font-bold font ms:-mt-30">
                Frequently Asked Questions
              </h1>
            </div>
          </div>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full space-y-4"
        >
          {questions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="border border-white p-4 rounded-xl bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all duration-300 card-effect"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <p className="text-white text-base sm:text-lg md:text-2xl font-semibold">
                  {item.question}
                </p>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-white" size={28} />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-white/70 text-sm sm:text-base md:text-lg lg:text-xl text-start">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
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
    </motion.div>
  );
}
