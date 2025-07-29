import React, { useEffect, useState } from "react";
import styles from "./News.module.css";
import NewsCard from "./NewsCard";
import Container from "../Container/Container";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const apiKey = "ca8726351add45fab675ebcca0097d3f";
  const query = "apple";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`
        );
        const data = await response.json();
        setArticles(data.articles.filter((article) => article.urlToImage));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [query]);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <Container>
      <div className={styles.newsContainer}>
        <h2 className={styles.newsTitle}>Interacting with our pets</h2>
        <div className={styles.newsContent}>
          <NewsCard articlesToShow={articles.slice(0, visibleCount)} />
        </div>
        {visibleCount < articles.length && (
          <div className={styles.buttonContainer}>
            <button className={styles.newsBtn} onClick={handleSeeMore}>
              See More
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default News;
