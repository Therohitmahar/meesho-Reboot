import React from "react";
import SingleCart from "./SingleCart";
import TotalPrice from "./TotalPrice";
import "./cart.css";
import { InfoState } from "../../context/Context";
function Cart() {
  const {
    state: { cart },
  } = InfoState();
  return (
    <>
      {cart.length > 0 ? (
        <div className="cart-page">
          <div className="left-cart">
            {cart.map((item) => {
              return (
                <SingleCart
                  key={Date.now}
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
