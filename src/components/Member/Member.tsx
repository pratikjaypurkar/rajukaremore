"use client";
import React, { FormEvent, useState } from "react";
import "./Member.css";
import Image from "next/image";
import { useTranslations } from "use-intl";
import { sanityClient } from "../../../sanity/sanity";

const RegistrationForm = () => {
  const t = useTranslations("home");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const doc = {
      _type: "contactForm",
      name: name,
      email: email,
    };
    try {
      setLoading(true);
      await sanityClient.create(doc);

      alert("Message sent successfully");
    } catch (e) {
      alert("An error occurred while sending the message");
    }

    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  return (
    <div className="member-container relative px-8 xl:px-20 py-10">
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-1">
        <Image
          src="/image10.png"
          alt="Background Image"
          className="h-full w-full object-cover"
          width={1945}
          height={733}
        />
        <div className="absolute inset-0 bg-[#C6318B] bg-opacity-80"></div>
      </div>
      <div className="form-container text-white relative z-10 space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-[600]">{t("get")}</h2>
          <h2 className="text-5xl font-[600]">{t("member")}</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="form-group">
            <input
              className="block mx-auto form-input py-4 px-6 rounded-full w-full lg:w-1/2 bg-white bg-opacity-40 text-center placeholder-white"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("name")}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="block mx-auto form-input py-4 px-6 rounded-full w-full lg:w-1/2 bg-white bg-opacity-40 text-center placeholder-white"
              type="email"
              id="email"
              value={email}
              placeholder={t("email")}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 font-[500] rounded-full bg-[#C6318B] block mx-auto"
          >
            {t("register")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
