import axios from 'axios';

export const getProducts = () => axios.get('http://localhost:3005/products');