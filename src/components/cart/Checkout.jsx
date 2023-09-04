import React, { useEffect, useState } from "react";
import { InfoState } from "../../context/Context";
import SingleCart from "./SingleCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Confetti from "../utils/Confetti";
import styles from "../../buttons.module.css";
import { useNavigate } from "react-router-dom";
import { FiTruck } from "react-icons/fi";
import "./totalPrice.css";
import "./checkout.css";
import { MapPin, Phone } from "lucide-react";
function Checkout() {
  const {
    state: { cart },
    dispatch,
    address: { name, phoneNumber, roadName, houseName, pincode, city, state },
    deliveryDate,
    paymentMethod,
  } = InfoState();
  const [total, setTotal] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [cart]);

  const [confetti, setConfetti] = useState(false);

  function letsToast() {
    toast.success("Order Placed!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  window.timer = function () {
    localStorage.setItem(
      "order",
      JSON.stringify({ ...cart, deliveryDate: deliveryDate })
    );

    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
      dispatch({ type: "clear" });
      navigate("/");
    }, 3000);
    letsToast();
  };

  return (
    <div className={styles.flexEven}>
      {cart.length > 0 && (
        <div className={styles.widthFull}>
          <div className="ETA">
            <FiTruck /> Estimated Delivery by {" " + deliveryDate}
          </div>
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

          <div className={styles.CheckoutPay}>
            <h3> Payment Method:</h3>
            <div className={styles.flexRow}>{paymentMethod}</div>
          </div>
          <div className={styles.checkoutAddress}>
            <h2 className={styles.phone}>
              <MapPin color="#f43397" /> Address
            </h2>
            <h3>
              {`${name}, ${houseName}, ${roadName}, ${city}-${pincode}, ${state}`}
            </h3>
            <h4 className={styles.phone}>
              <Phone color="#f43397" />
              Phone Number: {phoneNumber}
            </h4>
          </div>
        </div>
      )}
      <div className="price-details">
        <h3>Price Details</h3>
        <div className="price-flex">
          <p>Total Product Price</p>
          <p>Rs. {total}</p>
        </div>
        <div className="additional price-flex">
          <p>Additional Fees</p>
          <p>+ Rs. 0</p>
        </div>
        <div className="price-flex price-total">
          <p>Order Total</p>
          <p>Rs. {total}</p>
        </div>

        <button
          onClick={() => {
            timer();
          }}
        >
          Place Order
        </button>
        <img src="https://drive.google.com/u/0/uc?id=1CQprfvDdihKoFw21dYznnS4fSoo-odbM&export=download"></img>
      </div>
      {confetti && <Confetti />}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Checkout;
