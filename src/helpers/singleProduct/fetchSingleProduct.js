import axios from "axios";

const fetchSingleProduct = async (productID) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_HOST_URL}/products/${productID}`);
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export { fetchSingleProduct }