"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "POLYMAZE", href: "#polymaze" },
  { name: "Participate", href: "#participate" },
  { name: "Testimonies", href: "#testimonies" },
  { name: "FAQ", href: "#faq" },
  { name: "About us", href: "#aboutus" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              setActiveSection(id);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // lower threshold for better triggering
      }
    );

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Desktop Vertical Navbar */}
      <div className="hidden md:flex fixed right-10 top-0 h-screen w-60 z-50 items-center justify-center -mr-20">
        <div className="relative flex flex-col items-end justify-center h-full space-y-10 text-white pr-6">
          <div className="absolute inset-y-0 right-4 w-px bg-white/80" />
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                href={item.href}
                key={item.name}
                className="relative group flex items-center space-x-4"
              >
                <span
                  className={`text-xl transition-all ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-white/60 group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>
                <span
                  className={`w-2 h-2 rounded-full transition-all ${
                    isActive
                      ? "bg-white scale-150"
                      : "bg-white/30 group-hover:bg-white"
                  }`}
                />
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Top Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`md:hidden fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg"
            : "bg-black/80 backdrop-blur-sm"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3">
          <div className="w-36 h-auto relative">
            <Image
              src="/logo1.webp"
              alt="POLYMAZE Logo"
              fill
              className="object-contain"
            />
          </div>
          <motion.button
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-md flex flex-col"
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <motion.button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={28} className="text-white" />
            </motion.button>
          </div>

          {/* Mobile Nav Items */}
          <motion.nav
            className="flex flex-col items-center space-y-6 text-white text-2xl mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`${
                      isActive
                        ? "font-semibold text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                </motion.div>
              );
            })}
          </motion.nav>
        </motion.div>
      )}
    </>
  );
}
