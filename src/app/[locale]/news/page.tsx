"use client";

import Image from "next/image";
import React from "react";
import { BsWechat } from "react-icons/bs";
import { useTranslations } from "use-intl";
import "@/components/LandingPage/News/News.css";

export default function Page() {
  const t = useTranslations("news");
  const t1 = useTranslations("home");

  return (
    <main>
      <section>
        <div className="py-10 bg-[#1b2f50]"></div>
        <div className=" lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-4 blue-orange-gradient">
          <div className="py-10 px-8 lg:px-10 flex flex-col justify-center text-white text-center lg:text-left">
            <h1 className="font-[600] text-3xl">{t("1")}</h1>
            <p>{t("2")}</p>
          </div>
          <Image
            src={"/raju main bg 1 (1).png"}
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover max-w-full lg:max-w-[300px] rounded-lg mx-auto"
          />
        </div>
      </section>
      <section className="py-10 px-8 lg:px-20 space-y-4">
        <h2 className="text-center font-[600] text-3xl text-[#C6318B]">
          {t("1")}
        </h2>
        <p className="text-center">{t("2")}</p>
      </section>

      <section className="py-10 px-8 lg:px-20 space-y-4">
        <div className="gridn">
          <div className="cardn">
            <Image
              src="/Rectangle 12.png"
              alt="Campaign Image"
              width={300}
              height={200}
              className="card-imagen"
            />
            <div className="card-contentn">
              <h3>{t1("dummy2")}</h3>
              <p>
                26 March, 2024{" "}
                <span style={{ display: "inline-block", margin: "0 5px" }}>
                  <BsWechat />
                </span>{" "}
                08
              </p>
              <p>{t1("dummy")}</p>
              <button className="read-more-button">Read more</button>
            </div>
          </div>
          <div className="cardn">
            <Image
              src="/Rectangle 13.png"
              alt="Campaign Image"
              width={300}
              height={200}
              className="card-imagen"
            />
            <div className="card-contentn">
              <h3>{t1("dummy2")}</h3>
              <p>
                26 March, 2024{" "}
                <span style={{ display: "inline-block", margin: "0 5px" }}>
                  <BsWechat />
                </span>{" "}
                08
              </p>
              <p>{t1("dummy")}</p>
              <button className="read-more-button">Read more</button>
            </div>
          </div>
          <div className="cardn">
            <Image
              src="/Rectangle 14.png"
              alt="Campaign Image"
              width={300}
              height={200}
              className="card-imagen"
            />
            <div className="card-contentn">
              <h3>{t1("dummy2")}</h3>
              <p>
                26 March, 2024{" "}
                <span style={{ display: "inline-block", margin: "0 5px" }}>
                  <BsWechat />
                </span>{" "}
                08
              </p>
              <p>{t1("dummy")}</p>
              <button className="read-more-button">Read more</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
