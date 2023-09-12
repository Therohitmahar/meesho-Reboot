import React, { useEffect, useRef, useState } from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Link, Outlet } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./nav.css";
import { InfoState } from "../../context/Context";
import SearchedItem from "./SearchedItem.jsx";
import { Search, ShoppingCart, Smartphone, User2 } from "lucide-react";

export const Nav = () => {
  const [searchInput, setSearchInput] = useState();
  const {
    state: { cart },
    info,
    allProducts,
  } = InfoState();
  const [filteredData, setFilteredData] = useState();
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef();
  const category = [
    { title: "Electronics" },
    { title: "Mens Clothing" },
    { title: "Womens Clothing" },
    { title: "Jewelry and accessories" },
  ];
  function handleSearchBar(e) {
    let input = e.target.value.toLowerCase();
    let newData = [...allProducts, ...category].filter((item) =>
      item.title.toLowerCase().includes(input)
    );

    setFilteredData(newData);
  }
  return (
    <div>
      <div className="nav-container">
        <div
          className="logo"
          onClick={() => {
            setSearchInput("");
          }}
        >
          <Link to="/">
            <img
              src="https://seeklogo.com/images/M/meesho-logo-2E20AB77E8-seeklogo.com.png"
              alt="Meesho_logo"
            />
          </Link>
        </div>
        <div className="right-navbar">
          <div className="search-container">
            <Search className="search-svg" color="#f43397" />
            <input
              ref={inputRef}
              type="text"
              id="nav-search"
              onChange={handleSearchBar}
              onFocus={() => {
                setShowSearch(true);
              }}
              onBlur={() =>
                setTimeout(() => {
                  setShowSearch(false);
                }, 1000)
              }
              placeholder="Try Mens Clothing  Or Search by Product Code "
            />
            {showSearch && (
              <div className="searched-item">
                {filteredData &&
                  filteredData.map((item) => {
                    return filteredData.length == 0 ? null : (
                      <SearchedItem
                        key={item.id}
                        id={item.id}
                        title={item.title.split(" ").slice(0, 6).join(" ")}
                        setShowSearch={setShowSearch}
                        setSearchInput={setSearchInput}
                      />
                    );
                  })}
              </div>
            )}
          </div>
          <div className="border-right"></div>
          <div className="download ">
            <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow">
              <Smartphone color="#f43397" />
              <p>Download App</p>
            </a>
          </div>

          <div className=" border-right"></div>
          <Link to="/profile">
            <div className="profile ">
              <User2 color="#f43397" />
              <p>Profile</p>
            </div>
          </Link>
          <div className=" border-right"></div>

          <Link to="/cart">
            <div className="cart">
              <ShoppingCart color="#f43397" /> <p>Cart ({cart.length})</p>
            </div>
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
