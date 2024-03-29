import React, { useEffect, useState } from "react";
import SingleCart from "./SingleCart";
import TotalPrice from "./TotalPrice";
import "./cart.css";
import { InfoState } from "../../context/Context";
import styles from "../../buttons.module.css";
import { useNavigate } from "react-router-dom";
function Cart() {
  const {
    state: { cart },
  } = InfoState();

  const navigate = useNavigate();

  return (
    <div className={styles.mainCartPage }>
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
              ContinueTitle="Continue"
              continueTo={"address"}
              timer={() => {}}
              checkPayment={false}
            />
          </div>
        </div>
      ) : (
        <div className="cart-page">
          <h1>Nothing In Cart</h1>
        </div>
      )}
    </div>
  );
}

export default Cart;
