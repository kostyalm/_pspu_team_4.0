import styles from "./productCard.module.css";
export const ProductCard = () => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardContent}>
                <div className={styles.cardImage}></div>
                <div className={styles.main}>
                    <div className={styles.cardName}>Some name</div>
                    <div className={styles.price}>
                        <span>250{' '}Р</span><span className={styles.priceAmount}>/1 шт</span>
                    </div>
                    <div className={styles.description}>
                        dadada
                        dadadaa
                        daadada
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