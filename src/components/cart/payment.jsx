import React, { useEffect, useState } from "react";
import TotalPrice from "./TotalPrice";
import { InfoState } from "../../context/Context";
import styles from "../../buttons.module.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import COD from "./payment/COD";
import "./checkout.css";

function Payment() {
  const {
    state: { cart },
    setErrorMsg,
  } = InfoState();
  useEffect(() => {
    setErrorMsg("");
  }, []);
  return (
    <div className={styles.marginTop}>
      {cart.length > 0 ? (
        <div className={styles.flexEven}>
          <COD />
          <TotalPrice
            continueTo={"checkout"}
            ContinueTitle="Continue"
            justSaying="true"
            timer={() => {}}
            checkPayment={true}
          />
        </div>
      ) : (
        <div className="cart-page">
          <h1>Nothing In Cart</h1>
        </div>
      )}
    </div>
  );
}

export default Payment;
