import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo.jpg";
import user from "../../images/user.jpg";
import HeaderModal from "../HeaderModal/HeaderModal";

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
        <img className={styles.logo} src={logo} alt="Logo" />
        <button className={styles.menuButton} onClick={toggleDropdown}>
          Menu
        </button>
        <div
          className={`${styles.dropdownMenu} ${
            isDropdownOpen ? styles.dropdownMenuOpen : ""
          }`}
        >
          <p className={styles.headerText}>Who we are</p>
          <p className={styles.headerText}>Contacts</p>
          <p className={styles.headerText}>Menu</p>

          <div className={styles.mobileUserSection}>
            <img className={styles.userIcon} src={user} alt="User" />
            {userName ? (
              <span>{userName}</span>
            ) : (
              <button className={styles.loginBtn} onClick={handleSignUp}>
                Sign Up
              </button>
            )}
          </div>
        </div>

        <div className={styles.userSection}>
          <img className={styles.userIcon} src={user} alt="User" />
          {userName ? (
            <span>{userName}</span>
          ) : (
            <button className={styles.loginBtn} onClick={handleSignUp}>
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
