import styles from "./Hero.module.css";
import { Container } from "../Container/Container";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <h2 className={styles.hero__title}>Weather dashboard</h2>
        <ul className={styles.heroList}>
          <li className={styles.heroList__item}>
            <p className={styles.heroList__text}>
              Create your personal list of favorite cities and always be aware
              of the weather.
            </p>
          </li>
          <li className={styles.heroList__item}>
            <p className={styles.heroList__text}>
              October 2023 <br />
              Friday, 13th
            </p>
          </li>
        </ul>
        <div className={styles.hero__filling}>
          <input
            placeholder="Search location..."
            type="text"
            className={styles.hero__search}
          />
          <button className={styles.hero__btn}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
};
