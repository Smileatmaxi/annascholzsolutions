import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="w-full max-w-7xl px-8 py-16 grid md:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
                <section className="w-full">
                    <div className="overflow-hidden rounded-2xl w-full h-[65vh] md:h-[75vh]">
                        <Image
                            src="/images/AnnaScholz.webp"
                            alt="Anna Scholz"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover object-center"
                            priority
                        />
                    </div>
                    <div className="mt-4 text-center text-eggwhite text-xl">Anna Scholz</div>
                </section>
                <div className="flex flex-col md:items-center lg:items-center sm:items-center">
                    <h2 className="text-orange-500 text-4xl font-bold mb-6 tracking-widest text-center">
                        ABOUT ME
                        <hr className="my-6 border-deeporange sm:mx-auto lg:my-8"/>
                    </h2>
                        <p className="text-eggwhite text-center leading-relaxed tracking-wide text-2xl max-w-xl">
                            Hi! I’m Anna, a cinematographer with a special eye for visual
                            storytelling – on land, underwater, and everywhere in between. With
                            my camera, I capture emotions, atmospheres, and unique perspectives
                            that bring stories to life. Whether film, advertising, or
                            documentary – I combine technical know-how with artistic intuition
                            and a deep love for the element of water.
                        </p>
                </div>
            </div>
        </div>
    );
};

export default About;