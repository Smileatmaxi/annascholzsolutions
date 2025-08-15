import React from "react";

const Work = () => {
    return (
        <div>
            <section className="bg-sectionOne relative block overflow-hidden bg-no-repeat bg-cover bg-center bg-fixed">
                <a href="/work/client-work">
                    <div className="min-h-screen pt-6.5 pb-6.5">
                        <div className="max-w-screen-xl mx-auto py-24">
                            <h1 className="mb-2 text-4xl font-extrabold leading-none tracking-widest text-eggwhite md:text-4xl lg:text-5xl">
                                CLIENT WORK
                            </h1>
                            <hr className="border-deeporange w-14 mb-12 border-1"/>
                        </div>
                    </div>
                </a>
            </section>
            <section className="bg-sectionTwo relative block overflow-hidden bg-no-repeat bg-cover bg-center bg-fixed">
                <a href="/work/documentaries">
                    <div className="min-h-screen pt-6.5 pb-6.5">
                        <div className="max-w-screen-xl mx-auto py-24">
                            <h1 className="mb-2 text-4xl font-extrabold leading-none tracking-widest text-eggwhite md:text-4xl lg:text-5xl">
                                DOCUMENTARIES
                            </h1>
                            <hr className="border-deeporange w-14 mb-12 border-1"/>
                        </div>
                    </div>
                </a>
            </section>
            <section className="bg-sectionThree relative block overflow-hidden bg-no-repeat bg-cover bg-center bg-fixed">
                <a href="/work/underwater">
                    <div className="min-h-screen pt-6.5 pb-6.5">
                        <div className="max-w-screen-xl mx-auto py-24">
                            <h1 className="mb-2 text-4xl font-extrabold leading-none tracking-widest text-eggwhite md:text-4xl lg:text-5xl">
                                UNDERWATER
                            </h1>
                            <hr className="border-deeporange w-14 mb-12 border-1"/>
                        </div>
                    </div>
                </a>
            </section>
        </div>
    )
}

export default Work