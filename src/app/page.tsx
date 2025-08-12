"use client"

import React from "react";
import Video from "next-video"
import StockVideoFootage from "/videos/StockVideoMainPage.mp4"
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";

const words = `WELCOME TO`;
const wordsTwo = `AnnaScholzSolutions`;

export default function Home() {
    return (
        <div className="bg-deepgray relative w-full overflow-hidden">
            <section>
                {/*VIDEO-BACKGROUND*/}
                <Video
                    src={StockVideoFootage}
                    controls={false}
                    loop={true}
                    muted={true}
                    autoplay={true}
                    playsInline={true}
                >
                    {/*OVERLAY CONTENT*/}
                    <div
                        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-eggwhite bg-black/30">
                        <TextGenerateEffect duration={2.5} filter={true} words={words}/><br/>
                        <span className="text-eggwhite"><TextGenerateEffect duration={2.5} filter={true}
                                                                            words={wordsTwo}/></span>
                        <p className="text-lg md:text-xl mb-6 text-eggwhite/75">My Portfolio</p>
                        <button
                            className="mt-6 bg-eggwhite text-deepgray hover:text-deeporange font-bold py-5 px-8 rounded-4xl hover:bg-deepgray">
                            <a href="/work">
                                HIRE ME NOW
                            </a>
                        </button>
                    </div>
                </Video>
            </section>
        </div>
    );
}
