
import React, { useState } from "react";
import HeaderModal from "../SignUpModal/SignUpModal";
import styles from "./Header.module.css";
import logo from "../../images/logo.png";
import user from "../../images/user.png";

const Header = ({ setIsLoggedIn }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignUp = () => {
    setIsModalOpen(true);
    setIsDropdownOpen(false);
  };

  const handleModalClose = (name) => {
    setUserName(name);
    setIsModalOpen(false);
    setIsLoggedIn(true);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <button onClick={toggleDropdown} className={styles.menuButton}>
          Menu
        </button>

        <div
          className={`${styles.dropdownMenu} ${
            isDropdownOpen ? styles.open : ""
          }`}
        >
          <p className={styles.headerText}>Who we are</p>
          <p className={styles.headerText}>Contacts</p>
          <p className={styles.headerText}>Menu</p>

          <div className={styles.mobileUserSection}>
            <img src={user} alt="User" className={styles.userIcon} />
            {userName ? (
              <span>{userName}</span>
            ) : (
              <button onClick={handleSignUp} className={styles.loginBtn}>
                Sign Up
              </button>
            )}
          </div>
        </div>

        <div className={styles.userSection}>
          <img src={user} alt="User" className={styles.userIcon} />
          {userName ? (
            <span>{userName}</span>
          ) : (
            <button onClick={handleSignUp} className={styles.loginBtn}>
              Sign Up
            </button>
          )}
        </div>
      </div>

      {isModalOpen && <HeaderModal onClose={handleModalClose} />}
    </>
  );
};

export default Header;
