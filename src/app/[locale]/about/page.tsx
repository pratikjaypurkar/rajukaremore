"use client";

import About from "@/components/LandingPage/About/About";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { useTranslations } from "use-intl";

export default function Page() {
  const t = useTranslations("home");
  const t1 = useTranslations("about");

  return (
    <main className="">
      <div className="px-8 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-4 pt-20 bg-[#1b2f50]">
        <div className="px-8 lg:px-10 flex flex-col justify-center text-white text-center lg:text-left">
          <h1 className="font-[600] text-2xl">{t("about")}</h1>
          <p>{t("line100")}</p>
        </div>
        <Image
          src={"/assets/raju main bg 2.png"}
          alt="Picture of the author"
          width={500}
          height={500}
          className="object-cover max-w-[300px] lg:max-w-[500px] rounded-lg"
        />
      </div>
      <About />

      <section className="px-8 lg:px-20 py-10 space-y-8">
        <h2 className="text-center w-fit mx-auto py-2 border-b-2 border-[#f37021] text-3xl font-[600]">
          {t("1")}
        </h2>
        <div className="space-y-4">
          <div>
            <div className="">
              <FaCheck className="custom-check inline mr-2" />
              <span className="font-[600] text-xl">{t("stand.1")}</span>
            </div>
            <p>{t("dummy")}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <div className="">
              <FaCheck className="custom-check inline mr-2" />
              <span className="font-[600] text-xl">{t("stand.2")}</span>
            </div>
            <p>{t("dummy")}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <div className="">
              <FaCheck className="custom-check inline mr-2" />
              <span className="font-[600] text-xl">{t("stand.3")}</span>
            </div>
            <p>{t("dummy")}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <div className="">
              <FaCheck className="custom-check inline mr-2" />
              <span className="font-[600] text-xl">{t("stand.4")}</span>
            </div>
            <p>{t("dummy")}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <div className="">
              <FaCheck className="custom-check inline mr-2" />
              <span className="font-[600] text-xl">{t("stand.5")}</span>
            </div>
            <p>{t("dummy")}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <div className="">
              <FaCheck className="custom-check inline mr-2" />
              <span className="font-[600] text-xl">{t("stand.6")}</span>
            </div>
            <p>{t("dummy")}</p>
          </div>
        </div>
      </section>

      <section className="px-8 lg:px-20 py-10 space-y-8 relative">
        <div className="hidden lg:block absolute top-0 bottom-0 left-0 right-0 w-1 h-3/4 translate-y-1/4 mx-auto bg-[#f37021]"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="w-full lg:w-[70%] border-2 aspect-video rounded-xl my-auto"></div>
          <div className="w-full lg:w-[70%] ml-auto">
            <h3 className="font-[600] text-2xl text-[#253957]">
              {t1("1990.1")}
            </h3>
            <p>{t1("1990.2")}</p>
          </div>
          <div className="hidden  p-4 bg-[#f37021] aspect-square w-fit h-fit rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto lg:flex items-center">
            <p className="font-[500] text-white">1990</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative">
          <div className="hidden p-4 bg-[#f37021] aspect-square w-fit h-fit rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto lg:flex items-center">
            <p className="font-[500] text-white">2000</p>
          </div>
          <div className="w-full lg:w-[70%] ml-auto border-2 aspect-video rounded-xl order-1 lg:order-2 my-auto"></div>
          <div className="w-full lg:w-[80%] order-2 lg:order-1">
            <h3 className="font-[600] text-2xl text-[#253957]">
              {t1("2000.1")}
            </h3>
            <p>{t1("2000.2")}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="w-full lg:w-[70%] border-2 aspect-video rounded-xl my-auto"></div>
          <div className="w-full lg:w-[70%] ml-auto">
            <h3 className="font-[600] text-2xl text-[#253957]">
              {t1("2010.1")}
            </h3>
            <p>{t1("2010.2")}</p>
          </div>
          <div className="hidden p-4 bg-[#f37021] aspect-square w-fit h-fit rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto lg:flex items-center">
            <p className="font-[500] text-white">2010</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative">
          <div className="hidden p-4 bg-[#f37021] aspect-square w-fit h-fit rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto lg:flex items-center">
            <p className="font-[500] text-white">2024</p>
          </div>
          <div className="w-full lg:w-[70%] ml-auto border-2 aspect-video rounded-xl order-1 lg:order-2 my-auto"></div>
          <div className="w-full lg:w-[80%] order-2 lg:order-1">
            <h3 className="font-[600] text-2xl text-[#253957]">
              {t1("2024.1")}
            </h3>
            <p>{t1("2024.2")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
