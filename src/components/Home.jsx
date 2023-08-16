import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "./profile/hero-section/Hero-section";
import CardList from "./cardList/cardList";
export const Home = () => {
  const navigate = useNavigate();
  const authData = {
    username: "admin",
    password: "admin",
    isLogged: false,
  };
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(authData));
  }, []);
  return (
    <div>
      <HeroSection />
      <CardList />
    </div>
  );
};
