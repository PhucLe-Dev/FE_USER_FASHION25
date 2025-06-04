"use client";

import { useEffect, useRef, useState } from "react";

interface Province { code: number; name: string }
interface District { code: number; name: string }
interface Ward { code: number; name: string }

export default function CascadingAddressInput() {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);

  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);
  const [selectedWard, setSelectedWard] = useState<Ward | null>(null);

  const [tab, setTab] = useState<"province" | "district" | "ward">("province");
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const wrapperRef = useRef<HTMLDivElement>(null); // 👈 dùng để phát hiện click ngoài

  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/p/")
      .then(res => res.json())
      .then(data => setProvinces(data));
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      fetch(`https://provinces.open-api.vn/api/p/${selectedProvince.code}?depth=2`)
        .then(res => res.json())
        .then(data => {
          setDistricts(data.districts);
          setTab("district");
        });
    } else {
      setDistricts([]);
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict) {
      fetch(`https://provinces.open-api.vn/api/d/${selectedDistrict.code}?depth=2`)
        .then(res => res.json())
        .then(data => {
          setWards(data.wards);
          setTab("ward");
        });
    } else {
      setWards([]);
    }
  }, [selectedDistrict]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false); // 👈 Ẩn dropdown khi click ngoài
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayValue = [
    selectedProvince?.name,
    selectedDistrict?.name,
    selectedWard?.name,
  ].filter(Boolean).join(", ");

  const getItems = () => {
    if (tab === "province") return provinces.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    if (tab === "district") return districts.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));
    if (tab === "ward") return wards.filter(w => w.name.toLowerCase().includes(search.toLowerCase()));
    return [];
  };

  return (
    <div ref={wrapperRef} className="relative block text-sm font-medium text-gray-700 mb-1">
      <input
        className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-1 focus:border-[#ebbd5b]"
        placeholder="Tỉnh/Thành phố, Quận/Huyện, Phường/Xã"
        value={displayValue}
        readOnly
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div className="absolute top-full mt-1 w-full bg-white border shadow-lg z-10">
          {/* Tabs */}
          <div className="flex">
            <button
              className={`flex-1 py-2 text-sm ${tab === "province" ? "border-b-2 border-[#ebbd5b] text-[#ebbd5b]" : ""}`}
              onClick={() => setTab("province")}
            >
              Tỉnh/Thành phố
            </button>
            <button
              className={`flex-1 py-2 text-sm ${tab === "district" ? "border-b-2 border-[#ebbd5b] text-[#ebbd5b]" : ""}`}
              disabled={!selectedProvince}
              onClick={() => selectedProvince && setTab("district")}
            >
              Quận/Huyện
            </button>
            <button
              className={`flex-1 py-2 text-sm ${tab === "ward" ? "border-b-2 border-[#ebbd5b] text-[#ebbd5b]" : ""}`}
              disabled={!selectedDistrict}
              onClick={() => selectedDistrict && setTab("ward")}
            >
              Phường/Xã
            </button>
          </div>

          {/* Search input */}
          <div className="p-2">
            <input
              type="text"
              placeholder={`Tìm kiếm ${tab === "province" ? "tỉnh" : tab === "district" ? "quận" : "phường"}...`}
              className="w-full border px-2 py-1 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* List */}
          <div className="max-h-60 overflow-y-auto">
            {getItems().map((item: Province | District | Ward) => (
              <div
                key={item.code}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => {
                  setSearch("");
                  if (tab === "province") {
                    setSelectedProvince(item);
                    setSelectedDistrict(null);
                    setSelectedWard(null);
                  } else if (tab === "district") {
                    setSelectedDistrict(item);
                    setSelectedWard(null);
                  } else if (tab === "ward") {
                    setSelectedWard(item);
                    setIsOpen(false);
                  }
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
