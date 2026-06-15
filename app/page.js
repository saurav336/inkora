import Image from "next/image";
import Link from "next/link";
import banner from '@/public/banner-1.jpeg'
import style from '@/app/home.module.css'
import {Suspense} from "react";
import MarqueeTicker from "@/app/components/MarqueeTicker";
import Services from "@/app/components/Services"
import {FaFingerprint} from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { FaRegFlag } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa6";




export default function Home() {

    return (
        <>
            {/*<div className="absolute top-0 w-full overflow-hidden z-[-2] bg-cover bg-center bg-no-repeat object-cover">*/}
            {/*    <Image src={banner} alt="banner" className="w-full object-cover "/>*/}
            {/*</div>*/}
            <section className="relative min-h-screen p-[140px_5vw_80px] overflow-hidden">
                <div className="absolute hero-bg"></div>

                <main
                    className="w-325 mx-auto flex overflow-hidden items-center">
                    <div>
                        <h1 className={`font-syne font-bold ${style.animate_h1}`}>
                         <span
                             className="text-white leading-[.95] text-[128px] tracking-[-5.12px]">Printing. Branding.  </span>
                            <span
                                className="text-white text-[128px] leading-[.95] tracking-[-5.12px]">Design. Done </span>
                            <span
                                className="text-[128px] italic font-medium leading-[.95] text-[#21a4d9] tracking-[-5.12px]">Exceptionally </span>
                        </h1>
                        <div className="flex flex-col w-125 text-white">
                            <p className={`font-inter font- my-6 text-[18px] ${style.animate_para}`}>
                                From bold brand identities to flawless large-format printing — Inkora is the end-to-end
                                creative partner for ambitious companies across Nepal and beyond.

                            </p>
                            <Link href="/contact"
                                  className={`bg-[#132353] text-white self-start p-3 rounded-full hover:bg-[#21a4d9] ease-in-out duration-500 ${style.animate_btn}`}>Get
                                Started</Link>
                        </div>
                    </div>
                    <div>

                    </div>
                </main>
            </section>


            <div className="services__grid max-w-[1300px] mx-auto ">
                <Services num="01" brandName="Brand Identity"
                          desc="Logos, marks, and visual systems engineered to last decades." icons={<FaFingerprint/>}/>
                <Services num="02" brandName="Graphic Design"
                          desc="Editorial, layouts, posters — design that commands attention." icons={<FaPenNib/>}/>
                <Services num="03" brandName="Printing Solutions"
                          desc="Premium offset & digital printing with uncompromising color accuracy." icons={<FaPrint/>}/>
                <Services num="04" brandName="Packaging Design"
                          desc="Shelf-ready structural & graphic packaging that sells." icons={<FaBoxOpen/>}/>
                <Services num="05" brandName="Social Media Design"
                          desc="Scroll-stopping creative built for engagement and growth." icons={<FaInstagram/>}/>
                <Services num="06" brandName="Corporate Branding"
                          desc="Enterprise-grade identity systems for serious businesses." icons={<FaBuilding/>}/>
                <Services num="07" brandName="Large Format Printing"
                          desc="Billboards, banners, signage — bold print at any scale." icons={<FaRegFlag/>}/>
                <Services num="08" brandName="Marketing Materials"
                          desc="Brochures, decks, catalogs — every touchpoint, perfected." icons={<FaBullhorn/>}/>

            </div>

            <MarqueeTicker/>

        </>
    );
}
