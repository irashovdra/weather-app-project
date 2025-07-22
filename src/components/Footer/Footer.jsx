// Footer.jsx
import React from "react";
import styles from "./Footer.module.css";
import logo from "../../images/logo.png";
import inst from "../../images/insta.png";
import face from "../../images/facebook.png";
import whatsapp from "../../images/whatsapp.png";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.addressAndContact}>
          <div className={styles.addressSection}>
            <h2 className={styles.sectionTitle}>Address</h2>
            <ul className={styles.addressList}>
              <li className={styles.addressItem}>Svobody str. 35</li>
              <li className={styles.addressItem}>Kyiv</li>
              <li className={styles.addressItem}>Ukraine</li>
            </ul>
          </div>
          <div className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>Contact us</h2>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <a href="#"><img src={inst} alt="Instagram" /></a>
              </li>
              <li className={styles.contactItem}>
                <a href="#"><img src={face} alt="Facebook" /></a>
              </li>
              <li className={styles.contactItem}>
                <a href="#"><img src={whatsapp} alt="WhatsApp" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
