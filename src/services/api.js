import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apollo-ai-back.herokuapp.com/api/',
});

export default api