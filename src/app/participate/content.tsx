export default function Content() {
  return (
    <>
      
      <div id="participate" className="w-full min-h-screen relative">
        <div className="flex flex-col items-start justify-start gap-6 px-4 sm:pl-20 sm:pr-[5%] pt-1 ">
          
          {/* Commented out specification section for later use */}
          <div className="flex flex-row items-start">
            <div className="bg-white w-2 h-16 mr-4 mt-2"></div>
            <div className="text-start">
              <h1 className="text-4xl md:text-5xl text-white font-bold font">
                Competition Specifications
              </h1>
              <p className="text-lg md:text-2xl text-white/70">
                To know more about POLYMAZE 2025 rules and specifications,
              </p>
              <p className="text-lg md:text-2xl text-white/70">
                You can download the following documents:
              </p>
            </div>
          </div>
          

          {/* Documents PDF */}
          <div className="flex flex-col md:flex-row md:gap-4 w-full items-center space-y-8 md:space-y-0">
            {/* Document 1 */}
            <div className="flex flex-col items-center w-full md:w-1/1">
              <iframe
                allowFullScreen
                scrolling="no"
                className="h-64 md:h-96 border border-gray-300"
                src="https://heyzine.com/flip-book/29f87c52a9.html"
              ></iframe>
              <a
                href="https://drive.google.com/open?id=1GW_KnK4M2RS-M9Js4OF4_kX-C3lqlll0&usp=drive_copy"
                download
                className="bg-black text-white py-3 px-6 border border-white text-lg mt-4 hover:text-[#797979] hover:border-[#797979]"
              >
                Download PDF
              </a>
            </div>

            {/* Document 2 
            <div className="flex flex-col items-center w-full md:w-1/2">
              <iframe
                allowFullScreen
                scrolling="no"
                className="h-64 md:h-96 border border-gray-300"
                src="https://heyzine.com/flip-book/eb46d298f6.html"
              ></iframe>
              <a
                href="https://drive.google.com/file/d/1tA8501Qm8iioUJyotb9vCfd62M5yRTjp/view"
                download
                className="bg-black text-white py-3 px-6 border border-white text-lg mt-4 hover:text-[#797979] hover:border-[#797979]"
              >
                Download PDF
              </a>
            </div>
            */}
          </div>
          

          {/* Register Button */}
          <div className="w-full flex justify-center">
            <a
              href="./register"
              className="bg-white text-black py-4 px-10 text-xl m-5 hover:bg-[#797979]">
              Register Now
            </a>
          </div>
        </div>
      </div>
      
    </>
  );
}
