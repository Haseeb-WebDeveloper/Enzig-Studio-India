import Image from "next/image";
import Link from "next/link";

export default function NextPre() {
    return (
        <div>
             <div className="flex justify-between items-center max-w-[1200px] mx-auto">
                <Link href="/" className="lora-blog-h3 flex flex-col gap-3">
                    Previous Project
                    <Image src="/page-arrow-left.svg" alt="Previous Project" width={200} height={200} className="w-32" />
                </Link>
                <Link href="/" className="lora-blog-h3 flex flex-col justify-end items-center gap-3">
                    Next Project
                    <Image src="/page-arrow-right.svg" alt="Next Project" width={200} height={200} className="w-32" />
                </Link>
            </div>
        </div>
    )
}