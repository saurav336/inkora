import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/Inkora.png'

export default function Header() {
    return (
        <>

            <header className="w-325 mx-auto">
                <nav className="flex justify-between items-center">
                    <Link href="/">
                        <Image src={logo} alt="Inkora" width={150} height={150}/>
                    </Link>
                    <ul className="flex items-center list-unstyled gap-2 font-urbanist text-black">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/services">Services</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}