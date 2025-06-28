import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import PlanCards from "@/components/PlanCards";
import Footer from "@/components/Footer";
import News from "@/components/news-section";
import ScrollVelocity from "@/components/ScrollVelocity/ScrollVelocity";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ScrollVelocity
        texts={["VPS KHỎE", "n8n NGON"]}
        velocity={100}
        className="custom-scroll-text m-4"
      />
      <PlanCards />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
