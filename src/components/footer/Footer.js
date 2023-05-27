import { Image } from "../UIKit/Image/Image";
import styles from "./footer.module.css";
import {useNavigate} from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <Image src={"./source/logo.svg"} />
          <p
            style={{
              marginTop: "24px",
              marginBottom: "12px",
              fontWeight: "bold",
            }}
          >
            Мы в соц. сетях
          </p>
          <div className={styles.links}>
            <Image src={"./source/whats-up.svg"} />
            <Image src={"./source/vk.svg"} />
            <Image src={"./source/telega.svg"} />
          </div>
        </div>
        <div className={styles.column}>
          <span className={styles.spanName}>Каталог</span>
          <span className={styles.spanList}>Мясо и птица</span>
          <span>Молочные изделия</span>
          <span>Овощи и фрукты</span>
          <span>Бакалея</span>
          <span>Сладости</span>
          <span>Выпечка</span>
        </div>
        <div className={styles.column}>
          <span className={styles.spanName}>Навигация</span>
          <span>Главная</span>
          <span onClick={() => navigate('/catalog')}>Каталог</span>
          <span>Продуктовая корзина</span>
          <span>О нас</span>
          <span>Бонусная программа</span>
        </div>
        <div className={styles.column}>
          <span className={styles.spanName}>Для клиентов</span>
          <span>Доставка</span>
          <span>Гарантии</span>
          <span>Оферта</span>
          <span>Контакты</span>
        </div>
        <div className={styles.column}>
          <div className={styles.emailDiv}>
            <Image src={"./source/email-ico.svg"} />
            <span className={styles.email}>farmpspu@gmail.com</span>
          </div>
          <div className={styles.emailDiv}>
            <Image src={"./source/phone-ico.svg"} />
            <span className={styles.email}>+7 (800) 567-90-89</span>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.politica}>Политика конфиденциальности</div>
      </div>
    </footer>
  );
};
