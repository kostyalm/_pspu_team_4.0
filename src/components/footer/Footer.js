import { Image } from "../UIKit/Image/Image";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <Image src={"./source/logo.svg"} width={"100%"} />
          <p>Мы в соц. сетях</p>
          <nav className={styles.links}>
            <div>вк</div>
            <div>телега</div>
          </nav>
        </div>
        <div className={styles.column}>
          <span>Catalog</span>
          <span>Catalog</span>
          <span>Catalog</span>
          <span>Catalog</span>
          <span>Catalog</span>
          <span>Catalog</span>
          <span>Catalog</span>
        </div>
        <div className={styles.column}>
          <span>Catalog</span>
          <span>Catalog</span>
          <span>Catalog</span>
          <span>Catalog</span>
          <span>Catalog</span>
          <span>Catalog</span>
        </div>
        <div className={styles.column}>
          <span>Catalog</span>
          <span>Catalog</span>
          <span>Catalog</span>
          <span>Catalog</span>
          <span>Catalog</span>
          <span>Catalog</span>
        </div>
        <div className={styles.column}>
          <span>Email</span>
          <span>Catalog</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>пролитика конф</div>
      </div>
    </footer>
  );
};
