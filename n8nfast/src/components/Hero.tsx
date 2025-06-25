import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 p-20 py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 md:flex-row">
        <div className="z-10 flex flex-1 flex-col items-start justify-center">
          <span className="mb-4 inline-block rounded-full bg-green-500/20 px-4 py-1 text-sm text-green-200">
            Hosting WordPress Giảm đến 75%
          </span>
          <h1 className="animate-hero-title mb-4 text-left text-4xl font-bold leading-tight md:text-6xl">
            Giải pháp <br />
            <span className="shadwo text-5xl text-green-300 md:text-7xl">Cloud Server</span>
            <br />
            Nhanh &amp; An Toàn
          </h1>
          <p className="animate-hero-title mb-8 max-w-xl text-left text-lg md:text-2xl">
            Trải nghiệm cách mới để xây dựng, triển khai và quản lý WordPress hiệu quả trên một bảng điều khiển mạnh mẽ.
          </p>
          <div className="animate-hero-btns flex gap-4">
            <a href="#" className="btn-animated flex items-center gap-2 rounded-full bg-green-400 px-6 py-3 font-semibold text-blue-900 shadow-lg transition hover:bg-green-500">
              Bắt đầu ngay
              <span className="arrow inline-block transition-transform">→</span>
            </a>
            <a href="#plans" className="btn-animated flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20">
              Xem tất cả gói
              <span className="arrow inline-block transition-transform">→</span>
            </a>
          </div>
        </div>
        <div className="relative mt-10 flex flex-1 items-center justify-center md:mt-0">
          <div className="relative flex h-[350px] w-[350px] items-center justify-center md:h-[420px] md:w-[420px]">
            <img src="anh_landing_page.jpg" alt="Hình ảnh landing page" className="animate-img-fadein z-10 h-full w-full rounded-[50%_50%_50%_50%/60%_60%_40%_40%] border-4 border-white/10 object-cover shadow-2xl" style={{ aspectRatio: '1/1' }} />
            <div className="pointer-events-none absolute inset-0 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] ring-4 ring-blue-400/30"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 top-0 z-0 hidden w-1/2 md:block">
        <svg width="100%" height="100%" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="400" cy="300" rx="300" ry="250" fill="#2563eb" fillOpacity="0.25" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
