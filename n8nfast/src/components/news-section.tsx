"use client";

import React, {
  useRef,
  useState,
  useEffect,
  WheelEvent,
  ReactNode,
} from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import newsdata from "@/app/data/news.json";

interface Testimonial {
  /* ... */
}

// giữ nguyên AnimatedCard như trước
const AnimatedCard: React.FC<{ children: ReactNode; index: number }> = ({
  children,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

const NewsSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [activePage, setActivePage] = useState(0);
  const [isHover, setIsHover] = useState(false);

  // Responsive breakpoints
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 640) setCardsPerView(1);
      else if (w < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const totalPages = Math.ceil(newsdata.length / cardsPerView);

  const scrollToPage = (page: number, smooth = true) => {
    if (!sliderRef.current) return;
    const idx = (page + totalPages) % totalPages;
    const container = sliderRef.current!;
    const pageWidth = container.clientWidth;
    container.scrollTo({
      left: idx * pageWidth,
      behavior: smooth ? "smooth" : "auto",
    });
    setActivePage(idx);
  };

  // swipe wheel => scroll ngang
  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (!isHover || !sliderRef.current) return;
    e.preventDefault();
    sliderRef.current.scrollLeft += e.deltaY;
  };

  return (
    <div className="relative mt-12 w-full overflow-hidden">
      <div
        ref={sliderRef}
        onMouseEnter={() => setIsHover(true)} // <-- bật
        onMouseLeave={() => setIsHover(false)} // <-- tắt
        onWheel={handleWheel}
        className="no-scrollbar scroll-snap-x flex overflow-x-auto overflow-y-hidden scroll-smooth"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {newsdata.map((t, idx) => (
          <div
            key={t.id}
            className={`flex-shrink-0 px-3 ${
              cardsPerView === 1
                ? "w-full"
                : cardsPerView === 2
                  ? "w-1/2"
                  : "w-1/3"
            }`}
            style={{ scrollSnapAlign: "start" }}
          >
            <AnimatedCard index={idx}>
              <div className="flex h-full flex-col justify-between rounded-lg bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center">
                  <Image src={t.logo} alt="" width={24} height={24} />
                  <div className="ml-2 flex text-yellow-500">
                    {Array.from({ length: t.rate }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg border">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{t.title}</h3>
                <p className="mt-2 text-gray-700">{t.review}</p>
                <div className="mt-4 text-right">
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </AnimatedCard>
          </div>
        ))}
      </div>

      {/* dot nav (giữ nguyên) */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: Math.ceil(newsdata.length / cardsPerView) }).map(
          (_, i) => (
            <button
              key={i}
              onClick={() => scrollToPage(i)}
              className={`h-3 w-3 rounded-full transition-colors ${
                activePage === i ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ),
        )}
      </div>

      {/* ẩn scrollbar toàn cục */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default NewsSection;
