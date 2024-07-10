import axios from 'axios';

export const getBlockchain = async () => {
    const response = await axios.get('http://localhost:5001/api/v1/blockchain');

    return response.data;
};