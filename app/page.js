import Image from "next/image";
import Link from "next/link";
// import banner from '@/public/hero_banner.jpeg'
import style from '@/app/home.module.css'
import {Suspense} from "react";

export default function Home() {

    return (
        <>
            {/*<div className="absolute top-0 w-full overflow-hidden z-[-2] bg-cover bg-center bg-no-repeat object-cover">*/}
            {/*    <Image src={banner} alt="banner" className="w-full object-cover "/>*/}
            {/*</div>*/}
            <main
                className="flex overflow-hidden justify-center items-center py-[8rem]">
                <div>
                    <h1 className={`font-outfit font-black text-[60px] text-center leading-tight ${style.animate_h1}`}>Top-Rated <span
                        className="text-[#21a4d9] underline"> Printing Company </span>
                        <span className="block">in Nepal</span>
                    </h1>
                    <div className="w-150 flex flex-col mx-auto">
                        <p className={`font-outfit my-6 text-[18px] ${style.animate_para} text-center`}>Professional
                            graphic design
                            and printing solutions for businesses, organizations, and individuals.
                        </p>
                        <Link href="/contact"
                              className={`bg-[#132353] text-white self-center p-3 rounded-full hover:bg-[#21a4d9] ease-in-out duration-500 ${style.animate_btn}`}>Get
                            Started</Link>
                    </div>
                </div>
                <div>

                </div>
            </main>
            <div>
                <div className="text-center text-[24px] py-[6rem]">
                    Trusted by over 50+ brands

                </div>
                <div className="w-150 mx-auto">

                </div>


            </div>
            <section>
                <h5 className="text-center uppercase font-outfit mb-5"><span className="text-[#172e64]">// about our company //</span>
                </h5>
                <h2 className="text-center font-outfit font-medium text-[40px] leading-tight">Where Creativity Meets
                    <span className="block text-[#21a4d9] font-bold">Quality Printing</span></h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">

                </div>
            </section>


        </>
    );
}
