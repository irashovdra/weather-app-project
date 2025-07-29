import React from "react";
import styles from "./NewsCard.module.css";

const NewsCard = ({ articlesToShow = [] }) => {
  return (
    <div className={styles.cardContainer}>
      {articlesToShow.map((article, index) => (
        <div key={index} className={styles.cardContent}>
          <img
            src={article.urlToImage}
            alt={article.title}
            className={styles.cardImg}
          />
          <h3 className={styles.cardArticle}>{article.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
