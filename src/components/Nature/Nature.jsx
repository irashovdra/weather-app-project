import styles from "./Nature.module.css";
import { Container } from "../Container/Container";

export const Nature = () => {
  return (
    <section className="nature">
      <Container>
        <h2 className="nature__title">Beautiful nature</h2>
        <div className="natureSlider">
          <img src="../../images/nature1.png" alt="nature1" className={styles.natureSlider__photo} />
          <img src="../../images/nature2.png" alt="nature2" className={styles.natureSlider__photo} />
          <img src="../../images/nature3.png" alt="nature3" className={styles.natureSlider__photo} />
          <img src="../../images/nature4.png" alt="nature4" className={styles.natureSlider__photo} />
          <img src="../../images/nature5.png" alt="nature5" className={styles.natureSlider__photo} />
        </div>
      </Container>
    </section>
  );
};