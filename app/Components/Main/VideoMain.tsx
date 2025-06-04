import Link from "next/link";

export default function VideoMain() {
    return (
        <section className="pb-20 bg-secondary">
            <div className="relative w-full h-screen overflow-hidden">
                {/* Video Background */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="VideoBg.mp4" type="video/mp4" />
                </video>

                {/* Overlay để làm mờ video nếu cần */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Nội dung phía trên video */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    <section className="">
                        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                            <p className="text-white max-w-2xl mx-auto uppercase text-lg">
                                KHÁM PHÁ QUÁ TRÌNH PHÁT TRIỂN CỦA CHÚNG TÔI
                            </p>
                            <p className="mt-8 mb-12 text-lg">&quot;Tinh tế trong từng đường nét, thanh lịch trong mọi khoảnh khắc – phong cách của bạn, dấu ấn của chúng tôi.&quot;</p>
                            <div className="flex flex-wrap justify-center">
                                <Link href="/about" className="px-6 py-3 text-sm text-white cursor-pointer border border-[#ebbd5b] hover:bg-[#ebbd5b] hover:text-white transition">Đọc thêm về chúng tôi</Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}