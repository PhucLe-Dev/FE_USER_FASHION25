export default function Profile() {
    return (
        <div className="md:w-3/4">
            <div className="bg-white shadow-sm overflow-hidden">
                <div className="border-b border-gray-100 p-6">
                    <h2 className="text-2xl font-playfair font-bold">Thông tin cá nhân</h2>
                    <p className="text-gray-500">Thay đổi thông tin cá nhân của bạn</p>
                </div>

                <div className="p-6 md:p-10">
                    <form>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Họ & tên</label>
                                <input type="text" value="Sarah"
                                    className="w-full border border-gray-200 px-4 py-3 focus:outline-none input-focus" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="text" value="sarah.johnson@example.com"
                                    className="w-full border border-gray-200 px-4 py-3 focus:outline-none input-focus" />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ cư trú</label>
                            <input type="email" value="xã Bù Nho, huyện Phú Riềng, tĩnh Bình Phước"
                                className="w-full border border-gray-200 px-4 py-3 focus:outline-none input-focus" />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                            <input type="tel" value="+84 (310) 555-0198"
                                className="w-full border border-gray-200 px-4 py-3 focus:outline-none input-focus" />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Ngày tháng năm sinh</label>
                            <input type="date" value="1985-06-15"
                                className="w-full border border-gray-200 px-4 py-3 focus:outline-none input-focus" />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Giới tính</label>
                            <div className="flex space-x-4">
                                <label className="inline-flex items-center">
                                    <input type="radio" name="gender"
                                        className="h-4 w-4 text-accent focus:ring-accent border-gray-300" />
                                    <span className="ml-2">Nữ</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" name="gender"
                                        className="h-4 w-4 text-accent focus:ring-accent border-gray-300" />
                                    <span className="ml-2">Nam</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" name="gender"
                                        className="h-4 w-4 text-accent focus:ring-accent border-gray-300" />
                                    <span className="ml-2">Khác</span>
                                </label>
                            </div>
                        </div>

                        <div className="flex justify-end space-x-4 mt-10">
                            <button type="button"
                                className="cursor-pointer px-6 py-3 border border-gray-300 font-medium hover:bg-gray-50 transition">
                                Hủy bỏ
                            </button>
                            <button type="submit"
                                className="cursor-pointer px-6 py-3 bg-[#ebbd5b] text-white font-medium hover:opacity-90 transition">
                                Lưu thay đổi
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="bg-white shadow-sm overflow-hidden mt-8">
                <div className="border-b border-gray-100 p-6">
                    <h2 className="text-2xl font-playfair font-bold">Đổi mật khẩu</h2>
                    <p className="text-gray-500">Thay đổi mật khẩu tài khoản của bạn</p>
                </div>

                <div className="p-6 md:p-10">
                    <form>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu củ</label>
                            <div className="relative">
                                <input type="password"
                                    className="w-full border border-gray-200 px-4 py-3 focus:outline-none input-focus" />
                                <button type="button"
                                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                                    <i className="far fa-eye"></i>
                                </button>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu mới</label>
                                <div className="relative">
                                    <input type="password"
                                        className="w-full border border-gray-200 px-4 py-3 focus:outline-none input-focus" />
                                    <button type="button"
                                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                                        <i className="far fa-eye"></i>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Xác nhận mật khẩu mới</label>
                                <div className="relative">
                                    <input type="password"
                                        className="w-full border border-gray-200 px-4 py-3 focus:outline-none input-focus" />
                                    <button type="button"
                                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                                        <i className="far fa-eye"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button type="submit"
                                className="cursor-pointer px-6 py-3 bg-[#ebbd5b] text-white font-medium hover:opacity-90 transition">
                                Lưu thay đổi
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}