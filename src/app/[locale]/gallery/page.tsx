"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslations } from "use-intl";
import { sanityClient } from "../../../../sanity/sanity";
import imageUrlBuilder from "@sanity/image-url";

export default function Page() {
  const t = useTranslations("nav");

  const [hidden, setHidden] = useState(true);
  const [images, setImages] = useState<string[]>([]);
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source: any) {
    return builder.image(source);
  }

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const query = '*[_type == "gallery"]{title, images}';
      const gallery = await sanityClient.fetch(query);
      const imageUrls = gallery[0].images.map((image: any) =>
        urlFor(image).url()
      );

      setImages(imageUrls);

      setLoading(false);
    };

    fetchImages();
  }, []);

  const arr = [
    "/assets/gallery/img1.png",
    "/assets/gallery/img2.png",
    "/assets/gallery/img3.png",
    "/assets/gallery/img4.png",
    "/assets/gallery/img5.png",
    "/assets/gallery/img6.png",
    "/assets/gallery/img7.png",
    "/assets/gallery/img8.png",
    "/assets/gallery/img9.png",
    "/assets/gallery/img10.png",
  ];
  return (
    <main>
      <div className="relative pt-20 lg:pt-0">
        <div className="absolute inset-0 -z-1">
          <Image
            src={"/Frame 7.png"}
            alt="Picture of the author"
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-center">
            <h1 className="text-5xl font-[600] uppercase text-white">
              {t("gallery")}
            </h1>
          </div>
          <div className="flex justify-center">
            <Image
              src={"/raju main bg 1 (1).png"}
              alt="Picture of the author"
              width={1000}
              height={1000}
              className="object-cover max-w-full lg:max-w-[400px] rounded-lg"
            />
          </div>
        </div>
      </div>

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
    </main>
  );
}
