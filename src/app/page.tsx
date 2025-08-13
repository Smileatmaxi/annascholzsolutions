"use client"

import React from "react";
import Video from "next-video"
import MainVideoFootage from "/videos/WebsiteVideo_Malediven.mov"
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";

const words = `VIDEOGRAPHY BY`;
const wordsTwo = `ANNA SCHOLZ`;

export default function Home() {
    return (
        <div className="bg-deepgray relative w-full overflow-hidden">
            <section>
                <Video
                    src={MainVideoFootage}
                    controls={false}
                    loop={true}
                    muted={true}
                    autoplay={true}
                    playsInline={true}
                >
                    <div
                        className="tracking-widest absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-eggwhite bg-black/30">
                        <TextGenerateEffect duration={2.5} filter={true} words={words}/><br/>
                        <span className="text-eggwhite"><TextGenerateEffect duration={2.5} filter={true}
                                                                            words={wordsTwo}/></span>
                        <p className="text-lg md:text-xl mb-6 text-eggwhite/75 tracking-widest">MY PORTFOLIO</p>
                        <button
                            className="mt-6 bg-eggwhite text-deepgray hover:text-deeporange font-bold py-5 px-8 rounded-4xl hover:bg-deepgray">
                            <a href="/work">
                                MY LATEST WORKS
                            </a>
                        </button>
                    </div>
                </Video>
            </section>
        </div>
    );
}
