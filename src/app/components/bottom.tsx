"use client";
import Image from "next/image";

export default function Bottom() {
  return (
    <div className="w-full bg-black px-2 py-2 md:px-4 md:py-3 flex flex-row items-center justify-between gap-2 md:gap-4 z-50">
      {/* POLYMAZE Logo */}
      <div className="flex justify-center items-center flex-shrink-0">
        <Image
          src="/logo.webp"
          alt="POLYMAZE Logo"
          width={100}
          height={40}
          className="w-auto h-auto max-w-[80px] sm:max-w-[100px] md:max-w-[150px]"
        />
      </div>

      {/* Contact Info */}
      <div className="text-center text-white flex-grow-0">
        <h1 className="text-sm sm:text-base md:text-xl font-semibold mb-0">
          Contact
        </h1>
        <a
          href="mailto:vic@g.enp.edu.dz"
          className="text-[8px] sm:text-[10px] md:text-sm underline block hover:text-gray-300 transition-colors"
        >
          vic@g.enp.edu.dz
        </a>
        <span className="text-[8px] sm:text-[10px] md:text-sm block">VIC ENP</span>
      </div>

      {/* VIC and DZhoster Logos */}
      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex flex-col items-center">
          
          <Image
            src="/dzhoster.svg"
            alt="DZhoster"
            width={100}
            height={40}
            className="w-auto h-auto max-w-[80px] sm:max-w-[100px] md:max-w-[140px] opacity-100 hover:opacity-100 transition-opacity md:mr-60 ms:mb-15"
            

          />
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/vic.webp"
            alt="Vic"
            width={100}
            height={40}
            className="w-auto h-auto max-w-[80px] sm:max-w-[100px] md:max-w-[150px] "
          />
          <div className="flex space-x-1 sm:space-x-1.5 md:space-x-2 mt-1">
            {[
              {
                href: "https://www.instagram.com/vic.enp/",
                src: "/instagram.webp",
                alt: "Instagram",
              },
              {
                href: "https://www.facebook.com/share/1F69yBsnta/?mibextid=wwXIfr",
                src: "/facebook.webp",
                alt: "Facebook",
              },
              {
                href: "https://www.linkedin.com/company/vicenp/",
                src: "/linkedin.webp",
                alt: "LinkedIn",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src={social.src}
                  alt={social.alt}
                  width={20}
                  height={20}
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}