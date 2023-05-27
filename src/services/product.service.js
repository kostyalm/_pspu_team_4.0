import api from "../api";

class ProductService {
    async getAll() {
        const res = await api.get('/products/');
        return res.data;
    }
    async getById(id) {
        const res = await api.get(`/products/${id}`);
        console.log(res.data)
    }
    async update(id, newProductData) {
        const res = await api.put(`/products/${id}`, {...newProductData});
        console.log(res.data)
    }
    async addNew(productData) {
        const res = await api.post(`/products/add`, {...productData});
        console.log(res.data)
        return res.data;
    }
    async delete(id) {
        const res = await api.delete(`/products/${id}`);
        console.log(res.data);
    }
}
export default new ProductService();