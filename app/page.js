import Image from "next/image";
import Link from "next/link";
import banner from '@/public/banner-1.jpeg'
import style from '@/app/home.module.css'
import {Suspense} from "react";
import MarqueeTicker from "@/app/components/MarqueeTicker";

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
                            <span className="text-white text-[128px] leading-[.95] tracking-[-5.12px]">Design. Done </span>
                            <span className="text-[128px] italic leading-[.95] text-[#21a4d9] tracking-[-5.12px]">Exceptionally </span>
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



            <section className="bg-[#f6f9ff] py-32">
                <div className="w-325 mx-auto grid grid-cols-[1.25fr_1fr] gap-27.5">
                    <div>

                    </div>
                    <div>

                        <h5 className="uppercase font-outfit mb-5"><span className="text-[#172e64]">// about our company //</span>
                        </h5>
                        <h2 className="font-outfit font-medium text-[40px] leading-tight">Where Creativity
                            Meets
                            <span className="block text-[#21a4d9] font-bold underline decoration-1 underline-offset-10">Quality Printing</span>
                        </h2>
                        <p className="font-outfit text-[18px] mt-3">We specialize in high-resolution prints with sharp
                            colors, fine detailing, and long-lasting quality that speaks for itself.

                        </p>

                        <div>
                            <div className="flex gap-10 mt-8.75">
                                <div className="left">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M6.73675 16C6.73449 16 6.73188 16 6.72971 16C6.63715 15.9979 6.54979 15.9537 6.48718 15.8779L0.0895627 8.10976C-0.0201374 7.97643 -0.0302105 7.77561 0.0656827 7.62929C0.161576 7.48345 0.336194 7.43351 0.483208 7.51012L6.3386 10.5718C6.38793 10.5976 6.44611 10.585 6.48379 10.5413L15.4156 0.116993C15.5365 -0.0242496 15.7343 -0.0396673 15.8716 0.0819977C16.0089 0.203663 16.0406 0.421995 15.9447 0.585734L7.05986 15.7845C7.04719 15.8066 7.03225 15.8266 7.01584 15.8453L6.97667 15.8892C6.91285 15.96 6.82628 16 6.73675 16Z"
                                                fill="white"></path>
                                        </svg>
                                    </div>
                                    <div className="line"></div>
                                </div>
                                <div className="content">
                                    <h4 className="mb-2 text-[24px] font-outfit">Live Order Tracking</h4>

                                    <p className="pn-p-1 disc font-outfit">Everyone’s local printer, we partner with
                                        more than 50
                                        print on demand suppliers in over 10</p>
                                </div>
                            </div>
                            <div className="flex gap-10 mt-8.75">
                                <div className="left">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M6.73675 16C6.73449 16 6.73188 16 6.72971 16C6.63715 15.9979 6.54979 15.9537 6.48718 15.8779L0.0895627 8.10976C-0.0201374 7.97643 -0.0302105 7.77561 0.0656827 7.62929C0.161576 7.48345 0.336194 7.43351 0.483208 7.51012L6.3386 10.5718C6.38793 10.5976 6.44611 10.585 6.48379 10.5413L15.4156 0.116993C15.5365 -0.0242496 15.7343 -0.0396673 15.8716 0.0819977C16.0089 0.203663 16.0406 0.421995 15.9447 0.585734L7.05986 15.7845C7.04719 15.8066 7.03225 15.8266 7.01584 15.8453L6.97667 15.8892C6.91285 15.96 6.82628 16 6.73675 16Z"
                                                fill="white"></path>
                                        </svg>
                                    </div>
                                    <div className="line"></div>
                                </div>
                                <div className="content">
                                    <h4 className="mb-2 text-[24px] font-outfit">Secure Online Payment</h4>

                                    <p className="pn-p-1 disc font-outfit">Our platform ensures transparent draws, using
                                        secure
                                        verifiable procedures, ensuring absolute fairness.

                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-10 mt-8.75">
                                <div className="left">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M6.73675 16C6.73449 16 6.73188 16 6.72971 16C6.63715 15.9979 6.54979 15.9537 6.48718 15.8779L0.0895627 8.10976C-0.0201374 7.97643 -0.0302105 7.77561 0.0656827 7.62929C0.161576 7.48345 0.336194 7.43351 0.483208 7.51012L6.3386 10.5718C6.38793 10.5976 6.44611 10.585 6.48379 10.5413L15.4156 0.116993C15.5365 -0.0242496 15.7343 -0.0396673 15.8716 0.0819977C16.0089 0.203663 16.0406 0.421995 15.9447 0.585734L7.05986 15.7845C7.04719 15.8066 7.03225 15.8266 7.01584 15.8453L6.97667 15.8892C6.91285 15.96 6.82628 16 6.73675 16Z"
                                                fill="white"></path>
                                        </svg>
                                    </div>
                                    <div className="line"></div>
                                </div>
                                <div className="content">
                                    <h4 className="mb-2 text-[24px] font-outfit">Free Design Templates
                                    </h4>

                                    <p className="pn-p-1 disc font-outfit">Safely buy lottery tickets with confidence
                                        using our
                                        secure system, ensuring worry-free

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>


            <MarqueeTicker/>

        </>
    );
}
