import React from "react";
import Video from "next-video"
import MusicVideoFootage from "/videos/2024_IWO_Im_Paradies_Feinschnitt_Final.mov"
import MeredithVideoFootage
    from "/videos/2025_Meredith - BIP Analog film shooting in INSAS - july 2025 - Gilles Bissot (1080p, h264).mp4"
import PolShortFilm from "/videos/ProfisPOL_P2_Eugner-T1_finaleMASTER.mp4"
import PolChallenge from "/videos/PolizeiChallenge2024_MASTER__v03.mp4"

const ClientWork = () => {
    return (
        <div className="bg-black text-eggwhite">
            <section className="min-h-screen flex flex-col justify-center space-y-12 px-6 md:px-12 py-12">
                <h1 className="text-center mb-6 text-3xl font-extrabold tracking-widest md:text-3xl lg:text-3xl">
                    CLIENT WORK
                    <hr className="my-6 border-deeporange sm:mx-auto lg:my-8"/>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                        <Video src={MusicVideoFootage}
                               playsInline={true}

                        ></Video>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4 text-center">
                        <h1 className="mb-4 text-3xl font-extrabold tracking-widest md:text-3xl lg:text-3xl">MUSIC
                            VIDEO</h1>
                        <h1 className="mb-12 text-3xl font-extrabold tracking-widest md:text-3xl lg:text-3xl">"IRGENDWO
                            IM PARADIES"</h1>
                        <p className="text-m tracking-wide uppercase">
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                        <Video src={MeredithVideoFootage} playsInline={true}></Video>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4 text-center">
                        <h1 className="mb-4 text-3xl font-extrabold tracking-widest md:text-3xl lg:text-3xl">SHORT
                            FILM </h1>
                        <h1 className="mb-12 text-3xl font-extrabold tracking-widest md:text-3xl lg:text-3xl">"MEREDITH"</h1>
                        <p className="text-m tracking-wide uppercase">
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                        <Video src={PolShortFilm} playsInline={true}></Video>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4 text-center">
                        <h1 className="mb-4 text-3xl font-extrabold tracking-widest md:text-3xl lg:text-3xl">GERMAN
                            POLICE</h1>
                        <h1 className="mb-12 text-3xl font-extrabold tracking-widest md:text-3xl lg:text-3xl">EDUCATIONAL
                            MOVIE</h1>
                        <p className="text-m tracking-wide uppercase">
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                        <Video src={PolChallenge} playsInline={true}></Video>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4 text-center">
                        <h1 className="mb-4 text-3xl font-extrabold tracking-widest md:text-3xl lg:text-3xl">GERMAN
                            POLICE</h1>
                        <h1 className="mb-12 text-3xl font-extrabold tracking-widest md:text-3xl lg:text-3xl">CHALLENGE
                            2024</h1>
                        <p className="text-m tracking-wide uppercase">
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ClientWork