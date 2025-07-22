import { useEffect, useState } from "react";
import Container from "../Container/Container";
import left from "../../images/left-arrow.png";
import right from "../../images/right-arrow.png";
import styles from "./Nature.module.css"

let list = [
  { largeImageURL: "./", id: 124 },
  { largeImageURL: "./", id: 125 },
  { largeImageURL: "./", id: 126 },
  { largeImageURL: "./", id: 127 },
  { largeImageURL: "./", id: 128 },
];

export default function Slider() {
  const [actualList, setActualList] = useState([]);
  const [index, setIndex] = useState(2);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=43085062-83502d00c5fb8aeb01fe37f91&min_width=6000&q=forest"
    )
      .then((res) => res.json())
      .then((data) => {
        list = data.hits;
        setShow(true);
        updateList();
      });
    
    const handleKey = (e) => {
      if (e.key === "ArrowRight") setIndex((prev) => prev + 1);
      if (e.key === "ArrowLeft") setIndex((prev) => prev - 1);
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    updateList();
  }, [index]);

  function updateList() {
    const tempArr = [];
    for (let i = (index + 18) % 20; i <= (index + 22) % 20; i++) {
      tempArr.push(list[i]);
    }
    setActualList(tempArr);
  }

  return (
    <div className={styles.sliderBlock}>
      <Container>
        <h2 style={{ marginBottom: "40px" }}>Beautiful nature</h2>
        <button
          className={styles.arrow}
          onClick={() => setIndex((prev) => prev - 1)}
        >
          <img src={left} alt="left" />
        </button>

        {show && (
          <ul className={styles.sliderList}>
            {actualList.map((item) => (
              <li key={item.id}>
                <img src={item.largeImageURL} alt="component" />
              </li>
            ))}
          </ul>
        )}

        <button
          className={styles.arrow}
          onClick={() => setIndex((prev) => prev + 1)}
        >
          <img src={right} alt="right" />
        </button>
      </Container>
    </div>
  );
}
