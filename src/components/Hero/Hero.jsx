import heroBackground from "../../images/hero-bg.jpg";
import loop from "../../images/loop.png";
import SearchIcon from "../../images/loop.png";
import cities from "../../top-1000-cities.json";
import { nanoid } from "nanoid";
import { useState, useCallback, useEffect } from "react";
import styles from "./Hero.module.css";

const citiesNames = cities.map((item) => item.name).sort();

export default function Hero({ setLocation, proc, proc2 }) {
  const currentDate = new Date();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [uniqueData, setUniqueData] = proc2;
  const [showDrop, setShowDrop] = useState(false);
  const [passedCities, setPassedCities] = useState(citiesNames);

  const day = currentDate.getDate();
  const suffix = ["th", "st", "nd", "rd"][
    day % 10 < 4 && (day % 100) - (day % 10) !== 10 ? day % 10 : 0
  ];

  const fetchCountry = useCallback((city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=524901&appid=c9400bae708c82b43bfc3a812d020418&q=${city}&units=metric`)
      .then(res => res.json())
      .then(data => {
        const exists = uniqueData.some(item => item.city === city);
        const updated = uniqueData.map(obj =>
          obj.city === city ? {
            city,
            country: data.sys.country,
            temp: data.main.temp.toFixed(1),
          } : obj
        );

        if (exists) {
          setUniqueData(updated);
        } else {
          setUniqueData([...uniqueData, {
            city,
            country: data.sys.country,
            temp: data.main.temp.toFixed(1),
          }]);
        }
      });
  }, [uniqueData, setUniqueData]);

  useEffect(() => {
    fetchCountry("London");
  }, []);

  const drop = () => {
    const len = Math.min(4, passedCities.length);
    const rawList = passedCities.slice(0, len);

    if (len) {
      return rawList.map(city => (
        <li
          onClick={(e) => {
            fetchCountry(city);
            proc(prev => prev.includes(city) ? [...prev] : [...prev, city]);
            e.target.closest("form").children[1].value = "";
          }}
          key={nanoid()}
        >
          <img src={loop} alt="search" />
          {city}
        </li>
      ));
    } else {
      return <li>No cities found</li>;
    }
  };

  const handleFormSubmit = (e) => e.preventDefault();

  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${heroBackground})` }}>
      <h2>Weather dashboard</h2>
      <div className={styles.infoBlock}>
        <p>
          Create your personal list <br />
          of favorite cities and always <br />
          be aware of the weather.
        </p>
        <span></span>
        <p>
          {months[currentDate.getMonth()]} {currentDate.getFullYear()} <br />
          {weekdays[currentDate.getDay()]}, {`${day}${suffix}`}
        </p>
      </div>
      <form className={styles.searchForm} onSubmit={handleFormSubmit}>
        {showDrop && <ul className={styles.searchDrop}>{drop()}</ul>}
        <input
          className={styles.searchInput}
          type="text"
          name="location"
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
            setPassedCities(citiesNames.filter(city =>
              city.toLowerCase().includes(q)
            ));
          }}
        />
        <button className={styles.searchButton} type="submit">
          <img src={SearchIcon} alt="Search icon" />
        </button>
      </form>
    </section>
  );
}
