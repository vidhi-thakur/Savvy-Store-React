import axios from "axios";

const fetchSingleProduct = async (productID) => {
    try {
        const response = await axios.get(`/api/products/${productID}`);
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export { fetchSingleProduct }