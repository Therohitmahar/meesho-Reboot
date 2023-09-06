import { InfoState } from "../../../context/Context";
import styles from "../../../buttons.module.css";

export default function CashOnDelivery() {
  const { paymentMethod, setPaymentMethod, codSelected, setCodSelected } =
    InfoState();
  console.log(paymentMethod);
  return (
    <div className={styles.cashH4}>
      <h4>Cash On Delivery</h4>
      <input
        type="checkbox"
        checked={codSelected}
        onChange={(e) => {
          setCodSelected(e.target.checked);
          if (e.target.checked) {
            setPaymentMethod("Cash on Delivery");
          } else setPaymentMethod("Not Selected");
        }}
      />
    </div>
  );
}
