import React from "react";

const Features = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-center text-3xl font-bold mb-8">
        Các tính năng nổi bật của n8nfast
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center border p-6 rounded">
          <h3 className="text-xl font-semibold mb-4">Tự động hóa quy trình</h3>
          <p className="text-center">
            Tự động hóa các quy trình công việc của bạn với n8nfast, giúp tiết kiệm thời gian và công sức.
          </p>
        </div>
        <div className="flex flex-col items-center border p-6 rounded">
          <h3 className="text-xl font-semibold mb-4">Tích hợp dễ dàng</h3>
          <p className="text-center">
            N8nfast hỗ trợ tích hợp với hàng trăm ứng dụng và dịch vụ khác nhau, giúp bạn kết nối mọi thứ một cách dễ dàng.
          </p>
        </div>
        <div className="flex flex-col items-center border p-6 rounded">
          <h3 className="text-xl font-semibold mb-4">Bảo mật và tin cậy</h3>
          <p className="text-center">
            Chúng tôi cam kết bảo mật dữ liệu của bạn với các biện pháp bảo vệ nghiêm ngặt và tuân thủ các tiêu chuẩn bảo mật cao nhất.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;