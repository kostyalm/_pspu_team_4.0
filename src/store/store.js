import {makeAutoObservable} from "mobx";
import UserService from "../services/user.service";
import api from "../api";

export default class Store {
    user = {};
    isAuth = false;
    constructor() {
        makeAutoObservable(this);
    }
    setAuth = (auth) => {
        this.isAuth = auth;
    }
    setUser = (user) => {
        this.user = user;
    }

    login = async (email, password) => {
        try {
            const res = await UserService.login(email, password);
            localStorage.setItem('token', res.data.accessToken);
            this.setUser(res.data.user);
            this.setAuth(true);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    register = async (email, password) => {
        try {
            const res = await UserService.register(email, password);
            localStorage.setItem('token', res.data.accessToken);
            this.setUser(res.data.user);
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

    checkAuth = async () => {
        try {
            const res = await api.get('/users/refresh');

            localStorage.setItem('token', res.data.accessToken);
            this.setUser(res.data.user);
            this.setAuth(true);
            console.log(this.user.email, this.isAuth);
        }catch (e) {
            console.log(e)
        }
    }
}