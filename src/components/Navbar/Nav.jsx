import React, { useEffect, useRef, useState } from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Link, Outlet } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./nav.css";
import { InfoState } from "../../context/Context";
import SearchedItem from "./SearchedItem.jsx";

export const Nav = () => {
  const [searchInput, setSearchInput] = useState();
  const {
    state: { cart },
    info,
  } = InfoState();
  const [filteredData, setFilteredData] = useState();
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef();

  function handleSearchBar(e) {
    let input = e.target.value.toLowerCase();
    let newData = info.filter((item) =>
      item.title.toLowerCase().startsWith(input)
    );
    console.log();
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
        <div className="search-container">
          <SearchIcon className="search-svg" />
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
            placeholder="Try Saree, Kurta or Search by Product Code "
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
        <div className="download border-right">
          <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow">
            <PhoneIphoneIcon color="primary" />
            <p>Download App</p>
          </a>
        </div>
        <div className="border-right suplier">
          <p>Become a Supplier</p>
        </div>
        <Link to="/profile">
          <div className="profile">
            <AccountBoxIcon />
            <p>Profile</p>
          </div>
        </Link>

        <Link to="/cart">
          <div className="cart">
            <ShoppingCartIcon /> <p>Cart ({cart.length})</p>
          </div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
