import CardList from "./components/cardList/cardList.jsx";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Navbar/Nav.jsx";
import Cart from "./components/cart/Cart.jsx";
import Product from "./components/product/product.jsx";
import { Home } from "./components/Home.jsx";
import Profile from "./components/profile/Profile.jsx";
import Address from "./components/cart/Address.jsx";
import Payment from "./components/cart/payment.jsx";
import Checkout from "./components/cart/Checkout.jsx";
import "./App.css";
function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/product" element={<CardList />} exact></Route>
        <Route path="/product/:Id" element={<Product />} />
        <Route path="cart" element={<Cart />}></Route>
        <Route path="cart/address" element={<Address />} />
        <Route path="cart/address/payment" element={<Payment />} />
        <Route path="cart/address/payment/checkout" element={<Checkout />} />
        <Route path="profile" element={<Profile />} exact />
      </Routes>
    </>
  );
}

export default App;
