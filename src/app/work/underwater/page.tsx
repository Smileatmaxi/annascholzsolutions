import React from "react";
import Video from "next-video";
import UnderwaterVideoFootage from "/videos/Underwater Lover.mov"
import UnderwaterMaldives from "/videos/WebsiteVideo_Malediven.mov"

const Underwater = () => {
    return (
        <div className="bg-bg-black text-eggwhite">
            <section className="min-h-screen flex flex-col justify-center space-y-12 px-6 md:px-12 py-12">
                <h1 className="text-center mb-6 text-4xl font-extrabold tracking-wider md:text-4xl lg:text-5xl">
                    UNDERWATER
                    <hr className="my-6 border-deeporange sm:mx-auto lg:my-8"/>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                        <Video src={UnderwaterMaldives} playsInline={true}></Video>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4 text-center">
                        <h1 className="mb-16 text-4xl font-extrabold tracking-widest md:text-4xl lg:text-5xl">UNDERWATER MOVIE SHOT IN THE MALEDIVES</h1>
                        <p className="text-m tracking-wide uppercase">
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                        <Video src={UnderwaterVideoFootage} playsInline={true}></Video>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4 text-center">
                        <h1 className="mb-16 text-4xl font-extrabold tracking-widest md:text-4xl lg:text-5xl">SHORT UNDERWATER MOVIE</h1>
                        <p className="text-m tracking-wide uppercase">
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Underwater