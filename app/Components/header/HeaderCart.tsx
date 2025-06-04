"use client";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { useState, useRef } from "react";

export default function HeaderCart() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Giả lập trạng thái giỏ hàng rỗng (true = không có hàng)
  const isCartEmpty = true;

  const handleFocus = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleBlur = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <div
      className="relative flex items-center"
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {/* Biểu tượng giỏ hàng */}
      <button
        className="cursor-pointer flex items-center text-2xl text-gray-900 hover:text-[#ebbd5b] transition-colors duration-300 ease-in-out"
      >
        <CiShoppingCart />
      </button>

      {/* Dropdown khi giỏ hàng có sản phẩm */}
      {!isCartEmpty && (
        <div
          className={`absolute top-8 right-0 w-80 bg-white shadow-md transition-all duration-300 ease-in-out z-10 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
          <div className="p-4">
            <h3 className="text-gray-900 font-medium mb-2">Giỏ hàng</h3>
            <div className="max-h-56 overflow-y-auto">
              <div className="flex items-center gap-3 py-2 border-b">
                <div className="w-12 h-12 bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 line-clamp-2">
                    Áo sơ mi trắng tinh lung linh nhất văn phòng luôn nè mọi người ơi húhus
                  </p>
                  <p className="text-xs text-gray-600">1 x 22.990.000đ</p>
                </div>
                <button className="cursor-pointer text-gray-600 hover:text-red-500">X</button>
              </div>
              {/* Thêm sản phẩm khác nếu cần */}
            </div>
            <div className="sticky bottom-0 bg-white pt-3 mt-3">
              <p className="text-sm text-gray-900">
                Tổng: <span className="font-medium">31.480.000đ</span>
              </p>
              <Link
                href="/cart"
                className="block mt-2 px-4 py-2 bg-[#ebbd5b] text-white text-center hover:bg-[#a38156] transition-colors duration-200"
              >
                Xem giỏ hàng
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Dropdown khi giỏ hàng rỗng */}
      {isCartEmpty && (
        <div
          className={`absolute top-8 right-0 w-72 bg-white shadow-md transition-all duration-300 ease-in-out z-10 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
          <div className="p-4 text-center">
            <div>
              <img src="/empty_cart.png" alt="Giỏ hàng rỗng" />
            </div>
            <p className="text-gray-900">Giỏ hàng của bạn đang rỗng</p>
          </div>
          <Link
                href="/cart"
                className="block mt-2 px-4 py-2 bg-[#ebbd5b] text-white text-center hover:bg-[#a38156] transition-colors duration-200"
              >
                Xem giỏ hàng
              </Link>
        </div>
      )}
    </div>
  );
}
