import React from "react";

const Contact = () => {
    return (
        <section className="min-h-screen bg-eggwhite flex items-center justify-center">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-deepgray">CONTACT ME</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-deepgray/50 sm:text-xl">
                    I'd love to hear from you! Please fill out the form below to get in touch with me. I'll get back to
                    you as soon as possible.
                </p>
                <p className="mb-8 lg:mb-16 font-light text-center text-red-600 sm:text-l">
                    All fields marked with an (*) are required.
                </p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-deepgray">YOUR EMAIL*</label>
                        <input type="email" id="email"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-deepgray text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                               placeholder="name@email.com" required/>
                    </div>
                    <div>
                        <label htmlFor="firstName"
                               className="block mb-2 text-sm font-medium text-deepgray">FIRST NAME*</label>
                        <input type="text" id="subject"
                               className="block p-3 w-full text-sm text-deepgray bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                               placeholder="First Name" required/>
                    </div>
                    <div>
                        <label htmlFor="lastName"
                               className="block mb-2 text-sm font-medium text-deepgray">LAST NAME*</label>
                        <input type="text" id="subject"
                               className="block p-3 w-full text-sm text-deepgray bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                               placeholder="Last Name" required/>
                    </div>
                    <div>
                        <label htmlFor="lastName"
                               className="block mb-2 text-sm font-medium text-deepgray">COMPANY</label>
                        <input type="text" id="subject"
                               className="block p-3 w-full text-sm text-deepgray bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                               placeholder="Your Company"/>
                    </div>
                    <div>
                        <label htmlFor="subject"
                               className="block mb-2 text-sm font-medium text-deepgray">SUBJECT*</label>
                        <input type="text" id="subject"
                               className="block p-3 w-full text-sm text-deepgray bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                               placeholder="What's your message about?" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-deepgray">YOUR MESSAGE*</label>
                        <textarea id="message" rows={6} maxLength={500}
                                  className="block p-2.5 w-full text-sm text-deepgray bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                  placeholder="Leave your message..."></textarea>
                    </div>
                    <fieldset>
                        <div className="flex items-center mb-4">
                            <input checked id="checkbox-1" type="checkbox" value=""
                                   className="w-4 h-4 text-deeporange bg-gray-100 border-gray-300 rounded-sm focus:ring-deeporange"
                            required={true}/>
                            <label htmlFor="checkbox-1"
                                   className="ms-2 text-sm font-medium text-deepgray">I agree to
                                the <a href="/terms-and-conditions" className="text-deeporange hover:underline">terms and
                                    conditions</a>.
                            </label>
                        </div>
                    </fieldset>
                    <button type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-deepgray sm:w-fit hover:bg-deeporange focus:ring-4 focus:outline-none">Send
                        message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact