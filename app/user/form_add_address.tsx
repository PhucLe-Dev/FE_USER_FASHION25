"use client";
interface FormAddAddressProps {
  setMounted: React.Dispatch<React.SetStateAction<boolean>>;
}
import AddressSelector from "../Components/AddressSelector";
export default function FormAddAddress({setMounted}: FormAddAddressProps) {
    return (
        <div className="mb-6 bg-white shadow-sm p-6">
                            <h3 className="text-lg font-bold mb-6">Form thêm địa chỉ nhận hàng</h3>
                            <form action="">
                                <div className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                                            <input type="text"
                                                className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-1 focus:border-[#ebbd5b]"
                                                placeholder="Trần Văn A" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                                            <input type="text"
                                                className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-1 focus:border-[#ebbd5b]"
                                                placeholder="(+84) 0123456789" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email người nhận</label>
                                        <input type="text"
                                            className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-1 focus:border-[#ebbd5b]"
                                            placeholder="abc@gmail.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ</label>
                                        <AddressSelector />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ cụ thể cho tài xế</label>
                                        <input type="text"
                                            className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-1 focus:border-[#ebbd5b]"
                                            placeholder="Số đường, số nhà, hẻm..." />
                                    </div>
                                </div>
                                <div className="flex justify-end space-x-4 mt-10">
                                    <button type="button"
                                        onClick={()=> {setMounted(false)}}
                                        className="cursor-pointer px-6 py-3 border border-gray-300 font-medium hover:bg-gray-50 transition">
                                        Ẩn form
                                    </button>
                                    <button type="submit"
                                        className="cursor-pointer px-6 py-3 bg-[#ebbd5b] text-white font-medium hover:opacity-90 transition">
                                        Lưu thông tin
                                    </button>
                                </div>
                            </form>
                        </div>
    )
}