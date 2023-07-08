import React from "react";
import "./SingleCart.css";
import { InfoState } from "../../context/Context";
function SingleCart({ image, title, price, qty, payload }) {
  const { state: { cart },
    dispatch } = InfoState();
  return (
    <div className="main-cart">
      <div className="cart-item">
        <div className="cart-img">
          <img src={image}></img>
        </div>
        <div>
          <div className="title-button">
            <h5>{title}</h5>
          </div>
          <div className="small-detail">
            <p>size: Free Size</p>
            <p>Qty: {qty}</p>
          </div>
          <p>Rs. {price}</p>

          <button onClick={() => {
            dispatch({
              type: "removeFromCart",
              payload: payload,
            })
          }}>x REMOVE</button>
          <div style={{ display: 'flex' }}>
            <button
              style={{ border: "1px solid rgba(0,0,0,0.2)" }}
              onClick={() => {
                dispatch({
                  type: "decQty",
                  payload: payload,
                })
              }}>-</button>
            <p style={{ border: "1px solid rgba(0,0,0,0.2)", padding: "0 2px" }}>{qty}</p>
            <button style={{ border: "1px solid rgba(0,0,0,0.2)" }} onClick={() => {

              dispatch({
                type: "incQty",
                payload: payload,
              })
            }}>+</button>
          </div>
        </div>
      </div>
      <div className="cart-bottom">
        <p>Sold by: Meesho</p>
        <p>Free Delivery</p>
      </div>
    </div>
  );
}

export default SingleCart;
