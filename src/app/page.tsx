import React from "react";
import Video from "next-video"
import StockVideoFootage from "/videos/StockVideoMainPage.mp4"

export default function Home() {
  return (
      <section className="video">
          <div>
              <Video src={StockVideoFootage} loop muted autoplay/>
          </div>
          <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          </div>
      </section>
  );
}
