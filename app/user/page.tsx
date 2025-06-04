"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CiLogout, CiTrash, CiUser } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { IoMdArrowBack } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { ImUpload2 } from "react-icons/im";
import Order from "./order";
import Profile from "./profile";
import ShippingAddress from "./shipping_address";

export default function UserPage() {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState("profile");

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setShowMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <section className="pt-35 pb-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* SIDEBAR */}
                    <div className="md:w-1/4">
                        <div className="bg-white shadow-sm p-6 sticky top-32">
                            <div className="flex items-center space-x-4 mb-8" ref={menuRef}>
                                <div
                                    className="relative flex items-center justify-center cursor-pointer"
                                    onClick={() => setShowMenu((prev) => !prev)}
                                >
                                    <img
                                        src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/3/19/1025162/-12-04.jpg"
                                        alt="Avatar"
                                        className="object-cover rounded-full w-16 h-16 transition-transform duration-200 hover:scale-105"
                                    />
                                    {showMenu && (
                                        <ul className="absolute top-20 w-36 bg-white flex flex-col shadow-lg text-sm text-gray-800 z-10 animate-fade-in">
                                            <li className="px-4 py-2 hover:bg-gray-100 transition duration-200 cursor-pointer">
                                                <Link href="#" className="flex item-center hover:text-[#ebbd5b]"><ImUpload2 className="mr-2 text-lg" /> Tải ảnh lên</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-100 transition duration-200 cursor-pointer">
                                                <Link href="#" className="flex item-center hover:text-[#ebbd5b]"><CiTrash className="mr-2 text-lg" /> Xóa ảnh</Link>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-bold">Jisoo Kim</h3>
                                    <p className="text-sm text-gray-500 flex items-center">
                                        <IoMdArrowBack /> <span>Click để thay đổi</span>
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => handleTabClick("profile")}
                                className={`flex items-center py-3 px-4 w-full font-medium transition ${activeTab === "profile"
                                    ? "text-[#ebbd5b] bg-gray-50"
                                    : "text-gray-600 hover:text-[#ebbd5b] hover:bg-gray-50"
                                    }`}
                            >
                                <CiUser className="mr-3 text-xl" />
                                <span>Thông tin cá nhân</span>
                            </button>

                            <button
                                onClick={() => handleTabClick("orders")}
                                className={`flex items-center py-3 px-4 w-full font-medium transition ${activeTab === "orders"
                                    ? "text-[#ebbd5b] bg-gray-50-md"
                                    : "text-gray-600 hover:text-[#ebbd5b] hover:bg-gray-50"
                                    }`}
                            >
                                <IoBagOutline className="mr-3 text-xl" />
                                <span>Đơn hàng của bạn</span>
                            </button>

                            <button
                                onClick={() => handleTabClick("address")}
                                className={`flex items-center py-3 px-4 w-full font-medium transition ${activeTab === "address"
                                    ? "text-[#ebbd5b] bg-gray-50-md"
                                    : "text-gray-600 hover:text-[#ebbd5b] hover:bg-gray-50"
                                    }`}
                            >
                                <FiMapPin className="mr-3 text-xl" />
                                <span>Địa chỉ nhận hàng</span>
                            </button>

                            <button
                                onClick={() => handleTabClick("logout")}
                                className={`flex items-center py-3 px-4 w-full font-medium transition ${activeTab === "logout"
                                    ? "text-[#ebbd5b] bg-gray-50-md"
                                    : "text-gray-600 hover:text-[#ebbd5b] hover:bg-gray-50"
                                    }`}
                            >
                                <CiLogout className="mr-3 text-xl" />
                                <span>Đăng xuất</span>
                            </button>
                        </div>
                    </div>

                    {/* CONTENT AREA */}
                    {activeTab === "profile" && <Profile />}
                    {activeTab === "orders" && <Order />}
                    {activeTab === "address" && <ShippingAddress />}
                </div>
            </div>
        </section>
    );
}
