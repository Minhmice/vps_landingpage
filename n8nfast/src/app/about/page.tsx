// app/about/page.tsx
import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Về HostingGuard
        </h1>
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Left Column: Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              HostingGuard là giải pháp hosting mạnh mẽ và bảo mật, cung cấp các dịch vụ hosting n8n nhanh chóng và an toàn cho các doanh nghiệp và cá nhân. 
              Với đội ngũ chuyên gia và công nghệ hiện đại, chúng tôi mang đến các dịch vụ hosting tối ưu cho nhu cầu tự động hóa và quản lý công việc hiệu quả.
            </p>
            <p className="text-lg text-gray-700">
              Chúng tôi cam kết mang đến cho khách hàng trải nghiệm tốt nhất với các dịch vụ hosting tốc độ cao, an toàn, và dễ dàng sử dụng. 
              Dù bạn là một doanh nghiệp nhỏ hay một công ty lớn, chúng tôi có giải pháp phù hợp với mọi nhu cầu.
            </p>
            <p className="text-lg text-gray-700">
              Với dịch vụ Hosting n8n, bạn có thể triển khai và quản lý các workflow tự động hóa một cách nhanh chóng và hiệu quả. 
              Chúng tôi hỗ trợ 24/7 để đảm bảo hệ thống của bạn luôn hoạt động ổn định.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="mt-8 lg:mt-0">
            <img
              className="w-full h-auto rounded-lg shadow-lg"
              src="https://via.placeholder.com/600x400"
              alt="HostingGuard team"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Chúng tôi có thể giúp bạn!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Hãy liên hệ với chúng tôi ngay hôm nay để biết thêm về các gói dịch vụ hosting và giải pháp tự động hóa cho doanh nghiệp của bạn.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition hover:bg-blue-700"
          >
            Liên hệ với chúng tôi
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
