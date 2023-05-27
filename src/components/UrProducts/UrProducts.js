import styles from "./UrProducts.module.css";
import { ProductCard } from "../ProductCard/ProductCard";
import {ProductForm} from "../ProductForm/ProductForm";

export const UrProducts = ({products}) => {
    console.log(products);
  return (
    <div className={styles.mainDiv}>
      <div className={styles.textDiv}>ВАШИ ТОВАРЫ</div>
      <div className={styles.delay}>
        {/*<div className={styles.forAllCards}>*/}
          <ProductForm />
          {products.map((p) =>
              <ProductCard product={p}/>
          )}
        </div>
      {/*</div>*/}
    </div>
  );
};
