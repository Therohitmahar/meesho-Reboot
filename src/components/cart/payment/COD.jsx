import { InfoState } from "../../../context/Context";
import styles from "../../../buttons.module.css";
import CashOnDelivery from "./CashOnDelivery";
import CreditPayment from "./CreditCardPayment";
import { useEffect } from "react";

export default function COD() {
  const { paymentMethod, setPaymentMethod, errorMsg } = InfoState();
  useEffect(() => {
    setPaymentMethod("Cash On Delivery");
  }, []);
  return (
    <div className={styles.widthFull}>
      {errorMsg.length !== 0 && <p className="errorMsg">{errorMsg}</p>}
      <div className={styles.flexSpaceBetween}>
        <h3> Payment Method: </h3>
        <div className={styles.flexRow}>{paymentMethod}</div>
      </div>
      <div className={styles.flexAlignCenter}>
        <CashOnDelivery />
        <CreditPayment />
      </div>
    </div>
  );
}
