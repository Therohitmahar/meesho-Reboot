import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Link, Outlet } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./nav.css";
import { InfoState } from "../../context/Context";

export const Nav = () => {
  const {
    state: { cart },
  } = InfoState();
  return (
    <div>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img
              src="https://seeklogo.com/images/M/meesho-logo-2E20AB77E8-seeklogo.com.png"
              alt="Meesho_logo"
            />
          </Link>
        </div>
        <div className="search-container">
          <SearchIcon />
          <input
            type="text"
            id="nav-search"
            placeholder="Try Saree, Kurta or Search by Product Code "
          />
        </div>
        <div className="download border-right">
          <PhoneIphoneIcon color="primary" />
          <p>Download App</p>
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
