'use client'

import React, {useState} from "react";
import Input from "@/components/input";

const Contact = () => {
    return (
        <section className="min-h-screen bg-eggwhite flex items-center justify-center">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl font-extrabold text-center text-deepgray tracking-widest">CONTACT ME</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-deepgray/50 sm:text-xl">
                    I'd love to hear from you! Please fill out the form below to get in touch with me. I'll get back to
                    you as soon as possible.
                </p>
                <p className="mb-8 lg:mb-16 font-light text-center text-red-600 sm:text-l">
                    All fields marked with an (*) are required.
                </p>
                <form action="#" className="space-y-8" method="POST">
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-deepgray">YOUR EMAIL*</label>
                        <input type="text" id="subject"
                               className="block p-3 w-full text-sm text-deepgray bg-gray-50 rounded-lg border border-deepgray shadow-sm focus:ring-deeporange focus:border-deeporange"
                               placeholder="123@examplemail.com" required/>
                    </div>

                    <div>
                        <label htmlFor="firstName"
                               className="block mb-2 text-sm font-medium text-deepgray">FIRST NAME*</label>
                        <input type="text" id="subject"
                               className="block p-3 w-full text-sm text-deepgray bg-gray-50 rounded-xl border border-deepgray shadow-sm focus:ring-deeporange focus:border-deeporange"
                               placeholder="First Name" required/>
                    </div>
                    <div>
                        <label htmlFor="lastName"
                               className="block mb-2 text-sm font-medium text-deepgray">LAST NAME*</label>
                        <input type="text" id="subject"
                               className="block p-3 w-full text-sm text-deepgray bg-gray-50 rounded-xl border border-deepgray shadow-sm focus:ring-deeporange focus:border-deeporange"
                               placeholder="Last Name" required/>
                    </div>
                    <div>
                        <label htmlFor="lastName"
                               className="block mb-2 text-sm font-medium text-deepgray">COMPANY</label>
                        <input type="text" id="subject"
                               className="block p-3 w-full text-sm text-deepgray bg-gray-50 rounded-xl border border-deepgray shadow-sm focus:ring-deeporange focus:border-deeporange"
                               placeholder="Your Company"/>
                    </div>
                    <div>
                        <label htmlFor="subject"
                               className="block mb-2 text-sm font-medium text-deepgray">SUBJECT*</label>
                        <input type="text" id="subject"
                               className="block p-3 w-full text-sm text-deepgray bg-gray-50 rounded-xl border border-deepgray shadow-sm focus:ring-deeporange focus:border-deeporange"
                               placeholder="What's your message about?" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-deepgray">YOUR MESSAGE*</label>
                        <textarea id="message" rows={6} maxLength={500}
                                  className="block p-2.5 w-full text-sm text-deepgray bg-gray-50 rounded-xl shadow-sm border border-deepgray focus:ring-deeporange focus:border-deeporange"
                                  placeholder="Leave your message..."></textarea>
                    </div>
                    <button type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-xl bg-deepgray sm:w-fit hover:bg-deeporange focus:ring-4 focus:outline-none">
                        SEND MESSAGE
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact