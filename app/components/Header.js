import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/Inkora.png'

export default function Header() {
    return (
        <>

            <header className="w-325 mx-auto hidden lg:block">
                <nav className="flex justify-between items-center">
                    <Link href="/">
                        <Image src={logo} alt="Inkora" width={150} height={150}/>
                    </Link>
                    <ul className="flex items-center list-unstyled gap-10 font-inter text-[13px] text-white">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/services">Services</Link>
                    </ul>
                    <div className="start__porject text-white font-inter text-[13px]">
                        <Link href="/contact" className="border border-[#feceff] py-2.75 px-5.5 rounded-full inline-flex ">Start Project</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}