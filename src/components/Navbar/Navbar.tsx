"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import DropDown from "./DropDown";
import LangSwitcher from "./LangSwitcher";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useTranslations } from "use-intl";
import { Link } from "@/navigation";

export default function Navbar() {
  const t = useTranslations("nav");

  const links = [
    { name: "home", link: "/" },
    { name: "about", link: "/about" },
    {
      name: "public services",
      more: [
        { name: "agriculture", link: "/services/agriculture" },
        { name: "education", link: "/services/education" },
        { name: "development", link: "/services/infrastructure-development" },
        { name: "healthcare", link: "/services/healthcare" },
      ],
    },
    {
      name: "media coverage",
      more: [
        {
          name: "gallery",
          link: "/gallery",
        },
        {
          name: "news",
          link: "/news",
        },
        {
          name: "campaign",
          link: "/campaign",
        }
      ],
    },
    { name: "news", link: "/news" },
    { name: "contact us", link: "/contact" },
  ];

  const [showMenu, setShowMenu] = React.useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-16 py-4 lg:py-2 bg-[#FFFA12] text-black">
      <Link href="/" className="text-3xl font-[600]">
        {t("name")}
      </Link>
      <button
        className="block xl:hidden relative z-50"
        onClick={() => setShowMenu((x) => !x)}
      >
        {showMenu ? <IoClose size={30} /> : <RiMenu3Fill size={30} />}
      </button>
      <nav
        className={`fixed xl:static bg-[#1b3051] xl:bg-transparent top-0 bottom-0 right-0 overflow-y-scroll lg:overflow-y-visible xl:translate-x-0 bg-[#a0a0a0] xl:bg-transparent px-4 py-4 w-fit md:w-3/4 xl:w-fit flex flex-col xl:flex-row xl:items-center gap-4 justify-center ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } transition-all duration-200`}
      >
        {links.map((link, index) =>
          link.more ? (
            <DropDown key={index} name={link.name} links={link.more} />
          ) : (
            <Link key={index} href={link.link} className="font-[600]">
              {t(link.name)}
            </Link>
          )
        )}
        
        <div className="block xl:hidden">
          <LangSwitcher />
        </div>
      </nav>
      <div className="hidden xl:block">
        <LangSwitcher />
      </div>
    </header>
  );
}