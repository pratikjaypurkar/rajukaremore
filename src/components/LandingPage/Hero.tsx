"use client";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { useTranslations } from "use-intl";

export default function Hero() {
  const t = useTranslations("home");
  return (
    <section className="hero h-[100dvh]  grid grid-cols-1 lg:grid-cols-2 gap-x-60 px-2 xl:px-20 relative">
      <div className="bg-[#C6318B] vertical-gradient-orange flex items-start xl:items-center py-20 px-4">
        <h1 className="text-white text-6xl font-[700] leading-[1.09]">
          Vote for the<br />
          best <span style={{ color: "#0056d7" }}>candiate</span><br />
          & discover peace
        </h1>
      </div>
      <div className="hidden lg:flex items-start py-28 text-white">
        <div className="px-10 space-y-2">
          <h3 className="text-2xl font-[500] ">{t("line2")}</h3>
          <p>
          {t("dummy")}
          </p>
          <Link href="/register" className="block text-[#C6318B]">
            Learn More
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 m-16 text-white max-w-[400px] hidden xl:block">
        <p className="font-[500]">
        {t("dummy")}
        </p>
      </div>
      <Link
        href={"#about"}
        className="absolute bottom-0 right-0 m-4 border-2 border-white p-2 aspect-square rounded-full "
      >
        <IoIosArrowRoundDown className="text-white" size={30} />
      </Link>
    </section>
  );
}
