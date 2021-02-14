import axios from 'axios';

const users = '/users';
const quotes = '/quotes';

export const getUsers = () => axios.get(`http://localhost:3005${users}`);

export const postUser = (user) => axios.post(`http://localhost:3005${users}`, user);

export const getQuotes = () => axios.get(`http://localhost:3005${quotes}`);

export const getQuoteById = (id) => axios.get(`http://localhost:3005${quotes}/${id}`)

export const postQuote = (quote) => axios.post(`http://localhost:3005${quotes}`, quote);