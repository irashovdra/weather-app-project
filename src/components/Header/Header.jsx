import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.header__logo}>
        <img src="../../images/header-logo.png" alt="logo" />
      </a>
      <nav>
        <ul className={styles.headerList}>
          <li className={styles.headerList__item}>
            <a href="" className={styles.headerList__link}>
              Who we are
            </a>
          </li>
          <li className={styles.headerList__item}>
            <a href="" className={styles.headerList__link}>
              Contacts
            </a>
          </li>
          <li className={styles.headerList__item}>
            <a href="" className={styles.headerList__link}>
              Menu
            </a>
          </li>
        </ul>
      </nav>
      <button className={styles.header__btn}>Sign Up</button>
      <img
        src="../../images/user.png"
        alt="user"
        className={styles.header__user}
      />
    </header>
  );
};
