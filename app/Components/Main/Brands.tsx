"use client"
import Link from "next/link";
import { IThuongHieu } from "@/app/interface/ISanPham";
import { useState, useEffect } from "react";

export default function Brands() {
    // Khai báo state để lưu danh sách thương hiệu
    const [listBrands, setListBrands] = useState<IThuongHieu[]>([]);
    // Khai báo effect để fetch dữ liệu thương hiệu từ API
    useEffect(() => {
        // Hàm fetch dữ liệu thương hiệu từ API
        const fetchDataThuongHieu = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/user/thuong-hieu?page=1&limit=4", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) {
                    throw new Error("API response not ok");
                }
                const data = await response.json();
                setListBrands(data.data);
            } catch (error) {
                console.error("Lỗi khi fetch listBrands:", error);
            }
        };
        fetchDataThuongHieu();
    }, []);

    return (
        <section className="pb-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-gray-600 max-w-2xl mx-auto uppercase text-lg">
                        KHÁM PHÁ CÁC THƯƠNG HIỆU CỦA CHÚNG TÔI
                    </p>
                </div>
                <div className="bg-white py-24 sm:py-20">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            {listBrands.map((item) => 
                                <Link href={`/products/${item.slug}`} key={item._id} className="">
                                    <img src={item.hinh} alt="Transistor"className="w-[200px] h-full object-cover object-center" />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}