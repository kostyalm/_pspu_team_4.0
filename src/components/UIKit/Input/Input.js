import styles from './Input.module.css';

export const Input = (params) => {
    return (<input className={styles.input} style={{...params.style}} {...params}/>)
}