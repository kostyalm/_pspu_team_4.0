import api from "../api";

class ArticleService {
    async getAll() {
        return await api.get('/articles/');
    }
    async addNew(article) {

    }
}

export default new ArticleService();