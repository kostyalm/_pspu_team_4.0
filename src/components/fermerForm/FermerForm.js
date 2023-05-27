import styles from "./FermerForm.module.css";
import { Button } from "../UIKit/Button/Button";
import { Image } from "../UIKit/Image/Image";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../index";
import { Input } from "../UIKit/Input/Input";
export const FermerForm = () => {
  return (
    <div className={styles.imgPG}>
      <div className={styles.basketDivMain} style={{ padding: "24px 16px" }}>
        <div className={styles.basketText}>
          ХОТИТЕ СТАТЬ ЧАСТЬЮ НАШЕЙ ДРУЖНОЙ КОМАНДЫ?
        </div>
        <p className={styles.basketTextP}>
          Заполните информацию о вашей ферме и продуктах, которые она
          производит. Наш менеджер свяжется с вами через 15 минут
        </p>
        <button className={styles.butChooseProduct}>Заполнить анкету</button>
      </div>
    </div>
    // <div className={styles.imgPG}>
    //   <div className={styles.basketDivMain}>
    //     <div className={styles.basketText}>
    //       ХОТИТЕ СТАТЬ ЧАСТЬЮ НАШЕЙ ДРУЖНОЙ КОМАНДЫ?
    //     </div>
    //     <p className={styles.basketTextP}>
    //       Заполните информацию о вашей ферме и продуктах, которые она
    //       производит. Наш менеджер свяжется с вами через 15 минут
    //     </p>
    //     <button className={styles.butChooseProduct}>Заполнить анкету</button>
    //   </div>
    // </div>
  );
};
