import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-26408.firebaseio.com/'
});

export default instance;