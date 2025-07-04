import styles from "./Nature.module.css";
import { Container } from "../Container/Container";

export const Nature = () => {
  return (
    <section className="nature">
      <Container>
        <div className="natureSlider">
          <img src="src/images/nature1.png" alt="" className="natureSlider__photo" />
          <img src="src/images/nature2.png" alt="" className="natureSlider__photo" />
          <img src="src/images/nature3.png" alt="" className="natureSlider__photo" />
          <img src="src/images/nature4.png" alt="" className="natureSlider__photo" />
        </div>
      </Container>
    </section>
  );
};
