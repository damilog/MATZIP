import axios from 'axios';
import interceptor from './interceptor';

const createInstance = (isWithAuth) => {
  const instance = axios.create({
    baseURL: 'https://api.g1tommy.me/api/matzip',
  });
  return interceptor(instance, isWithAuth);
};

const instance = createInstance(false);

export default instance;
