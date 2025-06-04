import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import RelatedProductCart from "./RelatedProductCart";

export default function Cart() {
    return (
        <div>
            <section className="pt-30 pb-20">
                <div className="container mx-auto px-6">
                    <div className="mb-8 flex items-center">
                        <h1 className="text-2xl font-bold text-[#ebbd5b]">LUXE</h1>

                        <div className="w-px h-8 bg-[#ebbd5b] mx-2"></div> {/* Gạch dọc */}

                        <h1 className="text-[#ebbd5b] text-xl">GIỎ HÀNG</h1>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-2/3">
                            {/* <div className="border border-gray-200 bg-white overflow-hidden">
                                <div className="bg-secondary px-6 py-4 border-b border-gray-200 hidden md:grid grid-cols-16 gap-4">
                                    <div className="col-span-5 font-medium">Sản phẩm</div>
                                    <div className="col-span-2 font-medium text-center">Giá</div>
                                    <div className="col-span-2 font-medium text-center">Số lượng</div>
                                    <div className="col-span-2 font-medium text-center">Số tiền</div>
                                    <div className="col-span-2 font-medium text-center">Xóa</div>
                                    <div className="col-span-1"></div>
                                </div>

                                <div
                                    className="cart-item px-6 py-4 border-b border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                                    <div className="col-span-5 flex items-center">
                                        <div className="w-24 h-24 rounded overflow-hidden mr-4">
                                            <img src="https://assets.christiandior.com/is/image/diorprod/KCO016LABS03W_E03?$default_GHC$&crop=384,732,1232,799&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85"
                                                alt="Silk Evening Gown" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium line-clamp-2 w-40">Silk Evening Gown</h3>
                                            <p className="text-gray-500 text-sm">Valentino</p>
                                            <p className="text-gray-500 text-sm">Color: Black | Size: M</p>
                                        </div>
                                    </div>
                                    <div className="col-span-2 text-center">
                                        <span className="text-primary">$2,450</span>
                                        <span className="text-gray-400 line-through ml-1">$2,950</span>
                                    </div>
                                    <div className="col-span-2 flex justify-center">
                                        <div className="flex items-center">
                                            <button className="cursor-pointer border border-gray-200 w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition">
                                                +
                                            </button>
                                            <span className="border border-gray-200 w-10 h-10 flex">
                                                <span className="m-auto">1</span>
                                            </span>
                                            <button className="cursor-pointer border border-gray-200 w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition">
                                                -
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-span-2 text-center font-medium">
                                        $2,450
                                    </div>
                                    <div className="col-span-1 flex justify-end">
                                        <button className="text-gray-400 hover:text-primary transition">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div> */}
                            <table className="w-full border border-gray-200 bg-white overflow-hidden">
                                <th className="grid grid-cols-6 gap-4 border-b-1 border-[#f8f8f8] px-4 py-2">
                                    <tr className="font-semibold text-left col-span-2">
                                        Sản phẩm
                                    </tr>
                                    <tr className="font-semibold col-span-1">
                                        Đơn giá
                                    </tr>
                                    <tr className="font-semibold col-span-1">
                                        Số lượng
                                    </tr>
                                    <tr className="font-semibold col-span-1">
                                        Giá mua
                                    </tr>
                                    <tr className="font-semibold col-span-1">
                                        Xóa
                                    </tr>
                                </th>

                                <tbody className="grid grid-cols-6 gap-4 px-4 py-2 justify-items-center items-center">
                                    <td className="flex items-center col-span-2">
                                        <img className="w-17 h-17 rounded object-cover" src="https://assets.christiandior.com/is/image/diorprod/583C201A1000C980_E01?$default_GHC$&crop=468,150,1065,1350&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85" alt="" />
                                        <div className="ml-2">
                                            <div className="line-clamp-2">Áo vest nam lịch lãm lắm nè mọi người ơi mua đi cho đẹp</div>
                                            <div className="text-sm text-gray-500">Dior</div>
                                        </div>
                                    </td>
                                    <td className="text-center col-span-1">
                                        <div className="">79.000.000 ₫</div>
                                        <div className="line-through font-extralight text-xs">90.000.000 ₫</div>
                                    </td>
                                    <td className="col-span-1">
                                        <div className="flex items-center">
                                            <button className="cursor-pointer border border-gray-200 w-7 h-7 flex items-center justify-center hover:bg-gray-100 transition">
                                                +
                                            </button>
                                            <span className="border border-gray-200 w-7 h-7 flex">
                                                <span className="m-auto">1</span>
                                            </span>
                                            <button className="cursor-pointer border border-gray-200 w-7 h-7 flex items-center justify-center hover:bg-gray-100 transition">
                                                -
                                            </button>
                                        </div>
                                    </td>
                                    <td className="col-span-1">
                                        <div className="">79.000.000 ₫</div>
                                    </td>
                                    <td className="col-span-1 text-right">
                                        <MdOutlineClear className="hover:text-[#ebbd5b] cursor-pointer" />
                                    </td>
                                </tbody>

                                <tbody className="grid grid-cols-6 gap-4 px-4 py-2 justify-items-center items-center">
                                    <td className="flex items-center col-span-2">
                                        <img className="w-17 h-17 rounded object-cover" src="https://assets.christiandior.com/is/image/diorprod/583C201A1000C980_E01?$default_GHC$&crop=468,150,1065,1350&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85" alt="" />
                                        <div className="ml-2">
                                            <div className="line-clamp-2">Áo vest nam lịch lãm lắm nè mọi người ơi mua đi cho đẹp</div>
                                            <div className="text-sm text-gray-500">Dior</div>
                                        </div>
                                    </td>
                                    <td className="text-center col-span-1">
                                        <div className="">79.000.000 ₫</div>
                                        <div className="line-through font-extralight text-xs">90.000.000 ₫</div>
                                    </td>
                                    <td className="col-span-1">
                                        <div className="flex items-center">
                                            <button className="cursor-pointer border border-gray-200 w-7 h-7 flex items-center justify-center hover:bg-gray-100 transition">
                                                +
                                            </button>
                                            <span className="border border-gray-200 w-7 h-7 flex">
                                                <span className="m-auto">1</span>
                                            </span>
                                            <button className="cursor-pointer border border-gray-200 w-7 h-7 flex items-center justify-center hover:bg-gray-100 transition">
                                                -
                                            </button>
                                        </div>
                                    </td>
                                    <td className="col-span-1">
                                        <div className="">79.000.000 ₫</div>
                                    </td>
                                    <td className="col-span-1 text-right">
                                        <MdOutlineClear className="hover:text-[#ebbd5b] cursor-pointer" />
                                    </td>
                                </tbody>

                                <tbody className="grid grid-cols-6 gap-4 px-4 py-2 justify-items-center items-center">
                                    <td className="flex items-center col-span-2">
                                        <img className="w-17 h-17 rounded object-cover" src="https://assets.christiandior.com/is/image/diorprod/583C201A1000C980_E01?$default_GHC$&crop=468,150,1065,1350&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85" alt="" />
                                        <div className="ml-2">
                                            <div className="line-clamp-2">Áo vest nam lịch lãm lắm nè mọi người ơi mua đi cho đẹp</div>
                                            <div className="text-sm text-gray-500">Dior</div>
                                        </div>
                                    </td>
                                    <td className="text-center col-span-1">
                                        <div className="">79.000.000 ₫</div>
                                        <div className="line-through font-extralight text-xs">90.000.000 ₫</div>
                                    </td>
                                    <td className="col-span-1">
                                        <div className="flex items-center">
                                            <button className="cursor-pointer border border-gray-200 w-7 h-7 flex items-center justify-center hover:bg-gray-100 transition">
                                                +
                                            </button>
                                            <span className="border border-gray-200 w-7 h-7 flex">
                                                <span className="m-auto">1</span>
                                            </span>
                                            <button className="cursor-pointer border border-gray-200 w-7 h-7 flex items-center justify-center hover:bg-gray-100 transition">
                                                -
                                            </button>
                                        </div>
                                    </td>
                                    <td className="col-span-1">
                                        <div className="">79.000.000 ₫</div>
                                    </td>
                                    <td className="col-span-1 text-right">
                                        <MdOutlineClear className="hover:text-[#ebbd5b] cursor-pointer" />
                                    </td>
                                </tbody>
                            </table>

                            <div className="flex justify-between mt-6">
                                <Link href='' className="cursor-pointer hover:text-[#ebbd5b] hover:underline flex items-center">
                                    <IoIosArrowRoundBack />
                                    Tiếp tục mua sắm
                                </Link>
                                <button className="items-center cursor-pointer hover:text-[#ebbd5b] hover:underline">
                                    Xóa tất cả giỏ hàng
                                </button>
                            </div>
                        </div>

                        <div className="lg:w-1/3">
                            <div className="border border-gray-200 bg-white p-6">
                                <h3 className="text-xl font-playfair font-bold mb-6">Tóm tắt đơn hàng</h3>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Tổng tiền hàng</span>
                                        <span className="font-medium">3.000.000.000 đ</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Tổng giá giảm</span>
                                        <span className="font-medium">3.000.000.000 đ</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Tiết kiệm được</span>
                                        <span className="font-medium">3.000.000.000 đ</span>
                                    </div>
                                    <div className="flex justify-between border-t border-gray-200 pt-4">
                                        <span className="text-lg font-bold">Tổng đơn hàng</span>
                                        <span className="text-xl font-bold">0 đ</span>
                                    </div>
                                </div>

                                <Link href='/payment'
                                    className="block text-center py-2 w-full cursor-pointer bg-[#ebbd5b] text-white hover:opacity-80 transition">
                                    TIẾN HÀNH THANH TOÁN
                                </Link>
                            </div>

                            <div className="border border-gray-200  p-6 mt-6">
                                <h4 className="font-bold mb-4">Nhập mã khuyến mãi của bạn!</h4>
                                <div className="flex">
                                    <input type="text" placeholder="Enter code"
                                        className="flex-grow border border-gray-200 px-4 py-2  focus:outline-none focus:ring-accent" />
                                    <button className="bg-gray-200 text-primary px-4 py-2 hover:bg-[#c19b6a] hover:text-white transition cursor-pointer">
                                        Áp dụng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           <RelatedProductCart />
        </div>
    )
}