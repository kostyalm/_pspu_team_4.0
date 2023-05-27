import styles from "./NewsCard.module.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Store from "../../store/store";
import { Image } from "../../components/UIKit/Image/Image";
import { Footer } from "../../components/footer/Footer";
import backery from "../../img/backery.png";
import grocery from "../../img/grocery.png";
import meet from "../../img/meet.png";
import milk from "../../img/milk.png";
import sweets from "../../img/sweets.png";
import vegetables from "../../img/vegetables.png";
import { Button } from "../../components/UIKit/Button/Button";
import { FermerCard } from "../../components/fermerCard/fermerCard";
import Header from "../../components/Header/Header";

export const NewsCard = ({article}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.mainDivPadding}>
      <div className={styles.mainDivFlex}>
        <div className={styles.divTextH1}>
          {article.title}
        </div>
        <div className={styles.divOverAllInfo}>
          <div className={styles.description}>
            {article.description}
          </div>
          <div className={styles.divkeyWords}>
            <span className={styles.keyWord}>Ключевые слова: </span>
            <span className={styles.keyWords}>
              Маржинальность, объем продаж, потери, анализ
            </span>
          </div>
        </div>
        <div className={styles.button}><Button width={'252px'} onClick={() => navigate(article.link)}>К статье</Button></div>
      </div>
    </div>
  );
};
