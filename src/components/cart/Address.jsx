import React from "react";
import { FiPhone, FiMapPin } from "react-icons/fi";
import "./address.css";
import { useNavigate } from "react-router-dom";

export default function Address() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("payment");
  }
  return (
    <div className="address-css">
      <form
        style={{
          display: "flex",

          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <h2>
          <FiPhone /> Contact Details
        </h2>
        <input type="text" required placeholder="Name" />
        <input type="text" required placeholder="Phone Numberd" />

        <h2>
          <FiMapPin /> Address
        </h2>
        <input required placeholder="House no./ Building Name" />
        <input required placeholder="Road Name / Area / Colony" />
        <input required placeholder="Pincode" />
        <div className="city-state" style={{ display: "flex", width: "100%" }}>
          <input
            required
            placeholder="City"
            style={{ width: "90%", marginRight: "15px" }}
          />
          <input required placeholder="State" style={{ width: "90%" }} />
        </div>
        <button type="submit">Save Address and continue</button>
      </form>
    </div>
  );
}
