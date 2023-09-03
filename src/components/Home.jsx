import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "./profile/hero-section/Hero-section";
import CardList from "./cardList/cardList";
export const Home = () => {
  function handleSubNavClick() {
    let productPage = document.getElementById("products-page");
    productPage.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <div>
      <div className="lower-nav">
        <ul onClick={handleSubNavClick}>
          <li>Women Ethnic </li>
          <li>Women Western</li>
          <li>Men</li>
          <li>Kids</li>
          <li>Home & Kitchen</li>
          <li>Beauty & Health</li>
          <li>Jewellery & Accessories</li>
          <li>Bag & Footwear</li>
          <li>Electronics</li>
        </ul>
      </div>
      <HeroSection />
      <CardList />
    </div>
  );
};
