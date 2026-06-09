import {Outfit} from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});


export const metadata = {
    title: "Top Rated Printing Company in Nepal",
    description: "",

};

export default function RootLayout({children}) {
    return (
        <html
            lang="en"

        >
        <body className={`${outfit.variable} h-full antialiased`}>

        <Header/>
        {children}</body>
        </html>
    );
}
