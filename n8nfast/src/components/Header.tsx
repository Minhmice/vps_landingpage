import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 py-4 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-8 px-20 text-2xl font-bold">
          <span>HostingGuard</span>
        </div>
        <nav>
          <ul className="flex space-x-20 text-lg font-semibold ">
            <li><a href="#" className="hover:text-gray-300">VPS n8n</a></li>
            <li><a href="#" className="hover:text-gray-300">Tính năng</a></li>
            <li><a href="#" className="hover:text-gray-300">Bảng giá</a></li>
            <li><a href="#" className="hover:text-gray-300">Blog</a></li>
          </ul>
        </nav>
        <a href="#" className="btn-animated flex items-center gap-2 rounded bg-green-400 px-4 py-2 font-semibold text-blue-900 transition hover:bg-green-500">
          Bắt đầu ngay
          <span className="arrow inline-block transition-transform">→</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
