import {Syne} from "next/font/google";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";

const syne = Syne({
    variable: "--font-syne",
    subsets: ["latin"],
});
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"]
})

export const metadata = {
    title: "Top Rated Printing Company in Nepal",
    description: "",

};

export default function RootLayout({children}) {
    return (
        <html
            lang="en"

        >
        <body className={`${syne.variable} ${inter.variable} h-full antialiased`}>

        <Header/>
        {children}</body>
        </html>
    );
}
