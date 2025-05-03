import { useEffect, useState } from "react";
import { fetchWeatherByCity } from "../../api/weatherAPI";
import styles from "./Forecast.module.css";

const initialCities = ["Kyiv", "Lviv", "London"];

export const Forecast = () => {
  const [cities, setCities] = useState(() => {
    const saved = localStorage.getItem("cities");
    return saved ? JSON.parse(saved) : initialCities;
  });

  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
    const fetchData = async () => {
      try {
        const results = await Promise.all(cities.map(fetchWeatherByCity));
        setWeatherData(results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [cities]);

  const updateCityWeather = async (city) => {
    try {
      const updated = await fetchWeatherByCity(city);
      setWeatherData((prev) =>
        prev.map((item) => (item.name === city ? updated : item))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const removeCity = (city) => {
    setCities((prev) => prev.filter((c) => c !== city));
  };

  return (
    <section className={styles.forecast}>
      <ul className={styles.forecastList}>
        {weatherData.map((data) => (
          <li key={data.id} className={styles.forecastList__item}>
            <ul className={styles.forecastPlaces}>
              <li className={styles.forecastPlaces__item}>
                <p className={styles.forecastPlaces__text}>{data.name}</p>
              </li>
              <li className={styles.forecastPlaces__item}>
                <p className={styles.forecastPlaces__text}>
                  {data.sys.country}
                </p>
              </li>
            </ul>
            <h3 className={styles.forecast__hour}>
              {new Date(data.dt * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h3>

            <ul className={styles.forecastDate}>
              <li className={styles.forecastDate__item}>
                <p className={styles.forecastDate__text}>
                  {new Date(data.dt * 1000).toLocaleDateString()}
                </p>
              </li>
            </ul>

            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt={data.weather[0].description}
              className={styles.forecastList__photo}
            />

            <h3 className={styles.forecastList__degrees}>
              {Math.round(data.main.temp)}°C
            </h3>

            <button
              className={styles.forecastList__btn}
              onClick={() => updateCityWeather(data.name)}
            >
              🔄
            </button>

            <button
              className={styles.forecastList__btn}
              onClick={() => removeCity(data.name)}
            >
              ❌
            </button>

            <button className={styles.forecastList__more}>More details</button>
          </li>
        ))}
      </ul>
    </section>
  );
};
