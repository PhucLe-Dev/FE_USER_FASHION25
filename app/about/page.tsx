'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    const milestones = [
        {
            year: '2020',
            title: 'Khởi nguồn cảm hứng',
            description:
                'LUXE ra đời với sứ mệnh tôn vinh vẻ đẹp vượt thời gian, kết hợp giữa nghệ thuật thủ công truyền thống và tư duy thiết kế đương đại.',
        },
        {
            year: '2021',
            title: 'Ra mắt bộ sưu tập đầu tiên',
            description:
                'Bộ sưu tập "Tinh hoa Á Đông" gây tiếng vang tại Tuần lễ Thời trang Paris, khẳng định dấu ấn riêng của LUXE trên bản đồ thời trang cao cấp.',
        },
        {
            year: '2022',
            title: 'Hợp tác với nghệ nhân quốc tế',
            description:
                'LUXE bắt tay cùng các nghệ nhân từ Pháp, Ý và Nhật Bản để tạo nên những dòng sản phẩm giới hạn mang giá trị văn hóa sâu sắc.',
        },
        {
            year: '2023',
            title: 'Khai trương flagship đầu tiên',
            description:
                'Cửa hàng flagship tại Milan ra mắt, mang đến không gian mua sắm đẳng cấp và trải nghiệm cá nhân hóa cho từng khách hàng.',
        },
        {
            year: '2024',
            title: 'Chuyển đổi bền vững',
            description:
                'LUXE ra mắt chiến lược phát triển bền vững toàn diện: sử dụng chất liệu thân thiện, quy trình sản xuất tiết kiệm năng lượng và cam kết không thử nghiệm trên động vật.',
        },
        {
            year: '2025',
            title: 'Vươn tầm toàn cầu',
            description:
                'LUXE hiện diện tại hơn 40 quốc gia, trở thành biểu tượng mới của thời trang xa xỉ hiện đại, hòa quyện giữa di sản văn hóa và đổi mới sáng tạo.',
        },
    ];

    return (
        <div className="relative min-h-screen">
            {/* Video Background for Entire Page */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src="https://res.cloudinary.com/dohwmkapy/video/upload/v1748313593/video_about_hfdnah.webm"
                        type="video/mp4"
                    />
                </video>
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 transition-opacity duration-1000"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 min-h-screen text-white">
                {/* Navigation for Milestones */}
                <nav className="fixed top-16 left-1/2 transform -translate-x-1/2 z-20 bg-gray-900/70 backdrop-blur-sm rounded-full px-4 py-2">
                    <ul className="flex gap-4">
                        {milestones.map((milestone) => (
                            <li key={milestone.year}>
                                <a
                                    href={`#year-${milestone.year}`}
                                    className="text-[#ebbd5b] hover:text-white transition-colors duration-300 text-sm"
                                >
                                    {milestone.year}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Our Heritage */}
                <section className="pt-32 pb-16 sm:pb-24 bg-gray-900/70">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="lg:w-1/2">
                                <div className="relative w-full h-[400px]" data-aos="fade-up">
                                    <Image
                                        src="https://res.cloudinary.com/dohwmkapy/image/upload/v1748068177/soobin_tn4nhj.jpg"
                                        alt="Luxe Heritage"
                                        fill
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-1/2 mt-8 lg:mt-0">
                                <h2
                                    className="text-3xl sm:text-4xl font-semibold uppercase mb-4 text-white"
                                    data-aos="fade-right"
                                >
                                    Di sản của chúng tôi
                                </h2>
                                <p className="text-gray-300 mb-4 text-base">
                                    Kể từ khi thành lập vào năm 2025, Luxe đã đồng nghĩa với chất lượng không thỏa hiệp và thiết kế tinh vi. Những gì bắt đầu như một cửa hàng nhỏ ở Paris đã phát triển thành một biểu tượng toàn cầu của sự thanh lịch tinh tế.
                                </p>
                                <p className="text-gray-300 mb-6 text-base">
                                    Các bộ sưu tập của chúng tôi được chế tạo bởi các nghệ nhân bậc thầy sử dụng các kỹ thuật được truyền qua các thế hệ, đảm bảo mỗi tác phẩm đáp ứng các tiêu chuẩn chính xác của chúng tôi về sự xuất sắc của chúng tôi.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex-1 border-l-2 border-[#ebbd5b] pl-3 py-1">
                                        <h3 className="font-medium text-[#ebbd5b] mb-1 text-sm">Tầm nhìn</h3>
                                        <p className="text-gray-400 text-sm">
                                            Để xác định lại sự sang trọng hiện đại thông qua thiết kế vượt thời gian và sự khéo léo đặc biệt.
                                        </p>
                                    </div>
                                    <div className="flex-1 border-l-2 border-[#ebbd5b] pl-3 py-1">
                                        <h3 className="font-medium text-[#ebbd5b] mb-1 text-sm">Xứ mệnh</h3>
                                        <p className="text-gray-400 text-sm">
                                            Để tạo ra thời trang lâu dài tôn vinh cá tính và nghệ thuật.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Milestones Section (Vertical Scrollable Timeline with Transform Effect) */}
                <section className="py-16 sm:py-24 bg-gray-900/70" id="milestones">
                    <div className="container mx-auto px-4 sm:px-6">
                        <h2
                            className="text-3xl sm:text-4xl font-semibold uppercase text-center mb-12 text-white"
                            data-aos="fade-up"
                        >
                            Các cột mốc trong hành trình của chúng tôi
                        </h2>
                        <div className="relative max-h-[600px] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            <div className="relative pb-12">
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#ebbd5b]/20"></div>
                                {milestones.map((milestone, index) => (
                                    <div
                                        key={milestone.year}
                                        id={`year-${milestone.year}`}
                                        className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                                    >
                                        <div
                                            className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                                        >
                                            <div
                                                className="p-4 bg-gray-900/80 rounded-lg border border-[#ebbd5b]/20 transform transition-all duration-800 hover:scale-105 opacity-0"
                                                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                                                data-aos-delay={index * 200}
                                                data-aos-anchor-placement="top-center"
                                                style={{
                                                    transformOrigin: index % 2 === 0 ? 'right' : 'left',
                                                }}
                                            >
                                                <h4 className="text-lg font-bold text-white mb-2">{milestone.year} - {milestone.title}</h4>
                                                <p className="text-gray-300 text-sm">{milestone.description}</p>
                                            </div>
                                        </div>
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#ebbd5b] rounded-full flex items-center justify-center border-2 border-white/50 z-10">
                                            <span className="w-3 h-3 bg-white rounded-full"></span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Craftsmanship */}
                <section className="py-16 sm:py-24 bg-gray-900/70">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <h2
                                className="text-3xl sm:text-4xl font-semibold uppercase mb-4 text-white"
                                data-aos="fade-up"
                            >
                                Xự khác biệt tạo nên hoàn hảo
                            </h2>
                            <p
                                className="text-gray-300 max-w-2xl mx-auto text-base"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Mỗi mảnh Luxe là một minh chứng cho cam kết của chúng tôi về sự xuất sắc, từ việc lựa chọn vật liệu đến khâu cuối cùng.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-4 bg-gray-900/70 rounded-lg">
                                <div
                                    className="w-12 h-12 bg-[#ebbd5b]/10 rounded-full flex items-center justify-center mx-auto mb-4"
                                    data-aos="fade-up"
                                >
                                    <span className="text-xl text-[#ebbd5b]">💎</span>
                                </div>
                                <h3 className="font-medium text-[#ebbd5b] mb-2 text-sm">Vật liệu đặc biệt</h3>
                                <p className="text-gray-400 text-sm">
                                    Mỗi sản phẩm bắt đầu từ sự tuyển chọn kỹ lưỡng những nguyên liệu quý hiếm và tinh túy nhất.
                                    Chúng tôi hợp tác với các nhà cung cấp có đạo đức và uy tín toàn cầu để mang về các loại vải lụa mềm mịn, da thuộc tự nhiên và đá quý tinh xảo.
                                    Chất liệu không chỉ tạo nên vẻ đẹp vượt thời gian mà còn phản ánh cam kết của chúng tôi đối với sự bền vững và tính nhân văn trong ngành thời trang.
                                </p>
                            </div>
                            <div className="text-center p-4 bg-gray-900/70 rounded-lg">
                                <div
                                    className="w-12 h-12 bg-[#ebbd5b]/10 rounded-full flex items-center justify-center mx-auto mb-4"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <span className="text-xl text-[#ebbd5b]">✨</span>
                                </div>
                                <h3 className="font-medium text-[#ebbd5b] mb-2 text-sm">Thủ công tinh xảo</h3>
                                <p className="text-gray-400 text-base">
                                    Mỗi chi tiết trên sản phẩm đều được chế tác bằng tay bởi những nghệ nhân lành nghề, những người đã dành cả đời để hoàn thiện kỹ thuật truyền thống.
                                    Từng đường kim mũi chỉ, từng nét cắt thủ công đều thể hiện sự tôn trọng đối với nghệ thuật chế tác và khẳng định giá trị đích thực của sự khác biệt.
                                    Đó là nơi nơi tay nghề truyền thống gặp gỡ tinh thần hiện đại – tạo nên những tuyệt phẩm vượt thời gian.
                                </p>
                            </div>
                            <div className="text-center p-4 bg-gray-900/70 rounded-lg">
                                <div
                                    className="w-12 h-12 bg-[#ebbd5b]/10 rounded-full flex items-center justify-center mx-auto mb-4"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    <span className="text-xl text-[#ebbd5b]">🌱</span>
                                </div>
                                <h3 className="font-medium text-[#ebbd5b] mb-2 text-base">Xa xỉ bền vững</h3>
                                <p className="text-gray-400 text-base">
                                    Trong khi theo đuổi sự hoàn mỹ và đẳng cấp, chúng tôi không ngừng tìm kiếm các giải pháp thân thiện với môi trường.
                                    Từ quy trình sản xuất tiết kiệm năng lượng đến việc tái sử dụng nguyên liệu, mọi bước đi đều hướng đến một tương lai xanh hơn.
                                    Xa xỉ đối với chúng tôi không chỉ là vẻ ngoài hào nhoáng, mà còn là giá trị lâu dài, đạo đức và có trách nhiệm với hành tinh mà chúng ta cùng chia sẻ.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="py-16 sm:py-24 bg-gray-900/70">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <h2
                                className="text-3xl sm:text-4xl font-semibold uppercase mb-4 text-white"
                                data-aos="fade-up"
                            >
                                Người sáng lập của chúng tôi
                            </h2>
                            <p
                                className="text-gray-300 max-w-2xl mx-auto text-base"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Các nhà lãnh đạo có tầm nhìn đã đưa Luxe vào cuộc sống.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-4 bg-gray-900/70 rounded-lg">
                                <div
                                    className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4"
                                    data-aos="fade-up"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                                            alt="Founder One"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <h3 className="font-medium text-[#ebbd5b] mb-1 text-sm">Sophie Laurent</h3>
                                <p className="text-gray-400 text-xs mb-2">Giám đốc sáng tạo</p>
                                <p className="text-gray-400 text-sm">
                                    Cựu nhà thiết kế trưởng tại Chanel, Sophie mang đến 20 năm chuyên môn thời trang cho tầm nhìn sáng tạo của Luxe.
                                </p>
                            </div>
                            <div className="text-center p-4 bg-gray-900/70 rounded-lg">
                                <div
                                    className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="https://res.cloudinary.com/dohwmkapy/image/upload/v1748070916/parkbogum_c2heli.jpg"
                                            alt="Founder True"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <h3 className="font-medium text-[#ebbd5b] mb-1 text-sm">Park Bo Gum</h3>
                                <p className="text-gray-400 text-xs mb-2">CEO</p>
                                <p className="text-gray-400 text-sm">
                                    Với nền tảng về quản lý bán lẻ sang trọng, Park Bo Gum giám sát các hoạt động toàn cầu của Luxe.
                                </p>
                            </div>
                            <div className="text-center p-4 bg-gray-900/70 rounded-lg">
                                <div
                                    className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="https://res.cloudinary.com/dohwmkapy/image/upload/v1748068177/soobin_tn4nhj.jpg"
                                            alt="Founder Three"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <h3 className="font-medium text-[#ebbd5b] mb-1 text-sm">Chae Soo Bin</h3>
                                <p className="text-gray-400 text-xs mb-2">Giám đốc thiết kế</p>
                                <p className="text-gray-400 text-sm">
                                    Cách tiếp cận sáng tạo của Chae Soo Bin đối với thiết kế dệt may đã nhận được sự hoan nghênh quốc tế của cô.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 sm:py-24 bg-[url(https://vn.louisvuitton.com/content/dam/lv/online/high-end/wolv/sustainability/U_Su_Committed_Journey_v2.html/jcr:content/assets/background_DI3.jpg?imwidth=1090)] no-repeat bg-cover bg-center bg-fixed">
                    <div className="container mx-auto px-4 sm:px-6 text-center">
                        <h2
                            className="text-3xl sm:text-4xl font-semibold uppercase mb-4 text-white"
                            data-aos="fade-up"
                        >
                            Cam kết của chúng tôi đối với sự bền vững
                        </h2>
                        <p
                            className="max-w-2xl mx-auto mb-6 text-gray-100 text-base"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Bảo tồn tài nguyên thiên nhiên & Ảnh hưởng tích cực tới xã hội
                        </p>
                        <Link
                            href="/products"
                            className="inline-block bg-white text-[#ebbd5b] px-6 py-2 font-medium rounded-full hover:bg-gray-100 transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            Khám phá các sản phẩm của chúng tôi
                        </Link>
                    </div>
                </section>

                {/* Spacer to ensure footer is not overlapped */}

            </div>

            <style jsx>{`
        [data-aos].aos-animate {
          opacity: 1;
          transform: none;
        }
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thumb-[#ebbd5b]\/50::-webkit-scrollbar-thumb {
          background-color: rgba(193, 154, 107, 0.5);
          border-radius: 10px;
        }
        .scrollbar-track-gray-900\/50::-webkit-scrollbar-track {
          background-color: rgba(31, 41, 55, 0.5);
        }
        @media (max-width: 768px) {
          .lg:flex-row {
            flex-direction: column !important;
          }
          .md:grid-cols-3 {
            grid-template-columns: 1fr !important;
          }
          nav {
            top: 12px !important;
            padding: 6px !important;
          }
          nav ul {
            gap: 8px !important;
          }
          .relative.flex.items-center {
            flex-direction: column !important;
            justify-content: center !important;
            text-align: center !important;
          }
          .w-1/2 {
            width: 100% !important;
            padding: 0 !important;
          }
          .absolute.left-1/2 {
            top: -12px !important;
          }
          .pr-8.text-right,
          .pl-8.text-left {
            text-align: center !important;
            padding: 0 !important;
          }
          .p-4 {
            padding: 8px !important;
          }
          .text-lg {
            font-size: 0.875rem !important;
          }
          .text-sm {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
        </div>
    );
}