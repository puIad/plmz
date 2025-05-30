'use client';

import About from "./aboutus/page";
import Bottom from "./components/bottom";
import VideoLoader from "./components/loader";
import Nav from "./components/nav";
import FAQ from "./faq/page";
import Homepagee from "./home/page";
import Participate from "./participate/page";
import POLYMAZE from "./polymaze/page";
import Testimonies from "./testimonies/page";

export default function Home() {
  return (
    <VideoLoader>
      <div className="flex flex-col min-h-screen bg-[#0D0D0D]">
        <main className="flex-grow">
          <Nav />
          <Homepagee />
          <POLYMAZE />
          <Participate />
          <Testimonies />
          <FAQ />
          <About />
        </main>
        <Bottom />
      </div>
    </VideoLoader>
  );
}
