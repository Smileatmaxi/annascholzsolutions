import React from "react";
import Video from "next-video";
import MeineHeimat from "/videos/2023_MeineHeimatGehoertZuMir.mp4";
import PoliceTeaserFootage from "/videos/Teaser.mov";

const Documentaries = () => {
    return (
        <div className="bg-bg-black text-eggwhite">
            <section className="min-h-screen flex flex-col justify-center space-y-12 px-6 md:px-12 py-12">
                <h1 className="text-center mb-6 text-4xl font-extrabold tracking-widest md:text-4xl lg:text-5xl">
                    DOCUMENTARIES
                    <hr className="my-6 border-deeporange sm:mx-auto lg:my-8"/>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <Video src={PoliceTeaserFootage} playsInline={true}></Video>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4 text-center">
                        <h1 className="mb-16 text-3xl font-extrabold tracking-widest md:text-3xl lg:text-5xl">MISSION ABROAD: BEYOND BORDERS</h1>
                        <p className="text-m tracking-wide uppercase text-center">
                            This documentary offers a rare glimpse into the work of the German Police Support Team (GPST),
                            a special unit of the German police that trains, advises, and supports law enforcement in "The Gambia".
                            Through authentic footage and personal stories, the film captures the challenges, dangers,
                            and human moments that define these unique missions – far from home and often in the heart
                            of crisis zones.
                        </p>
                    </div>
                    <div>
                        <Video src={MeineHeimat} playsInline={true}></Video>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4 text-center">
                        <h1 className="mb-16 text-3xl font-extrabold tracking-widest md:text-3xl lg:text-5xl">MEINE HEIMAT GEHÖRT ZU MIR</h1>
                        <p className="text-m tracking-wide uppercase text-center">

                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Documentaries