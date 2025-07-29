import React, { useState, useEffect } from "react";
import styles from "./HeaderModal.module.css";

const HeaderModal = ({ onClose }) => {
  const [name, setName] = useState("");

  const handleSignUp = () => {
    if (name.trim()) {
      onClose(name);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.modalContainer}>
          <h1 className={styles.modalTitle}>Sign Up</h1>

          <label className={styles.modalLabel}>Username:</label>
          <input
            className={styles.modalInput}
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className={styles.modalLabel}>E-Mail:</label>
          <input
            className={styles.modalInput}
            type="email"
            placeholder="E-Mail"
          />

          <label className={styles.modalLabel}>Password:</label>
          <input
            className={styles.modalInput}
            type="password"
            placeholder="Password"
          />

          <button className={styles.modalBtn} onClick={handleSignUp}>
            Sign Up
          </button>

          <p className={styles.modalText}>Already have an account? Log In</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderModal;
