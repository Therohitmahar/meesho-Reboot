import React, { useEffect, useState } from "react";
import "./profile.css";
import styles from "../../buttons.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
export default function Profile() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log(user);
  return (
    <>
      <div className="login-container">
        {!isAuthenticated ? (
          <div className="login-form">
            <img src="https://images.meesho.com/images/marketing/1661417516766.webp"></img>
            <h3>Log in / Sign up</h3>
            <button
              className={styles.loginBtn}
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          </div>
        ) : (
          <div className="isauth">
            {user.name && <h3>Hello {user.name}</h3>}
            <button className={styles.loginBtn} onClick={(e) => logout()}>
              Log Out
            </button>

            <button
              style={{
                padding: "13px",
                display: "block",
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
        )}
      </div>
    </>
  );
}
