import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "./profile/hero-section/Hero-section";
import CardList from "./cardList/cardList";
export const Home = () => {
  return (
    <div>
      <HeroSection />
      <CardList />
    </div>
  );
};
