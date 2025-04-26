import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <h2 className={styles.hero__title}>Weather dashboard</h2>
      <ul className={styles.heroList}>
        <li className={styles.heroList__item}>
          <p className={styles.heroList__text}>
            Create your personal list of favorite cities and always be aware of
            the weather.
          </p>
        </li>
        <li className={styles.heroList__item}>
          <p className={styles.heroList__text}>
            October 2023 <br />
            Friday, 13th
          </p>
        </li>
      </ul>
      <input
        placeholder="Search location..."
        type="text"
        className={styles.hero__search}
      />
      <button className={styles.hero__btn}></button>
    </section>
  );
};
