import React, { useEffect } from "react";
import "./totalPrice.css";
import { InfoState } from "../../context/Context";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";

function TotalPrice({
  handleSuccess,
  timer,
  continueTo,
  ContinueTitle,
  dispatch,
  justSaying,
}) {
  const {
    state: { cart },
  } = InfoState();
  const [total, setTotal] = useState();
  const [continues, setContinues] = useState(false);
  const navigate = useNavigate();
  function lateTimer() {
    setContinues(true);
    setTimeout(() => {
      navigate(continueTo);
      setContinues(false);
    }, 2000);
  }

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [cart]);
  console.log(justSaying);
  return (
    <>
      {continues ? (
        <>
          <h1>LOADING....</h1>
        </>
      ) : (
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
          {justSaying === "false" ? (
            ""
          ) : (
            <p className="just-saying">
              Clicking on 'Continue' will not deduct any money
            </p>
          )}
          <button
            onClick={() => {
              lateTimer();
              handleSuccess();
              timer();
            }}
          >
            {ContinueTitle}
          </button>
          <img src="https://drive.google.com/u/0/uc?id=1CQprfvDdihKoFw21dYznnS4fSoo-odbM&export=download"></img>
        </div>
      )}
    </>
  );
}

export default TotalPrice;
