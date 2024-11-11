"use client";

import { usePathname, useRouter } from "@/navigation";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslations } from "next-intl";

export default function LangSwitcher() {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const changeLang = (lang: string) => {
    router.push(pathname, { locale: lang });
  };

  return (
    <>
      <button
        key={10002320}
        className="relative z-50 group text-left hidden xl:block bg-[#f37021] px-6 py-2 rounded-lg text-white font-[600]"
      >
        {t("lang")}
        <IoIosArrowDown size={20} className="inline" />
        <span className="text-black space-y-2 py-2 shadow-md dropdown overflow-hidden md:absolute top-full left-0 min-w-full w-fit bg-white rounded-lg z-50 block md:hidden group-hover:block space-y-2 text-left">
          <span
            key={2003 + 100}
            className="px-4 block hover:bg-gray-200 "
            onClick={() => changeLang("en")}
          >
            {t("nav.english")}
          </span>
          <span
            key={2003 + 110}
            className="px-4 block hover:bg-gray-200"
            onClick={() => changeLang("mr")}
          >
            {t("nav.marathi")}
          </span>
        </span>
      </button>
      <form className="p-4 block xl:hidden">
        {/* <label htmlFor="" className="block">
          <input
            type="radio"
            name="lang"
            id=""
            onChange={() => {
              changeLang("en");
            }}
            checked={t("lang") === "English"}
          />{" "}
          <span>English</span>
        </label>
        <label htmlFor="" className="block">
          <input
            type="radio"
            name="lang"
            id=""
            onChange={() => {
              changeLang("mr");
            }}
            checked={t("lang") === "मराठी"}
          />{" "}
          <span>Marathi</span>
        </label> */}

        <div className="flex gap-2">
          <p>{t("nav.english")}</p>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              id="switch"
              type="checkbox"
              checked={t("lang") === "मराठी"}
              onChange={() => {
                if (t("lang") === "English") {
                  changeLang("mr");
                } else {
                  changeLang("en");
                }
              }}
              className="peer sr-only"
            />
            <label className="hidden"></label>
            <div className="peer h-6 w-11 rounded-full border bg-black after:absolute after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[var(--primary-clr)] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
          </label>
          <p>{t("nav.marathi")}</p>
        </div>
      </form>
    </>
  );
}
