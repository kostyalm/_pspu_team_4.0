import styles from "./header.module.css";
import { Button } from "../UIKit/Button/Button";
import { Image } from "../UIKit/Image/Image";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../index";
import { Input } from "../UIKit/Input/Input";

export const Header = () => {
    const navigate = useNavigate();
    const {store} = useContext(Context);
    console.log(store.getAuth(), store.getUser());
    return (
        <header className={styles.mainContainer}>
            <div className={styles.logo}>
                <Image width={'30%'} src={'./source/logo.svg'} />
                <Input name={'search'} placeholder={'Найти среди 1000 товаров'} style={{ marginLeft: '40px'}}/>
            </div>
            <menu className={styles.menuContainer}>
                <div className={styles.menuItem} onClick={() => navigate('/profile')}>Профиль</div>
                <div className={styles.menuItem} onClick={() => navigate('/product')}>Продукт</div>
                <div className={styles.menuItem}>Контакты</div>
            </menu>
            <div className={styles.buttonsContainer}>
                {!store.getAuth() && <Button onClick={() => navigate('/login')} id={'auth'}>Вход/Регистрация</Button>}
                <Button style={{padding: '10px', marginLeft: '16px', marginRight: '16px'}}>
                    <Image src={'./source/basket.svg'} width={'28px'}/>
                </Button>
                <Button style={{padding: '10px', background: 'white', border: '2px solid var(--brandColor)'}}>
                    <Image src={'./source/heart.svg'} width={'28px'}/>
                </Button>
            </div>
        </header>
    );
}
