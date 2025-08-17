'use client'

import React, {useState} from "react";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import {validate} from "@/app/utilities/validate";
import {redirect} from "next/navigation";


export default function Contact() {

    //setting defaults
    const [data, setData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        company: "",
        subject: "",
        message: "",
    })

    const [validationErrors, setErrors] = useState<{
        email?: string;
        firstName?: string;
        lastName?: string;
        company?: string;
        subject?: string;
        message?: string;
    }>({})

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const validationErrors = validate(data)
        const isError = Object.keys(validationErrors).length
        const response = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })

        if (isError && isError > 0) {
            setErrors(validationErrors)
            Toast.error(
                <div id="toast-danger" class="flex items-center w-full max-w-xs p-4 mb-4 text-eggwhite bg-deepgray rounded-lg shadow-sm" role="alert">
                    <div class="inline-flex items-center justify-center shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                        </svg>
                        <span class="sr-only">Error icon</span>
                    </div>
                    <div class="ms-3 text-sm font-normal">EMAIL WAS NOT SENT!</div>
                    <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
                        <span class="sr-only">Close</span>
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </div>
            )
            setLoading(false);
            setError(true);
            return response.status === 400;
        } else {
            Toast.success(
                <div id="toast-simple" class="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-eggwhite bg-deepgray divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-sm" role="alert">
                    <svg class="w-5 h-5 text-green-400 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
                    </svg>
                    <div class="ps-4 text-sm font-normal">Message sent successfully.</div>
            </div>
            )
            console.log(data);
            setTimeout(() => {
                return (redirect("/"));
            }, 300)
        }
        setLoading(false);
    };

    //handling changes on the form inputs
    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }


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
                <form action="#" className="space-y-8" method="POST" onSubmit={sendEmail}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-deepgray">
                            YOUR EMAIL*
                        </label>
                        <Input
                            error={!!validationErrors.email}
                            errorMessage={validationErrors.email}
                            value={data.email}
                            type="text"
                            id="email"
                            placeholder="123@examplemail.com"
                            required={true}
                            name="email"
                            onChange={onChange}>
                        </Input>
                    </div>

                    <div>
                        <label
                            htmlFor="firstName"
                            className="block mb-2 text-sm font-medium text-deepgray">
                            FIRST NAME*
                        </label>
                        <Input
                            error={!!validationErrors.firstName}
                            errorMessage={validationErrors.firstName}
                            value={data.firstName}
                            onChange={onChange}
                            required={true}
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                            name="firstName">
                        </Input>
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block mb-2 text-sm font-medium text-deepgray">
                            LAST NAME*
                        </label>
                        <Input
                            error={!!validationErrors.lastName}
                            errorMessage={validationErrors.lastName}
                            value={data.lastName}
                            onChange={onChange}
                            required={true}
                            id="lastName"
                            type="text"
                            placeholder="Your Last Name"
                            name="lastName">
                        </Input>
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block mb-2 text-sm font-medium text-deepgray">
                            COMPANY
                        </label>
                        <Input
                            error={!!validationErrors.company}
                            errorMessage={validationErrors.company}
                            value={data.company}
                            onChange={onChange}
                            required={false}
                            id="company"
                            type="text"
                            placeholder="Your Company"
                            name="company">
                        </Input>
                    </div>
                    <div>
                        <label
                            htmlFor="subject"
                            className="block mb-2 text-sm font-medium text-deepgray">
                            SUBJECT*
                        </label>
                        <Input
                            error={!!validationErrors.subject}
                            errorMessage={validationErrors.subject}
                            value={data.subject}
                            onChange={onChange}
                            required={true}
                            id="subject"
                            type="text"
                            placeholder="What's your Message about?"
                            name="subject">
                        </Input>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-deepgray">
                            YOUR MESSAGE*
                        </label>
                        <Textarea
                            error={!!validationErrors.message}
                            errorMessage={validationErrors.message}
                            value={data.message}
                            onChange={onChange}
                            required={true}
                            id="message"
                            name="message"
                            placeholder="Write your message here...">
                        </Textarea>
                    </div>
                    <button
                        type="submit"
                        className="disabled:bg-opacity-75 py-3 px-5 text-sm font-medium text-center text-white rounded-xl bg-deepgray sm:w-fit hover:bg-deeporange focus:ring-4 focus:outline-none"
                        disabled={loading || error}
                    >
                        {loading && (
                            <div className="flex items-center justify-center mt-5 disabled:bg-opacity-75">
                                <div role="status">
                                    <svg aria-hidden="true"
                                         className="w-6 h-6 text-lightgray animate-spin  fill-eggwhite"
                                         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"/>
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"/>
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        )}
                        <span className={loading ? "invisible" : "visible"}>SEND MESSAGE</span>
                    </button>
                </form>
            </div>
        </section>
    )
}