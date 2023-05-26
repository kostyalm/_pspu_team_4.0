import {makeAutoObservable} from "mobx";
import UserService from "../services/user.service";

export default class Store {
    user;
    isAuth;
    constructor() {
        makeAutoObservable(this);
    }

    getUser = () => {
        return this.user;
    }
    getAuth = () => {
        return this.isAuth;
    }
    setAuth = (auth) => {
        this.isAuth = auth;
    }
    setUser = (user) => {
        this.user = user;
    }

    login = async (email, password) => {
        try {
            const user = await UserService.login(email, password);
            localStorage.setItem('token', user.data.accessToken);
            this.setUser(user);
            this.setAuth(true);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    register = async (email, password) => {
        try {
            const user = await UserService.register(email, password);
            localStorage.setItem('token', user.data.accessToken);
            this.setUser(user);
            this.setAuth(true);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    logout = async (email, password) => {
        try {
            console.log('logout');
            const user = await UserService.logout();
            localStorage.removeItem('token');
            this.setUser(null);
            this.setAuth(false);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}