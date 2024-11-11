"use client";

import Image from "next/image";
import "./Media.css";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useTranslations } from "use-intl";
import { sanityClient } from "../../../sanity/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "@/navigation";

export default function Media() {
  const t = useTranslations("home");

  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source: any) {
    return builder.image(source);
  }

  const [hidden, setHidden] = useState(true);
  const [images, setImages] = useState<string[]>([]);
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const query = '*[_type == "gallery"]{title, images[0...8]}';
      const gallery = await sanityClient.fetch(query);
      const imageUrls = gallery[0].images.map((image: any) =>
        urlFor(image).url()
      );

      setImages(imageUrls);

      setLoading(false);
    };

    fetchImages();
  }, []);

  return (
    <div className="media-container px-8 xl:px-20 py-10 space-y-10">
      <h2 className="text-5xl font-[600] text-center text-[#C6318B]">
        {t("cg")}
      </h2>
      <div className="py-20 px-8 lg:px-20">
        {loading ? (
          <div className="w-16 aspect-square rounded-full mx-auto border-8 border-[#b7b7b5] border-t-[var(--primary-clr)] animate-spin" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="aspect-square border-2 w-full rounded-xl overflow-hidden relative"
              >
                <Image
                  src={image}
                  className="object-cover w-full h-full"
                  alt="Campaign Image"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000d0] to-transparent flex items-end justify-center py-2">
                  <Link
                    target="_blank"
                    href={image}
                    download={image}
                    className="text-white border-2 border-[#C6318B] px-6 py-2 rounded-full"
                  >
                    Download
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {arr.map((image, index) => (
            <div
              key={index}
              className="aspect-square border-2 w-full rounded-xl overflow-hidden relative"
            >
              <Image
                src={image}
                className="object-cover w-full h-full"
                alt="Campaign Image"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000d0] to-transparent flex items-end justify-center py-2">
                <Link
                  target="_blank"
                  href={image}
                  download={image}
                  className="text-white border-2 border-[#C6318B] px-6 py-2 rounded-full"
                >
                  Download
                </Link>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
