'use client';  // <-- Add this line at the top to mark this file as a Client Component

import React from 'react';
import Card from './Card';

const PlanCards = () => {
  // Định nghĩa dữ liệu gói
  const plans = [
    {
      title: 'Starter',
      subtitle: 'Giới thiệu',
      cpu: '1 core CPU',
      ram: '2 GB RAM',
      storage: '30 GB NVMe',
      priceWeekly: '60.000đ/tuần',
      priceMonthly: '210.000đ/tháng',
      features: [
        'N8n cài sẵn, chỉ việc đăng nhập và sử dụng',
        'PostgreSQL thay thế SQLite',
        '100+ mẫu tự động hóa',
        'Công cụ hỗ trợ như Milvus, Attu, Redis',
        'Hỗ trợ khách hàng 24/7',
      ],
      isBestChoice: false,
    },
    {
      title: 'Pro',
      subtitle: 'Best Choice',
      cpu: '2 cores CPU',
      ram: '4 GB RAM',
      storage: '50 GB NVMe',
      priceWeekly: '125.000đ/tuần',
      priceMonthly: '440.000đ/tháng',
      features: [
        'Tối ưu cho doanh nghiệp nhỏ',
        'Giao diện dễ sử dụng',
        'Công cụ tích hợp giúp tối ưu hóa quy trình',
        'Hỗ trợ ưu tiên 24/7',
      ],
      isBestChoice: true,
    },
    {
      title: 'Business',
      subtitle: 'Lựa chọn cho doanh nghiệp',
      cpu: '4 cores CPU',
      ram: '8 GB RAM',
      storage: '100 GB NVMe',
      priceWeekly: '200.000đ/tuần',
      priceMonthly: '700.000đ/tháng',
      features: [
        'Giải pháp cho doanh nghiệp phát triển',
        'Xử lý dữ liệu lớn mượt mà',
        '100+ mẫu tự động hóa',
        'Bảo mật cao, sao lưu tự động',
      ],
      isBestChoice: false,
    },
    // Các gói khác có thể thêm vào đây
  ];

  const handleCardClick = (planTitle: string) => {
    console.log(`Bạn đã chọn gói ${planTitle}`);
  };

  return (
    <section id="plans" className="bg-gray-100 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 md:flex-row">
        <div className="flex-1">
          <h2 className="my-10 text-center text-6xl font-bold md:text-6xl">
            100% <span className="text-green-600 animate-plan-green-gradient">Máy chủ xanh <br /></span> phù hợp cho bạn
          </h2>
          <div className="animate-plan-list space-y-4" id="plan-list">
            {plans.map((plan, index) => (
              <Card
                key={index}
                title={plan.title}
                subtitle={plan.subtitle}
                cpu={plan.cpu}
                ram={plan.ram}
                storage={plan.storage}
                priceWeekly={plan.priceWeekly}
                priceMonthly={plan.priceMonthly}
                features={plan.features}
                onClick={() => handleCardClick(plan.title)}
                isBestChoice={plan.isBestChoice}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanCards;
