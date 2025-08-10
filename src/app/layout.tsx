import type {Metadata} from "next";
import {Oswald} from "next/font/google";
import "./globals.css";
import {ThemeModeScript} from 'flowbite-react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const oswald = Oswald({
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "AnnaScholzSolutions",
    description: "Official website of Anna Scholz Solutions",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" dir="LTR" suppressHydrationWarning={true}>
        <head>
            <ThemeModeScript/>
        </head>
        <body className={`${oswald.className} antialiased`}>
        <div className="">
            <Navbar></Navbar>
            <main>
                {children}
            </main>
        </div>
        <Footer></Footer>
        </body>
        </html>
    );
}
