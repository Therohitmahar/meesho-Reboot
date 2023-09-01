import React from "react";
import styles from "../../buttons.module.css";
export default function Popup({ onClose, onGoToLogin }) {
  return (
    <section className={styles.popup}>
      <h2>⚠️Please Login First</h2>
      <div className={styles.flex}>
        <button className={styles.loginBtn} onClick={onGoToLogin}>
          Go To Login
        </button>
        <button className={styles.loginBtn} onClick={onClose}>
          Close
        </button>
      </div>
    </section>
  );
}
