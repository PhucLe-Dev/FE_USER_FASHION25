import Link from "next/link";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";

export default function FooterTop() {
    return (
        <div className="grid md:grid-cols-4 gap-10">
            <div>
                <h4 className="mb-5 text-lg text-gray-900">Kết nối với chúng tôi</h4>
                <p className="text-gray-800 mb-4"><Link href="/sign-up" className="underline">Đăng ký </Link>
                    nhận thư điện tử để cập nhật những tin tức mới nhất từ LUXE, bao gồm các buổi ra mắt độc quyền trực tuyến và bộ sưu tập mới.
                </p>
                <div className="flex space-x-4">
                    <Link href="#" className="text-gray-800 text-xl hover:text-[#ebbd5b] transition"><CiInstagram /></Link>
                    <Link href="#" className="text-gray-800 text-xl hover:text-[#ebbd5b] transition"><CiTwitter /></Link>
                    <Link href="#" className="text-gray-800 text-xl hover:text-[#ebbd5b] transition"><CiYoutube /></Link>
                    <Link href="#" className="text-gray-800 text-xl hover:text-[#ebbd5b] transition"><CiFacebook /></Link>
                </div>
            </div>
            <div>
                <h4 className="mb-5 text-lg text-gray-900">Dịch vụ</h4>
                <ul className="space-y-2 text-gray-800">
                    <li><Link href="#" className="hover:text-[#ebbd5b] transition">Dịch vụ bảo hành</Link></li>
                    <li><Link href="#" className="hover:text-[#ebbd5b] transition">Dịch vụ cá nhân hóa</Link></li>
                    <li><Link href="#" className="hover:text-[#ebbd5b] transition">Nghệ thuật tặng quà</Link></li>
                    <li><Link href="#" className="hover:text-[#ebbd5b] transition">Dịch vụ hoàn tiền</Link></li>
                    <li><Link href="#" className="hover:text-[#ebbd5b] transition">Dịch vụ hoàn hàng</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="mb-5 text-lg text-gray-900">Về lUXE</h4>
                <ul className="space-y-2 text-gray-800">
                    <li><Link href="#" className="hover:text-[#ebbd5b] transition">nghệ thuật & văn hóa</Link></li>
                    <li><Link href="#" className="hover:text-[#ebbd5b] transition">Phát triển biền vững</Link></li>
                    <li><Link href="#" className="hover:text-[#ebbd5b] transition">Tin mới nhất</Link></li>
                    <li><Link href="#" className="hover:text-[#ebbd5b] transition">Nghề nghiệp</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="mb-5 text-lg text-gray-900">Hộ trợ</h4>
                <ul className="space-y-2 text-gray-800">
                    <p className="text-gray-800 mb-4">
                        Quý khách có thể liên hệ với chúng tôi qua Hotline <Link href="" className="underline">+84 0865945907</Link> , <Link href="" className="underline">Zalo</Link>, <Link href="" className="underline">Email</Link>, hoặc các phương thức liên hệ khác.
                    </p>
                    <li><Link href="#" className="hover:text-[#ebbd5b] transition">Câu hỏi thường gặp</Link></li>
                    <li><Link href="#" className="hover:text-[#ebbd5b] transition">Chăm sóc khách hàng</Link></li>
                    <li><Link href="#" className="hover:text-[#ebbd5b] transition">Cửa hàng</Link></li>
                </ul>
            </div>
        </div>
    )
}