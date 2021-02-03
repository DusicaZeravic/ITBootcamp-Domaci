import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v4/launches';
const PAST_LAUNCHES = '/past'

export const getPastLaunches = () => axios.get(`${BASE_URL}${PAST_LAUNCHES}`)

export const getCompanyInfo = () => axios.get('https://api.spacexdata.com/v4/company');