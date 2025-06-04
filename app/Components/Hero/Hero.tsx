"use client";
import { useState, useEffect } from 'react';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';

export default function Hero() {
  // Danh sách các hình nền cho slider
  const slides = [
    'https://www.louisvuitton.com/images/is/image/lv/LV_TM_CHAPTER3_LV_RESORT_03_LVCOM_2048x1152_DI3.jpg?wid=1440',
    'https://vn.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/brand-content-coremedia/women/2025/collection/lv-style-diary-spring-edition/WOMEN_CREATORS_WORN_2_DI3.jpg?wid=1440',
    'https://www.louisvuitton.com/images/is/image/lv/Women_Campaign_LVxTM_Chapter2_Zendaya02_DI3.jpg?wid=1440',
    'https://www.louisvuitton.com/images/is/image/lv/ZENDAYA_TM_CHAPTER3_LV_RESORT_DP4_LVCOM_DI3.jpg?wid=1440',
    'https://vn.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/brand-content-coremedia/women/2025/collection/lv-style-diary-spring-edition/WOMEN_CREATORS_WORN_10_DI3.jpg?wid=1440',
  ];

  // State để theo dõi slide hiện tại
  const [currentSlide, setCurrentSlide] = useState(0);

  // Tự động chuyển slide sau mỗi 5 giây
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // 5000ms = 5 giây

    // Dọn dẹp interval khi component unmount
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  // Hàm chuyển đến slide cụ thể
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Hàm chuyển đến slide trước
  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Hàm chuyển đến slide tiếp theo
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative h-screen flex items-center pt-16 overflow-hidden">
      {/* Slider hình nền */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>

      {/* Nội dung chữ và nút */}
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
            Timeless <span className="text-[#ebbd5b]">Luxury</span>
          </h1>
          <p className="text-white text-xl mb-8 font-light tracking-wider">
            Bộ sưu tập được giám tuyển của các sản phẩm thiết kế tốt nhất
          </p>
          <button
            className="cursor-pointer bg-[#ebbd5b] text-white px-10 py-4 hover:opacity-90 transition tracking-wider font-medium uppercase"
          >
            KHÁM PHÁ NGAY
          </button>
        </div>
      </div>

      {/* Chấm điều hướng */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-[#ebbd5b]' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>

      {/* Nút điều hướng trái/phải */}
      <button
        onClick={goToPreviousSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-[#ebbd5b] bg-opacity-50 hover:bg-opacity-75 rounded-full transition"
      >
        <CiCircleChevLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-[#ebbd5b] bg-opacity-50 hover:bg-opacity-75 rounded-full transition"
      >
        <CiCircleChevRight className="w-6 h-6 text-white" />
      </button>
    </section>
  );
}