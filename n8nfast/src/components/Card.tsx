import React from 'react';

interface PlanCardProps {
  title: string;
  subtitle: string;
  cpu: string;
  ram: string;
  storage: string;
  priceWeekly: string;
  priceMonthly: string;
  features: string[];
  onClick: () => void;
  isBestChoice?: boolean;
}

const Card = ({
  title,
  subtitle,
  cpu,
  ram,
  storage,
  priceWeekly,
  priceMonthly,
  features,
  onClick,
  isBestChoice = false,
}: PlanCardProps) => {
  return (
    <div
      className={`plan-card plan-fadein flex cursor-pointer flex-col rounded-lg bg-white shadow ${isBestChoice ? 'border-t-6 border-t-yellow-500' : ''}`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-between px-6 py-4 md:flex-row">
        <div className="flex w-full min-w-[160px] items-center md:w-auto">
          <span className="toggle-icon mr-3 text-2xl">{isBestChoice ? '★' : '+'}</span>
          <span className="plan-title text-3xl font-bold">{title}</span>
        </div>
        <div className="mt-2 flex w-full flex-1 items-center justify-between gap-6 md:mt-0 md:w-auto md:justify-end md:gap-10">
          <span className="font-semibold text-xl">{cpu}</span>
          <span className="font-semibold text-xl">{ram}</span>
          <span className="font-semibold text-xl">{storage}</span>
          <span className="font-bold text-blue-600 text-xl">
            {priceWeekly}
            <br />
            <span className="text-2xl">{priceMonthly}</span>
          </span>
          <button
            className="btn-animated flex items-center gap-2 rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
          >
            Đặt mua
            <span className="arrow inline-block transition-transform">→</span>
          </button>
        </div>
      </div>
      <div className="plan-detail px-6 pb-4">
        <div className="flex flex-col gap-4 rounded-lg border border-dashed p-4 md:flex-row bg-gray-200">
          <div className="plan-detail-content grid flex-1 grid-cols-3 gap-2 text-xl mx-4 my-2 bg-gray-200">
            <div>
              <span className="font-bold text-blue-600">Băng thông:</span>
              Unlimited
            </div>
            <div>
              <span className="font-bold text-blue-600">Sao lưu:</span>
              Mỗi 3 ngày
            </div>
            <div className="col-span-3">
              <span className="font-bold text-blue-600">Tính năng nổi bật:</span>
              <br />
              {features.map((feature, index) => (
                <div key={index}>• {feature}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
