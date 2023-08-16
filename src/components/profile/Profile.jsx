import React, { useEffect, useRef, useState } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const UsernameRef = useRef();
  const passwordRef = useRef();
  const [isLog, setIsLog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const localOrder = JSON.parse(localStorage.getItem("order"));
    console.log(localOrder);
    const localData = JSON.parse(localStorage.getItem("auth"));
    if (localData) {
      if (localData.isLogged) setIsLog(true);
      else {
        setIsLog(false);
      }
      console.log("in if");
    } else {
      const authData = {
        username: "admin",
        password: "admin",
        isLogged: false,
      };

      localStorage.setItem("auth", JSON.stringify(authData));
      setIsLog(false);
    }
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    const localData = JSON.parse(localStorage.getItem("auth"));
    if (
      UsernameRef.current.value == localData.username &&
      passwordRef.current.value == localData.password
    ) {
      alert("Login Successful");
      setIsLog(true);
      localStorage.setItem(
        "auth",
        JSON.stringify({ ...localData, isLogged: true })
      );
      return;
    }
  }
  return (
    <>
      {isLog ? (
        <div style={{ textAlign: "center" }}>
          <h1 style={{ textAlign: "center" }}>Your Order is Empty</h1>
          <button
            style={{
              padding: "13px",
              backgroundColor: "#F43397",
              border: "none",
              borderRadius: "5px",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => navigate("/cart")}
          >
            Go To Cart
          </button>
        </div>
      ) : (
        <div className="login-container">
          <div className="login-form">
            <img src="https://images.meesho.com/images/marketing/1661417516766.webp"></img>
            <h3>Log in to view your profile</h3>
            <form onSubmit={handleSubmit}>
              <div className="info-input">
                <input
                  type="text"
                  ref={UsernameRef}
                  required
                  placeholder="Username"
                ></input>
                <input
                  type="password"
                  ref={passwordRef}
                  required
                  placeholder="Password"
                ></input>
              </div>

              <button type="submit">Log In</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
