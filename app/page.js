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
                className="font-urbanist w-325 mx-auto flex overflow-hidden items-center py-[8rem]">
                <div className="w-162.5">
                    <h1 className={`font-black text-[60px]  leading-tight ${style.animate_h1}`}>Best <span
                        className="text-[#21a4d9]"> Printing Service </span>
                        <span className="text-[#132353]"> Company in Nepal</span>
                    </h1>
                    <p className={`my-6 text-[18px] ${style.animate_para}`}>We make things that look really good like
                        pictures and words and
                        we
                        print them
                        on paper or other
                        things. Our graphic design and print solutions are for businesses organizations and
                        individuals. </p>
                    <Link href="/contact"
                          className={`bg-[#132353] text-white p-3 rounded-full hover:bg-[#21a4d9] ease-in-out duration-500 ${style.animate_btn}`}>Get
                        Started</Link>
                </div>
                <div>

                </div>
            </main>

            <section>
                <h5 className="text-center uppercase font-urbanist mb-5"><span>// about our company //</span></h5>
                <h2 className="text-center font-urbanist font-medium text-[40px] leading-tight">Where Creativity Meets
                     <span className="block text-[#21a4d9] font-bold">Quality Printing</span></h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">

                </div>
            </section>


        </>
    );
}
