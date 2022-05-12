import axios from 'axios';

const fetchProducts = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_HOST_URL}/products`);
        return res.data.products;
    } catch (e) {
        console.error("error ",e)
    }
}

export { fetchProducts }