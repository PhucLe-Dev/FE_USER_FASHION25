"use client";
import Link from "next/link";
import { ISanPham } from "../interface/ISanPham";
import { useEffect, useState } from "react";

export default function RelatedProduct({ sku }: { sku: string }) {
    const [sp_arr, setSpArr] = useState<ISanPham[]>([]);

    const fetchRelatedProducts = async () => {
        const res = await fetch(`http://localhost:3000/api/user/san-pham-lien-quan/${sku}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
            }
        });
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setSpArr(data);
    }

    useEffect(() => {
        fetchRelatedProducts();
    }, [sku]);

    return (
        <section className="py-16 bg-secondary container mx-auto px-6">
            <div className="text-left mb-5">
                <p className="text-gray-600 mx-auto uppercase text-lg">
                    KHÁM PHÁ NHỮNG SẢN PHẨM LIÊN QUAN ĐẾN SẢN PHẨM TRÊN
                </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sp_arr.map((item: ISanPham) =>
                    <Link href={`/detail-product/${item.variants[0]?.sku}`} key={item._id} className="product-card bg-white group relative">
                        <div className="relative overflow-hidden">
                            <img src={item.variants[0]?.hinh_chinh}
                                alt="Product" className="w-full h-96 object-cover object-center" />
                            <div
                                className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 flex items-center justify-center">
                                <button
                                    className="cursor-pointer bg-white text-xs px-6 py-4 opacity-0 group-hover:opacity-90 transition duration-300 transform translate-y-4 group-hover:translate-y-0 hover:bg-[#ebbd5b] hover:text-white font-medium tracking-wider">CHI TIẾT
                                </button>
                                <button
                                    className="cursor-pointer bg-white text-xs px-6 py-4 opacity-0 group-hover:opacity-90 transition duration-300 transform translate-y-4 group-hover:translate-y-0 hover:bg-[#ebbd5b] hover:text-white font-medium tracking-wider">THÊM VÀO GIỎ HÀNG
                                </button>
                            </div>
                            {item.variants[0]?.phan_tram_km > 0 && (<div className="absolute top-0 left-0 bg-[#ebbd5b] text-white px-4 py-2 text-xs font-semibold uppercase tracking-wider">sale {item.variants[0]?.phan_tram_km}%</div>)}
                        </div>
                        <div className="p-4">
                            <div className="items-start">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium text-primary line-clamp-1 w-[155px]">{item.ten_sp}</h3>
                                    <p className="text-gray-600">{item.thuong_hieu.ten_thuong_hieu}</p>
                                </div>
                                <div className="flex items-center">
                                    {item.variants[0]?.gia_km > 0 ? (
                                        <p className="text-primary font-medium mr-2">
                                            {item.variants[0].gia_km.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                        </p>
                                    ) : (
                                        <p className="text-primary font-medium">
                                            {item.variants[0].gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                        </p>
                                    )}

                                    {item.variants[0]?.gia_km > 0 && (
                                        <p className="text-gray-400 text-xs line-through">
                                            {item.variants[0].gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </section>
    )
}