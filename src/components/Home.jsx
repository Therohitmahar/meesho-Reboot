import { Outlet } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "./profile/hero-section/Hero-section";
import CardList from "./cardList/cardList";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeroSection />

      <CardList />
    </div>
  );
};
