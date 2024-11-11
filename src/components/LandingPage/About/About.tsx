"use client";

import React from "react";
import "./About.css";
import { FaCheck } from "react-icons/fa6";
import { useTranslations } from "use-intl";

const About = () => {
  const t = useTranslations("home");

  return (
    <div className="container" id="about">
      <div className="row">
        <div className="col-md-6">
          <img src="/image 4.png" alt="Image" className="img-fluid" />
          <img src="/Frame 5.png" alt="Image" className="img-fluidf" />
        </div>
        <div className="col-md-6">
          <h2>{t("about")}</h2>
          <h3>{t("about-head")}</h3>
          <p>{t("dummy")}</p>
          <h4>{t("1")}</h4>
          <div className="grid grid-cols-2">
            <div className="col-md-4 mx-6">
              <div className="check-label">
                <FaCheck className="custom-check" />
                <span>{t("stand.1")}</span>
              </div>
              <br />
              <div className="check-label">
                <FaCheck className="custom-check" />
                <span>{t("stand.2")}</span>
              </div>
              <br />
              <div className="check-label">
                <FaCheck className="custom-check" />
                <span>{t("stand.3")}</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="check-label">
                <FaCheck className="custom-check" />
                <span>{t("stand.4")}</span>
              </div>
              <br />
              <div className="check-label">
                <FaCheck className="custom-check" />
                <span>{t("stand.5")}</span>
              </div>
              <br />
              <div className="check-label">
                <FaCheck className="custom-check" />
                <span>{t("stand.6")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
