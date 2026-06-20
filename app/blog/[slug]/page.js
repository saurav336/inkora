"use client"

import {useRouter} from "next/navigation";

export default function Blog() {
    const router = useRouter();
    const handleRoute = () => {
        router.push("/");
    }
    console.log(router);
    return (
        <>
            <button onClick={handleRoute}>Click</button>
        </>
    )
}