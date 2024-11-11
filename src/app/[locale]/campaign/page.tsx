"use client";

import CampaignPrograms from "@/components/CampaignandProgram/CampaignandPrograms";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { useTranslations } from "use-intl";

export default function Page() {
  const t = useTranslations("campaign");
  const t1 = useTranslations("home");

  const campaigns = [
    {
      imageSrc: "/image (1).png",
      altText: "Campaign",
      title: t1("3"),
      date: "17 Aug, 2024",
      time: "1:00 PM to 6:00PM",
      location: "Maharashtra, Mp",
      linkHref: "/",
      linkText: t1("v"),
    },
    {
      imageSrc: "/image (2).png",
      altText: "Campaign",
      title: t1("3"),
      date: "17 Aug, 2024",
      time: "1:00 PM to 6:00PM",
      location: "Maharashtra, Mp",
      linkHref: "/",
      linkText: t1("v"),
    },
    {
      imageSrc: "/image (3).png",
      altText: "Campaign",
      title: t1("3"),
      date: "17 Aug, 2024",
      time: "1:00 PM to 6:00PM",
      location: "Maharashtra, Mp",
      linkHref: "/",
      linkText: t1("v"),
    },
    {
      imageSrc: "/image (1).png",
      altText: "Campaign",
      title: t1("3"),
      date: "17 Aug, 2024",
      time: "1:00 PM to 6:00PM",
      location: "Maharashtra, Mp",
      linkHref: "/",
      linkText: t1("v"),
    },
  ];

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
        <h2 className="text-center font-[600] text-3xl text-[#f37021]">
          {t("1")}
        </h2>
        <p className="text-center">{t("2")}</p>
      </section>

      <section className="py-10 px-8 lg:px-20 ">
        {campaigns.map((campaigns, index) => {
          return (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Image
                src={campaigns.imageSrc}
                alt="Campaign"
                width={500}
                height={500}
                className={`w-full aspect-video ${
                  index % 2 === 0 ? "" : "order-1 lg:order-2"
                }`}
              />
              <div
                className={`text-left py-4 ${
                  index % 2 === 0 ? "" : "order-2 lg:order-1"
                }`}
              >
                <h3 className="font-[500] text-2xl">{campaigns.title}</h3>
                <br />
                <div className="space-y-4">
                  <p className="">
                    <FaRegCalendarAlt className="inline" />
                    {campaigns.date}
                  </p>
                  <p>
                    <FaRegClock className="inline" />
                    {campaigns.time}
                  </p>
                  <p>
                    <FaMapMarkerAlt className="inline" />
                    {campaigns.location}
                  </p>
                </div>
                <br />
                <Link
                  href={campaigns.linkHref}
                  className="border-2 border-[#F37021] px-6 py-4 rounded-full block w-fit"
                >
                  {campaigns.linkText}
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
