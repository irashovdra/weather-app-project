import Container from "../Container"
import bin from "../../img/svgs/delete.svg"
import heart from "../../img/svgs/heart.svg"
import refresh from "../../img/svgs/refresh.svg"
import sun from "../../img/svgs/sun.svg"
import temperature from "../../img/svgs/temperature.svg"
import pressure from "../../img/svgs/pressure.svg"
import humidity from "../../img/svgs/humidity.svg"
import wind from "../../img/svgs/wind.svg"
import { useCallback, useEffect, useState } from "react"
import styles from "./Weather.module.css"

const Weather = ({ cityName, weather, updateWeather, removeCity }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (weather?.main) setLoaded(true)
  }, [weather])

  const onRefresh = useCallback(() => {
    if (!loaded) return
    setLoaded(false)
    updateWeather(cityName)
  }, [updateWeather, cityName, loaded])

  const temp = weather?.main?.temp?.toFixed()
  const pressureValue = weather?.main?.pressure
  const humidityValue = weather?.main?.humidity
  const windSpeed = weather?.wind?.speed?.toFixed()

  return (
    <Container className={styles.weather}>
      <div className={styles["weather__row"]}>
        <div className={styles["weather__top"]}>
          <div className={styles["weather__title-wrap"]}>
            <img src={sun} alt="sun" className={styles["weather__icon"]} />
            <h2 className={styles["weather__title"]}>{cityName}</h2>
          </div>
          <div className={styles["weather__buttons"]}>
            <button
              className={styles["weather__btn"]}
              onClick={onRefresh}
              aria-label="Refresh"
            >
              <img src={refresh} alt="refresh" />
            </button>
            <button
              className={styles["weather__btn"]}
              onClick={() => removeCity(cityName)}
              aria-label="Remove"
            >
              <img src={bin} alt="delete" />
            </button>
          </div>
        </div>
        {loaded && (
          <div className={styles["weather__content"]}>
            <div className={styles["weather__temp"]}>
              <img src={temperature} alt="temperature" />
              <span>{temp}°C</span>
            </div>
            <div className={styles["weather__info"]}>
              <div className={styles["weather__info-item"]}>
                <img src={pressure} alt="pressure" />
                <span>{pressureValue} hPa</span>
              </div>
              <div className={styles["weather__info-item"]}>
                <img src={humidity} alt="humidity" />
                <span>{humidityValue}%</span>
              </div>
              <div className={styles["weather__info-item"]}>
                <img src={wind} alt="wind" />
                <span>{windSpeed} m/s</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}

export default Weather
