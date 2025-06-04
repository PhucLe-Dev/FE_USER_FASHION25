"use cleint";
import Link from "next/link";
import BoxProduct from "../BoxProduct";
import { useState, useEffect } from "react";
import { IProduct } from "@/app/interface/ISanPham";

export default function NewProduct() {
    // Khai báo state để lưu danh sách loại sản phẩm
    const [listProduct, setListProduct] = useState<IProduct[]>([]);
    // Khai báo effect để fetch dữ liệu sản phẩm từ API
    useEffect(() => {
        // Hàm fetch dữ liệu sản phẩm từ API
        const fetchDataSanPham = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/user/san-pham?random=true&limit=4", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) {
                    throw new Error("API response not ok");
                }
                const data = await response.json();
                setListProduct(data.data);
            } catch (error) {
                console.error("Lỗi khi fetch listProduct:", error);
            }
        };
        fetchDataSanPham();
    }, []);

    return (
        <section className="pb-20 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-gray-600 max-w-2xl mx-auto uppercase text-lg">
                        KHÁM PHÁ NHỮNG SẢN PHẨM ĐỘC ĐÁO NHẤT CỦA CHÚNG TÔI
                    </p>
                </div>

                <BoxProduct listProduct={listProduct}/>

                <div className="text-center mt-12">
                    <Link href="/products" className="cursor-pointer bg-[#ebbd5b] text-white px-10 py-4 hover:opacity-90 transition tracking-wider font-medium uppercase">
                        Xem tất cả
                    </Link>
                </div>
            </div>
        </section>
    )
}