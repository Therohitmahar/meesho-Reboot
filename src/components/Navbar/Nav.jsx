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
    let value = e.target.value;
    if (value.length === 0) {
      setShowSearch(false);
    }
    setSearchInput(value);
    setShowSearch(true);
    handleFilter();
    inputRef.current.onfocus = () => {
      console.log(inputRef.current.value);
      setShowSearch(true);
    };

    inputRef.current.onblur = () => {
      setTimeout(() => {
        setShowSearch(false);
      }, 300);
    };
  }

  function handleFilter() {
    if (info == undefined) {
      return null;
    } else {
      const filteringData = info.filter((item) => {
        if (item == undefined) return false;
        else
          return item.title.toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredData(filteringData);
    }
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
            onChange={(e) => {
              handleSearchBar(e);
            }}
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
      <div className="lower-nav">
        <ul>
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
      <Outlet />
    </div>
  );
};
