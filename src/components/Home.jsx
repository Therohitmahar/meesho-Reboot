import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "./profile/hero-section/Hero-section";
import CardList from "./cardList/cardList";
import { InfoState } from "../context/Context";
export const Home = () => {
  const navigate = useNavigate();
  const {
    state: { product },
    isLoading,
    info,
    page,
    setPage,
  } = InfoState();

  return (
    <div>
      <div className="lower-nav">
        <ul>
          <li onClick={(e) => navigate("womens_clothing")}>
            Women's Clothing{" "}
          </li>
          <li onClick={(e) => navigate("mens_clothing")}>Men's Clothing </li>
          <li onClick={(e) => navigate("jewellery")}>
            Jewellery & Accessories
          </li>
          <li onClick={(e) => navigate("electronics")}>Electronics</li>
        </ul>
      </div>
      <HeroSection />
      <CardList
        pagination={true}
        route={false}
        {...{ product, isLoading, info, page, setPage }}
      />
    </div>
  );
};
