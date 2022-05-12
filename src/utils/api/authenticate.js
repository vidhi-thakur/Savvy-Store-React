import axios from 'axios';

const authenticate = async (url, userInfo) => {
    try {
        const res = await axios.post(url, userInfo);
        return res.data;
    } catch (e) {
        console.error("error ", e)
    }
}

export { authenticate }