import styles from "./fermerCard.module.css";
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Store from "../../store/store";
import { Image } from "../../components/UIKit/Image/Image";

export const FermerCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.cardMainDivPadd}>
      <div className={styles.cardMainDivMove}>
        <div className={styles.cardPhoto}>
          {/* Нужно передать фото */}
          <Image
            onClick={() => {
              navigate("/");
            }}
            src={"./source/grandfather.svg"}
            width={"143px"}
          />
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.infoName}>Дедуля Вишняковский</div>
          <div className={styles.infoCategories}>
            <span className={styles.categ}>Категории:</span> Молоко, яйца, хлеб
          </div>
          <div className={styles.infoDescription}>
            Описаниеописание описаниеОписаниеописание описаниеОписаниеописание
            описание
          </div>
        </div>
        <div className={styles.rightPart}>
          <div className={styles.mark}>
            4.9 <Image src={"./source/star-ico.svg"} />
          </div>
          <div className={styles.buttonR}>
            <button className={styles.bt}>К товарам</button>
          </div>
        </div>
      </div>
    </div>
    // <div className={styles.cardMainDivPadd}>
    //   <div className={styles.cardMainDivMove}>
    //     <div className={styles.cardPhoto}>
    //       {/* Нужно передать фото */}
    //       <Image
    //         onClick={() => {
    //           navigate("/");
    //         }}
    //         src={props.photo}
    //         width={"143px"}
    //       />
    //     </div>
    //     <div className={styles.cardInfo}>
    //       <div className={styles.infoName}>{props.name}</div>
    //       <div className={styles.infoCategories}>
    //         <span className={styles.categ}>Категории</span>
    //         {props.infoCategories}
    //       </div>
    //       <div className={styles.infoDescription}>{props.desc}</div>
    //     </div>
    //     <div className={styles.rightPart}>
    //       <div className={styles.mark}></div>
    //       <div className={styles.buttonR}>
    //         <button className={styles.bt}></button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
