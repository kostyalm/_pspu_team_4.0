import styles from './button.module.css';
export const Button = (params) => {
    return (
        <button className={styles.button} role={"button"} onClick={params.onClick} {...params}>{params.children}</button>
    );
}