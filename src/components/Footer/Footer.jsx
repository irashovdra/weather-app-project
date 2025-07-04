import styles from "./Footer.module.css";
import { Container } from "../Container/Container";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <a href="/" className="footer__logo">
        <img src="../../images/logo.png" alt="logo" />
        </a>
        <h3 className="footer__title1">Address</h3>
        <ul className="footerAddress">
          <li className="footerAddress__item">
            <p className="footerAddress__text">Svobody str. 35</p>
          </li>
          <li className="footerAddress__item">
            <p className="footerAddress__text">Kyiv</p>
          </li>
          <li className="footerAddress__item">
            <p className="footerAddress__text">Ukraine</p>
          </li>
        </ul>
        <h3 className="footer__title2">Contact us</h3>
        <ul className="footerContacts">
          <li className="footerContacts__item">
            <svg className="footerContacts__icon"></svg>
          </li>
          <li className="footerContacts__item">
            <svg className="footerContacts__icon"></svg>
          </li>
          <li className="footerContacts__item">
            <svg className="footerContacts__icon"></svg>
          </li>
        </ul>
      </Container>
    </footer>
  );
};
