import axios from 'axios';
import interceptor from './interceptor';

const createInstance = (isWithAuth) => {
  const instance = axios.create({
    baseURL: 'http://ml.g1tommy.me:8000/recommend',
  });
  return interceptor(instance, isWithAuth);
};

const instance = createInstance(false);

export default instance;
