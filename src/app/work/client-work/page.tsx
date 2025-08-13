import React from "react";
import Video from "next-video"
import MusicVideoFootage from "/videos/2024_IWO_Im_Paradies_Feinschnitt_Final.mov"
import MeredithVideoFootage from "/videos/2025_Meredith - BIP Analog film shooting in INSAS - july 2025 - Gilles Bissot (1080p, h264).mp4"
import UnderwaterVideoFootage from "/videos/Underwater Lover.mov"

const ClientWork = () => {
    return (
        <div className="bg-eggwhite text-deepgray">
            <section className="min-h-screen flex flex-col justify-center space-y-12 px-6 md:px-12 py-12">
                <h1 className="text-center mb-6 text-4xl font-extrabold tracking-wider md:text-4xl lg:text-5xl">
                    CLIENT WORK
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>

                    </div>
                    <div className="flex flex-col justify-center items-start space-y-4">
                        <p className="text-sm font-semibold tracking-wide uppercase"></p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                        <Video src={MusicVideoFootage} playsInline={true}></Video>
                    </div>
                    <div className="flex flex-col justify-center items-start space-y-4 text-center">
                        <h1 className="mb-16 text-4xl font-extrabold tracking-wider md:text-4xl lg:text-5xl">MUSIC VIDEO "IRGENDWO IM PARADIES"</h1>
                        <p className="text-m tracking-wide uppercase">
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                        <Video src={MeredithVideoFootage} playsInline={true}></Video>
                    </div>
                    <div className="flex flex-col justify-center items-start space-y-4 text-center">
                        <h1 className="mb-16 text-4xl font-extrabold tracking-wider md:text-4xl lg:text-5xl">SHORT FILM "MEREDITH"</h1>
                        <p className="text-m tracking-wide uppercase">
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                        <Video src={UnderwaterVideoFootage} playsInline={true}></Video>
                    </div>
                    <div className="flex flex-col justify-center items-start space-y-4 text-center">
                        <h1 className="mb-16 text-4xl font-extrabold tracking-wider md:text-4xl lg:text-5xl">SHORT UNDERWATER MOVIE</h1>
                        <p className="text-m tracking-wide uppercase">
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ClientWork