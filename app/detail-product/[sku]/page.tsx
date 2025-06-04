import { Metadata } from "next";
import Detail from "./Detail"; // Import component Detail
import { ISanPham, IVariant } from "@/app/interface/ISanPham";

// Hàm fetch dữ liệu sản phẩm
async function fetchProduct(sku: string): Promise<ISanPham | null> {
  try {
    const res = await fetch(`http://localhost:3000/api/user/san-pham/${sku}`, {
      cache: "no-store", // Không cache để đảm bảo dữ liệu mới nhất
    });
    if (!res.ok) {
      throw new Error(`Lỗi: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Lỗi khi fetch sản phẩm:", err);
    return null;
  }
}

// Hàm generateMetadata để tạo tiêu đề động
export async function generateMetadata({ params }: { params: { sku: string } }): Promise<Metadata> {
  const sku = params.sku;
  const product = await fetchProduct(sku);

  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm | LUXE",
    };
  }

  const selectedVariant = product.variants.find((variant: IVariant) => variant.sku === sku) || product.variants[0];

  return {
    title: `${product.ten_sp} - ${selectedVariant.mau_sac} (${selectedVariant.sku}) | LUXE`,
    description: product.mo_ta?.slice(0, 160) || "Mô tả sản phẩm không có sẵn.",
  };
}

// Server component để render Detail
export default async function Page({ params }: { params: { sku: string } }) {
  const sku = params.sku;
  const product = await fetchProduct(sku);

  return <Detail initialProduct={product} />;
}