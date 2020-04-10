import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.21.166.255:5000/v1',
});

export default api;
