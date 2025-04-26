import styles from "./Forecast.module.css";

export const Forecast = () => {
  return (
    <section className={styles.forecast}>
      <ul className={styles.forecastList}>
        <li className={styles.forecastList__item}>
          <ul className={styles.forecastPlaces}>
            <li className={styles.forecastPlaces__item}>
              <p className={styles.forecastPlaces__text}></p>
            </li>
            <li className={styles.forecastPlaces__item}>
              <p className={styles.forecastPlaces__text}></p>
            </li>
          </ul>
          <h3 className={styles.forecast__hour}></h3>
          <button className={styles.forecast__btn}></button>
          <ul className={styles.forecastDate}>
            <li className={styles.forecastDate__item}>
              <p className={styles.forecastDate__text}></p>
            </li>
          </ul>
          <img src="" alt="" className={styles.forecastList__photo} />
          <h3 className={styles.forecastList__degrees}></h3>
          <button className={styles.forecastList__btn}></button>
          <button className={styles.forecastList__btn}></button>
          <button className={styles.forecastList__more}></button>
          <button className={styles.forecastList__btn}></button>
        </li>
        <li className={styles.forecastList__item}>
          <ul className={styles.forecastPlaces}>
            <li className={styles.forecastPlaces__item}>
              <p className={styles.forecastPlaces__text}></p>
            </li>
            <li className={styles.forecastPlaces__item}>
              <p className={styles.forecastPlaces__text}></p>
            </li>
          </ul>
          <h3 className={styles.forecast__hour}></h3>
          <button className={styles.forecast__btn}></button>
          <ul className={styles.forecastDate}>
            <li className={styles.forecastDate__item}>
              <p className={styles.forecastDate__text}></p>
            </li>
          </ul>
          <img src="" alt="" className={styles.forecastList__photo} />
          <h3 className={styles.forecastList__degrees}></h3>
          <button className={styles.forecastList__btn}></button>
          <button className={styles.forecastList__btn}></button>
          <button className={styles.forecastList__more}></button>
          <button className={styles.forecastList__btn}></button>
        </li>
        <li className={styles.forecastList__item}>
          <ul className={styles.forecastPlaces}>
            <li className={styles.forecastPlaces__item}>
              <p className={styles.forecastPlaces__text}></p>
            </li>
            <li className={styles.forecastPlaces__item}>
              <p className={styles.forecastPlaces__text}></p>
            </li>
            <h3 className={styles.forecast__hour}></h3>
            <button className={styles.forecast__btn}></button>
            <ul className={styles.forecastDate}>
              <li className={styles.forecastDate__item}>
                <p className={styles.forecastDate__text}></p>
              </li>
            </ul>
            <img src="" alt="" className={styles.forecastList__photo} />
            <h3 className={styles.forecastList__degrees}></h3>
            <button className={styles.forecastList__btn}></button>
            <button className={styles.forecastList__btn}></button>
            <button className={styles.forecastList__more}></button>
            <button className={styles.forecastList__btn}></button>
          </ul>
        </li>
      </ul>
    </section>
  );
};
