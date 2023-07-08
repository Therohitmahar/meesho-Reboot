import React, { useEffect } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login-form">
        <img src="https://images.meesho.com/images/marketing/1661417516766.webp"></img>
        <h3>Sign Up to view your profile</h3>
        <form>
          <div className="number-input">
            <p>IN +91</p>
            <input type="text" required placeholder="Phone Number"></input>
          </div>

          <button type="submit" onClick={() => {
            alert('OTP 564287');
            navigate('otp');
          }}>Continue</button>
        </form>
      </div>
    </div>
  );
}

export function OTPConfirm() {
  // useEffect(() => {


  //   alert('OTP 564287')
  //   return () => {

  //   }
  // }, [])
  const navigate = useNavigate();

  return (<>
    <div className="login-container">
      <div className="login-form">
        <img src="https://images.meesho.com/images/marketing/1661417516766.webp"></img>
        <h3>Sign Up to view your profile</h3>
        <form>
          <div className="info-input">

            <input type="email" required placeholder="Email"></input>
            <input type="text" required placeholder="First Name"></input>
            <input type="text" required placeholder="Last Name"></input>
            <input type="text" required placeholder="otp" value="564287"></input>
          </div>

          <button type="submit" onClick={() => {
            navigate('/')
          }}>Continue</button>
        </form>
      </div>
    </div>
  </>)
}