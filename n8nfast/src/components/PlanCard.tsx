// components/PlanCard.tsx
import React from "react";

interface PlanCardProps {
  planTitle: string;
  cpu: string;
  ram: string;
  storage: string;
  priceWeekly: string;
  priceMonthly: string;
  features: string[];
}

const PlanCard = ({
  planTitle,
  cpu,
  ram,
  storage,
  priceWeekly,
  priceMonthly,
  features,
}: PlanCardProps) => {
  return (
    <div className="plan-card plan-fadein flex transform cursor-pointer flex-col rounded-lg bg-white shadow transition-all duration-500 hover:scale-105">
      <div className="flex flex-col items-center justify-between px-6 py-4 md:flex-row">
        <div className="flex w-full min-w-[160px] items-center md:w-auto">
          <span className="toggle-icon mr-3 text-2xl">+</span>
          <span className="plan-title text-3xl font-bold">{planTitle}</span>
        </div>
        <div className="mt-2 flex w-full flex-1 items-center justify-between gap-6 md:mt-0 md:w-auto md:justify-end md:gap-10">
          <span className="text-xl font-semibold">{cpu}</span>
          <span className="text-xl font-semibold">{ram}</span>
          <span className="text-xl font-semibold">{storage}</span>
          <span className="text-xl font-bold text-blue-600">
            {priceWeekly}
            <br />
            <span className="text-2xl">{priceMonthly}</span>
          </span>
          <button className="btn-animated flex items-center gap-2 rounded bg-blue-600 px-4 py-2 font-semibold text-white transition-all hover:bg-blue-700">
            Đặt mua
            <span className="arrow inline-block transition-transform">→</span>
          </button>
        </div>
      </div>
      <div className="plan-detail px-6 pb-4">
        <div className="flex flex-col gap-4 rounded-lg border border-dashed bg-gray-200 p-4 md:flex-row">
          <div className="plan-detail-content mx-4 my-2 grid flex-1 grid-cols-3 gap-2 bg-gray-200 text-xl">
            <div>
              <span className="font-bold text-blue-600">Băng thông:</span>{" "}
              Unlimited
            </div>
            <div>
              <span className="font-bold text-blue-600">Sao lưu:</span> Mỗi 3
              ngày
            </div>
            <div className="col-span-2">
              <span className="font-bold text-blue-600">
                Tính năng nổi bật:
              </span>
              <br />
              {features.map((feature, idx) => (
                <div key={idx}>• {feature}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
