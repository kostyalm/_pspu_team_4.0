import styles from './profile.module.css';
import {Input} from "../UIKit/Input/Input";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../index";
import {UrProducts} from "../UrProducts/UrProducts";
import {observer} from "mobx-react-lite";
import ProductService from "../../services/product.service";
const Profile = () => {
    const {store} = useContext(Context);
    const [products, setProducts] = useState([]);

    const updateUser = async() => {

    }

    const initialState = {
        name: store.user.name,
        surname: store.user.surname || '',
        patronymic: store.user.patronymic || "",
        email: store.user.email,
        newPassword: '',
    }
    const [newUser, setNewUser] = useState(initialState);

    useEffect(() => {
        const getProd = async () => {
            const p = await ProductService.getAll();
            setProducts(p);
        }
        getProd();
    }, [products.length]);

    if(store.isAuth) return (
        <div className={styles.container}>
            <div className={styles.aboutContainer}>
                <h2 className={styles.aboutText}>ОБ АККАУНТЕ</h2>
                <div className={styles.profile}>
                    <div className={styles.profileContainer} >
                        <div className={styles.profileName}>{store.user.email || store.user.name}</div>
                        <div className={styles.profileForm}>
                            <Input style={{width:'464px'}}
                                   onChange={(e) => {
                                        setNewUser({...newUser, name: e.target.value})
                                   }
                                   }
                                   value={newUser.name}
                                   placeholder={'Имя'}
                                   name={'name'}
                            />
                            <Input style={{width:'464px'}}
                                   onChange={(e) => {
                                       setNewUser({...newUser, surname: e.target.value})
                                   }
                                   }
                                   value={newUser.surname}
                                   placeholder={'Фамилия'}
                                   name={'surname'}
                            />
                            <Input style={{width:'464px'}}
                                   onChange={(e) => {
                                       setNewUser({...newUser, patronymic: e.target.value})
                                   }
                                   }
                                   value={newUser.patronymic}
                                   placeholder={'Отчество'}
                                   name={'patronymic'}
                            />
                            <Input style={{width:'464px'}}
                                   onChange={(e) => {
                                       setNewUser({...newUser, email: e.target.value})
                                   }
                                   }
                                   value={newUser.email}
                                   placeholder={'Почта'}
                                   name={'email'}
                            />
                            <Input style={{width:'464px'}}
                                   onChange={(e) => {
                                       setNewUser({...newUser, newPassword: e.target.value})
                                   }
                                   }
                                   value={newUser.password}
                                   placeholder={'Новый пароль'
                            } type={'password'
                            } name={'newPassword'}/>
                        </div>
                        <footer className={styles.profileFooter}>
                            <span
                                onClick={() => {

                                }
                            } className={styles.action}>Применить</span>
                            <span className={styles.action}>Выйти</span>
                        </footer>
                    </div>
                </div>
            </div>

            <div className={styles.productsContainer}>
                {
                    products.length > 0 &&
                    store.user.roles.includes('FARMER') &&
                    <UrProducts products={products}/>}
            </div>
        </div>
    );
}

export default observer(Profile);