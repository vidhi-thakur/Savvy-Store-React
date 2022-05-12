import axios from 'axios';

const authenticate = async (url, userInfo) => {
    try {
        const res = await axios.post(url, userInfo);
        const data = await res.data;
        return data;
    } catch (e) {
        console.error("error ", e)
    }
}

export { authenticate }