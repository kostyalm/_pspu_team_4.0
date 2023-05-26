import {Profile} from "../../components/Profile/Profile";
import styles from './profilepage.module.css';
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/footer/Footer";
export const ProfilePage = () => {
  return (
      <div className={styles.page}>
          <Header/>
          <Profile/>
          <Footer/>
      </div>
  );
}