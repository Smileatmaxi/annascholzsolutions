"use client";

import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-deepgray border-deepgray ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="AnnaScholzSolutions Logo"/>
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col tracking-widest p-4 md:p-0 mt-4 border border-deepgray rounded-lg bg-deepgray md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-deepgray">
                        <li>
                            <a href="/"
                               className="block py-2 px-3 text-eggwhite tracking-widest bg-deepgray rounded-sm md:bg-transparent md:text-eggwhite md:p-0 md:hover:text-deeporange"
                               aria-current="page">HOME</a>
                        </li>
                        <li>
                            <a href="/work"
                               className="block py-2 px-3 text-eggwhite tracking-widest rounded-sm hover:bg-gray-100
                               md:hover:bg-transparent md:border-0 md:hover:text-deeporange md:p-0
                               md:dark:hover:bg-transparent">WORK</a>
                        </li>
                        <li>
                            <a href="/about"
                               className="block py-2 px-3 text-eggwhite tracking-widest rounded-sm hover:bg-gray-100
                               md:hover:bg-transparent md:border-0 md:hover:text-deeporange md:p-0
                               md:dark:hover:bg-transparent">ABOUT</a>
                        </li>
                        <li>
                            <a href="/contact"
                               className="block py-2 px-3 text-eggwhite tracking-widest rounded-sm hover:bg-gray-100
                               md:hover:bg-transparent md:border-0 md:hover:text-deeporange md:p-0
                               md:dark:hover:bg-transparent">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;