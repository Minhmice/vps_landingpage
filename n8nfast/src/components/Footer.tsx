import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap justify-between">
          <div className="mb-6 w-full sm:w-auto">
            <h3 className="mb-2 font-bold">Sản phẩm &amp; Giải pháp</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Cloud Server</a></li>
              <li><a href="#" className="hover:text-gray-300">Máy chủ riêng</a></li>
              <li><a href="#" className="hover:text-gray-300">VPS</a></li>
            </ul>
          </div>
          <div className="mb-6 w-full sm:w-auto">
            <h3 className="mb-2 font-bold">Thông tin công ty</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-gray-300">Tuyển dụng</a></li>
              <li><a href="#" className="hover:text-gray-300">Tin tức</a></li>
            </ul>
          </div>
          <div className="mb-6 w-full sm:w-auto">
            <h3 className="mb-2 font-bold">Hỗ trợ &amp; Dịch vụ</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-gray-300">Tài liệu hướng dẫn</a></li>
              <li><a href="#" className="hover:text-gray-300">Cộng đồng</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-auto">
            <h3 className="mb-2 font-bold">Kết nối với chúng tôi</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          &copy; 2025 HostingGuard. Đã đăng ký bản quyền.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
