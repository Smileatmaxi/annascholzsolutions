import React from "react";
import Video from "next-video";
import PoliceTeaserFootage from "/videos/Teaser.mov";
import PoliceProfisFootage from "/videos/ProfisPOL_P2_Eugner-T1_finaleMASTER.mp4";
import PoliceChallengeFootage from "/videos/PolizeiChallenge2024_MASTER__v03.mp4";

const Police = () => {
    return (
        <div className="bg-eggwhite text-deepgray">
            <section className="min-h-screen flex flex-col justify-center space-y-12 px-6 md:px-12 py-12">
                <h1 className="text-center mb-6 text-4xl font-extrabold tracking-wider md:text-4xl lg:text-5xl">
                    POLICE WORK
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <Video src={PoliceTeaserFootage} playsInline={true}></Video>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4 text-center">
                        <h1 className="mb-16 text-4xl font-extrabold tracking-widest md:text-4xl lg:text-5xl">MISSION ABROAD: BEYOND BORDERS</h1>
                        <p className="text-m tracking-wide uppercase text-center">
                            This documentary offers a rare glimpse into the work of the German Police Support Team (GPST),
                            a special unit of the German police that trains, advises, and supports law enforcement in "The Gambia".
                            Through authentic footage and personal stories, the film captures the challenges, dangers,
                            and human moments that define these unique missions – far from home and often in the heart
                            of crisis zones.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                        <Video src={PoliceProfisFootage} playsInline={true}></Video>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4 text-center">
                        <h1 className="mb-16 text-4xl font-extrabold tracking-widest md:text-4xl lg:text-5xl">EDUCATIONAL MOVIE FOR THE GERMAN POLICE</h1>
                        <p className="text-m tracking-wide uppercase">
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                        <Video src={PoliceChallengeFootage} playsInline={true}></Video>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4">
                        <h1 className="mb-16 text-4xl font-extrabold tracking-widest md:text-4xl lg:text-5xl">POLICE CHALLENGE 2024</h1>
                        <p className="text-m tracking-wide uppercase">
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Police