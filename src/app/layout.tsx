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
    title: "AnnaScholz",
    description: "Official Portfolio of Anna Scholz",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" dir="LTR" suppressHydrationWarning={true}>
        <head>
            <ThemeModeScript/>
        </head>
        <body className={`${oswald.className} antialiased flex flex-col min-h-screen`}>
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
