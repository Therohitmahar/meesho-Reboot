import React from "react";
import TotalPrice from "./TotalPrice";
import { BsShieldFillCheck } from "react-icons/bs";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { InfoState } from "../../context/Context";
import styles from "../../buttons.module.css";

function COD() {
  return (
    <div className={styles.widthFull}>
      <div className={styles.flex}>
        <h3> Payment Method</h3>
        <div className={styles.flexRow}>
          <BsShieldFillCheck />{" "}
          <span style={{ fontSize: "14px" }}>100% Secure Payment</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <span style={{ fontSize: "14px" }}>PAY IN CASH</span>
        <div
          style={{
            height: "1px",
            width: "50%",
            backgroundColor: "grey",
            marginRight: "50px",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <input
          style={{ boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)" }}
          type="checkbox"
          checked
          onChange={() => {}}
        ></input>
        <p style={{ marginRight: "20px" }}>Cash on Delivery</p>
        <IoCheckmarkCircleSharp />
      </div>
    </div>
  );
}
function Payment() {
  const {
    state: { cart },
  } = InfoState();
  return (
    <>
      {cart.length > 0 ? (
        <div className={styles.flex}>
          <COD />
          <TotalPrice
            continueTo={"checkout"}
            ContinueTitle="Continue"
            justSaying="true"
            timer={() => {}}
          />
        </div>
      ) : (
        <div className="cart-page">
          <h1>Nothing In Cart</h1>
        </div>
      )}
    </>
  );
}

export default Payment;
