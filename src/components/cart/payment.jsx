import React, { useState } from "react";
import TotalPrice from "./TotalPrice";
import { InfoState } from "../../context/Context";
import styles from "../../buttons.module.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Cards from "react-credit-cards-2";
import "./checkout.css";
import { ChevronDown, ChevronLeft } from "lucide-react";
function CreditPayment() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [focus, setFocus] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [openCredit, setOpenCredit] = useState(false);
  const { setPaymentMethod, codSelected, setCodSelected } = InfoState();
  console.log(codSelected);
  function handleAddCard(e) {
    e.preventDefault();
    if (number.length === 16 && cvv.length === 3 && expiry.length === 4) {
      setCodSelected(false);
      setPaymentMethod("Credit Card");
      setOpenCredit(false);
      setErrorMsg("");
    } else {
      setErrorMsg("⛔Enter Valid Card Details");
    }
  }
  console.log();
  return (
    <div className={styles.width100}>
      <h4 className={styles.h4} onClick={() => setOpenCredit(!openCredit)}>
        Credit Card / Debit Cart{" "}
        <span>{openCredit ? <ChevronDown /> : <ChevronLeft />}</span>
      </h4>
      <div className={openCredit ? "height100 creditDiv" : "creditDiv height0"}>
        <Cards
          number={number}
          expiry={expiry}
          cvc={cvv}
          name={name}
          focused={focus}
        />
        <form onSubmit={handleAddCard}>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            maxLength={16}
            value={number.slice(0, 16)}
            onChange={(e) => setNumber(e.target.value.slice(0, 16))}
            onFocus={(e) => setFocus(e.target.name)}
            required
          />

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            required
          />
          <input
            type="number"
            name="cvc"
            maxLength="3"
            placeholder="CVV"
            value={cvv.slice(0, 3)}
            onChange={(e) => setCvv(e.target.value.slice(0, 3))}
            onFocus={(e) => setFocus(e.target.name)}
            required
          />
          <input
            type="number"
            name="expiry"
            placeholder="Expiry MM/YY"
            value={expiry.slice(0, 4)}
            maxLength={4}
            onChange={(e) => setExpiry(e.target.value.slice(0, 4))}
            onFocus={(e) => setFocus(e.target.name)}
            required
          />
          <p>{errorMsg}</p>
          <button>Add Card</button>
        </form>
      </div>
    </div>
  );
}

function CashOnDelivery() {
  const { setPaymentMethod, codSelected, setCodSelected } = InfoState();
  return (
    <div className={styles.flexSpaceBetween}>
      <h4>Cash On Delivery</h4>
      <input
        type="checkbox"
        checked={codSelected}
        onChange={(e) => {
          setCodSelected(e.target.checked);
          if (e.target.checked) {
            setPaymentMethod("Cash on Delivery");
          } else setPaymentMethod("");
        }}
      />
    </div>
  );
}
function COD() {
  const { paymentMethod } = InfoState();
  return (
    <div className={styles.widthFull}>
      <div className={styles.flexSpaceBetween}>
        <h3> Payment Method</h3>
        <div className={styles.flexRow}>{paymentMethod}</div>
      </div>
      <div className={styles.flexAlignCenter}>
        <CashOnDelivery />
        <CreditPayment />
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
        <div className={styles.flexEven}>
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
