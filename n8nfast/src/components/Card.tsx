import React from "react";

interface PlanCardProps {
  title: string;
  subtitle: string;
  cpu: string;
  ram: string;
  storage: string;
  priceWeekly: string;
  priceMonthly: string;
  oldPrice?: string;
  features: string[];
  onClick: () => void;
  isOpen: boolean;
  onToggle: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Card = ({
  title,
  subtitle,
  cpu,
  ram,
  storage,
  priceWeekly,
  priceMonthly,
  oldPrice,
  features,
  onClick,
  isOpen,
  onToggle,
}: PlanCardProps) => {
  // Prevent toggle when clicking the button
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as HTMLElement).tagName === "BUTTON") return;
    onToggle(e);
  };

  return (
    <div
      className="plan-card plan-fadein mb-6 flex cursor-pointer flex-col rounded-lg bg-white shadow"
      onClick={handleCardClick}
    >
      <div className="flex items-center gap-6 px-8 py-6">
        {/* Toggle icon */}
        <span
          className={`toggle-icon mr-4 select-none text-3xl font-bold transition-transform duration-200 ${isOpen ? "text-blue-600" : "text-gray-400"}`}
          style={{ cursor: "pointer" }}
        >
          {isOpen ? "–" : "+"}
        </span>
        <span className="plan-title min-w-[120px] flex-1 text-2xl font-bold">
          {title}
        </span>
        <span className="w-24 text-center text-base font-medium md:text-lg">
          {cpu}
        </span>
        <span className="w-24 text-center text-base font-medium md:text-lg">
          {ram}
        </span>
        <span className="w-32 text-center text-base font-medium md:text-lg">
          {storage}
        </span>
        <div className="flex min-w-[140px] flex-col items-end">
          <span className="text-base text-gray-400 line-through">
            {oldPrice || "$56.50"}
          </span>
          <div className="flex items-center gap-2">
            <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs font-bold text-yellow-700">
              75% OFF
            </span>
            <span className="text-xs text-gray-400" title="Info">
              &#9432;
            </span>
          </div>
          <span className="mt-1 text-xl font-bold text-blue-600">
            {priceMonthly}
          </span>
        </div>
        <button className="btn-animated ml-6 flex items-center gap-2 whitespace-nowrap rounded bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700">
          Order Now
        </button>
      </div>
      {/* Accordion details */}
      <div
        className={`plan-detail overflow-hidden px-8 pb-4 transition-all duration-300 ${isOpen ? "open plan-animate-open max-h-[500px] opacity-100" : "plan-animate-close max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col gap-3 rounded-lg border border-dashed bg-gray-50 p-5">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600"></span>
                <span className="text-base md:text-lg">
                  <span className="font-bold">{feature.split(":")[0]}</span>
                  {feature.includes(":")
                    ? ":" + feature.split(":").slice(1).join(":")
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

export default Card;
