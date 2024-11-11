"use client";

import React from "react";
import Image from "next/image";
import "./News.css";
import { BsWechat } from "react-icons/bs";
import { useTranslations } from "use-intl";

const News = () => {

  const t = useTranslations("home");

  return (
    <div className="containern">
      <h2 className="titlen">{t("news")}</h2>
      <p className="subn">
        {t("dummy2")}
      </p>
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
            <h3>{t("dummy2")}</h3>
            <p>
              26 March, 2024{" "}
              <span style={{ display: "inline-block", margin: "0 5px" }}>
                <BsWechat />
              </span>{" "}
              08
            </p>
            <p>
              {t("dummy")}
            </p>
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
            <h3>{t("dummy2")}</h3>
            <p>
              26 March, 2024{" "}
              <span style={{ display: "inline-block", margin: "0 5px" }}>
                <BsWechat />
              </span>{" "}
              08
            </p>
            <p>
              {t("dummy")}
            </p>
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
            <h3>{t("dummy2")}</h3>
            <p>
              26 March, 2024{" "}
              <span style={{ display: "inline-block", margin: "0 5px" }}>
                <BsWechat />
              </span>{" "}
              08
            </p>
            <p>
              {t("dummy")}
            </p>
            <button className="read-more-button">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
