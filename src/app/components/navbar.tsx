"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "../globals.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/home" },
    { name: "POLYMAZE", href: "/polymaze" },
    { name: "Participate", href: "/participate" },
    { name: "FAQ", href: "/faq" },
    { name: "Testimonies", href: "/testimonies" },
    { name: "About us", href: "/aboutus" },
  ];

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between p-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
        <Image
          src="/logo.webp"
          alt="Logo"
          width={80}
          height={80}
          className="h-10 md:h-15 w-auto "
          priority
        />

        </div>

        {/* Desktop Nav */}
        <motion.nav
          className="hidden lg:flex space- text-white text-sl justify-between w-3/4"
          variants={navVariants}
        >
          {navItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Link href={item.href} className="navLink">
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          variants={itemVariants}
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col"
        >
          {/* Close button */}
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

          {/* Nav items */}
          <motion.nav
            className="flex flex-col items-center space-y-6 text-white text-2xl mt-8 bg-black/80 backdrop-blur-md "
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="navLink"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </motion.header>
  );
}
