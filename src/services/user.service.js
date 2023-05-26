import api from "../api";

export default class UserService {
    static async login(email, password) {
        try {
            const res = await api.post('/users/login/', {email, password});
            return res;
        } catch (e) {
            console.log(e);
        }
    }
    static async register(email, password) {
        try {
            const res = await api.post('/users/register/', {email, password});
            return res;
        } catch (e) {
            console.log(e);
        }
    }
    static async logout() {
        try {
            const res = await api.post('/users/logout/');
            return res;
        } catch (e) {
            console.log(e);
        }
    }
    static async setRole(id, role) {
        try {
            const res = await api.post(`/users/setRole/${id}`, {role});
            return res;
        } catch (e) {
            console.log(e);
        }
    }
    static async getUsers() {
        try {
            const res = await api.post('/users/',);
            return res;
        } catch (e) {
            console.log(e);
        }
    }
}