"use client";

import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { useTranslations } from "use-intl";

export default function Page() {
  const t = useTranslations("development");

  const arr = [
    {
      title: "3.1.title",
      img: "/Rectangle 87.png",
      content: "3.1.text",
    },
    {
      title: "3.2.title",
      img: "/Rectangle 87.png",
      content: "3.2.text",
    },
    {
      title: "3.3.title",
      img: "/Rectangle 87 (3).png",
      content: "3.3.text",
    },
  ];

  return (
    <main>
      <section>
        <div className="py-10 bg-[#1b2f50]"></div>
        <div className=" lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-4 blue-orange-gradient">
          <div className="py-10 px-8 lg:px-10 flex flex-col justify-center text-white text-center lg:text-left">
            <h1 className="font-[600] text-3xl">{t("1")}</h1>
          </div>
          <Image
            src={"/assets/20240822_220609.jpg"}
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover max-w-full lg:max-w-[300px] rounded-lg mx-auto"
          />
        </div>
      </section>

      <section className="py-10 px-8 lg:px-20">
        <h2 className="text-center font-[600] text-3xl text-[#f37021]">
          {t("1")}
        </h2>
        <p className="text-center">{t("2")}</p>
      </section>

      <section className="py-10 px-8 lg:px-20">
        <div className="space-y-16">
          {arr.map((item, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                <div className="xl:col-span-2 space-y-4">
                  <div className="">
                    <FaCheck
                      className="custom-check inline mr-2 text-[#f37021]"
                      size={30}
                    />
                    <span className="font-[600] text-xl text-[#243856]">
                    {t(item.title)}
                    </span>
                  </div>
                  <p>{t(item.content)}</p>
                </div>
                <div>
                  <Image
                    src={item.img}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="object-cover max-w-full lg:max-w-[400px] rounded-lg ml-auto"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
