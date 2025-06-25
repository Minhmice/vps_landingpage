// app/page.tsx
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PlanCard from "../components/PlanCard";
import Footer from "../components/Footer";

const plans = [
  {
    planTitle: "Starter",
    cpu: "1 core CPU",
    ram: "2 GB RAM",
    storage: "30 GB NVMe",
    priceWeekly: "60.000đ/tuần",
    priceMonthly: "210.000đ/tháng",
    features: [
      "N8n cài sẵn, chỉ việc đăng nhập và sử dụng",
      "PostgreSQL thay thế SQLite",
      "100+ mẫu tự động hóa",
      "Công cụ hỗ trợ như Milvus, Attu, Redis",
      "Hỗ trợ khách hàng 24/7",
    ],
  },
  // Thêm các gói khác ở đây
];

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Tại sao chọn n8nfast?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <h3 className="mb-4 text-xl font-semibold">Dễ dàng sử dụng</h3>
              <p className="text-center">
                N8nfast được thiết kế để dễ dàng sử dụng, ngay cả với người mới
                bắt đầu.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="mb-4 text-xl font-semibold">Hiệu suất cao</h3>
              <p className="text-center">
                Chúng tôi cung cấp hiệu suất tối ưu với các máy chủ mạnh mẽ và
                cấu hình linh hoạt.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="mb-4 text-xl font-semibold">Hỗ trợ 24/7</h3>
              <p className="text-center">
                Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ bạn bất cứ
                lúc nào bạn cần.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Các tính năng nổi bật của n8nfast
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <h3 className="mb-4 text-xl font-semibold">
                Tự động hóa quy trình
              </h3>
              <p className="text-center">
                Tự động hóa các quy trình công việc của bạn với n8nfast, giúp
                tiết kiệm thời gian và công sức.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="mb-4 text-xl font-semibold">Tích hợp dễ dàng</h3>
              <p className="text-center">
                N8nfast hỗ trợ tích hợp với hàng trăm ứng dụng và dịch vụ khác
                nhau, giúp bạn kết nối mọi thứ một cách dễ dàng.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="mb-4 text-xl font-semibold">Bảo mật và tin cậy</h3>
              <p className="text-center">
                Chúng tôi cam kết bảo mật dữ liệu của bạn với các biện pháp bảo
                vệ nghiêm ngặt và tuân thủ các tiêu chuẩn bảo mật cao nhất.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Tại sao chọn VPS n8n của chúng tôi?
          </h2>
          <h3 className="mb-12 text-center text-2xl font-semibold">
            Giải pháp VPS n8n automation hoàn chỉnh với hiệu suất vượt trội
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center rounded border p-8">
              {/* Icon placeholder */}
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border">
                {/* Thay thế bằng icon thực tế nếu có */}
                <span className="text-3xl">⚡</span>
              </div>
              <h4 className="mb-2 text-lg font-semibold">
                Cài đặt n8n tự động
              </h4>
              <p className="mb-1 text-center text-base font-medium">
                Chỉ cần chọn phần mềm khi đăng ký dịch vụ, n8n sẽ tự động cài
                đặt lên VPS của bạn và bạn có thể theo dõi tiến trình trực tiếp.
              </p>
            </div>
            <div className="flex flex-col items-center rounded border p-8">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border">
                <span className="text-3xl">🔗</span>
              </div>
              <h4 className="mb-2 text-lg font-semibold">
                Tuỳ chọn mở rộng: NocoDB
              </h4>
              <p className="mb-1 text-center text-base font-medium">
                Cài đặt kèm NocoDB trên cùng VPS n8n – giúp quản lý dữ liệu dễ
                dàng với n8n.
              </p>
            </div>
            <div className="flex flex-col items-center rounded border p-8">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border">
                <span className="text-3xl">🕑</span>
              </div>
              <h4 className="mb-2 text-lg font-semibold">
                Hỗ trợ kỹ thuật 24/7
              </h4>
              <p className="mb-1 text-center text-base font-medium">
                Đội ngũ luôn sẵn sàng hỗ trợ bạn cài đặt, cấu hình hoặc xử lý sự
                cố bất kỳ lúc nào.
              </p>
            </div>
            <div className="flex flex-col items-center rounded border p-8">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border">
                <span className="text-3xl">💻</span>
              </div>
              <h4 className="mb-2 text-lg font-semibold">
                Hạ tầng VPS mạnh mẽ
              </h4>
              <p className="mb-1 text-center text-base font-medium">
                Sử dụng CPU Intel Platinum, kết hợp SSD NVMe U2 RAID10, mang lại
                tốc độ vượt trội và ổn định cho n8n.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="plans" className="bg-gray-100 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 md:flex-row">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
