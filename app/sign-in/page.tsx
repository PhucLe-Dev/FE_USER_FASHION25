import Link from "next/link";
import { LuEyeClosed } from "react-icons/lu";

export default function Signin() {
    return (
        <section className="pt-35 pb-20 bg-[#ebbd5b]">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="hidden md:block bg-auth relative">
                            <div className="absolute inset-0 flex items-center justify-center p-10">
                                <div className="text-white text-center">
                                    <h3 className="text-6xl font-playfair font-bold mb-4">LUXE</h3>
                                    <p className="mb-6">&quot;Được tạo nên từ sự tinh tế,
                                        dành cho những tâm hồn thanh lịch.&quot;</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 bg-white">
                            <div className="flex justify-between items-center">
                                <h2 className="text-3xl font-playfair font-bold mb-2">Đăng nhập</h2>
                            </div>
                            <form>
                                <div className="my-6">
                                    <input type="email"
                                        className="w-full border border-gray-200 px-4 py-3 focus:outline-none input-focus"
                                        placeholder="your@email.com" />
                                </div>

                                <div className="mb-6">
                                    <div className="relative">
                                        <input type="password"
                                            className="w-full border border-gray-200 px-4 py-3 focus:outline-none input-focus"
                                            placeholder="Mật khẩu" />
                                        <button type="button"
                                            className="absolute right-5 top-5 text-gray-400 hover:text-gray-600 toggle-password">
                                            <LuEyeClosed />
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <div className="flex items-center">
                                            <input id="remember" type="checkbox"
                                                className="h-4 w-4 text-accent focus:ring-accent border-gray-300" />
                                            <label className="ml-2 block text-sm text-gray-700">Ghi nhớ tôi</label>
                                        </div>
                                        <a href="/forgot-password" className="text-sm text-accent hover:underline">Bạn quên mật khẩu?</a>
                                    </div>
                                </div>

                                <button type="submit"
                                    className="w-full py-3 bg-[#ebbd5b] text-white font-medium cursor-pointer hover:bg-[#e6b67bce] transition delay-10 mb-6">
                                    Đăng nhập
                                </button>

                                <div className="flex items-center justify-center mb-6">
                                    <div className="border-t border-gray-200 w-full"></div>
                                    <span className="px-4 text-gray-500 text-xl">Hoặc</span>
                                    <div className="border-t border-gray-200 w-full"></div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <button type="button"
                                        className="flex items-center justify-center py-2 border border-gray-200 hover:bg-gray-50 transition">
                                        <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" className="w-8 h-8 mr-2" />
                                        <span>Google</span>
                                    </button>
                                    <button type="button"
                                        className="flex items-center justify-center py-2 border border-gray-200 hover:bg-gray-50 transition">
                                        <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-512.png" alt="" className="w-6 h-6 mr-2" />
                                        <span>Facebook</span>
                                    </button>
                                </div>

                                <p className="text-center text-gray-500">
                                    Bạn mới biết đến LUXE? <Link href="/sign-up" className="text-[#ebbd5b] hover:underline">Tạo tài khoản mới</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
