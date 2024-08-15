'use client'

import { useRouter } from "next/navigation"

export default function Navbar() {
    const router = useRouter()
    function redirectToDashboard() {
        // router.push('/dashboard')
        return <w3m-button />

    }
    return <>
        <div className="flex justify-between items-center">
            <div className="">Name</div>
            <div className="flex justify-around w-96">
                <div>Home</div>
                <div>Info</div>
                <div>About us</div>
            </div>
            <w3m-button />
        </div>
    </>
}