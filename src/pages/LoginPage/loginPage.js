
import {LoginCard} from "../../components/LoginCard/LoginCard";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/footer/Footer";
import styles from './loginpage.module.css';

export const LoginPage = () => {
    return (
        <div className={styles.loginPage}>
            <LoginCard/>
        </div>
    );
}