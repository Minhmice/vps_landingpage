// components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 py-4 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-8 px-20 text-2xl font-bold">
          <span>HostingGuard</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-300 transition-all duration-300">Trang chủ</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-all duration-300">Tính năng</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-all duration-300">Bảng giá</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-all duration-300">Về chúng tôi</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-all duration-300">Liên hệ</a></li>
          </ul>
        </nav>
        <a href="#"
          className="btn-animated flex items-center gap-2 rounded bg-green-400 px-4 py-2 font-semibold text-blue-900 transition-all hover:bg-green-500 transform hover:scale-105 duration-300">Bắt
          đầu ngay
          <span className="arrow inline-block transition-transform">→</span></a>
      </div>
    </header>
  );
};

export default Header;
