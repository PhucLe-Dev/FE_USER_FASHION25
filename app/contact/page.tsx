'use client';

import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';
import { MdOutlineAttachEmail, MdOutlinePhoneInTalk } from 'react-icons/md';

export default function ContactPage() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setFaqOpen(prev => (prev === index ? null : index));
    };

    return (
        <main className="pt-16 pb-20">
            {/* Page Header */}
            <div className='w-full overflow-hidden'>
                <video
                    className="w-full h-50 object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="https://vod.freecaster.com/louisvuitton/9eea6e45-1abd-4531-8f97-2e54ab234c5a/qHMkcFxF5YxWyveUQCdJtTBQ_3.mp4" type="video/mp4" />
                </video>
                <div className="relative top-[-155px] z-10 flex flex-col items-center justify-center h-full text-center">
                    <h1 className="text-[#ebbd5b] text-4xl md:text-5xl font-playfair font-bold mb-6">
                        LIÊN HỆ VỚI CHÚNG TÔI
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-300 uppercase tracking-wider text-sm">
                        Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
                    </p>
                </div>
            </div>

            {/* Contact Section */}
            <section className="">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-6 shadow-lg">
                            <h2 className="text-2xl font-playfair font-bold mb-8">Gữi tin nhắn cho chúng tôi</h2>
                            <form>
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-gray-700 mb-2">Họ và tên</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-accent" placeholder="Nguyễn Văn A" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-accent" placeholder="abc@gmail.com" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="subject" className="block text-gray-700 mb-2">Vấn đề gặp phải</label>
                                    <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-accent" placeholder="Hộ trợ trả hàng và hoàn tiền" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-700 mb-2">Nội dung</label>
                                    <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-accent" placeholder="Tôi muốn ..."></textarea>
                                </div>
                                <button type="submit" className="bg-[#ebbd5b] text-white px-10 cursor-pointer py-4 hover:opacity-90 transition tracking-wider font-medium uppercase w-full">
                                    Gữi đi
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <div className="mb-12">
                                <h2 className="text-2xl font-playfair font-bold mb-6">Hãy liên lạc</h2>
                                <p className="text-gray-700 mb-8">Nhóm dịch vụ khách hàng của chúng tôi sẵn sàng hỗ trợ bạn ...</p>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="text-accent mr-4 mt-1"><LuMapPin className="text-lg" /></div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Địa chỉ cửa hàng</h3>
                                            <p className="text-gray-700">11 Đ. Sư Vạn Hạnh<br />Phường 12, Quận 10, Hồ Chí Minh, Vietnam</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-accent mr-4 mt-1"><MdOutlinePhoneInTalk className="text-lg" /></div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Số điện thoại</h3>
                                            <p className="text-gray-700">+84 (310) 555-1234<br />Mon-Fri: 9am-6pm PST</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-accent mr-4 mt-1"><MdOutlineAttachEmail className="text-lg" /></div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Email tứ vấn và hộ trợ</h3>
                                            <p className="text-gray-700">luxesupport@gamil.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="map-container rounded-sm overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.527501700521!2d106.66706337408735!3d10.770851559298466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edddb818ebf%3A0xfc8c05045f47a3d8!2sVan%20Hanh%20Mall!5e0!3m2!1sen!2sus!4v1748049494197!5m2!1sen!2sus"
                                    width="100%" height="300" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="mt-20 py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-playfair font-bold text-black mb-6">
                            <span className="title-decoration">CÂU HỎI THƯỜNG GẶP</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto uppercase tracking-wider text-sm">
                            Tìm câu trả lời cho các câu hỏi phổ biến
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {[
                            {
                                question: 'Tùy chọn vận chuyển của bạn là gì?',
                                answer: 'Chúng tôi cung cấp vận chuyển tiêu chuẩn (3-5 ngày làm việc) ...'
                            },
                            {
                                question: 'Chính sách hoàn trả của bạn là gì?',
                                answer: 'Chúng tôi chấp nhận lợi nhuận trong vòng 30 ngày ...'
                            },
                            {
                                question: 'Bạn có cung cấp gói quà không?',
                                answer: 'Có, chúng tôi cung cấp gói quà miễn phí ...'
                            },
                             {
                                question: 'Làm thế nào tôi có thể theo dõi đơn đặt hàng của tôi?',
                                answer: 'Khi đơn đặt hàng của bạn đã được vận chuyển, bạn sẽ nhận được ...'
                            },
                        ].map((item, index) => (
                            <div key={index} className="border-b border-gray-200">
                                <button
                                    className="flex justify-between items-center w-full py-4 text-left"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h3 className="font-medium">{item.question}</h3>
                                    <FaPlus className="text-accent" />
                                </button>
                                {faqOpen === index && (
                                    <div className="pb-4">
                                        <p className="text-gray-700">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
