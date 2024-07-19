import axios from 'axios';

export const getBlockchain = async () => {
    const response = await axios.get('http://localhost:5001/api/v1/blockchain');

    return response.data;
};

export const sendTransaction = async (id, inputMap, outputMap) => {
    const transactionData = {
        id,
        inputMap,
        outputMap
    };
  
    const response = await axios.post('http://localhost:5001/api/v1/wallet/transaction', transactionData);
    return response.data;
};
  
export const getTransactionPool = async () => {
const response = await axios.get('http://localhost:5001/api/v1/wallet/transactions');
return response.data;
};
  
export const mineBlock = async () => {
const response = await axios.get('http://localhost:5001/api/v1/wallet/mine');
console.log(response.data);
return response.data;
};