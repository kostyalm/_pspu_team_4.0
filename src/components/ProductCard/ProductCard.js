import styles from "./productCard.module.css";
export const ProductCard = ({product}) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardContent}>
                <div className={styles.cardImage}></div>
                <div className={styles.main}>
                    <div className={styles.cardName}>{product.name}</div>
                    <div className={styles.price}>
                        <span>{product.price}{' '}Р</span><span className={styles.priceAmount}>/1 шт</span>
                    </div>
                    <div className={styles.description}>
                        {product.description}
                    </div>
                </div>

                <div className={styles.buttonsContainer}>
                    <div className={styles.button}>В корзину</div>
                    <div className={styles.amount}>
                        <span>—</span>
                        <span>1</span>
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
    );
}