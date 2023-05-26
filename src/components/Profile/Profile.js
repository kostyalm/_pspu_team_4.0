import styles from './profile.module.css';
import {Input} from "../UIKit/Input/Input";
import {useContext} from "react";
import {Context} from "../../index";
export const Profile = () => {
    const {store} = useContext(Context);
    return (
        <div className={styles.container}>
            <div className={styles.aboutContainer}>
                <h2 className={styles.aboutText}>ОБ АККАУНТЕ</h2>
                <div className={styles.profile}>
                    <div className={styles.profileContainer} >
                        <div className={styles.profileName}>Александр</div>
                        <div className={styles.profileForm}>
                            <Input style={{width:'464px'}} name={'name'}/>
                            <Input style={{width:'464px'}} name={'surname'}/>
                            <Input style={{width:'464px'}} name={'otchestvo'}/>
                            <Input style={{width:'464px'}} name={'email'}/>
                            <Input style={{width:'464px'}} name={'newPassword'}/>
                        </div>
                        <footer className={styles.profileFooter}>
                            <span className={styles.action}>Применить</span>
                            <span className={styles.action}>Выйти</span>
                        </footer>
                    </div>
                </div>
            </div>

            <div className={styles.productsContainer}>
                <div className={styles.productsContainer}>

                </div>
            </div>
        </div>
    );
}