export default function Content() {
  return (
    <>
      <div id="participate" className="pb-9">
        <div className="flex flex-col items-start justify-start gap-6 px-4 sm:pl-20 sm:pr-[5%] pt-20 ">
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

          <div className="flex w-full justify-center items-center space-y-8 md:space-y-0">
            <div className="flex flex-col items-center w-fit">
              <iframe
                allowFullScreen
                scrolling="no"
                className="h-64 md:h-96 border border-gray-300"
                src="https://heyzine.com/flip-book/7487a62328.html"
              ></iframe>
              <a
                href="https://drive.google.com/file/d/1nxvmm6yncyCUhldcfJmEY88iwrsP2P1C/view"
                download
                className="bg-black text-white py-3 px-6 border border-white text-lg mt-4 hover:text-[#797979] hover:border-[#797979]"
              >
                Download PDF
              </a>
            </div>

            {/* <div className="flex flex-col items-center w-full md:w-1/2">
              <iframe
                allowFullScreen
                scrolling="no"
                className="h-64 md:h-96 border border-gray-300"
                src="https://heyzine.com/flip-book/eb46d298f6.html"
              ></iframe>
              <a
                href="https://drive.google.com/file/d/1nxvmm6yncyCUhldcfJmEY88iwrsP2P1C/view"
                download
                className="bg-black text-white py-3 px-6 border border-white text-lg mt-4 hover:text-[#797979] hover:border-[#797979]"
              >
                Download PDF
              </a>
            </div> */}
          </div>

          {/* Register Button */}
          {/*
          <div className="w-full flex justify-center">
            <a
              href=""
              className="bg-white text-black py-4 px-10 text-xl m-5 hover:bg-[#797979]">
              Register Now
            </a>
          </div>
          */}
        </div>
      </div>
    </>
  );
}
