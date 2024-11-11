"use client";

import React from "react";
import Image from "next/image";
import "./CampaignandPrograms.css";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslations } from "use-intl";
const CampaignPrograms = () => {
  const t = useTranslations("home");

  return (
    <div className="px-8 xl:px-20 py-10">
      <div className="container-campaign">
        <h1>{t("c")}</h1>
        <p>{t("32")}</p>
        <br />
        <br />

        <div className="space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Image
              src={"/image (1).png"}
              alt="Campaign"
              width={500}
              height={500}
              className="w-full aspect-video"
            />
            <div className="text-left">
              <h3 className="font-[500] text-2xl">
                {" "}
                {t("3")}
              </h3>
              <br />
              <div className="space-y-4">
                <p className="">
                  <FaRegCalendarAlt className="inline" />
                  17 Aug, 2024
                </p>
                <p>
                  <FaRegClock className="inline" />
                  1:00 PM to 6:00PM
                </p>
                <p>
                  <FaMapMarkerAlt className="inline" />
                  Maharashtra, Mp
                </p>
              </div>
              <br />
              <Link
                href={"/"}
                className="border-2 border-[#C6318B] px-6 py-4 rounded-full block w-fit"
              >
                {t("v")}
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Image
              src={"/image (2).png"}
              alt="Campaign"
              width={500}
              height={500}
              className="w-full aspect-video order-1 lg:order-2 "
            />
            <div className="text-left order-2 lg:order-1">
              <h3 className="font-[500] text-2xl">
                {" "}
                {t("3")}
              </h3>
              <br />
              <div className="space-y-4">
                <p className="">
                  <FaRegCalendarAlt className="inline" />
                  17 Aug, 2024
                </p>
                <p>
                  <FaRegClock className="inline" />
                  1:00 PM to 6:00PM
                </p>
                <p>
                  <FaMapMarkerAlt className="inline" />
                  Maharashtra, Mp
                </p>
              </div>
              <br />
              <Link
                href={"/"}
                className="border-2 border-[#C6318B] px-6 py-4 rounded-full block w-fit"
              >
                {t("v")}
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Image
              src={"/image (3).png"}
              alt="Campaign"
              width={500}
              height={500}
              className="w-full aspect-video"
            />
            <div className="text-left">
              <h3 className="font-[500] text-2xl">
                {" "}
                {t("3")}
              </h3>
              <br />
              <div className="space-y-4">
                <p className="">
                  <FaRegCalendarAlt className="inline" />
                  17 Aug, 2024
                </p>
                <p>
                  <FaRegClock className="inline" />
                  1:00 PM to 6:00PM
                </p>
                <p>
                  <FaMapMarkerAlt className="inline" />
                  Maharashtra, Mp
                </p>
              </div>
              <br />
              <Link
                href={"/"}
                className="border-2 border-[#C6318B] px-6 py-4 rounded-full block w-fit"
              >
                {t("v")}
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Image
              src={"/image (1).png"}
              alt="Campaign"
              width={500}
              height={500}
              className="w-full aspect-video order-1 lg:order-2 "
            />
            <div className="text-left order-2 lg:order-1">
              <h3 className="font-[500] text-2xl">
                {" "}
                {t("3")}
              </h3>
              <br />
              <div className="space-y-4">
                <p className="">
                  <FaRegCalendarAlt className="inline" />
                  17 Aug, 2024
                </p>
                <p>
                  <FaRegClock className="inline" />
                  1:00 PM to 6:00PM
                </p>
                <p>
                  <FaMapMarkerAlt className="inline" />
                  Maharashtra, Mp
                </p>
              </div>
              <br />
              <Link
                href={"/"}
                className="border-2 border-[#C6318B] px-6 py-4 rounded-full block w-fit"
              >
                {t("v")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPrograms;
