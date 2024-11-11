import Image from "next/image";
import React from "react";
import { useTranslations } from "use-intl";

export default function Services() {
  const t = useTranslations("home");

  return (
    <section className=" px-8 xl:px-20 py-10 space-y-10">
      <h2 className="text-5xl font-[600] text-center text-[#C6318B]">
        {t("public services")}
      </h2>
      <p className="text-center">{t("public text")}</p>
      <div className="grid grid0-cols-1 lg:grid-cols-3 gap-8">
        <div className="text-center ">
          <div className="p-4 bg-[#1b3051] aspect-square w-fit mx-auto rounded-full">
            <Image
              src={"/assets/icons/bridge.svg"}
              alt="bridge"
              width={100}
              height={100}
              className="max-w-[50px]"
            />
          </div>
          <h4 className="font-[600] text-[#C6318B]">{t("services.1.title")}</h4>
          <p>{t("services.1.text")}</p>
        </div>
        <div className="text-center ">
          <div className="p-4 bg-[#1b3051] aspect-square w-fit mx-auto rounded-full">
            <Image
              src={"/assets/icons/chat.svg"}
              alt="chat"
              width={100}
              height={100}
              className="max-w-[50px]"
            />
          </div>
          <h4 className="font-[600] text-[#C6318B]">{t("services.2.title")}</h4>
          <p>{t("services.2.text")}</p>
        </div>
        <div className="text-center ">
          <div className="p-4 bg-[#1b3051] aspect-square w-fit mx-auto rounded-full">
            <Image
              src={"/assets/icons/hands.svg"}
              alt="hands"
              width={100}
              height={100}
              className="max-w-[50px]"
            />
          </div>
          <h4 className="font-[600] text-[#C6318B]">{t("services.3.title")}</h4>
          <p>
            {t("services.3.text")}
          </p>
        </div>
      </div>
    </section>
  );
}
