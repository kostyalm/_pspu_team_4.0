import styles from "./fermerCard.module.css";
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import {Image} from "../UIKit/Image/Image";
export const FermerCard = ({farmer}) => {


  const navigate = useNavigate();
  return (
    // <div className={styles.cardMainDivPadd}>
    //   <div className={styles.cardMainDivMove}>
    //     <div className={styles.cardPhoto}>
    //       {/* Нужно передать фото */}
    //       <Image
    //         onClick={() => {
    //           navigate("/");
    //         }}
    //         src={"./source/grandfather.svg"}
    //         width={"143px"}
    //       />
    //     </div>
    //     <div className={styles.cardInfo}>
    //       <div className={styles.infoName}>Дедуля Вишняковский</div>
    //       <div className={styles.infoCategories}>
    //         <span className={styles.categ}>Категории:</span> Молоко, яйца, хлеб
    //       </div>
    //       <div className={styles.infoDescription}>
    //         Потомственный почвосажатель, отец Виткора Маразмат Вацапович приучил ребёнка к ферме
    //       </div>
    //     </div>
    //     <div className={styles.rightPart}>
    //       <div className={styles.mark}>
    //         4.9 <Image src={"./source/star-ico.svg"} />
    //       </div>
    //       <div className={styles.buttonR}>
    //         <button className={styles.bt}>К товарам</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className={styles.cardMainDivPadd}>
      <div className={styles.cardMainDivMove}>
        <div className={styles.cardPhoto}>
          {/* TODO Нужно передать фото */}
          <Image
            onClick={() => {
              navigate("/");
            }}
            src={"./source/grandfather.svg"}
            width={"143px"}
          />
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.infoName}>{farmer.name || farmer.email}</div>
          <div className={styles.infoCategories}>
            <span className={styles.categ}>Категории</span>
            {/*{farmer.infoCategories}*/}
          </div>
          <div className={styles.infoDescription}>farmer.desc</div>
        </div>
        <div className={styles.rightPart}>
          <div className={styles.mark}></div>
          <div className={styles.buttonR}>
            <button className={styles.bt}>Перейти</button>
          </div>
        </div>
      </div>
    </div>
  );
};
