import styles from "./image.module.css";
export const Image = (props) => {
  return (
    <div
      {...props}
      className={styles.imageContainer}
      style={{ width: props.width }}
    >
      <img src={props.src} />
    </div>
  );
};
