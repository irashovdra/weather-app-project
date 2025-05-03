import styles from "./Pets.module.css";
import { Container } from "../Container/Container";

export const Pets = () => {
  return (
    <section className={styles.pets}>
      <Container>
        <h3 className={styles.pets__title}></h3>
        <ul className={styles.petsList}>
          <li className={styles.petsList__item}>
            <img src="" alt="dog ghost" className={styles.petsList__photo} />
            <p className={styles.petsList__text}>
              Rescue pups pose as ghosts in festive photo shoot
            </p>
          </li>
          <li className={styles.petsList__item}>
            <img src="" alt="cat" className={styles.petsList__photo} />
            <p className={styles.petsList__text}>
              Cat interrupts morning coffee on sunny Washington morning
            </p>
          </li>
          <li className={styles.petsList__item}>
            <img src="" alt="dog" className={styles.petsList__photo} />
            <p className={styles.petsList__text}>
              New study finds dogs pay more attention to women
            </p>
          </li>
          <li className={styles.petsList__item}>
            <img src="" alt="dog" className={styles.petsList__photo} />
            <p className={styles.petsList__text}>
              Petting dogs gives health benefit, even if they are not yours
            </p>
          </li>
        </ul>
        <button className={styles.pets__btn}>See more</button>
      </Container>
    </section>
  );
};
