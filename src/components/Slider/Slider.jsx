import { useEffect, useState } from "react";
import Container from "../Container/Container";
import left from "../../images/svgs/chevron-left.svg";
import right from "../../images/svgs/chevron-right.svg";
import styles from "./Slider.module.css";

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

  function getImages() {
    fetch("https://pixabay.com/api/?key=43085062-83502d00c5fb8aeb01fe37f91&min_width=6000&q=forest")
      .then((val) => val.json())
      .then((val) => {
        list = val.hits;
        setShow(true);
        updateList();
      });
  }

  function updateList() {
    const tempArr = [];
    for (let i = ((index + 18) % 20); i <= ((index + 22) % 20); i++) {
      tempArr.push(list[i]);
    }
    setActualList(tempArr);
  }

  useEffect(() => {
    getImages();
    const handler = (e) => {
      if (e.key === "ArrowRight") {
        setIndex((prev) => prev + 1);
      } else if (e.key === "ArrowLeft") {
        setIndex((prev) => prev - 1);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    updateList();
  }, [index]);

  return (
    <div className={styles.sliderBlock} style={{ marginTop: "80px" }}>
      <Container>
        <h2 style={{ marginBottom: "40px" }}>Beautiful nature</h2>
        <button className={styles.arrow} onClick={() => setIndex((prev) => prev - 1)}>
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
        <button className={styles.arrow} onClick={() => setIndex((prev) => prev + 1)}>
          <img src={right} alt="right" />
        </button>
      </Container>
    </div>
  );
}
