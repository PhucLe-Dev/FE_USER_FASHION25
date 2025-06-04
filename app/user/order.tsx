import Link from "next/link";
import { CiDeliveryTruck, CiSearch } from "react-icons/ci";

export default function Order() {
    return (
        <div className="md:w-3/4">
            <div className="flex justify-between px-2 py-4 item-center bg-white shadow-sm overflow-hidden">
                <div className="cursor-pointer border-b-2 border-[#ebbd5b] text-[#ebbd5b]">Tất cả</div>
                <div className="cursor-pointer hover:text-[#ebbd5b]">Chờ xác nhận</div>
                <div className="cursor-pointer hover:text-[#ebbd5b]">Đã xác nhận</div>
                <div className="cursor-pointer hover:text-[#ebbd5b]">Đang chuẩn bị hàng</div>
                <div className="cursor-pointer hover:text-[#ebbd5b]">Đang giao</div>
                <div className="cursor-pointer hover:text-[#ebbd5b]">Đã giao</div>
                <div className="cursor-pointer hover:text-[#ebbd5b]">Đã hủy</div>
                <div className="cursor-pointer hover:text-[#ebbd5b]">Trả hàng & Hoàn tiền</div>
            </div>

            <div className="mt-4 bg-[#eaeaea] relative">
                <CiSearch className="absolute top-[8px] right-[4px] text-[#ebbd5b] text-xl"/>
                <input
                    type="text"
                    placeholder="Bạn có thể tìm kiếm theo ID đơn hàng"
                    className="w-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#ebbd5b]"
                />
            </div>

            <div className="bg-white mt-6 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-[#dfdfdf]">
                    <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                        <span className="">Order #LUXE-2025-001</span>
                        <span>15 tháng 1 năm 2025</span>
                        <button className="cursor-pointer text-[#ebbd5b] text-xs border px-2 py-1 border-[#ebbd5b] hover:bg-[#ebbd5b] hover:text-white transition">Bình luận</button>
                    </div>
                    <div className="text-sm text-gray-700 font-medium">
                        <span className="text-[#ebbd5b] uppercase flex items-center"> <span>Đang chuẩn bị hàng</span> <CiDeliveryTruck className="text-[#ebbd5b] text-xl ml-2"/></span>
                    </div>
                </div>

                <div className="flex items-center p-4 border-b border-[#dfdfdf]">
                    <img src="https://assets.christiandior.com/is/image/diorprod/211P07A1166X0200_E01?$default_GHC$&crop=728,150,542,1472&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85" className="w-16 h-16 object-cover" />
                    <div className="ml-4 flex-1 text-sm">
                        <div className="text-gray-800 leading-snug line-clamp-2">
                            Tai nghe có dây Newmsnr giao diện type-c Tai nghe nhét tai Tai nghe chơi game Tai nghe chất lượng âm thanh
                        </div>
                        <div className="text-gray-500 mt-1">Dior</div>
                        <div className="text-gray-500">x1</div>
                    </div>
                    <div className="text-right text-sm text-gray-700 whitespace-nowrap">
                        <div className="line-through text-gray-400 text-xs">₫85.000</div>
                        <div className="text-[#ebbd5b] font-medium">₫45.000</div>
                    </div>
                </div>

                <div className="flex items-center justify-between px-4 py-3">
                    <div></div>
                    <div className="text-sm text-gray-700">
                        Thành tiền: <span className="text-[#ebbd5b] text-lg font-semibold ml-1">₫45.000</span>
                    </div>
                </div>

                <div className="flex justify-end space-x-2 px-4 pb-4">
                    <button className="cursor-pointer px-4 py-1 border border-gray-300 text-sm hover:bg-gray-100 transition">Liên hệ cửa hàng</button>
                    <Link href='' className="cursor-pointer px-4 py-1 border border-gray-300 text-sm hover:bg-[#fff3ed] hover:border-[#ebbd5b] transition">Xem thông tin đơn hàng</Link>
                    <button className="cursor-pointer px-4 py-1 bg-white text-[#ebbd5b] border border-[#ebbd5b] text-sm hover:bg-[#fff3ed] transition">Mua lại</button>
                </div>
            </div>

            <div className="bg-white mt-6 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-[#dfdfdf]">
                    <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                        <span className="">Order #LUXE-2025-001</span>
                        <span>15 tháng 1 năm 2025</span>
                        <button className="cursor-pointer text-[#ebbd5b] text-xs border px-2 py-1 border-[#ebbd5b] hover:bg-[#ebbd5b] hover:text-white transition">Bình luận</button>
                    </div>
                    <div className="text-sm text-gray-700 font-medium">
                        <span className="text-[#ebbd5b] uppercase flex items-center"> <span>Đã giao</span> <CiDeliveryTruck className="text-[#ebbd5b] text-xl ml-2"/></span>
                    </div>
                </div>

                <div className="flex items-center p-4 border-b border-[#dfdfdf]">
                    <img src="https://assets.christiandior.com/is/image/diorprod/211P07A1166X0200_E01?$default_GHC$&crop=728,150,542,1472&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85" className="w-16 h-16 object-cover" />
                    <div className="ml-4 flex-1 text-sm">
                        <div className="text-gray-800 leading-snug line-clamp-2">
                            Tai nghe có dây Newmsnr giao diện type-c Tai nghe nhét tai Tai nghe chơi game Tai nghe chất lượng âm thanh
                        </div>
                        <div className="text-gray-500 mt-1">Dior</div>
                        <div className="text-gray-500">x1</div>
                    </div>
                    <div className="text-right text-sm text-gray-700 whitespace-nowrap">
                        <div className="line-through text-gray-400 text-xs">₫85.000</div>
                        <div className="text-[#ebbd5b] font-medium">₫45.000</div>
                    </div>
                </div>

                <div className="flex items-center justify-between px-4 py-3">
                    <div></div>
                    <div className="text-sm text-gray-700">
                        Thành tiền: <span className="text-[#ebbd5b] text-lg font-semibold ml-1">₫45.000</span>
                    </div>
                </div>

                <div className="flex justify-end space-x-2 px-4 pb-4">
                    <button className="cursor-pointer px-4 py-1 border border-gray-300 text-sm hover:bg-gray-100 transition">Liên hệ cửa hàng</button>
                    <Link href='' className="cursor-pointer px-4 py-1 border border-gray-300 text-sm hover:bg-[#fff3ed] hover:border-[#ebbd5b] transition">Xem thông tin đơn hàng</Link>
                    <button className="cursor-pointer px-4 py-1 bg-white text-[#ebbd5b] border border-[#ebbd5b] text-sm hover:bg-[#fff3ed] transition">Mua lại</button>
                </div>
            </div>

            <div className="bg-white mt-6 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-[#dfdfdf]">
                    <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                        <span className="">Order #LUXE-2025-001</span>
                        <span>15 tháng 1 năm 2025</span>
                        <button className="cursor-pointer text-[#ebbd5b] text-xs border px-2 py-1 border-[#ebbd5b] hover:bg-[#ebbd5b] hover:text-white transition">Bình luận</button>
                    </div>
                    <div className="text-sm text-gray-700 font-medium">
                        <span className="text-[#ebbd5b] uppercase flex items-center"> <span>Chờ xác nhận</span> <CiDeliveryTruck className="text-[#ebbd5b] text-xl ml-2"/></span>
                    </div>
                </div>

                <div className="flex items-center p-4 border-b border-[#dfdfdf]">
                    <img src="https://assets.christiandior.com/is/image/diorprod/211P07A1166X0200_E01?$default_GHC$&crop=728,150,542,1472&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85" className="w-16 h-16 object-cover" />
                    <div className="ml-4 flex-1 text-sm">
                        <div className="text-gray-800 leading-snug line-clamp-2">
                            Tai nghe có dây Newmsnr giao diện type-c Tai nghe nhét tai Tai nghe chơi game Tai nghe chất lượng âm thanh
                        </div>
                        <div className="text-gray-500 mt-1">Dior</div>
                        <div className="text-gray-500">x1</div>
                    </div>
                    <div className="text-right text-sm text-gray-700 whitespace-nowrap">
                        <div className="line-through text-gray-400 text-xs">₫85.000</div>
                        <div className="text-[#ebbd5b] font-medium">₫45.000</div>
                    </div>
                </div>

                <div className="flex items-center justify-between px-4 py-3">
                    <div></div>
                    <div className="text-sm text-gray-700">
                        Thành tiền: <span className="text-[#ebbd5b] text-lg font-semibold ml-1">₫45.000</span>
                    </div>
                </div>

                <div className="flex justify-end space-x-2 px-4 pb-4">
                    <button className="cursor-pointer px-4 py-1 border border-gray-300 text-sm hover:bg-gray-100 transition">Liên hệ cửa hàng</button>
                    <Link href='' className="cursor-pointer px-4 py-1 border border-gray-300 text-sm hover:bg-[#fff3ed] hover:border-[#ebbd5b] transition">Xem thông tin đơn hàng</Link>
                    <button className="cursor-pointer px-4 py-1 bg-white text-[#ebbd5b] border border-[#ebbd5b] text-sm hover:bg-[#fff3ed] transition">Mua lại</button>
                </div>
            </div>

            <div className="bg-white mt-6 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-[#dfdfdf]">
                    <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                        <span className="">Order #LUXE-2025-001</span>
                        <span>15 tháng 1 năm 2025</span>
                        <button className="cursor-pointer text-[#ebbd5b] text-xs border px-2 py-1 border-[#ebbd5b] hover:bg-[#ebbd5b] hover:text-white transition">Bình luận</button>
                    </div>
                    <div className="text-sm text-gray-700 font-medium">
                        <span className="text-[#ebbd5b] uppercase flex items-center"> <span>Đang giao</span> <CiDeliveryTruck className="text-[#ebbd5b] text-xl ml-2"/></span>
                    </div>
                </div>

                <div className="flex items-center p-4 border-b border-[#dfdfdf]">
                    <img src="https://assets.christiandior.com/is/image/diorprod/211P07A1166X0200_E01?$default_GHC$&crop=728,150,542,1472&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85" className="w-16 h-16 object-cover" />
                    <div className="ml-4 flex-1 text-sm">
                        <div className="text-gray-800 leading-snug line-clamp-2">
                            Tai nghe có dây Newmsnr giao diện type-c Tai nghe nhét tai Tai nghe chơi game Tai nghe chất lượng âm thanh
                        </div>
                        <div className="text-gray-500 mt-1">Dior</div>
                        <div className="text-gray-500">x1</div>
                    </div>
                    <div className="text-right text-sm text-gray-700 whitespace-nowrap">
                        <div className="line-through text-gray-400 text-xs">₫85.000</div>
                        <div className="text-[#ebbd5b] font-medium">₫45.000</div>
                    </div>
                </div>

                <div className="flex items-center justify-between px-4 py-3">
                    <div></div>
                    <div className="text-sm text-gray-700">
                        Thành tiền: <span className="text-[#ebbd5b] text-lg font-semibold ml-1">₫45.000</span>
                    </div>
                </div>

                <div className="flex justify-end space-x-2 px-4 pb-4">
                    <button className="cursor-pointer px-4 py-1 border border-gray-300 text-sm hover:bg-gray-100 transition">Liên hệ cửa hàng</button>
                    <Link href='' className="cursor-pointer px-4 py-1 border border-gray-300 text-sm hover:bg-[#fff3ed] hover:border-[#ebbd5b] transition">Xem thông tin đơn hàng</Link>
                    <button className="cursor-pointer px-4 py-1 bg-white text-[#ebbd5b] border border-[#ebbd5b] text-sm hover:bg-[#fff3ed] transition">Mua lại</button>
                </div>
            </div>

            <div className="bg-white mt-6 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-[#dfdfdf]">
                    <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                        <span className="">Order #LUXE-2025-001</span>
                        <span>15 tháng 1 năm 2025</span>
                        <button className="cursor-pointer text-[#ebbd5b] text-xs border px-2 py-1 border-[#ebbd5b] hover:bg-[#ebbd5b] hover:text-white transition">Bình luận</button>
                    </div>
                    <div className="text-sm text-gray-700 font-medium">
                        <span className="text-[#ebbd5b] uppercase flex items-center"> <span>Đã hủy</span> <CiDeliveryTruck className="text-[#ebbd5b] text-xl ml-2"/></span>
                    </div>
                </div>

                <div className="flex items-center p-4 border-b border-[#dfdfdf]">
                    <img src="https://assets.christiandior.com/is/image/diorprod/211P07A1166X0200_E01?$default_GHC$&crop=728,150,542,1472&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85" className="w-16 h-16 object-cover" />
                    <div className="ml-4 flex-1 text-sm">
                        <div className="text-gray-800 leading-snug line-clamp-2">
                            Tai nghe có dây Newmsnr giao diện type-c Tai nghe nhét tai Tai nghe chơi game Tai nghe chất lượng âm thanh
                        </div>
                        <div className="text-gray-500 mt-1">Dior</div>
                        <div className="text-gray-500">x1</div>
                    </div>
                    <div className="text-right text-sm text-gray-700 whitespace-nowrap">
                        <div className="line-through text-gray-400 text-xs">₫85.000</div>
                        <div className="text-[#ebbd5b] font-medium">₫45.000</div>
                    </div>
                </div>

                <div className="flex items-center justify-between px-4 py-3">
                    <div></div>
                    <div className="text-sm text-gray-700">
                        Thành tiền: <span className="text-[#ebbd5b] text-lg font-semibold ml-1">₫45.000</span>
                    </div>
                </div>

                <div className="flex justify-end space-x-2 px-4 pb-4">
                    <button className="cursor-pointer px-4 py-1 border border-gray-300 text-sm hover:bg-gray-100 transition">Liên hệ cửa hàng</button>
                    <Link href='' className="cursor-pointer px-4 py-1 border border-gray-300 text-sm hover:bg-[#fff3ed] hover:border-[#ebbd5b] transition">Xem thông tin đơn hàng</Link>
                    <button className="cursor-pointer px-4 py-1 bg-white text-[#ebbd5b] border border-[#ebbd5b] text-sm hover:bg-[#fff3ed] transition">Mua lại</button>
                </div>
            </div>

            <div className="bg-white mt-6 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-[#dfdfdf]">
                    <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                        <span className="">Order #LUXE-2025-001</span>
                        <span>15 tháng 1 năm 2025</span>
                        <button className="cursor-pointer text-[#ebbd5b] text-xs border px-2 py-1 border-[#ebbd5b] hover:bg-[#ebbd5b] hover:text-white transition">Bình luận</button>
                    </div>
                    <div className="text-sm text-gray-700 font-medium">
                        <span className="text-[#ebbd5b] uppercase flex items-center"> <span>Trả hàng & hoàn tiền</span> <CiDeliveryTruck className="text-[#ebbd5b] text-xl ml-2"/></span>
                    </div>
                </div>

                <div className="flex items-center p-4 border-b border-[#dfdfdf]">
                    <img src="https://assets.christiandior.com/is/image/diorprod/211P07A1166X0200_E01?$default_GHC$&crop=728,150,542,1472&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85" className="w-16 h-16 object-cover" />
                    <div className="ml-4 flex-1 text-sm">
                        <div className="text-gray-800 leading-snug line-clamp-2">
                            Tai nghe có dây Newmsnr giao diện type-c Tai nghe nhét tai Tai nghe chơi game Tai nghe chất lượng âm thanh
                        </div>
                        <div className="text-gray-500 mt-1">Dior</div>
                        <div className="text-gray-500">x1</div>
                    </div>
                    <div className="text-right text-sm text-gray-700 whitespace-nowrap">
                        <div className="line-through text-gray-400 text-xs">₫85.000</div>
                        <div className="text-[#ebbd5b] font-medium">₫45.000</div>
                    </div>
                </div>

                <div className="flex items-center justify-between px-4 py-3">
                    <div></div>
                    <div className="text-sm text-gray-700">
                        Thành tiền: <span className="text-[#ebbd5b] text-lg font-semibold ml-1">₫45.000</span>
                    </div>
                </div>

                <div className="flex justify-end space-x-2 px-4 pb-4">
                    <button className="cursor-pointer px-4 py-1 border border-gray-300 text-sm hover:bg-gray-100 transition">Liên hệ cửa hàng</button>
                    <Link href='' className="cursor-pointer px-4 py-1 border border-gray-300 text-sm hover:bg-[#fff3ed] hover:border-[#ebbd5b] transition">Xem thông tin đơn hàng</Link>
                    <button className="cursor-pointer px-4 py-1 bg-white text-[#ebbd5b] border border-[#ebbd5b] text-sm hover:bg-[#fff3ed] transition">Mua lại</button>
                </div>
            </div>

        </div>
    )
}