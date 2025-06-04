"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import AddressSelector from "../Components/AddressSelector";

export default function PaymentPage() {
    const [active, setActive] = useState('COD');

    const handleTabClick = (tab: string) => {
        setActive(tab);
    };

    return (
        <section className="pt-40 pb-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                        <div className="mb-8 flex items-center">
                            <h1 className="text-2xl font-bold text-[#ebbd5b]">LUXE</h1>

                            <div className="w-px h-8 bg-[#ebbd5b] mx-2"></div> {/* Gạch dọc */}

                            <h1 className="text-[#ebbd5b] text-xl">THÔNG TIN THANH TOÁN</h1>
                        </div>
                    <form action="">
                        <div className="progress-container">
                            <div className="step step-1">
                                <div className="step-circle step-1"><img src="https://www.svgrepo.com/show/83357/tablet.svg" alt="" /></div>
                                <span className="step-text">Chọn sản phẩm</span>
                            </div>
                            <div className="progress-line first"></div>
                            <div className="step step-2">
                                <div className="step-circle step-2"><img src="https://www.svgrepo.com/show/7877/payment-method.svg" alt="" /></div>
                                <span className="step-text">Thanh toán</span>
                            </div>
                            <div className="progress-line"></div>
                            <div className="step step-3">
                                <div className="step-circle"><img src="https://www.svgrepo.com/show/7009/delivery-truck.svg" alt="" /></div>
                                <span className="step-text">Đặt hàng thành công</span>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-bold mb-4">Phương thức thanh toán</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div 
                                    onClick={() => handleTabClick("COD")}
                                    className={`payment-card border uppercase font-bold p-4 cursor-pointer transition ${active === "COD"
                                    ? "bg-[#ebbd5b] text-white"
                                    : "text-gray-600"
                                    }`}
                                >
                                    <div className="flex justify-center items-center">
                                        <div className="w-12 h-8 mr-3 flex items-center justify-center">
                                            <Image src="https://www.svgrepo.com/show/233850/payment-method-pay.svg" alt="" width={60} height={60}/>
                                        </div>
                                        <span>Thanh toán COD</span>
                                    </div>
                                </div>
                                <div 
                                    onClick={() => handleTabClick("VNPay")}
                                    className={`payment-card border uppercase font-bold p-4 cursor-pointer transition ${active === "VNPay"
                                    ? "bg-[#ebbd5b] text-white"
                                    : "text-gray-600"
                                    }`}
                                >
                                    <div className="flex justify-center items-center">
                                        <div className="w-12 h-8 mr-3 flex items-center justify-center">
                                            <Image src="https://www.svgrepo.com/show/227998/payment-method.svg" alt="" width={60} height={60}/>
                                        </div>
                                        <span>Thanh toán ví điện tử</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div id="credit-card-form" className="border p-6 mb-8">
                            <h3 className="text-lg font-bold mb-6">Thông tin thẻ tín dụng</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Số thẻ</label>
                                    <input type="text" placeholder="1234 5678 9012 3456"
                                        className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-1 focus:border-[#ebbd5b]" />
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Ngày hết hạn</label>
                                        <input type="text" placeholder="MM/YY"
                                            className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-1 focus:border-[#ebbd5b]" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Mã bảo mật</label>
                                        <input type="text" placeholder="CVC"
                                            className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-1 focus:border-[#ebbd5b]" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Tên trên thẻ</label>
                                    <input type="text" placeholder="LÊ NGUYỄN HOÀI PHÚC"
                                        className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-1 focus:border-[#ebbd5b]" />
                                </div>
                            </div>
                        </div> */}

                        <div className="border p-6">
                            <h3 className="text-lg font-bold mb-6">Thông tin người nhận</h3>
                            <div className="space-y-4">
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="same-as-shipping" className="mr-2" />
                                    <label>Thông tin đã lưu</label>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                                        <input type="text"
                                            className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-1 focus:border-[#ebbd5b]" 
                                            placeholder="Trần Văn A"/>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                                        <input type="text"
                                            className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-1 focus:border-[#ebbd5b]" 
                                            placeholder="(+84) 0123456789"/>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email người nhận</label>
                                    <input type="text"
                                        className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-1 focus:border-[#ebbd5b]" 
                                        placeholder="abc@gmail.com"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ</label>
                                    <AddressSelector />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ cụ thể cho tài xế</label>
                                    <input type="text"
                                        className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-1 focus:border-[#ebbd5b]" 
                                        placeholder="Số đường, số nhà, hẻm..."/>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between mt-8">
                            <Link href="/cart" className="text-primary hover:text-[#ebbd5b] transition flex items-center">
                                <IoIosArrowRoundBack />
                                Trở lại giỏ hàng
                            </Link>
                            <button
                                className="bg-[#ebbd5b] cursor-pointer text-white px-8 py-3 hover:opacity-80 transition uppercase font-medium tracking-wider">
                                XÁC NHẬN THANH TOÁN
                            </button>
                        </div>
                    </form>

                    </div>

                    <div className="lg:w-1/3">
                        <div className="border border-gray-200 p-6 sticky top-32">
                            <h3 className="text-xl font-playfair font-bold mb-6">Tóm tắt đơn hàng</h3>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Tổng tiền hàng</span>
                                    <span className="font-medium">4.600.000 đ</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Tổng giá giảm</span>
                                    <span className="font-medium">400.000 đ</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Tiết kiệm được</span>
                                    <span className="font-medium text-[#ebbd5b]">400.000 đ</span>
                                </div>
                                <div className="flex justify-between border-t border-gray-200 pt-4">
                                    <span className="text-lg font-bold">Tổng hóa đơn</span>
                                    <span className="text-xl font-bold">103.000.000 đ</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h4 className="font-bold mb-4">Sản phẩm</h4>
                                <div className="space-y-4">
                                    <div className="flex">
                                        <div className="w-16 h-16 overflow-hidden mr-4">
                                            <img src="https://assets.christiandior.com/is/image/diorprod/521V67A1758X9000_E01-1?$default_GHC$&crop=425,150,1150,1353&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85"
                                                alt="Silk Evening Gown" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-medium line-clamp-1">Silk Evening Gown Silk Evening Gown Silk Evening Gown</h5>
                                            <p className="text-gray-500 text-sm">Valentino</p>
                                            <p className="text-gray-500 text-sm">số lượng: 1</p>
                                        </div>
                                        <div className="font-medium">3.000.000.000 đ</div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-16 h-16 overflow-hidden mr-4">
                                            <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1587&amp;q=80"
                                                alt="Satin Maxi Dress" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-medium">Satin Maxi Dress</h5>
                                            <p className="text-gray-500 text-sm">Gucci</p>
                                            <p className="text-gray-500 text-sm">số lượng: 1</p>
                                        </div>
                                        <div className="font-medium">300.000.000 đ</div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-16 h-16 overflow-hidden mr-4">
                                            <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1587&amp;q=80"
                                                alt="Pearl Drop Earrings" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-medium">Pearl Drop Earrings</h5>
                                            <p className="text-gray-500 text-sm">Tiffany &amp; Co.</p>
                                            <p className="text-gray-500 text-sm">số lượng: 1</p>
                                        </div>
                                        <div className="font-medium">30.000.000 đ</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}