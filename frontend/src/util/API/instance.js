import axios from 'axios';
import interceptor from './interceptor';

const createInstance = (isWithAuth) => {
  const instance = axios.create({
    baseURL: '',
  });
  return interceptor(instance, isWithAuth);
};

const instance = createInstance(false);

export default instance;
