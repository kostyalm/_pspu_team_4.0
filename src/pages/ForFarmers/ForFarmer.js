import styles from "./ForFarmer.module.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Store from "../../store/store";
import { Image } from "../../components/UIKit/Image/Image";
import { Footer } from "../../components/footer/Footer";
import { Button } from "../../components/UIKit/Button/Button";
import { FermerCard } from "../../components/fermerCard/fermerCard";
import Header from "../../components/Header/Header";
import { NewsCard } from "../../components/NewsCard/NewsCard";
import { FermerForm } from "../../components/fermerForm/FermerForm";
import ArticleService from "../../services/article.service";

export const ForFarmer = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await ArticleService.getAll();
            console.log(res.data)
            if(res.data) setNews(res.data);
        }
        getArticles();
    }, [news.length]);

  return (
    <>
      <div className={styles.page}>
        <Header />
        <main>
             <div className={styles.headerNewsDiv}>
                <div className={styles.headerNewsText}></div>
                <div className={styles.headerRight}></div>
             </div>
            {news.map((article) =>
                <NewsCard article={article}/>
            )}
             <FermerForm/>
             
        </main>
        <Footer/>
      </div>
    </>
  );
};
