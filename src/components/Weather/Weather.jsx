import React, { useCallback, useEffect, useState } from "react";
import Container from "../Container/Container";
import bin from "../../images/svgs/delete.svg";
import heart from "../../images/svgs/heart.svg";
import refresh from "../../images/svgs/refresh.svg";
import sun from "../../images/svgs/sun.svg";
import temperature from "../../images/svgs/temperature.svg";
import pressure from "../../images/svgs/pressure.svg";
import wind from "../../images/svgs/wind.svg";
import humidity from "../../images/svgs/humidity.svg";
import visibility from "../../images/svgs/visibility.svg";
import { nanoid } from "nanoid";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
} from "chart.js";

import styles from "./Weather.module.css";

Chart.register(
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale
);

export default function Weather({ city, uniqueDataBlock }) {
  const [cities, setCities] = city;
  const [uniqueData, setUniqueData] = uniqueDataBlock;
  const [moreData, setMoreData] = useState(false);
  const [weeklyForecast, setWeeklyForecast] = useState(false);
  const [hourlyForecast, setHourlyForecast] = useState(false);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [actualTime, setActualTime] = useState();
  const [weeklyData, setWeeklyData] = useState([]);
  const [hourlyData, setHourlyData] = useState({});

  const [weatherInfo, setWeatherInfo] = useState({});
  const fetchData = useCallback((city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=524901&appid=c9400bae708c82b43bfc3a812d020418&q=${city}&units=metric`
    )
      .then((val) => val.json())
      .then((val) => {
        const data = val.main;
        setWeatherInfo({
          temperature: data.temp.toFixed(1),
          feelsLike: data.feels_like.toFixed(1),
          minTemp: data.temp_min.toFixed(1),
          maxTemp: data.temp_max.toFixed(1),
          humidity: data.humidity,
          pressure: data.pressure,
          visibility: "Unlimited",
          windSpeed: val.wind.speed,
        });
      });
  }, []);

  const fetchTotal = useCallback((city) => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=fb25167606234fa5ae1230349241811&q=${city}&days=8&aqi=no&alerts=no`
    )
      .then((val) => val.json())
      .then((val) => {
        const data = val.forecast.forecastday;
        const dataMap = data[0].hour;
        const tempArr = [];
        data.map((item) => {
          tempArr.push({
            date: item.date_epoch,
            max: item.day.maxtemp_c,
            min: item.day.mintemp_c,
            text: item.day.condition.text,
            icon: item.day.condition.icon,
          });
          return false;
        });
        setWeeklyData(tempArr);
        const labels = [];
        const values = [];
        dataMap.map((item) => {
          labels.push(item.time.slice(-5));
          values.push(item.temp_c);
          return false;
        });
        setHourlyData({
          labels: labels,
          datasets: [
            {
              label: "Temperature",
              data: values,
              borderColor: "#FFB36C",
              borderWidth: 3,
              radius: 0,
            },
          ],
        });
      });
  }, []);

  const WeeklyList = weeklyData.map((item) => {
    let time = new Date(item.date * 1000);
    time = String(time).slice(0, 3) + ", " + String(time).slice(4, 10);
    return (
      <li key={nanoid()}>
        <p>{time}</p>
        <span>
          <img src={item.icon} alt="weather icon" />
          <p className="temperature">
            {item.max}/{item.min}℃
          </p>
        </span>
        <p>{item.text}</p>
      </li>
    );
  });

  function deleteCard(city) {
    const newList = cities.filter((item) => item !== city);
    setCities(newList);
    const newData = uniqueData.filter((item) => item.city !== city);
    setUniqueData(newData);
  }

  function getTime() {
    const date = new Date();
    let mins = date.getMinutes();
    let hours = date.getHours();
    if (mins < 10) {
      mins = `0${mins}`;
    }
    if (hours === 0) {
      fetchData(cities[0]);
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
    setActualTime(`${hours}:${mins}`);
  }

  useEffect(() => {
    const date = new Date();
    getTime();
    fetchData(cities[0]);
    fetchTotal(cities[0]);
    setTimeout(() => {
      getTime();
      setInterval(() => {
        getTime();
      }, 60000);
    }, (60 - date.getSeconds()) * 1000);
  }, []);

  const cardsList = cities.map((city) => {
    return (
      <li key={city}>
        <ul>
          <li>
            <p>{city}</p>
          </li>
          <li>
            <p>
              {uniqueData.map((obj) => {
                if (obj.city === city) {
                  return obj.country;
                }
              })}
            </p>
          </li>
        </ul>
        <h2>{actualTime}</h2>
        <ul className={styles.options}>
          <li>
            <button
              className={styles.optionButton}
              onClick={(e) => {
                setHourlyForecast((prev) => !prev);
                if (!hourlyForecast) fetchTotal(city);
                e.target.classList.add(styles.clicked);
                setTimeout(() => {
                  e.target.classList.remove(styles.clicked);
                }, 175);
              }}
            >
              Hourly forecast
            </button>
          </li>
          <li>
            <button
              className={styles.optionButton}
              onClick={(e) => {
                setWeeklyForecast((prev) => !prev);
                if (!weeklyForecast) fetchTotal(city);
                e.target.classList.add(styles.clicked);
                setTimeout(() => {
                  e.target.classList.remove(styles.clicked);
                }, 175);
              }}
            >
              Weekly forecast
            </button>
          </li>
        </ul>
        <h4>
          {(new Date()).getDate()}.{(new Date()).getMonth() + 1}.
          {(new Date()).getFullYear()} | {daysOfWeek[(new Date()).getDay()]}
        </h4>
        <img src={sun} alt="weather" />
        <h3>
          {uniqueData.map((obj) => {
            if (obj.city === city) {
              return obj.temp;
            }
          })}
          ℃
        </h3>
        <div>
          <img
            src={refresh}
            alt="refresh"
            onClick={(e) => {
              fetchData(city);
              fetchTotal(city);
              e.target.classList.add(styles.clicked);
              setTimeout(() => {
                e.target.classList.remove(styles.clicked);
              }, 175);
            }}
          />
          <img
            src={heart}
            alt="heart"
            onClick={(e) => {
              e.target.classList.add(styles.clicked);
              setTimeout(() => {
                e.target.classList.remove(styles.clicked);
              }, 175);
            }}
          />
          <button
            className={styles.optionButton}
            onClick={(e) => {
              e.target.classList.add(styles.clicked);
              setTimeout(() => {
                e.target.classList.remove(styles.clicked);
              }, 175);
              setMoreData((prev) => !prev);
              if (!moreData) fetchData(city);
            }}
          >
            See more
          </button>
          <img
            src={bin}
            alt="bin"
            onClick={(e) => {
              deleteCard(city);
              e.target.classList.add(styles.clicked);
              setTimeout(() => {
                e.target.classList.remove(styles.clicked);
              }, 175);
              setMoreData(false);
              setHourlyForecast(false);
              setWeeklyForecast(false);
            }}
          />
        </div>
      </li>
    );
  });

  return (
    <section>
      <Container>
        <div className={styles.wrapper}>
          <ul className={styles.cardList}>{cardsList}</ul>
          {moreData ? (
            <div className={styles.moreData}>
              <ul>
                <li>
                  <p>Feels like</p>
                  <h3>{weatherInfo.feelsLike}℃</h3>
                  <img src={temperature} alt="temperature" />
                </li>
                <li>
                  <p>Min ℃</p>
                  <h3>{weatherInfo.minTemp}℃</h3>
                  <p>Max ℃</p>
                  <h3>{weatherInfo.maxTemp}℃</h3>
                </li>
                <li>
                  <p>Humidity</p>
                  <h3>{weatherInfo.humidity}%</h3>
                  <img src={humidity} alt="humidity" />
                </li>
                <li>
                  <p>Pressure</p>
                  <h3>{weatherInfo.pressure} Pa</h3>
                  <img src={pressure} alt="pressure" />
                </li>
                <li>
                  <p>Wind speed</p>
                  <h3>{weatherInfo.windSpeed} km/h</h3>
                  <img src={wind} alt="wind" />
                </li>
                <li>
                  <p>Visibility</p>
                  <h3>{weatherInfo.visibility}</h3>
                  <img src={visibility} alt="visibility" />
                </li>
              </ul>
            </div>
          ) : null}
          {hourlyForecast ? (
            <div className={styles.hourlyData}>
              <h2>Hourly forecast</h2>
              <Line data={hourlyData}></Line>
            </div>
          ) : null}
          {weeklyForecast ? (
            <div className={styles.weeklyData}>
              <h3>Weekly forecast</h3>
              <ul>{WeeklyList}</ul>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
