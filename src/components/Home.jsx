import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "./profile/hero-section/Hero-section";
import CardList from "./cardList/cardList";
import { InfoState } from "../context/Context";
import { ArrowUpFromDot } from "lucide-react";
export const Home = () => {
  const navigate = useNavigate();
  const {
    state: { product },
    isLoading,
    info,
    page,
    setPage,
  } = InfoState();

  const [scrollBtn, setScrollBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollBtn(true);
      } else {
        setScrollBtn(false);
      }
    });
  }, []);
  function handleAllProducts() {
    let productList = document.getElementById("products-page");
    console.log(productList);
    productList.scrollIntoView({ behavior: "smooth" });
  }
  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
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
          <li onClick={handleAllProducts}>All Products</li>
        </ul>
      </div>
      <HeroSection />
      <CardList
        pagination={true}
        route={false}
        {...{ product, isLoading, info, page, setPage }}
      />
      {scrollBtn && (
        <button className="scrollUpBtn" onClick={handleScrollToTop}>
          <ArrowUpFromDot color="#f43397" />
        </button>
      )}
    </div>
  );
};
