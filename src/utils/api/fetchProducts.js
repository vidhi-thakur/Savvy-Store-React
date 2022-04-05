import axios from 'axios';

const fetchProducts = async () => {
    try {
        const res = await axios.get('/api/products');
        return res.data.products;
    } catch (e) {
        console.error("error ",e)
    }
}

export { fetchProducts }