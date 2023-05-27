import styles from "./image.module.css";
export const Image = (props) => {
  return (
    <div
      className={styles.imageContainer}
      style={{ width: props.width }}
      {...props}
    >
      <img src={props.src} />
    </div>
  );
};
