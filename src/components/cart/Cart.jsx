import React, { useEffect, useState } from "react";
import SingleCart from "./SingleCart";
import TotalPrice from "./TotalPrice";
import "./cart.css";
import { InfoState } from "../../context/Context";
import Popup from "../Popup/Popup";
import { useNavigate } from "react-router-dom";
function Cart() {
  const {
    state: { cart },
  } = InfoState();
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      {showModal && (
        <Popup
          onClose={() => setShowModal(false)}
          onGoToLogin={() => {
            navigate("/profile");
          }}
        />
      )}
      {cart.length > 0 ? (
        <div className="cart-page">
          <div className="left-cart">
            {cart.map((item) => {
              return (
                <SingleCart
                  key={item.id}
                  qty={item.qty}
                  payload={item}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              );
            })}
          </div>
          <div className="right-cart">
            <TotalPrice
              setShowModal={setShowModal}
              ContinueTitle="Continue"
              continueTo={"address"}
              timer={() => {}}
            />
          </div>
        </div>
      ) : (
        <div className="cart-page">
          <h1>Nothing In Cart</h1>
        </div>
      )}
    </>
  );
}

export default Cart;
