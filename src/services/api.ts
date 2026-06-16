import axios from 'axios';

export const api = axios.create({
    baseURL: "https://refund-api-hp9x.onrender.com"
})