import styles from "./UrProducts.module.css";
import { Button } from "../UIKit/Button/Button";
import { Image } from "../UIKit/Image/Image";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../index";
import { Input } from "../UIKit/Input/Input";
import { ProductForm } from "../ProductForm/ProductForm";
import { ProductCard } from "../ProductCard/ProductCard";

export const UrProducts = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.textDiv}>ВАШИ ТОВАРЫ</div>
      <div className={styles.delay}>
        {/*<div className={styles.forAllCards}>*/}
          <ProductForm />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      {/*</div>*/}
    </div>
  );
};
