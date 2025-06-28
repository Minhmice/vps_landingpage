"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { motion, Transition, useMotionValue } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useCarousel,
  CarouselProvider,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/components/carousel"; // Giả sử bạn đã định nghĩa carousel trong thư mục components

// Move the carousel logic into a child component that is rendered inside CarouselProvider

import newsdata from "@/app/dashboard/data.json";

const NewsSectionCarousel: React.FC = () => {
  const { index, setIndex, itemsCount } = useCarousel();
  const [internalIndex, setInternalIndex] = useState<number>(index); // Local state to manage index
  const isControlled = index !== undefined; // If index is controlled externally
  const currentIndex = isControlled ? index : internalIndex;

  const handleIndexChange = (newIndex: number) => {
    if (!isControlled) {
      setInternalIndex(newIndex); // Update local index if not controlled externally
    }
    setIndex(newIndex); // Update context
  };

  return (
    <Carousel className="relative mt-12 w-full px-20">
      <h1 className="text-center pt-10">
        <span className="p-4 text-5xl pb-10 font-bold">Tin tức mới nhất về n8n</span>
        <br />
        <span className="p-4 text-3xl text-gray-800">
          Cập nhật từ các nguồn tin tức hàng đầu về n8n, VPS và nhiều hơn nữa.
        </span>
      </h1>
      <CarouselContent className="">
        {newsdata.map((t) => (
          <CarouselItem key={t.id} className="basis-1/3 px-4 py-10">
            <motion.div className="relative grid h-[500px] grid-rows-2 gap-4 overflow-hidden rounded-lg border border-neutral-500 bg-white p-4 shadow-lg  duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              {/* Layer chặn sao chép và ảnh */}
              <div className="pointer-events-none absolute inset-0 z-10 select-none bg-transparent backdrop-blur-sm" />

              {/* Cột trái: logo, rate, ảnh */}
              <div className="z-20 flex flex-col justify-start gap-2">
                <div className="flex items-center">
                  <img src={t.logo} alt="" width={24} height={24} />
                  <div className="ml-1 text-sm text-yellow-500">
                    {Array.from({ length: t.rate ?? 0 }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <div className="h-full w-full overflow-hidden rounded border">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="h-full w-full object-cover"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
              </div>

              {/* Phần dưới: title, review */}
              <div className="z-20 flex flex-col justify-between">
                <div>
                  <h1 className="text-xl font-bold">{t.title}</h1>
                  <p className="line-clamp-3 text-lg text-gray-600">
                    {t.review}
                  </p>
                </div>

                {/* Read more (giữ lớp cao nhất để vẫn click được) */}
                <div className="z-30 text-right">
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Carousel navigation controls */}
      <CarouselNavigation
        className="absolute left-0 top-1/2 flex w-full justify-between px-8"
        classNameButton="bg-zinc-50 p-4 rounded-full hover:bg-zinc-200 transition-all"
      />
    </Carousel>
  );
};

const NewsSection: React.FC = () => {

  return (
    <CarouselProvider initialIndex={0} disableDrag={false}>
      <NewsSectionCarousel />
    </CarouselProvider>
  );
};

export default NewsSection;
