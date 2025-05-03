import styles from "./Footer.module.css";
import { Container } from "../Container/Container";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <a href="" className="footer__logo"></a>
        <h3 className="footer__title"></h3>
        <ul className="footerAddress">
          <li className="footerAddress__item">
            <p className="footerAddress__text"></p>
          </li>
          <li className="footerAddress__item">
            <p className="footerAddress__text"></p>
          </li>
          <li className="footerAddress__item">
            <p className="footerAddress__text"></p>
          </li>
        </ul>
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
