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
                        className="text-[#21a4d9] underline decoration-1 underline-offset-10"> Printing Company </span>
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
                    <div className="font-medium font-outfit mb-16"> Trusted by over 50+ brands</div>
                    <div className="flex gap-14 flex-col sm:flex-row justify-center items-center w-325 mx-auto">
                        <Image src="/p1-img-1.webp" width={200} height={200} alt="client"/>
                        <Image src="/p1-img-2.webp" width={200} height={200} alt="client"/>
                        <Image src="/p1-img-3.webp" width={200} height={200} alt="client"/>
                        <Image src="/p1-img-4.webp" width={200} height={200} alt="client"/>
                        <Image src="/p1-img-5.webp" width={200} height={200} alt="client"/>
                    </div>
                </div>
                <div className="w-150 mx-auto">

                </div>


            </div>
            <section className="bg-[#f6f9ff] py-32">
                <div className="w-325 mx-auto grid grid-cols-[1.25fr_1fr] gap-27.5">
                    <div>

                    </div>
                    <div>

                            <h5 className="uppercase font-outfit mb-5"><span className="text-[#172e64]">// about our company //</span>
                            </h5>
                            <h2 className="font-outfit font-medium text-[40px] leading-tight">Where Creativity
                                Meets
                                <span className="block text-[#21a4d9] font-bold underline decoration-1 underline-offset-10">Quality Printing</span></h2>
                            <p className="font-outfit text-[18px] mt-3">We combine artistic vision with premium printing techniques to deliver custom products
                                exceed expectations.

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

                                    <p className="pn-p-1 disc font-outfit">Everyone’s local printer, we partner with more than 50
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

                                    <p className="pn-p-1 disc font-outfit">Our platform ensures transparent draws, using secure
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

                                    <p className="pn-p-1 disc font-outfit">Safely buy lottery tickets with confidence using our
                                        secure system, ensuring worry-free

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>


        </>
    );
}
