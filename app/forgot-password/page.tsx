import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function ForgotPassword() {
    return (
        <section className="pt-35 pb-20 bg-[#ebbd5b]">
            <div className="container flex justify-center mx-auto px-6 max-w-6xl">
                <div className="w-150 p-10 bg-white">
                    <Link href='/sign-in' className="flex items-center text-xl mb-2 hover:text-[#ebbd5b] transition"><IoIosArrowRoundBack className="mr-2"/> <span>Đến trang đăng nhập</span></Link>
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-semibold mb-2">Gữi email của bạn để nhận mật khẩu mới</h2>
                    </div>
                    <form>
                        <div className="my-6">
                            <input type="email"
                                className="w-full border border-gray-200 px-4 py-3 focus:outline-none input-focus"
                                placeholder="your@email.com" />
                        <div className="mt-2 text-[#ebbd5b]">Thông báo sau khi click gữi email ở đây</div>
                        </div>

                        <button type="submit"
                            className="w-full py-3 bg-[#ebbd5b] text-white font-medium cursor-pointer hover:opacity-90 transition delay-10 mb-6">
                            Gữi email
                        </button>
                    </form>
                </div>
            </div>
        </section >
    )
}
