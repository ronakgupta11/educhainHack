import Link from "next/link";

export default function Sidebar() {
    return <>
        <div
            className="lg:h-screen lg:block hidden lg:w-1/6 bg-[#134E4A] text-white text-center"
        >
            <h1 className="text-[36px] py-2 border-b border-b-[#0F766E]">ForMail</h1>
            <div>
                <Link href="/">
                    <p className="text-white font-semibold text-lg my-4 py-4 hover:bg-[#0F766E] bg-[#0F766E] active:bg-[#0F766E]">
                        Projects
                    </p>
                </Link>
            </div>
        </div>
    </>
}