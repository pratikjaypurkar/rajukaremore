import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

export default function DropDown({
  name,
  links,
  // setShowMenu,
}: {
  name: string;
  links: { name: string; link: string }[];
  // setShowMenu: (x: boolean) => void;
}) {
  const [hide, setHide] = useState(true);
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <button
      className="text-black relative z-40 group  text-left w-full xl:w-auto"
      onClick={() => setHide((x) => !x)}
    >
      <span className="xl:p-0 bg-transparent block xl:inline-block font-[600]">
        {t(name)}
        <IoIosArrowDown size={20} className="inline" />
      </span>
      <span
        className={`shadow-md dropdown static xl:absolute top-full left-0 min-w-full w-fit bg-white px-6 xl:py-4 overflow-hidden xl:overflow-auto rounded-lg z-50 block xl:hidden group-hover:block space-y-2 text-left xl:max-h-fit ${
          hide ? "max-h-[80dvh] py-4" : "max-h-0"
        } transition-all duration-700`}
      >
        {links.map((link, index) => {
          return (
            <Link
              key={index + 100}
              href={link.link}
              className={`flex items-center gap-2 text-nowrap font-[500] ${
                link.link === pathname
                  ? "text-[var(--primary-clr)]"
                  : "text-[#070707]"
              }`}
              onClick={() => {
                setHide(false);
                // setShowMenu(false);
              }}
            >
              {t(link.name)}
              <FaArrowRight className="inline" />
            </Link>
          );
        })}
      </span>
    </button>
  );
}
