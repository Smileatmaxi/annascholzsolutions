import React from "react";
import Video from "next-video";
import PoliceChallengeFootage from "/videos/PolizeiChallenge2024_MASTER__v03.mp4";

const Documentaries = () => {
    return (
        <div className="bg-eggwhite text-deepgray">
            <section className="min-h-screen flex flex-col justify-center space-y-12 px-6 md:px-12 py-12">
                <h1 className="text-center mb-6 text-4xl font-extrabold tracking-wider md:text-4xl lg:text-5xl">
                    DOCUMENTARIES
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <Video src={PoliceChallengeFootage} playsInline={true}></Video>
                    </div>
                    <div className="flex flex-col justify-center items-start space-y-4 text-center">
                        <h1 className="mb-16 text-4xl font-extrabold tracking-wider md:text-4xl lg:text-5xl">EDUCATIONAL MOVIE FOR THE GERMAN POLICE</h1>
                        <p className="text-m tracking-wide uppercase">
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                        <Video src={PoliceChallengeFootage} playsInline={true}></Video>
                    </div>
                    <div className="flex flex-col justify-center items-start space-y-4 text-center">
                        <h1 className="mb-16 text-4xl font-extrabold tracking-wider md:text-4xl lg:text-5xl">EDUCATIONAL MOVIE FOR THE GERMAN POLICE</h1>
                        <p className="text-m tracking-wide uppercase">
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Documentaries