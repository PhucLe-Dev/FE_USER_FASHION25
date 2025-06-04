"use client";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

export default function HeaderSearch() {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const suggestions = [
    "Sản phẩm mới",
    "Khuyến mãi",
    "Điện thoại",
    "Laptop",
    "Phụ kiện",
  ];

  const handleIconClick = () => {
    setIsInputVisible(true);
  };

  const handleInputBlur = () => {
    setIsInputVisible(false);
    setSearchValue("");
  };

  return (
    <div className="relative flex items-center">
      <Link
        href="#"
        onClick={handleIconClick}
        className="text-xl text-gray-900 hover:text-[#ebbd5b] transition-colors duration-300 ease-in-out"
      >
        <CiSearch />
      </Link>

      {/* Input đè lên, không chiếm chỗ */}
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onBlur={handleInputBlur}
        onFocus={() => setIsInputVisible(true)}
        placeholder="Tìm kiếm..."
        className={`absolute left-6 top-[-7] z-1 ${
          isInputVisible ? "w-70 opacity-100" : "w-0 opacity-0"
        } px-3 py-1.5 bg-gray-100 text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#ebbd5b] transition-all duration-300 ease-in-out`}
      />

      {isInputVisible && searchValue && (
        <ul className="absolute top-10 left-6 w-70 bg-white shadow-md z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-3 py-1.5 text-gray-900 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
