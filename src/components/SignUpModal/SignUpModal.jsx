import React, { useState, useEffect } from "react";
import styles from "./header.module.css";

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
        <div className={styles.container}>
          <h1 className={styles.title}>Sign Up</h1>
          <label className={styles.label}>Username:</label>
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
          <label className={styles.label}>E-Mail:</label>
          <input type="email" placeholder="E-Mail" className={styles.input} />
          <label className={styles.label}>Password:</label>
          <input type="password" placeholder="Password" className={styles.input} />
          <button className={styles.button} onClick={handleSignUp}>Sign Up</button>
          <p className={styles.text}>Already have an account? Log In</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderModal;
