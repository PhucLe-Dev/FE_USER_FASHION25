"use client";
import Link from "next/link";
import RelatedProduct from "../RelatedProduct";
import Comment from "../Comment";
import { CiDeliveryTruck, CiShoppingCart } from "react-icons/ci";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { ISanPham, IVariant } from "@/app/interface/ISanPham";

// Định nghĩa props cho Detail
interface DetailProps {
  initialProduct: ISanPham | null;
}

export default function Detail({ initialProduct }: DetailProps) {
  const [activeTab, setActiveTab] = useState<"description" | "details">("description");
  const [isLoading, setIsLoading] = useState<boolean>(!initialProduct); // Nếu có initialProduct thì không cần loading ban đầu
  const [error, setError] = useState<string | null>(null);
  const [sp, setSp] = useState<ISanPham | null>(initialProduct);
  const [images, setImages] = useState<string[]>([]);

  const handleTabClick = (tab: "description" | "details") => setActiveTab(tab);

  const scrollToComment = () => document.getElementById("comment-section")?.scrollIntoView({ behavior: "smooth" });
  const scrollDescripton = () => document.getElementById("description-section")?.scrollIntoView({ behavior: "smooth" });

  const params = useParams();
  const sku = params?.sku as string;
  console.log("SKU:", sku);

  useEffect(() => {
    // Nếu đã có initialProduct, không cần fetch lại
    if (initialProduct) {
      const selectedVariant = initialProduct.variants.find((v: IVariant) => v.sku === sku) || initialProduct.variants[0];
      const initialImages = [selectedVariant.hinh_chinh, ...(selectedVariant.hinh_thumbnail || [])].filter(Boolean);
      setImages(initialImages.length > 0 ? initialImages : [selectedVariant.hinh_chinh]);
      setIsLoading(false);
      return;
    }

    // Nếu không có initialProduct hoặc cần làm mới dữ liệu, fetch lại
    if (!sku || sku.length < 5) {
      setError("404 - Not Found");
      setIsLoading(false);
      return;
    }

    const fetchSP = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`http://localhost:3000/api/user/san-pham/${sku}`);
        if (!res.ok) {
          throw new Error(`Lỗi: ${res.status}`);
        }
        const data = await res.json();
        setSp(data);

        const selectedVariant = data.variants.find((v: IVariant) => v.sku === sku) || data.variants[0];
        const initialImages = [selectedVariant.hinh_chinh, ...(selectedVariant.hinh_thumbnail || [])].filter(Boolean);
        setImages(initialImages.length > 0 ? initialImages : [selectedVariant.hinh_chinh]);
      } catch (err) {
        console.error("Lỗi khi fetch sp:", err);
        setError("404 - Not Found");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSP();
  }, [sku, initialProduct]);

  console.log("sp:", sp);
  console.log("images:", images);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ebbd5b]"></div>
      </div>
    );
  }

  if (error || !sp) {
    return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-red-600">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Không tìm thấy trang
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-[#ebbd5b] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#b39168b6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c79a63cc]"
            >
              Quay về trang chủ
            </Link>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Liên hệ hỗ trợ <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </main>
    );
  }

  const selectedVariant = sp.variants.find((variant: IVariant) => variant.sku === sku) || sp.variants[0];

  const handleThumbnailClick = (thumbnailIndex: number) => {
    if (thumbnailIndex >= images.length) return;
    const newImages = [...images];
    [newImages[0], newImages[thumbnailIndex]] = [newImages[thumbnailIndex], newImages[0]];
    setImages(newImages);
  };

  const formatViews = (views: number): string => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  return (

    <div>
      <section className="pt-32 pb-20">
        <div>
          <ul className="container mx-auto px-6 flex items-start">
            <li><Link className="text-gray-600 hover:underline hover:text-[#ebbd5b]" href='/'>LUXE - HOME&gt;</Link></li>
            <li><Link className="text-gray-600 hover:underline hover:text-[#ebbd5b]" href={`/products`}>SẢN PHẨM&gt;</Link></li>
            <li><Link className="text-gray-600 hover:underline hover:text-[#ebbd5b]" href={selectedVariant.sku}>{selectedVariant.sku}</Link></li>
          </ul>
        </div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="sticky top-32">
                <div className="mb-4 overflow-hidden">
                  <img
                    id="main-image"
                    src={images[0] || selectedVariant.hinh_chinh}
                    alt={sp.ten_sp}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {images.slice(1).map((thumbnail, index) => (
                    <div
                      key={index}
                      className="product-thumbnail cursor-pointer"
                      onClick={() => handleThumbnailClick(index + 1)}
                    >
                      <img
                        src={thumbnail}
                        alt={`${sp.ten_sp} Thumbnail ${index + 1}`}
                        className="w-50 h-40 object-cover border-2 border-transparent hover:border-gray-300 transition"
                        style={{
                          borderColor: images[0] === thumbnail ? "#ebbd5b" : "transparent",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h1 className="text-3xl font-semibold text-primary">{sp.ten_sp}</h1>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-gray-600">{selectedVariant?.sku}</p>
                  <p className="text-gray-600">{formatViews(sp.luot_xem)} lượt xem</p>
                </div>
                <Link href="#comment-section" onClick={scrollToComment} className="text-sm text-accent hover:underline">
                  Đọc đánh giá
                </Link>
              </div>

              <div className="flex items-center mb-6 space-x-2">
                {selectedVariant?.gia_km !== null ? (
                  <span className="text-2xl font-bold text-primary">
                    {selectedVariant.gia_km.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                  </span>
                ) : (
                  <span className="text-2xl font-bold text-primary">
                    {selectedVariant?.gia.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                  </span>
                )}
                {selectedVariant?.phan_tram_km > 0 && (
                  <span className="px-2 py-1 bg-red-100 text-red-500 font-semibold text-sm inline-flex items-center">
                    -{selectedVariant.phan_tram_km}%
                  </span>
                )}
                {selectedVariant?.gia_km > 0 && (
                  <span className="ml-2 text-gray-400 line-through">
                    {selectedVariant?.gia.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600 line-clamp-1 w-[500px]">{sp.mo_ta}</p>
                <Link href="#description-section" onClick={scrollDescripton} className="text-sm text-accent hover:underline">
                  Đọc mô tả
                </Link>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-primary mb-3">
                  Màu sắc: <span id="selected-color">{selectedVariant?.mau_sac}</span>
                </h3>
                <div className="flex space-x-3">
                  {sp.variants.map((variant: IVariant, index: number) => (
                    <Link href={`/detail-product/${variant.sku}`} key={index} className="w-20 h-20 cursor-pointer hover:border-gray-300 transition">
                      <img src={variant.hinh_chinh} alt="" className="object-cover" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-medium text-primary">Kích cỡ: {selectedVariant?.kich_thuoc}</h3>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-primary mb-3">Số lượng: {selectedVariant.so_luong} sản phẩm</h3>
                <div className="flex items-center justify-between">
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
                  <p className="text-gray-600 mb-2">Đã bán: {selectedVariant?.so_luong_da_ban} sản phẩm</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="flex items-center justify-center cursor-pointer border-2 border-[#ebbd5b] px-8 py-4 hover:bg-[#ebbd5b] hover:text-white transition tracking-wider font-medium uppercase flex-1">
                  <CiShoppingCart className="mr-2 text-xl" /> Thêm vào giỏ hàng
                </button>
                <button className="cursor-pointer bg-[#ebbd5b] text-primary px-8 py-4 text-white transition tracking-wider font-medium uppercase flex-1">
                  <i className="far fa-heart mr-2"></i> Mua ngay
                </button>
              </div>

              <div className="border-t border-b border-gray-200 py-4 mb-8">
                <div className="flex items-start mb-3">
                  <CiDeliveryTruck className="text-gray-500 mt-1 mr-3 text-xl" />
                  <div>
                    <h4 className="flex items-center font-medium text-primary">Miễn phí giao hàng & trả hàng</h4>
                    <p className="text-gray-600 text-sm">Miễn phí vận chuyển cho tất cả các đơn hàng...</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between border-b border-gray-200">
                  <button
                    id="description-section"
                    className={`px-4 py-3 font-medium text-primary ${activeTab === "description" ? "border-b-2 border-[#ebbd5b]" : ""}`}
                    onClick={() => handleTabClick("description")}
                  >
                    Mô tả sản phẩm
                  </button>
                  <button
                    className={`px-4 py-3 font-medium text-primary ${activeTab === "details" ? "border-b-2 border-[#ebbd5b]" : ""}`}
                    onClick={() => handleTabClick("details")}
                  >
                    Thông tin chi tiết
                  </button>
                </div>

                {activeTab === "description" && (
                  <div id="description" className="py-6">
                    {sp.mo_ta}
                  </div>
                )}

                {activeTab === "details" && (
                  <div id="details" className="py-6">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex">
                        <span className="font-medium w-40">Chất liệu:</span>
                        <span>{sp.chat_lieu}</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-40">Kích cỡ:</span>
                        <span>{selectedVariant.kich_thuoc}</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-40">Xuất xứ:</span>
                        <span>{sp.xuat_xu}</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-40">Loại sản phẩm:</span>
                        <span>{sp.loai_san_pham.ten_loai}</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-40">Loại thương hiệu:</span>
                        <span>{sp.thuong_hieu.ten_thuong_hieu}</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        {sp.tags.map((tag, index) => (
          <Link href={`/tag/${tag}`} key={index} className="text-base text-[#ebbd5b] hover:text-primary mr-2 hover:underline">
            #{tag}
          </Link>
        ))}
      </div>

      <div id="comment-section">
        <Comment />
      </div>
      <RelatedProduct sku={selectedVariant.sku} />
    </div>
  );
}