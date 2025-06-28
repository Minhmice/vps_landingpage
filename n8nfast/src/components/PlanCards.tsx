"use client";

import React, { useState } from "react";
import plansData from "@/app/data/plans.json";

const BILLING_PERIODS = [
  { label: "1 Tuần", key: "discount_price_week" },
  { label: "1 Tháng", key: "discount_price_month" },
  { label: "3 Tháng", key: "discount_price_3months" },
  { label: "6 Tháng", key: "discount_price_6months" },
];

interface Plan {
  title: string;
  subtitle?: string;
  cpu: string;
  ram: string;
  storage: string;
  realprice?: string;
  original_price_month: number;
  discount_price_month: number;
  discount_price_week: number;
  discount_price_3months: number;
  discount_price_6months: number;
  features?: string[];
  rated?: string;
}

interface PlanCardProps {
  plan: Plan;
  isOpen: boolean;
  onToggle: () => void;
  billingKey: string;
}

const Card: React.FC<PlanCardProps> = ({
  plan,
  isOpen,
  onToggle,
  billingKey,
}) => {
  const { title, cpu, ram, storage, original_price_month, features } = plan;
  const calculatedPrice = plan[billingKey as keyof Plan] as number;
  const formattedPrice =
    original_price_month.toLocaleString("vi-VN") + "đ/tháng";

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Không xét tag BUTTON, vẫn luôn được toggle
    if ((e.target as HTMLElement).tagName === "BUTTON") return;
    onToggle();
  };

  return (
    <div
      className="plan-card relative mb-6 rounded-lg bg-white shadow duration-500 ease-in-out"
      onClick={handleCardClick}
    >
      <div className="grid grid-cols-4 items-center gap-4 px-12 py-6">
        <div className="absolute left-8 flex items-center">
          <span
            className={`toggle-icon text-3xl font-bold duration-500 ease-in-out ${
              isOpen ? "text-blue-600" : "text-gray-400"
            }`}
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
          >
            {isOpen ? "–" : "+"}
          </span>
        </div>

        <span className="block pl-4 text-left text-2xl font-bold">{title}</span>

        <div className="grid grid-cols-3 items-center text-left">
          <span>{cpu} CPU</span>
          <span>{ram} RAM</span>
          <span>{storage} Storage</span>
        </div>

        <div className="text-right">
          {original_price_month > 0 && (
            <span className="block text-sm text-gray-600 line-through">
              {formattedPrice}
            </span>
          )}
          <span className="block text-2xl font-bold text-blue-600">
            {calculatedPrice.toLocaleString("vi-VN")}đ
          </span>
        </div>

        <button className="btn-animated rounded bg-blue-600 px-5 py-2 font-semibold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-500 hover:shadow-lg">
          Order Now
        </button>
      </div>

      <div
        className={`plan-detail overflow-hidden px-12 duration-500 ease-in-out ${
          isOpen
            ? "open plan-animate-open max-h-[500px] pb-8 opacity-100"
            : "plan-animate-close max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 rounded-lg border border-dashed bg-gray-200 p-5">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {features?.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-600" />
                <span className="text-base md:text-lg">
                  <span className="font-bold">{feat.split(":")[0]}</span>
                  {feat.includes(":")
                    ? ":" + feat.split(":").slice(1).join(":")
                    : ""}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PlanCards = () => {
  const plans = plansData as Plan[];

  // Mặc định mở Best Seller nếu có
  const bestSellerIndex = plans.findIndex((p) => p.rated === "Best Seller");
  const [openIndex, setOpenIndex] = useState<number | null>(
    bestSellerIndex !== -1 ? bestSellerIndex : null,
  );

  const [billingIndex, setBillingIndex] = useState(1);

  const handleBillingChange = (idx: number) => {
    if (idx >= 0 && idx < BILLING_PERIODS.length) setBillingIndex(idx);
  };

  return (
    <section id="plans" className="bg-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 text-center text-5xl font-bold">
          Find the perfect plan for you!
        </h2>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {BILLING_PERIODS.map((period, idx) => (
            <button
              key={idx}
              className={`rounded-full border px-8 py-4 text-xl font-medium transition ${
                idx === billingIndex
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-blue-50"
              }`}
              onClick={() => handleBillingChange(idx)}
            >
              {period.label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              plan={plan}
              billingKey={BILLING_PERIODS[billingIndex].key}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanCards;
