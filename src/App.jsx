import CardList from "./components/cardList/cardList.jsx";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Navbar/Nav.jsx";
import Cart from "./components/cart/Cart.jsx";
import Product from "./components/product/product.jsx";
import { Home } from "./components/Home.jsx";
import Profile from "./components/profile/Profile.jsx";
import Payment from "./components/cart/payment.jsx";
import Checkout from "./components/cart/Checkout.jsx";
import "./App.css";
import Jewellery from "./pages/jewellery.jsx";
import Electronics from "./pages/electronics.jsx";
import MensClothing from "./pages/mensClothing.jsx";
import WomensClothing from "./pages/womensClothing.jsx";
import AddressPage from "./components/cart/Address.jsx";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/product" element={<CardList />} exact></Route>
        <Route path="/jewellery" element={<Jewellery />} exact></Route>
        <Route path="/electronics" element={<Electronics />} exact></Route>
        <Route path="/mens_clothing" element={<MensClothing />} exact></Route>
        <Route
          path="/womens_clothing"
          element={<WomensClothing />}
          exact
        ></Route>
        <Route path="/product/:Id" element={<Product />} />
        <Route path="cart" element={<Cart />}></Route>
        <Route path="cart/address" element={<AddressPage />} />
        <Route path="cart/address/payment" element={<Payment />} />
        <Route path="cart/address/payment/checkout" element={<Checkout />} />
        <Route path="profile" element={<Profile />} exact />
      </Routes>
    </>
  );
}

export default App;
