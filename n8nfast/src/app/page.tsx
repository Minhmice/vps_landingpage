import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import PlanCards from "@/components/PlanCards";
import Footer from "@/components/Footer";
import News from "@/components/news-section";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <News />
      <PlanCards />
      <Footer />
    </div>
  );
};

export default Home;
