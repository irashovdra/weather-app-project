import styles from "./Hero.module.css";
import SearchIcon from "../../images/svgs/search.svg";
import loop from "../../images/svgs/loop.svg";
import cities from "../../top-1000-cities.json";
import { nanoid } from "nanoid";
import { useState, useEffect, useCallback } from "react";

const citiesNames = cities.map((item) => item.name).sort();

export default function Hero({ setLocation, proc, proc2 }) {
  const [uniqueData, setUniqueData] = proc2;
  const [showDrop, setShowDrop] = useState(false);
  const [passedCities, setPassedCities] = useState(citiesNames);

  const currentDate = new Date();
  const weekdays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  const day = currentDate.getDate();
  const suffix = ["th", "st", "nd", "rd"][
    day % 10 < 4 && (day % 100) - (day % 10) !== 10 ? day % 10 : 0
  ];

  const fetchCountry = useCallback((city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=524901&appid=c9400bae708c82b43bfc3a812d020418&q=${city}&units=metric`
    )
      .then((res) => res.json())
      .then((val) => {
        let doesExist = false;
        const newList = uniqueData.map((obj) =>
          obj.city === city
            ? ((doesExist = true), {
                city,
                country: val.sys.country,
                temp: val.main.temp.toFixed(1),
              })
            : obj
        );
        if (!doesExist) {
          setUniqueData([
            ...uniqueData,
            {
              city,
              country: val.sys.country,
              temp: val.main.temp.toFixed(1),
            },
          ]);
        } else {
          setUniqueData(newList);
        }
      });
  }, [uniqueData, setUniqueData]);

  useEffect(() => {
    fetchCountry("London");
  }, [fetchCountry]);

  function drop(list) {
    const len = Math.min(4, passedCities.length);
    const rawList = passedCities.splice(0, len);
    return len ? (
      rawList.map((city) => (
        <li
          key={nanoid()}
          onClick={(e) => {
            fetchCountry(city);
            proc((prev) => (!prev.includes(city) ? [...prev, city] : prev));
            e.target.closest("form").children[1].value = "";
          }}
        >
          <img src={loop} alt="search" />
          {city}
        </li>
      ))
    ) : (
      <li>No cities found</li>
    );
  }

  return (
    <section className={styles.heroBlock}>
      <h2>Weather dashboard</h2>
      <div className={styles.heroTextGroup}>
        <p>
          Create your personal list <br />
          of favorite cities and always <br />
          be aware of the weather.
        </p>
        <span></span>
        <p>
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          <br />
          {weekdays[currentDate.getDay()]}, {`${day}${suffix}`}
        </p>
      </div>
      <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
        {showDrop && <ul className={styles.searchDrop}>{drop(passedCities)}</ul>}
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search location..."
          onFocus={(e) => {
            setShowDrop(true);
            e.target.style.borderRadius = "10px 0px 0px 0px";
          }}
          onBlur={(e) => {
            setTimeout(() => {
              setShowDrop(false);
              e.target.style.borderRadius = "10px 0px 0px 10px";
            }, 100);
          }}
          onInput={(e) => {
            const q = e.target.value.toLowerCase();
            setPassedCities(
              citiesNames.filter((city) => city.toLowerCase().includes(q))
            );
          }}
        />
        <button className={styles.searchButton} type="submit">
          <img src={SearchIcon} alt="Search icon" />
        </button>
      </form>
    </section>
  );
}
