import Link from "next/link";

export default function FooterBootom() {
    return (
        <div className="flex items-center justify-between border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <Link href="" className="flex items-center">
                <img src="vn.svg" alt="" width="20" className="mr-2"/>
                <span>Việt Nam</span>
            </Link>
            <Link href="">
                Pháp lý & quyền riêng tư
            </Link>
        </div>
    )
}