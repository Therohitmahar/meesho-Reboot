import React, { useState } from "react";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { InfoState } from "../../context/Context";
import "./address.css";
import styles from "../../buttons.module.css";

export default function Address() {
  const navigate = useNavigate();
  const {
    address: { name, phoneNumber, roadName, houseName, pincode, city, state },
    setAddress,
  } = InfoState();
  const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newErrorMessages = {
      name: name.trim() === "" ? "Name is required." : "",
      phoneNumber:
        phoneNumber.length !== 10 ? "Please enter a valid Phone Number." : "",
      houseName: houseName.trim() === "" ? "House Name is required." : "",
      roadName: roadName.trim() === "" ? "Road Name is required." : "",
      pincode: pincode.length !== 6 ? "Please enter a valid Pincode." : "",
      city: city.trim() === "" ? "City is required." : "",
      state: state.trim() === "" ? "State is required." : "",
    };

    setErrorMsg(newErrorMessages);

    // Check if there are any error messages
    if (Object.values(newErrorMessages).every((message) => message === "")) {
      // All fields are valid, navigate to the next step
      navigate("payment");
    }
  }

  return (
    <div className="address-css">
      <form onSubmit={handleSubmit}>
        <p
          style={{
            color: "red",
            backgroundColor: "lightcyan",
            fontSize: "1rem",
          }}
        >
          {errorMsg}
        </p>
        <h2>
          <FiPhone /> Contact Details
        </h2>
        <input
          id="name"
          type="text"
          onChange={(e) => {
            setAddress({ ...address, name: e.target.value });
          }}
          placeholder="Name"
          required
        />
        <input
          id="phoneNumber"
          type="number"
          onChange={(e) =>
            setAddress({ ...address, phoneNumber: e.target.value })
          }
          placeholder="Phone Number"
          required
        />
        <h2>
          <FiMapPin /> Address
        </h2>
        <input
          id="houseNumber"
          type="text"
          onChange={(e) =>
            setAddress({ ...address, houseName: e.target.value })
          }
          placeholder="House no./ Building Name"
          required
        />
        <input
          id="roadName"
          type="text"
          onChange={(e) => setAddress({ ...address, roadName: e.target.value })}
          placeholder="Road Name / Area / Colony"
          required
        />
        <input
          id="pincode"
          type="number"
          onChange={(e) =>
            setAddress({ ...address, pincode: e.target.value.slice(0, 6) })
          }
          placeholder="Pincode"
          required
        />
        <div className={("city-state", styles.flex)}>
          <input
            type="text"
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            placeholder="City"
            style={{ width: "90%", marginRight: "15px" }}
            required
          />
          <input
            type="text"
            onChange={(e) => setAddress({ ...address, state: e.target.value })}
            placeholder="State"
            style={{ width: "90%" }}
            required
          />
        </div>
        <button type="submit">Save Address and continue</button>
      </form>
    </div>
  );
}
