'use client';
import { useState, useEffect, useRef } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { IProduct } from '../interface/ISanPham';
import BoxProduct from '../Components/BoxProduct';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function ProductsPage() {
    const [showSidebar, setShowSidebar] = useState(false);
    const sidebarRef = useRef<HTMLElement>(null);

    const [listProduct, setListProduct] = useState<IProduct[]>([]);
    const [pagination, setPagination] = useState<{
        currentPage: number;
        limit: number;
        totalProducts: number;
        totalPages: number;
    }>({
        currentPage: 1,
        limit: 20,
        totalProducts: 0,
        totalPages: 1,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [sortType, setSortType] = useState<string>('all');

    const [categoryFilter, setCategoryFilter] = useState<string[]>([]); // Cập nhật thành mảng rỗng
    const [originFilter, setOriginFilter] = useState<string[]>([]);
    const [brandFilter, setBrandFilter] = useState<string[]>([]);

    // State để lưu danh sách và ánh xạ từ API
    const [categories, setCategories] = useState<string[]>([]);
    const [brands, setBrands] = useState<string[]>([]);
    const [origins, setOrigins] = useState<string[]>([]);
    const [categoryMap, setCategoryMap] = useState<{ [key: string]: number }>({});
    const [brandMap, setBrandMap] = useState<{ [key: string]: number }>({});
    const [originMap, setOriginMap] = useState<{ [key: string]: string }>({});

    const [showMoreCategories, setShowMoreCategories] = useState(false);
    const [showMoreBrands, setShowMoreBrands] = useState(false);
    const [showMoreOrigins, setShowMoreOrigins] = useState(false);

    const closeSidebar = () => {
        setShowSidebar(false);
    };

    // Fetch danh sách danh mục, thương hiệu, xuất xứ từ API
    useEffect(() => {
        const fetchFilters = async () => {
            try {
                // Fetch danh mục
                const categoriesResponse = await fetch('http://localhost:3000/api/user/loai-san-pham?limit=100');
                const categoriesData = await categoriesResponse.json();
                const categoriesList = categoriesData.data.map((item: { ten_loai: string }) => item.ten_loai);
                setCategories(categoriesList);
                const newCategoryMap = categoriesData.data.reduce((acc: { [key: string]: number }, item: { ten_loai: string, id: number }) => {
                    acc[item.ten_loai] = item.id;
                    return acc;
                }, {});
                setCategoryMap(newCategoryMap);

                // Fetch thương hiệu
                const brandsResponse = await fetch('http://localhost:3000/api/user/thuong-hieu?limit=100');
                const brandsData = await brandsResponse.json();
                const brandsList = brandsData.data.map((item: { ten_thuong_hieu: string }) => item.ten_thuong_hieu);
                setBrands(brandsList);
                const newBrandMap = brandsData.data.reduce((acc: { [key: string]: number }, item: { ten_thuong_hieu: string, id: number }) => {
                    acc[item.ten_thuong_hieu] = item.id;
                    return acc;
                }, {});
                setBrandMap(newBrandMap);

                // Fetch xuất xứ
                const originsResponse = await fetch('http://localhost:3000/api/user/xuat-xu');
                const originsData = await originsResponse.json();
                const originsList = originsData.map((item: { name: string }) => item.name);
                setOrigins(originsList);
                const newOriginMap = originsList.reduce((acc: { [key: string]: string }, name: string) => {
                    acc[name] = name; // Ánh xạ đơn giản vì xuat_xu là string
                    return acc;
                }, {});
                setOriginMap(newOriginMap);
            } catch (error) {
                console.error('Lỗi khi fetch danh sách bộ lọc:', error);
            }
        };
        fetchFilters();
    }, []);

    // Effect để fetch dữ liệu sản phẩm từ API
    useEffect(() => {
        const fetchDataSanPham = async () => {
            setIsLoading(true);
            try {
                const sortMap: { [key: string]: string } = {
                    all: 'null',
                    popular: 'views',
                    newest: 'newest',
                    discounted: 'discounted',
                    bestselling: 'bestselling',
                    price_asc: 'price_asc',
                    price_desc: 'price_desc',
                };

                const params = new URLSearchParams();
                params.append('page', pagination.currentPage.toString());
                params.append('limit', pagination.limit.toString());

                if (categoryFilter.length > 0) {
                    params.append('category', categoryMap[categoryFilter[0]]?.toString() || '');
                }
                if (originFilter.length > 0) {
                    params.append('origin', originMap[originFilter[0]] || '');
                }
                if (brandFilter.length > 0) {
                    params.append('brand', brandMap[brandFilter[0]]?.toString() || '');
                }
                if (sortType && sortMap[sortType]) {
                    params.append('sort', sortMap[sortType]);
                }

                const endpoint = `/api/user/san-pham?${params.toString()}`;

                const response = await fetch(`http://localhost:3000${endpoint}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });
                if (!response.ok) {
                    throw new Error('API response not ok');
                }
                const data = await response.json();
                setListProduct(data.data);
                setPagination(data.pagination);
            } catch (error) {
                console.error('Lỗi khi fetch listProduct:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchDataSanPham();
    }, [pagination.currentPage, sortType, categoryFilter, originFilter, brandFilter, categoryMap, brandMap, originMap]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (showSidebar && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                closeSidebar();
            }
        };
        if (showSidebar) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showSidebar]);

    const handleSortChange = (sortValue: string) => {
        setSortType(sortValue);
        setPagination(prev => ({ ...prev, currentPage: 1 }));
    };

    const handleCategoryChange = (category: string) => {
        setCategoryFilter(prev => {
            if (prev.includes(category)) {
                return prev.filter(item => item !== category);
            } else {
                return [category];
            }
        });
        setPagination(prev => ({ ...prev, currentPage: 1 }));
        closeSidebar();
    };

    const handleOriginChange = (origin: string) => {
        setOriginFilter(prev => {
            if (prev.includes(origin)) {
                return prev.filter(item => item !== origin);
            } else {
                return [origin];
            }
        });
        setPagination(prev => ({ ...prev, currentPage: 1 }));
        closeSidebar();
    };

    const handleBrandChange = (brand: string) => {
        setBrandFilter(prev => {
            if (prev.includes(brand)) {
                return prev.filter(item => item !== brand);
            } else {
                return [brand];
            }
        });
        setPagination(prev => ({ ...prev, currentPage: 1 }));
        closeSidebar();
    };

    const renderPaginationButtons = () => {
        const pageButtons = [];
        const maxVisiblePages = 5;

        pageButtons.push(
            <button
                key="prev"
                onClick={() => setPagination(prev => ({ ...prev, currentPage: Math.max(1, prev.currentPage - 1) }))}
                disabled={pagination.currentPage === 1 || isLoading}
                className={`w-10 h-10 flex items-center justify-center mx-0.5
                    ${pagination.currentPage === 1 || isLoading ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-[#ebbd5b] hover:text-white cursor-pointer'}
                    transition-colors`}
            >
                <BsChevronLeft />
            </button>
        );

        let startPage = Math.max(1, pagination.currentPage - Math.floor(maxVisiblePages / 2));
        const endPage = Math.min(pagination.totalPages, startPage + maxVisiblePages - 1);
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        if (startPage > 1) {
            pageButtons.push(
                <button
                    key={1}
                    onClick={() => setPagination(prev => ({ ...prev, currentPage: 1 }))}
                    disabled={isLoading}
                    className={`w-10 h-10 flex items-center justify-center mx-0.5 ${isLoading ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-[#ebbd5b] hover:text-white'} transition-colors`}
                >
                    1
                </button>
            );
            if (startPage > 2) {
                pageButtons.push(
                    <span key="dots-start" className="w-10 h-10 flex items-center justify-center text-gray-500">
                        ...
                    </span>
                );
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageButtons.push(
                <button
                    key={i}
                    onClick={() => setPagination(prev => ({ ...prev, currentPage: i }))}
                    disabled={isLoading}
                    className={`w-10 h-10 flex items-center justify-center mx-0.5
                      ${pagination.currentPage === i ? 'bg-[#ebbd5b] text-white border-[#ebbd5b]' : isLoading ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-[#ebbd5b] hover:text-white cursor-pointer'}
                      transition-colors font-medium`}
                >
                    {i}
                </button>
            );
        }

        if (endPage < pagination.totalPages) {
            if (endPage < pagination.totalPages - 1) {
                pageButtons.push(
                    <span key="dots-end" className="w-10 h-10 flex items-center justify-center text-gray-500">
                        ...
                    </span>
                );
            }
            pageButtons.push(
                <button
                    key={pagination.totalPages}
                    onClick={() => setPagination(prev => ({ ...prev, currentPage: pagination.totalPages }))}
                    disabled={isLoading}
                    className={`w-10 h-10 flex items-center justify-center mx-0.5 ${isLoading ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-[#ebbd5b] hover:text-white'} transition-colors`}
                >
                    {pagination.totalPages}
                </button>
            );
        }

        pageButtons.push(
            <button
                key="next"
                onClick={() => setPagination(prev => ({ ...prev, currentPage: Math.min(pagination.totalPages, prev.currentPage + 1) }))}
                disabled={pagination.currentPage === pagination.totalPages || isLoading}
                className={`w-10 h-10 flex items-center justify-center mx-0.5
                    ${pagination.currentPage === pagination.totalPages || isLoading ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-[#ebbd5b] hover:text-white cursor-pointer'}
                    transition-colors`}
            >
                <BsChevronRight />
            </button>
        );

        return pageButtons;
    };

    const initialDisplayCount = 4;

    return (
        <section className="pt-15 pb-20 bg-[#f8f8f8]">
            <div className="w-full overflow-hidden">
                <video className="w-full h-50 object-cover" autoPlay loop muted playsInline>
                    <source src="https://res.cloudinary.com/dohwmkapy/video/upload/v1748074959/video_DT_kzhbsg.mp4" type="video/mp4" />
                </video>
                <div className="relative top-[-155px] z-10 flex flex-col items-center justify-center h-full text-center">
                    <h1 className="text-[#ebbd5b] text-4xl md:text-5xl font-playfair font-bold mb-6">
                        KHÁM PHÁ BỘ SƯU TẬP ĐỘC ĐÁO CỦA CHÚNG TÔI
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-300 uppercase tracking-wider text-sm">
                        Chúng tôi luôn cung cấp những sản phẩm thời trang mới và chất lượng nhất
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="flex gap-6">
                    <aside
                        ref={sidebarRef}
                        className={`
                        fixed md:static top-0 left-0 md:left-auto w-50 md:w-1/5 h-full md:h-auto bg-white z-40 md:z-auto
                        p-6 border border-gray-200
                        overflow-y-scroll hide-scrollbar
                        transition-transform duration-300 ease-in-out
                        ${showSidebar ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                        `}
                    >
                        <div className="flex justify-between items-center mb-6 md:hidden">
                            <h2 className="text-xl font-semibold text-gray-800">Bộ Lọc</h2>
                            <button onClick={closeSidebar} className="text-gray-500 hover:text-gray-700">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="font-semibold flex items-center text-[#ebbd5b] mb-4 border-b pb-2">
                            <SlidersHorizontal size={16} className="mr-2" /> <span>TẤT CẢ DANH MỤC</span>
                        </div>
                        <ul className={`space-y-2 text-base mb-6 transition-all duration-300 ${showMoreCategories ? '' : 'max-h-[150px] overflow-hidden'}`}>
                            {categories.map(item => (
                                <li key={item}>
                                    <label className="block hover:text-[#ebbd5b] cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="mr-2 accent-[#ebbd5b]"
                                            checked={categoryFilter.includes(item)}
                                            onChange={() => handleCategoryChange(item)}
                                        />
                                        Bộ sưu tập {item.toLowerCase()}
                                    </label>
                                </li>
                            ))}
                        </ul>
                        {categories.length > initialDisplayCount && (
                            <div
                                className="text-gray-400 mt-1 cursor-pointer"
                                onClick={() => setShowMoreCategories(!showMoreCategories)}
                            >
                                {showMoreCategories ? 'Ẩn ▲' : 'Thêm ▾'}
                            </div>
                        )}

                        <div className="font-semibold flex items-center text-[#ebbd5b] mb-4 border-b pb-2">
                            <SlidersHorizontal size={16} className="mr-2" /> <span>TẤT CẢ THƯƠNG HIỆU</span>
                        </div>
                        <ul className={`space-y-2 text-base mb-6 transition-all duration-300 ${showMoreBrands ? '' : 'max-h-[120px] overflow-hidden'}`}>
                            {brands.map(brand => (
                                <li key={brand}>
                                    <label className="block hover:text-[#ebbd5b] cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="mr-2 accent-[#ebbd5b]"
                                            checked={brandFilter.includes(brand)}
                                            onChange={() => handleBrandChange(brand)}
                                        />
                                        Bộ sưu tập {brand}
                                    </label>
                                </li>
                            ))}
                        </ul>
                        {brands.length > initialDisplayCount && (
                            <div
                                className="text-gray-400 mt-1 cursor-pointer"
                                onClick={() => setShowMoreBrands(!showMoreBrands)}
                            >
                                {showMoreBrands ? 'Ẩn ▲' : 'Thêm ▾'}
                            </div>
                        )}

                        <div className="font-semibold flex items-center text-[#ebbd5b] mb-2 border-b pb-2">
                            <SlidersHorizontal size={16} className="mr-2" /> <span>TẤT CẢ XUẤT XỨ</span>
                        </div>
                        <div className="text-base space-y-5">
                            <div>
                                <div className="font-semibold text-gray-700 mb-1">Xuất xứ</div>
                                <div className={`space-y-1 transition-all duration-300 ${showMoreOrigins ? '' : 'max-h-[120px] overflow-hidden'}`}>
                                    {origins.map(place => (
                                        <label key={place} className="block">
                                            <input
                                                type="checkbox"
                                                className="mr-2 accent-[#ebbd5b]"
                                                checked={originFilter.includes(place)}
                                                onChange={() => handleOriginChange(place)}
                                            />
                                            {place}
                                        </label>
                                    ))}
                                </div>
                                {origins.length > initialDisplayCount && (
                                    <div
                                        className="text-gray-400 mt-1 cursor-pointer"
                                        onClick={() => setShowMoreOrigins(!showMoreOrigins)}
                                    >
                                        {showMoreOrigins ? 'Ẩn ▲' : 'Thêm ▾'}
                                    </div>
                                )}
                            </div>
                        </div>
                    </aside>

                    <div className="flex-1 w-full">
                        <div className="flex items-center justify-between bg-white border border-gray-200 p-3 mb-6 text-base">
                            <div className="flex items-center gap-1 flex-wrap">
                                <button
                                    className="md:hidden flex items-center gap-1 border border-[#ebbd5b] text-[#ebbd5b] px-3 py-1 hover:bg-[#ebbd5b]/10"
                                    onClick={() => setShowSidebar(!showSidebar)}
                                >
                                    <SlidersHorizontal size={16} />
                                    Bộ lọc
                                </button>
                                <span className="text-gray-600">Sắp xếp theo</span>
                                <button
                                    onClick={() => handleSortChange('all')}
                                    className={`px-3 py-1 ${sortType === 'all'
                                        ? 'bg-[#ebbd5b] text-white'
                                        : 'bg-[#f8f8f8] border border-[#f5f5f5] hover:border-[#ebbd5b]'
                                        } transition cursor-pointer`}
                                >
                                    Tất cả sản phẩm
                                </button>
                                <button
                                    onClick={() => handleSortChange('popular')}
                                    className={`px-3 py-1 ${sortType === 'popular'
                                        ? 'bg-[#ebbd5b] text-white'
                                        : 'bg-[#f8f8f8] border border-[#f5f5f5] hover:border-[#ebbd5b]'
                                        } transition cursor-pointer`}
                                >
                                    Phổ biến
                                </button>
                                <button
                                    onClick={() => handleSortChange('newest')}
                                    className={`px-3 py-1 ${sortType === 'newest'
                                        ? 'bg-[#ebbd5b] text-white'
                                        : 'bg-[#f8f8f8] border border-[#f5f5f5] hover:border-[#ebbd5b]'
                                        } transition cursor-pointer`}
                                >
                                    Mới nhất
                                </button>
                                <button
                                    onClick={() => handleSortChange('discounted')}
                                    className={`px-3 py-1 ${sortType === 'discounted'
                                        ? 'bg-[#ebbd5b] text-white'
                                        : 'bg-[#f8f8f8] border border-[#f5f5f5] hover:border-[#ebbd5b]'
                                        } transition cursor-pointer`}
                                >
                                    Đang giảm giá
                                </button>
                                <button
                                    onClick={() => handleSortChange('bestselling')}
                                    className={`px-3 py-1 ${sortType === 'bestselling'
                                        ? 'bg-[#ebbd5b] text-white'
                                        : 'bg-[#f8f8f8] border border-[#f5f5f5] hover:border-[#ebbd5b]'
                                        } transition cursor-pointer`}
                                >
                                    Bán chạy
                                </button>
                                <select
                                    value={sortType}
                                    onChange={(e) => handleSortChange(e.target.value)}
                                    className="bg-[#f8f8f8] border border-[#f5f5f5] px-3 py-1 hover:border-[#ebbd5b] transition cursor-pointer outline-none"
                                >
                                    <option value="" disabled>
                                        Giá
                                    </option>
                                    <option value="price_asc">Giá tăng dần</option>
                                    <option value="price_desc">Giá giảm dần</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-0.5">
                                <div className="">
                                    <span className="text-[#ebbd5b] font-semibold">{pagination.currentPage}</span>
                                    <span>/{pagination.totalPages}</span>
                                </div>
                                <button
                                    onClick={() => setPagination(prev => ({ ...prev, currentPage: Math.max(1, prev.currentPage - 1) }))}
                                    disabled={pagination.currentPage === 1 || isLoading}
                                    className={`outline-none bg-[#f8f8f8] px-4 py-1 hover:bg-[#ebbd5b] hover:text-white cursor-pointer transition
                              ${pagination.currentPage === 1 || isLoading ? 'text-gray-400 cursor-not-allowed opacity-50' : ''}`}
                                >
                                    <BsChevronLeft />
                                </button>
                                <button
                                    onClick={() => setPagination(prev => ({ ...prev, currentPage: Math.min(pagination.totalPages, prev.currentPage + 1) }))}
                                    disabled={pagination.currentPage === pagination.totalPages || isLoading}
                                    className={`outline-none bg-[#f8f8f8] px-4 py-1 hover:bg-[#ebbd5b] hover:text-white cursor-pointer transition
                              ${pagination.currentPage === pagination.totalPages || isLoading ? 'text-gray-400 cursor-not-allowed opacity-50' : ''}`}
                                >
                                    <BsChevronRight />
                                </button>
                            </div>
                        </div>

                        {isLoading ? (
                            <div className="flex justify-center items-center h-64">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ebbd5b]"></div>
                            </div>
                        ) : (
                            <BoxProduct listProduct={listProduct} />
                        )}

                        <div className="flex justify-center items-center mt-8 space-x-1">
                            {renderPaginationButtons()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}