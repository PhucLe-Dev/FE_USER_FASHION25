"use client";
import { SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { CiCircleRemove } from "react-icons/ci";

export default function HeaderNav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div>
      {/* Nút để mở sidebar */}
      <div
        className="flex items-center cursor-pointer text-xl text-gray-900 hover:text-[#ebbd5b] transition-colors duration-300 ease-in-out"
        onClick={toggleSidebar}
      >
        <SlidersHorizontal size={17}  className='mr-2'/>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-100 bg-white text-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Nội dung sidebar */}
        <div className="p-6">
          <button
            onClick={closeSidebar}
            className="flex items-center text-base mb-8 cursor-pointer hover:text-[#ebbd5b] transition"
          >
            <CiCircleRemove className="mr-2" />
            Đóng
          </button>
          <ul className="space-y-4">
            <li className="relative group">
              <Link
                href="/"
                onClick={closeSidebar}
                className="flex justify-between text-lg hover:text-[#ebbd5b] transition-colors duration-300 w-full text-left flex items-center relative"
              >
                Trang chủ
                {/* Mũi tên xuất hiện khi hover */}
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </span>
              </Link>
              {/* Đường gạch chân chạy từ trái sang phải */}
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#ebbd5b] group-hover:w-full transition-all duration-500"></span>
            </li>
            <li className="relative group">
              <Link
                href="/products"
                onClick={closeSidebar}
                className="flex justify-between text-lg hover:text-[#ebbd5b] transition-colors duration-300 w-full text-left flex items-center relative"
              >
                Những sản phẩm của chúng tôi
                {/* Mũi tên xuất hiện khi hover */}
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </span>
              </Link>
              {/* Đường gạch chân chạy từ trái sang phải */}
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#ebbd5b] group-hover:w-full transition-all duration-500"></span>
            </li>
            <li className="relative group">
              <Link
                href="/contact"
                onClick={closeSidebar}
                className="flex justify-between text-lg hover:text-[#ebbd5b] transition-colors duration-300 w-full text-left flex items-center relative"
              >
                Liên hệ chúng tôi
                {/* Mũi tên xuất hiện khi hover */}
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </span>
              </Link>
              {/* Đường gạch chân chạy từ trái sang phải */}
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#ebbd5b] group-hover:w-full transition-all duration-500"></span>
            </li>
            <li className="relative group">
              <Link
                href="/about"
                onClick={closeSidebar}
                className="flex justify-between text-lg hover:text-[#ebbd5b] transition-colors duration-300 w-full text-left flex items-center relative"
              >
                Về chúng tôi
                {/* Mũi tên xuất hiện khi hover */}
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </span>
              </Link>
              {/* Đường gạch chân chạy từ trái sang phải */}
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#ebbd5b] group-hover:w-full transition-all duration-500"></span>
            </li>
            <hr></hr>
            <div className="text-lg">Chúng tôi có thể giúp gì cho bạn?</div>
            <p className="text-lg">+84 0865 945 907</p>
          </ul>
        </div>
      </div>

      {/* Overlay mờ khi sidebar mở */}
      {isSidebarOpen && (
        <div
          className="=fixed inset-0 z-40"
          onClick={closeSidebar}
        />
      )}
    </div>
  );
}