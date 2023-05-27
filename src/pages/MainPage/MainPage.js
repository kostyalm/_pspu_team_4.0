import styles from "./landing.module.css";
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
import { NewsCard } from "../../components/NewsCard/NewsCard";
import UserService from "../../services/user.service";

export const MainPage = () => {
  const store = useContext(Store);
  const navigate = useNavigate();
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await UserService.getUsers();
      if (res) setFarmers(res.data.data.filter(f => f.roles.includes('FARMER')));
    }
    getUsers();
  }, [farmers.length]);
  // TODO : сделать функцию получения фермера

  // useEffect(() => {
  //   const getFermer = async () => {
  //     const p = await UserService.getFermer();
  //     setFermer(p);
  //   };
  //   getFermer();
  // }, [fermer.length]);

  return (
    <>
      <div className={styles.page}>
        <Header />
        <main className={styles.mainBlock}>
          <div className={styles.banner}>
            <div className={styles.bannerContent}>
              <div className={styles.bannerText}>
                Свежие продукты <br /> от профессиональных фермеров
              </div>
              <div className={styles.bannerTextP}>
                Доставляем по всей России
              </div>
            </div>
          </div>

          <div className={styles.ourProductDiv}>
            <div className={styles.headText}>
              <span>НАШИ ТОВАРЫ</span>
              <div className={styles.catalogButton}>
                <Button onClick={() => navigate("/")} id={"catalog"}>
                  В каталог
                </Button>
              </div>
            </div>
            <div className={styles.productList}>
              <Image
                onClick={() => {
                  navigate("/");
                }}
                src={meet}
                // width={"252px"}
              />
              <Image
                onClick={() => {
                  navigate("/");
                }}
                src={milk}
                // width={"252px"}
              />
              <Image
                onClick={() => {
                  navigate("/");
                }}
                src={vegetables}
                // width={"252px"}
              />
              <Image
                onClick={() => {
                  navigate("/");
                }}
                src={grocery}
                // width={"252px"}
              />
              <Image
                onClick={() => {
                  navigate("/");
                }}
                src={sweets}
                // width={"252px"}
              />
              <Image
                onClick={() => {
                  navigate("/");
                }}
                src={backery}
                // width={"252px"}
              />
            </div>
          </div>

          <div className={styles.imgPG}>
            <div
              className={styles.basketDivMain}
              style={{ padding: "24px 16px" }}
            >
              <div className={styles.basketText}>ПРОДУКТОВАЯ КОРЗИНА</div>
              <p className={styles.basketTextP}>
                Выберите продукты, которые хотели бы видеть себя на столе каждую
                неделю/месяц/сезон, добавьте их в корзину и оформите подписку на
                продуктовую корзину. Мы будем доставлять именно эти продукты
                каждый выбранный вами период
              </p>
              <button className={styles.butChooseProduct}>
                Выбрать товары
              </button>
            </div>
          </div>

          {/* <div className={styles.productBasket}>
            <Image
              src={"./source/bannerBucket.svg"}
              width={"100%"}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            />
            <div className={styles.basketDivMain}>
              <div className={styles.basketText}>ПРОДУКТОВАЯ КОРЗИНА</div>
              <p className={styles.basketTextP}>
                Выберите продукты, которые хотели бы видеть себя на столе каждую
                неделю/месяц/сезон, добавьте их в корзину и оформите подписку на
                продуктовую корзину. Мы будем доставлять именно эти продукты
                каждый выбранный вами период
              </p>
              <button className={styles.butChooseProduct}>
                Выбрать товары
              </button>
            </div>
          </div> */}

          <div className={styles.fermersDiv}>
            <div className={styles.fermersText}>
              ФЕРМЕРЫ, КОТОРЫЕ ТРУДЯТСЯ ДЛЯ ВАС
            </div>
            <div className={styles.fermersCards}>
              {farmers.length > 0 && farmers.map((f) =>
                <FermerCard farmer={f}/>
              )}
              {/* <FermerCard fermer={fermer} />
              <FermerCard />
              <FermerCard />
              <FermerCard /> */}
            </div>
          </div>
          
        </main>
      </div>
      <Footer />
    </>
  );
};
