const NewsCard = ({articlesToShow = [] }) => {
    return (
        <div>
            {articlesToShow.map((article, index) => (
                <div key={index} className="news-card" >
                    <img src={article.urlToImage} alt={article.title}/>
                    <h3 className="news-title">{article.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default NewsCard;    