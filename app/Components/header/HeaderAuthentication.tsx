"use client";
import Link from "next/link";
import { CiLogin, CiLogout, CiUser } from "react-icons/ci";
import { useState, useRef } from "react";
import Image from "next/image";

export default function HeaderAuthenticaton() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleFocus = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleBlur = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // delay nhỏ để không bị mất focus khi click vào link bên trong dropdown
  };

  // Giả sử kiểm tra xem người dùng đã đăng nhập hay chưa
  const isLoggedIn = false; // Thay đổi thành true nếu người dùng đã đăng nhập

  return (
    <div
      className="relative flex items-center"
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {/* Trường hợp đã đăng nhập: Avatar và tên user */}
      {isLoggedIn ? (
        <div className="relative flex items-center group">
          <Link
            href="#"
            className="flex items-center gap-2 text-gray-900 hover:text-[#ebbd5b] transition-colors duration-300 ease-in-out"
          >
            <span className="text-base">Jisoo Kim</span>
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#ebbd5b] bg-gray-200">
              <Image
                src="https://res.cloudinary.com/dohwmkapy/image/upload/v1748069249/jisoo_qjkckx.jpg"
                alt=""
                fill
                className="object-cover object-center"
              />
            </div>
          </Link>

          {/* Dropdown cho trường hợp đã đăng nhập */}
          <div
            className={`absolute top-10 right-0 w-40 bg-white shadow-md transition-all duration-300 ease-in-out z-10 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
          >
            <Link
              href="/user"
              className="flex items-center justify-between px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              Trang cá nhân
              <CiUser />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              Đăng xuất
              <CiLogout />
            </Link>
          </div>
        </div>
      ) : (
        // Trường hợp chưa đăng nhập
        <div className="relative flex items-center group">
          <p
            className="flex items-center cursor-pointer text-xl text-gray-900 hover:text-[#ebbd5b] transition-colors duration-300 ease-in-out"
          >
            <CiUser className="ml-2" />
          </p>
          <div
            className={`absolute top-8 right-0 w-36 bg-white shadow-md transition-all duration-300 ease-in-out z-10 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
          >
            <Link
              href="/sign-in"
              className="block flex items-center justify-between px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              Đăng nhập
              <CiLogin />
            </Link>
            <Link
              href="/sign-up"
              className="block flex items-center justify-between px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              Đăng ký
              <CiLogin />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
